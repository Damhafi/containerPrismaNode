import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  //CONEXÃO = PRISMA <> BANCO DE DADOS (mongo)
  await prisma.$connect();
  
  //INSERE UM NOVO USUÁRIO
  await prisma.user.create({
    data: {
      name: 'Rich',
      email: 'hello@prisma.com',
    },
  })

  //PROCURA USUARIOS
  const allUsers = await prisma.user.findMany();
  console.log(allUsers);
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
