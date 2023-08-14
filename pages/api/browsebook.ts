import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

type bookProps = {
    id: number
}

export default async ( req: NextApiRequest, res: NextApiResponse) => {
    try {
        const book: bookProps = JSON.parse(req.body)
        const data = await prisma.book.findUnique({
            where: {
                id: book.id
            }
        })
        console.log(res.json(data))
        return res.status(200).json(data)
    } catch (err){
        return res.status(500).json(err)
    }
}