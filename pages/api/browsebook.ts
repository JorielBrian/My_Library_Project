import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

type bookProps = {
    id: number
}

export default async ( req: NextApiRequest, res: NextApiResponse) => {
    try {
        const book: bookProps = JSON.parse(req.body)
        if(req.method === 'GET'){
            const data = await prisma.book.findUnique({
                where: {
                    id: book.id
                }
            })
            return res.status(200).json(data)
        }
    } catch (err){
        return res.status(500).json({message: "Error creating a new book"})
    }
}