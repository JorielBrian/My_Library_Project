import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main(){
    const books = await prisma.books.create({
        data: {
            title:'Katang Isip',
            isbn:'23-546-5-65-354651-35-2',
            intro:'isiping iniisip mo na naiisip ko ding isipin mo ang iniisip ko, isipin mo yun',
            content:'pag iniisip mo ang iniisip ko tapos iisipin ko din kung anong iniisip mo iisipin mo pa ba iniisip ko kung iisipin ko kung ano iniisip mo, naisip mo ba yun?',
            published:true,
            author:'Boo Ang',
            quantity:10,
            borrow:0
        }
    })
}

main()
    .then(async () => {
    await prisma.$disconnect()
    })
    .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
    })