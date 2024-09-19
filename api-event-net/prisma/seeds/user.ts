import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function userSeed() {
  await prisma.user.createMany({
    data: [
      {
        name: 'Ana Silva',
        userName: 'ana.silva',
        email: 'ana.silva@example.com',
        password: 'seed1234',
        phone: '+55 11 91234-5678',
      },

      {
        name: 'Carlos Oliveira',
        userName: 'carlos.oliveira',
        email: 'carlos.oliveira@example.com',
        password: 'seed1234',
        phone: '+55 21 98765-4321',
      },

      {
        name: 'Mariana Costa',
        userName: 'mariana.costa',
        email: 'mariana.costa@example.com',
        password: 'seed1234',
        phone: '+55 31 99876-5432',
      },

      {
        name: 'Rafael Santos',
        userName: 'rafael.santos',
        email: 'rafael.santos@example.com',
        password: 'seed1234',
        phone: '+55 19 99765-4321',
      },

      {
        name: 'Juliana Almeida',
        userName: 'juliana.almeida',
        email: 'juliana.almeida@example.com',
        password: 'seed1234',
        phone: '+55 41 99654-3210',
      },
    ],
  });
}

userSeed().then(() => {
  console.log('User seeded');
  prisma.$disconnect();
});
