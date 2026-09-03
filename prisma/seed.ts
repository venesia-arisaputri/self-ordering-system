import prisma from "../app/lib/prisma";

async function main() {
  await prisma.admin.create({
    data: {
      username: "ayen",
      password: "$2b$10$gWLJNEaamcg306chJpqDq.OWiFUTvP9w1cwJwlmXw1u6k9.y65MOG",
    },
  });
}

main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
