import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

async function insertUser(username: string, firstName: string, lastName: string, password: string) {
    const user = await prisma.user.create({
        data: {
            email: username,
            firstName,
            lastName,
            password,
        }
    });
    console.log(user); 
}

insertUser("shivam@gmail.com", "Shivam", "Gupta", "qqqqqqqq");