import { NextApiRequest, NextApiResponse } from "next"
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function main(req: NextApiRequest, res: NextApiResponse){
    if(req.method === 'GET'){
        try {
            const {q: query} = req.query;
            if(typeof query !== 'string'){
                throw new Error('Invalid');
            }

            const books = await prisma.book.findMany({
                where:{
                    OR:[
                        {
                            title: {
                                contains: query,
                                mode: 'insensitive'
                            }
                        },
                        {
                            author: {
                                contains: query,
                                mode: 'insensitive'
                            }
                        },
                        {
                            intro: {
                                contains: query,
                                mode: 'insensitive'
                            }
                        }
                    ]
                }
            });
            
            res.status(200).json({books})
        } catch (error) {
            //console.log(error);
        }
    }
}