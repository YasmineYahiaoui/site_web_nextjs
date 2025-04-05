const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  // Supprimer les événements existants
  await prisma.event.deleteMany({});

  console.log('Base de données nettoyée. Ajout des données seed...');

  // Ajouter de nouveaux événements
  const events = [
    {
      title: "Peinture et sculpture en direct",
      category: "🎨 Ateliers d'art",
      date: new Date('2025-03-10T14:00:00Z'),
      location: "Paris",
      description: "Participez à une expérience unique de peinture et de sculpture en direct avec des artistes renommés. Vous pourrez observer les techniques, poser des questions et même participer à certaines créations.",
      imageUrl: "/images/atelier-art.jpg"
    },
    {
      title: "Spectacle en plein air",
      category: "🎭 Théâtre et Impro",
      date: new Date('2025-04-15T18:30:00Z'),
      location: "Lyon",
      description: "Une pièce de théâtre interactive en plein air avec improvisation. Les spectateurs pourront suggérer des thèmes et voir les acteurs les interpréter en temps réel.",
      imageUrl: "/images/theatre.jpg"
    },
    {
      title: "Débat autour du cinéma indépendant",
      category: "🎬 Projections de films",
      date: new Date('2025-05-20T19:00:00Z'),
      location: "Marseille",
      description: "Un débat autour du cinéma indépendant avec des réalisateurs invités. Projection de courts-métrages suivie d'une discussion avec le public.",
      imageUrl: "/images/films.jpg"
    }
  ];

  for (const event of events) {
    await prisma.event.create({
      data: event,
    });
  }

  console.log('Données seed ajoutées avec succès!');
}

main()
  .catch((e) => {
    console.error('Erreur lors du seed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  }); 