import { NextResponse } from 'next/server';
import prisma from '../../../lib/prisma';

// GET /api/events - Récupérer tous les événements
export async function GET() {
  try {
    const events = await prisma.event.findMany({
      orderBy: {
        date: 'asc',
      },
    });
    
    return NextResponse.json(events);
  } catch (error) {
    console.error('Erreur lors de la récupération des événements:', error);
    return NextResponse.json(
      { error: 'Erreur lors de la récupération des événements' },
      { status: 500 }
    );
  }
}

// POST /api/events - Ajouter un nouvel événement
export async function POST(request) {
  try {
    const { title, date, location, description, imageUrl, category } = await request.json();
    
    // Validation simple
    if (!title || !date || !location || !description || !imageUrl || !category) {
      return NextResponse.json(
        { error: 'Tous les champs sont obligatoires' },
        { status: 400 }
      );
    }
    
    const event = await prisma.event.create({
      data: {
        title,
        date: new Date(date),
        location,
        description,
        imageUrl,
        category
      },
    });
    
    return NextResponse.json(event, { status: 201 });
  } catch (error) {
    console.error('Erreur lors de la création de l\'événement:', error);
    return NextResponse.json(
      { error: 'Erreur lors de la création de l\'événement' },
      { status: 500 }
    );
  }
} 