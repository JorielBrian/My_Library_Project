import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import { type } from "os";

const prisma = new PrismaClient();

type deleteProps ={
    id: number
    title: string
    author: string
}

export default async (req: NextApiRequest, res: NextApiResponse)=>{
    const deletedetail: deleteProps = JSON.parse(req.body)
    //console.log(req.query.id)
    if(req.method === 'POST'){
        try {
            const book = await prisma.book.delete({
                where: {
                    id: Number(deletedetail.id),
                    title: deletedetail.title,
                    author: deletedetail.author
                }
            })
        } catch (error) {
            console.log(error)
        }
        
    } else {
        console.log('Invalid Delete Request');
    }
}