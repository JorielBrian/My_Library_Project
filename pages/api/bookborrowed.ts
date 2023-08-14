import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

type borrowProps = {
    title: string
    fname: string
    lname: string
    address: string
    contact: string
}

export default async ( req: NextApiRequest, res: NextApiResponse) => {
    try {
        const borrow: borrowProps = JSON.parse(req.body)
        if(req.method === 'POST'){
            const update = await prisma.book.update({
                where: {
                    title: borrow.title
                },
                data: {
                    quantity: 9
                }
            })
        }
    } catch (err){
        return res.status(500).json({message: "Error creating a new book"})
    }
}