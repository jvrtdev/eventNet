import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const userData = [
  {
    id: '36a57eae-1a36-4d2a-b5e7-3c6199d52b5a',
    name: 'Ana Silva',
    userName: 'ana.silva',
    email: 'ana.silva@example.com',
    password: 'seed1234',
    phone: '+55 11 91234-5678',
  },
  {
    id: '91a9f41b-4782-4efb-95b8-b167a14e5a94',
    name: 'Carlos Oliveira',
    userName: 'carlos.oliveira',
    email: 'carlos.oliveira@example.com',
    password: 'seed1234',
    phone: '+55 21 98765-4321',
  },
  {
    id: 'fc52e994-5827-4eb1-b8f3-f5b4f7c7e91f',
    name: 'Mariana Costa',
    userName: 'mariana.costa',
    email: 'mariana.costa@example.com',
    password: 'seed1234',
    phone: '+55 31 99876-5432',
  },
  {
    id: 'c4c02145-60c9-46ae-9152-30df6f6a7b8a',
    name: 'Rafael Santos',
    userName: 'rafael.santos',
    email: 'rafael.santos@example.com',
    password: 'seed1234',
    phone: '+55 19 99765-4321',
  },
  {
    id: 'c88b0d74-5a70-41fa-8df2-78b9e6f7af2e',
    name: 'Juliana Almeida',
    userName: 'juliana.almeida',
    email: 'juliana.almeida@example.com',
    password: 'seed1234',
    phone: '+55 41 99654-3210',
  },
];

const profileData = [
  {
    bio: 'Desenvolvedor Full Stack',
    avatar: 'https://example.com/avatar1.jpg',
    github: 'https://github.com/usuario1',
    linkedin: 'https://linkedin.com/in/usuario1',
    instagram: 'https://instagram.com/usuario1',
    userId: '36a57eae-1a36-4d2a-b5e7-3c6199d52b5a',
    createdAt: '2024-09-19T21:26:10.589Z',
  },
  {
    bio: 'Designer Gráfico',
    avatar: 'https://example.com/avatar2.jpg',
    github: null,
    linkedin: 'https://linkedin.com/in/usuario2',
    instagram: 'https://instagram.com/usuario2',
    userId: '91a9f41b-4782-4efb-95b8-b167a14e5a94',
    createdAt: '2024-09-19T21:26:10.589Z',
  },
  {
    bio: 'Analista de Dados',
    avatar: 'https://example.com/avatar3.jpg',
    github: 'https://github.com/usuario3',
    linkedin: 'https://linkedin.com/in/usuario3',
    instagram: null,
    userId: 'fc52e994-5827-4eb1-b8f3-f5b4f7c7e91f',
    createdAt: '2024-09-19T21:26:10.589Z',
  },
  {
    bio: 'Gerente de Projetos',
    avatar: null,
    github: 'https://github.com/usuario4',
    linkedin: 'https://linkedin.com/in/usuario4',
    instagram: 'https://instagram.com/usuario4',
    userId: 'c4c02145-60c9-46ae-9152-30df6f6a7b8a',
    createdAt: '2024-09-19T21:26:10.589Z',
  },
  {
    bio: 'Estudante de Ciência da Computação',
    avatar: 'https://example.com/avatar5.jpg',
    github: null,
    linkedin: null,
    instagram: 'https://instagram.com/usuario5',
    userId: 'c88b0d74-5a70-41fa-8df2-78b9e6f7af2e',
    createdAt: '2024-09-19T21:26:10.589Z',
  },
  {
    bio: 'Consultor de TI',
    avatar: 'https://example.com/avatar6.jpg',
    github: 'https://github.com/usuario6',
    linkedin: 'https://linkedin.com/in/usuario6',
    instagram: null,
    userId: '36a57eae-1a36-4d2a-b5e7-3c6199d52b5a',
    createdAt: '2024-09-19T21:26:10.589Z',
  },
];

const addresseData = [
  {
    city: 'São Paulo',
    state: 'SP',
    neighborhood: 'Jardins',
    userId: '36a57eae-1a36-4d2a-b5e7-3c6199d52b5a',
  },
  {
    city: 'Rio de Janeiro',
    state: 'RJ',
    neighborhood: 'Copacabana',
    userId: '91a9f41b-4782-4efb-95b8-b167a14e5a94',
  },
  {
    city: 'Belo Horizonte',
    state: 'MG',
    neighborhood: 'Savassi',
    userId: 'fc52e994-5827-4eb1-b8f3-f5b4f7c7e91f',
  },
  {
    city: 'Curitiba',
    state: 'PR',
    neighborhood: 'Centro',
    userId: 'c4c02145-60c9-46ae-9152-30df6f6a7b8a',
  },
  {
    city: 'Porto Alegre',
    state: 'RS',
    neighborhood: 'Cidade Baixa',
    userId: 'c88b0d74-5a70-41fa-8df2-78b9e6f7af2e',
  },
  {
    city: 'Florianópolis',
    state: 'SC',
    neighborhood: 'Lagoa da Conceição',
    userId: '36a57eae-1a36-4d2a-b5e7-3c6199d52b5a',
  },
];

async function userSeed() {
  await prisma.user.createMany({
    data: userData,
  });

  await prisma.profile.createMany({
    data: profileData,
  });

  await prisma.address.createMany({
    data: addresseData,
  });
}

userSeed().then(() => {
  console.log('User seeded');
  prisma.$disconnect();
});
