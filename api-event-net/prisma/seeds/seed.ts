import { faker } from '@faker-js/faker';
import { PrismaClient } from '@prisma/client';
import { hash } from '../../src/common/utils/bcrypt/hash';
import generateQrCode from '../../src/common/utils/qrcode/generateQrCode';
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
    const user = await prisma.user.create({
      data: {
        email: faker.internet.email(),
        name: faker.person.firstName(),
        userName: faker.internet.username(),
        password: await hash('oi'),
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
        userPosts: {
          create: {
            text: faker.lorem.paragraph(),
          },
        },
      },
    });
    const event = await prisma.event.create({
      data: {
        title: faker.book.title(),
        description: faker.lorem.text(),
        start_datetime: faker.date.future(),
        end_datetime: faker.date.future(),
        location: faker.location.city(),
        qr_code: '',
        image: '',
        userEvent: {
          create: {
            user: {
              connect: {
                id: user.id,
                role: 'common',
              },
            },
            role: 'owner',
          },
        },
        conversation: {
          create: {
            isGroup: true,
            status: 'accepted',
            participant: {
              create: {
                user: {
                  connect: {
                    id: user.id,
                  },
                },
                role: 'admin',
              },
            },
            message: {
              create: {
                content: 'Bem vindos ao chat do evento',
                senderName: `${user.name}`,
                user: {
                  connect: {
                    id: user.id,
                  },
                },
              },
            },
          },
        },
      },
    });
    await prisma.event.update({
      where: {
        id: event.id,
      },
      data: {
        qr_code: generateQrCode(event.id),
      },
    });

    console.log('Event created:', i, event);
    console.log('User created:', i, user);
  }
}

dataSeed().then(() => {
  console.log('User seeded');
  prisma.$disconnect();
});
