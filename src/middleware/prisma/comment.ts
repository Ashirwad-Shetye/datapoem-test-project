import prisma from "../prismaClient";
import { CommentProp } from "@/features/types";

export async function getComments() {
    try {
        const comment = await prisma.comment.findMany()
        return comment
    } catch (error) { 
        return {error}
    }
}

export async function createComment(params : any) {
    try {
        const comment = await prisma.comment.create({ data: params})
        return comment
    } catch (error) { 
        return {error}
    }
}

const COMMENT_SELECT_FIELDS = {
    id: true,
    message: true,
    parentId: true,
    createdAt: true,
    user: {
        select: {
            id: true,
            name: true,
        },
    },
}

export async function editComment(params: CommentProp) {
    try {
        const updateComment = await prisma.comment.update({ where: { id: params.id }, data: { message: params.message } })
        return updateComment
    } catch (error) { 
        return {error}
    }
}

export async function deleteComment(params: CommentProp) { 
    try {
        const deleteComment = await prisma.comment.delete({ where: { id: params.id } })
        return deleteComment
    } catch (error) { 
        return {error}
    }
}

export async function updateScore(params: CommentProp) { 
    try {
        const updateScore = await prisma.comment.update({ where: { id: params.id }, data: { score: params.score } })
        return updateScore
    } catch (error) { 
        return {error}
    }
}