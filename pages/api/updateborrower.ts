import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

type borrowerProps = {
    id: number
    firstname: string
    lastname: string
    address: string
    contact: string
    borrowed: string
    dateborrowed: Date
    datereturn: Date
}

export default async ( req: NextApiRequest, res: NextApiResponse) => {
    try {
        const borrower: borrowerProps = JSON.parse(req.body)
        if(req.method === 'POST'){
            const data = await prisma.borrower.update({
                where: {
                    id: borrower.id
                },
                data: {
                    firstname: borrower.firstname,
                    lastname: borrower.lastname,
                    address: borrower.address,
                    contact: borrower.contact,
                    borrowed: borrower.borrowed,
                    dateborrowed: borrower.dateborrowed,
                    datereturn: borrower.datereturn
                }
            })
        }
    } catch (err){
        return res.status(500).json({message: "Error updating the book"})
    }
}