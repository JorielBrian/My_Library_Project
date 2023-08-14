import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

type borrowProps = {
    id: number
    title: string
    fname: string
    lname: string
    address: string
    contact: string
}

export default async ( req: NextApiRequest, res: NextApiResponse) => {
    try {
        const borrowdetail: borrowProps = JSON.parse(req.body)
        if(req.method === 'POST'){
            const [borrowname, updatebook] = await prisma.$transaction([
                prisma.borrower.create({
                    data: {
                        borrowed: borrowdetail.title,
                        firstname: borrowdetail.fname,
                        lastname: borrowdetail.lname,
                        address: borrowdetail.address,
                        contact: borrowdetail.contact
                    }
                }),
                prisma.book.update({
                    where: {
                        id: borrowdetail.id,
                        title: borrowdetail.title
                    },
                    data: {
                        quantity: {decrement: 1},
                        borrow: {increment: 1}
                    }
                })
            ])
        }
    } catch (err){
        return res.status(500).json({message: "Error creating a new book"})
    }
}