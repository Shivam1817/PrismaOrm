import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function createTodo(userId: number, title: string, description: string){
    const todo = await prisma.todo.create({
        data:{
            title,
            description,
            userId
        },
    });
    console.log(todo);
}

createTodo(1, "Go to Gym", "Go to gym at 6:00 AM");