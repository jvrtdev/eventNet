import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function eventSeed() {
  await prisma.conversation.createMany({
    data: [
      {
        id: 'f7f85b2e-6bde-4b84-8c2e-5edbfba728b4',
        isGroup: true,
        status: null,
      },
      {
        id: 'a4cb7dfd-936e-49c6-983d-c0047a97129b',
        isGroup: true,
        status: null,
      },
      {
        id: '9cfa0fbf-e1ec-478e-b16e-e98b4c5d789e',
        isGroup: true,
        status: null,
      },
      {
        id: '73b2bc11-3c07-466a-8d57-d5f1102307f5',
        isGroup: true,
        status: null,
      },
      {
        id: 'cc30b65f-e476-4f2f-a8ef-7680e6a8f7e7',
        isGroup: true,
        status: null,
      },
      {
        id: '91beed18-6e9d-49a3-8437-27b60625d9e3',
        isGroup: true,
        status: null,
      },
    ],
  });

  await prisma.event.createMany({
    data: [
      {
        title: 'UNISUAMJS',
        conversationId: 'f7f85b2e-6bde-4b84-8c2e-5edbfba728b4',
        description:
          'Desbravando o Futuro da Web com JavaScript O UnisuamJs é um evento de destaque no calendário tecnológico da Universidade Unisuam, projetado para fomentar o aprendizado e a troca de experiências sobre JavaScript, uma das linguagens de programação mais importantes e versáteis do mercado. Este evento oferece uma plataforma para explorar as últimas tendências, melhores práticas e ferramentas emergentes no ecossistema JavaScript.',
        location: 'KOMPLEXO TEMPO, São Paulo - SP',
        start_datetime: new Date(20 - 10 - 2024),
        end_datetime: new Date(20 - 10 - 2024),
        qr_code: '',
        image: '',
      },
      {
        title: 'ReactConf Brasil',
        conversationId: 'a4cb7dfd-936e-49c6-983d-c0047a97129b',
        description:
          'A ReactConf Brasil é o maior evento nacional dedicado ao React.js, reunindo desenvolvedores, entusiastas e empresas para discutir as últimas novidades, tendências e práticas na utilização desta poderosa biblioteca JavaScript para construção de interfaces de usuário.',
        location: 'Centro de Convenções Rebouças, São Paulo - SP',
        start_datetime: new Date(15 - 11 - 2024),
        end_datetime: new Date(16 - 11 - 2024),
        qr_code: '',
        image: '',
      },
      {
        title: 'Node Summit',
        conversationId: '9cfa0fbf-e1ec-478e-b16e-e98b4c5d789e',
        description:
          'O Node Summit é um evento focado na comunidade Node.js, oferecendo palestras, workshops e painéis de discussão sobre as melhores práticas, ferramentas e o futuro do desenvolvimento backend com Node.js. Participe para se conectar com outros profissionais e líderes do setor.',
        location: 'Expo Center Norte, São Paulo - SP',
        start_datetime: new Date(5 - 12 - 2024),
        end_datetime: new Date(6 - 12 - 2024),
        qr_code: '',
        image: '',
      },
      {
        title: 'Vue.js Brasil',
        conversationId: '73b2bc11-3c07-466a-8d57-d5f1102307f5',
        description:
          'Vue.js Brasil é um evento dedicado à comunidade Vue.js, onde desenvolvedores podem compartilhar conhecimento, experiências e desafios no uso deste framework progressivo para construção de interfaces de usuário. O evento contará com palestrantes renomados e sessões de networking.',
        location: 'Palácio das Convenções do Anhembi, São Paulo - SP',
        start_datetime: new Date(10 - 9 - 2024),
        end_datetime: new Date(10 - 9 - 2024),
        qr_code: '',
        image: '',
      },
      {
        title: 'DevOps Summit',
        conversationId: 'cc30b65f-e476-4f2f-a8ef-7680e6a8f7e7',
        description:
          'O DevOps Summit é uma conferência focada na cultura DevOps, abordando temas como automação, infraestrutura como código, CI/CD, e muito mais. Este evento é ideal para profissionais de tecnologia que buscam melhorar seus processos de desenvolvimento e operações.',
        location: 'Blue Tree Premium Faria Lima, São Paulo - SP',
        start_datetime: new Date(22 - 8 - 2024),
        end_datetime: new Date(23 - 8 - 2024),
        qr_code: '',
        image: '',
      },
      {
        title: 'AI & Machine Learning Conference',
        conversationId: '91beed18-6e9d-49a3-8437-27b60625d9e3',
        description:
          'A AI & Machine Learning Conference é um evento que reúne especialistas, pesquisadores e entusiastas para discutir as últimas inovações e aplicações em inteligência artificial e aprendizado de máquina. Participe para explorar como essas tecnologias estão moldando o futuro.',
        location: 'Fecomercio Eventos, São Paulo - SP',
        start_datetime: new Date(12 - 10 - 2024),
        end_datetime: new Date(13 - 10 - 2024),
        qr_code: '',
        image: '',
      },
    ],
  });
}

eventSeed().then(() => {
  console.log('Event seeded');
  prisma.$disconnect();
});
