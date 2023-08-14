import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

type retunProps = {
    borrowerid: number
    bookid: number
    date: Date
}

export default async ( req: NextApiRequest, res: NextApiResponse) => {
    try {
        const returndetail: retunProps = JSON.parse(req.body)
        if(req.method === 'POST'){
            //const now = new Date();
            const [removeborrower, returnBook] = await prisma.$transaction([
                prisma.borrower.update({
                    where: {
                        id: returndetail.borrowerid
                    },
                    data: {
                        datereturn: returndetail.date
                    }
                }),
                prisma.book.update({
                    where: {
                        id: returndetail.bookid,
                    },
                    data: {
                        quantity: {increment: 1},
                        borrow: {decrement: 1}
                    }
                })
            ])
        }
    } catch (err){
        return res.status(500).json({err})
    }
}