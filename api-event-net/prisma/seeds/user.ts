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

  const users = await prisma.user.findMany();

  const userIds = users.map((user) => user.id);

  await prisma.profile.createMany({
    data: [
      {
        bio: 'Desenvolvedor Full Stack',
        avatar: 'https://example.com/avatar1.jpg',
        github: 'https://github.com/usuario1',
        linkedin: 'https://linkedin.com/in/usuario1',
        instagram: 'https://instagram.com/usuario1',
        userId: userIds[0],
        createdAt: '2024-09-19T21:26:10.589Z',
      },
      {
        bio: 'Designer Gráfico',
        avatar: 'https://example.com/avatar2.jpg',
        github: null,
        linkedin: 'https://linkedin.com/in/usuario2',
        instagram: 'https://instagram.com/usuario2',
        userId: userIds[1],
        createdAt: '2024-09-19T21:26:10.589Z',
      },
      {
        bio: 'Analista de Dados',
        avatar: 'https://example.com/avatar3.jpg',
        github: 'https://github.com/usuario3',
        linkedin: 'https://linkedin.com/in/usuario3',
        instagram: null,
        userId: userIds[2],
        createdAt: '2024-09-19T21:26:10.589Z',
      },
      {
        bio: 'Gerente de Projetos',
        avatar: null,
        github: 'https://github.com/usuario4',
        linkedin: 'https://linkedin.com/in/usuario4',
        instagram: 'https://instagram.com/usuario4',
        userId: userIds[3],
        createdAt: '2024-09-19T21:26:10.589Z',
      },
      {
        bio: 'Estudante de Ciência da Computação',
        avatar: 'https://example.com/avatar5.jpg',
        github: null,
        linkedin: null,
        instagram: 'https://instagram.com/usuario5',
        userId: userIds[4],
        createdAt: '2024-09-19T21:26:10.589Z',
      },
      {
        bio: 'Consultor de TI',
        avatar: 'https://example.com/avatar6.jpg',
        github: 'https://github.com/usuario6',
        linkedin: 'https://linkedin.com/in/usuario6',
        instagram: null,
        userId: userIds[5],
        createdAt: '2024-09-19T21:26:10.589Z',
      },
    ],
  });

  await prisma.address.createMany({
    data: [
      {
        city: 'São Paulo',
        state: 'SP',
        neighborhood: 'Jardins',
        userId: userIds[0],
      },
      {
        city: 'Rio de Janeiro',
        state: 'RJ',
        neighborhood: 'Copacabana',
        userId: userIds[1],
      },
      {
        city: 'Belo Horizonte',
        state: 'MG',
        neighborhood: 'Savassi',
        userId: userIds[2],
      },
      {
        city: 'Curitiba',
        state: 'PR',
        neighborhood: 'Centro',
        userId: userIds[3],
      },
      {
        city: 'Porto Alegre',
        state: 'RS',
        neighborhood: 'Cidade Baixa',
        userId: userIds[4],
      },
      {
        city: 'Florianópolis',
        state: 'SC',
        neighborhood: 'Lagoa da Conceição',
        userId: userIds[5],
      },
    ],
  });
}

userSeed().then(() => {
  console.log('User seeded');
  prisma.$disconnect();
});
