import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function getTodosAndUserDetails(userId: number){
    //using join to get todos and user details
    const todos = await prisma.todo.findMany({
        where:{
            userId
        },
        select:{
            user: true,
            title: true,
            description: true
        }
    })
    console.log(todos);
}

getTodosAndUserDetails(1)