import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function main( req: NextApiRequest, res: NextApiResponse){
    try{
        const data = await prisma.book.findMany();
        return res.status(200).json(data);
    }catch(error){
        return res.status(500).json(error)
    }
}