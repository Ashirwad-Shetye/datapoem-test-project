import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function seed() {
    await prisma.user.deleteMany()
    await prisma.comment.deleteMany()

    const amyrobson = await prisma.user.create({ data: { name: "amyrobson", image: "./images/avatars/image-amyrobson.png"}})
    const juliusomo = await prisma.user.create({ data: { name: "juliusomo", image: "./images/avatars/image-juliusomo.png"}})
    const maxblagun = await prisma.user.create({ data: { name: "maxblagun", image: "./images/avatars/image-maxblagun.png"}})
    const ramsesmiron = await prisma.user.create({ data: { name: "ramsesmiron", image: "./images/avatars/image-ramsesmiron.png" } })
    
    const comment1 = await prisma.comment.create({
        data: {
            message: "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.",
            score: 12,
            userId: amyrobson.id,
        }
    })
    const comment2 = await prisma.comment.create({
        data: {
            message: "Woah, your project looks awesome! How long have you been coding for? I'm still new, but think I want to dive into React as well soon. Perhaps you can give me an insight on where I can learn React? Thanks!",
            score: 5,
            userId: maxblagun.id,
        }
    })
    const comment3 = await prisma.comment.create({
        data: {
            parentId: comment2.id,
            message: "If you're still new, I'd recommend focusing on the fundamentals of HTML, CSS, and JS before considering React. It's very tempting to jump ahead but lay a solid foundation first.",
            score: 4,
            userId: ramsesmiron.id,
        }
    })
    const comment4 = await prisma.comment.create({
        data: {
            parentId: comment2.id,
            message: "I couldn't agree more with this. Everything moves so fast and it always seems like everyone knows the newest library/framework. But the fundamentals are what stay constant.",
            score: 2,
            userId: juliusomo.id,
        }
    })
}

seed()
