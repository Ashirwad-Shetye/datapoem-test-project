import prisma from "../prismaClient"

export async function getUsers() {
    try {
        const users = await prisma.user.findMany()
        return users
    } catch (error) { 
        return {error}
    }
}

export async function getUsersById(params : string) {
    try {
        const users = await prisma.user.findUnique({where: {id: params}})
        return users
    } catch (error) { 
        return {error}
    }
}