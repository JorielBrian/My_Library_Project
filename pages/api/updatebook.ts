import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

type bookProps = {
    id: number
    title: string
    isbn: string
    intro: string
    content: string
    published: boolean
    author: string
    quantity: number
    borrow: number
}

export default async ( req: NextApiRequest, res: NextApiResponse) => {
    try {
        const book: bookProps = JSON.parse(req.body)
        if(req.method === 'POST'){
            const data = await prisma.book.update({
                where: {
                    id: book.id
                },
                data: {
                    title: book.title,
                    isbn: book.isbn,
                    intro: book.intro,
                    content: book.content,
                    published: true,
                    author: book.author,
                    quantity: book.quantity,
                    borrow: book.borrow
                }
            })
        }
    } catch (err){
        return res.status(500).json({message: "Error updating the book"})
    }
}