import { PrismaClient } from '../app/generated/prisma'

const prisma = new PrismaClient();

async function main() {
  const user = await prisma.uSERS.create({
    data: {
      email: 'test@example.com',
      nickname: 'photoFan',
      password: 'hashed_password',
      salt: 'random_salt'
    },
  })

  const tag1 = await prisma.tAGS.create({ data: { name: 'Landscape' } });
  const tag2 = await prisma.tAGS.create({ data: { name: 'Night' } });

  const image = await prisma.iMAGES.create({
    data: {
      title: 'sunset in tokyo',
      iso: '100',
      shutter_speed: '1/125',
      aperture: '8',
      location: 'tokyo tower',
      img_url: 'https://example.com/tokyo.jpg',
      user: { connect: { id: user.id } },
      tags: {
        connect: [{ id: tag1.id }, { id: tag2.id }],
      },
    },
  })

  await prisma.lIKES.create({
    data: {
      user: { connect: { id: user.id } },
      image: { connect: { id: image.id } },
    },
  })

  console.log('시드가 성공적으로 생성되었습니다.')
}

main().then(async () => {
  await prisma.$disconnect();
}).catch(async (e) => {
  console.error(e);
  await prisma.$disconnect();
  process.exit(1);
});
