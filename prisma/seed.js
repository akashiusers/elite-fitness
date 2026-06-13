const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient({});

async function main() {
  await prisma.testimonial.deleteMany();
  await prisma.subscription.deleteMany();
  await prisma.plan.deleteMany();
  await prisma.promotion.deleteMany();
  await prisma.image.deleteMany();

  await prisma.plan.createMany({
    data: [
      {
        name: 'Basic Plan',
        type: 'Basic',
        monthlyPrice: 29.99,
        features: 'Gym access,Standard equipment,Locker room access',
      },
      {
        name: 'Premium Plan',
        type: 'Premium',
        monthlyPrice: 59.99,
        features: 'Gym access,Group classes,Personal trainer consultation,Locker room access',
      },
      {
        name: 'VIP Plan',
        type: 'VIP',
        monthlyPrice: 99.99,
        features: 'Full access,Personal trainer,Nutrition guidance,Priority support',
      },
    ],
  });

  const nextMonth = new Date();
  nextMonth.setMonth(nextMonth.getMonth() + 1);
  
  await prisma.promotion.createMany({
    data: [
      {
        title: '50% discount for new members',
        discount: 50,
        expiration: nextMonth,
      },
      {
        title: 'Summer special offer',
        discount: 25,
        expiration: nextMonth,
      },
      {
        title: 'Student discounts',
        discount: 15,
        expiration: nextMonth,
      },
    ],
  });

  await prisma.testimonial.createMany({
    data: [
      {
        name: 'Mark Johnson',
        review: 'Elite Fitness has completely transformed my life. The VIP plan provides incredible value with the dedicated personal training!',
      },
      {
        name: 'Sarah Connor',
        review: 'The equipment is always clean and the atmosphere is super motivating. Highly recommend to anyone serious about their fitness.',
      },
    ],
  });

  console.log('Database seeded!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
