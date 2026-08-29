import prisma from "../app/lib/prisma";

async function main() {
  await prisma.admin.create({
    data: {
      username: "Ayen",
      password: "1234",
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
