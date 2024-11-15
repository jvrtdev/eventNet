import { faker } from '@faker-js/faker';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

type DataType = {
  id?: string;
  name: string;
  userName: string;
  email: string;
  password: string;
  phone: string;
  profile: {
    bio: string;
    avatar: string;
    github: string;
    linkedin: string;
    instagram: string;
  };
  address: {
    city: string;
    state: string;
    neighborhood: string;
  };
};

async function dataSeed() {
  for (let i = 0; i < 50; i++) {
    const data = await prisma.user.create({
      data: {
        email: faker.internet.email(),
        name: faker.person.fullName(),
        userName: faker.internet.username(),
        password: 'oi',
        phone: faker.phone.number(),
        address: {
          create: {
            city: faker.location.city(),
            state: faker.location.state(),
            neighborhood: faker.location.street(),
          },
        },
        profile: {
          create: {
            avatar: faker.image.avatar(),
            bio: faker.person.jobTitle(),
            github: faker.internet.url(),
            instagram: faker.internet.url(),
            linkedin: faker.internet.url(),
          },
        },
      },
    });
    console.log('User created:', i, data);
  }
}

dataSeed().then(() => {
  console.log('User seeded');
  prisma.$disconnect();
});
