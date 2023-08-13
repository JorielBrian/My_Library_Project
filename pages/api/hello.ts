import { NextApiRequest, NextApiResponse } from "next"

export default function main(req: NextApiRequest, res: NextApiResponse){
    res.json({
        name: 'Joriel Brian'
    })
}