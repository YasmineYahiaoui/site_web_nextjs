import { NextResponse } from 'next/server';
import prisma from '../../../../lib/prisma';

// GET /api/events/[id] - Récupérer un événement par son ID
export async function GET(request, { params }) {
  try {
    const { id } = params;
    const eventId = parseInt(id);
    
    if (isNaN(eventId)) {
      return NextResponse.json(
        { error: 'ID d\'événement invalide' },
        { status: 400 }
      );
    }
    
    const event = await prisma.event.findUnique({
      where: { id: eventId },
    });
    
    if (!event) {
      return NextResponse.json(
        { error: 'Événement non trouvé' },
        { status: 404 }
      );
    }
    
    return NextResponse.json(event);
  } catch (error) {
    console.error('Erreur lors de la récupération de l\'événement:', error);
    return NextResponse.json(
      { error: 'Erreur lors de la récupération de l\'événement' },
      { status: 500 }
    );
  }
}

// PUT /api/events/[id] - Modifier un événement existant
export async function PUT(request, { params }) {
  try {
    const { id } = params;
    const eventId = parseInt(id);
    
    if (isNaN(eventId)) {
      return NextResponse.json(
        { error: 'ID d\'événement invalide' },
        { status: 400 }
      );
    }
    
    const { title, date, location, description, imageUrl, category } = await request.json();
    
    // Validation
    if (!title || !date || !location || !description || !imageUrl || !category) {
      return NextResponse.json(
        { error: 'Tous les champs sont obligatoires' },
        { status: 400 }
      );
    }
    
    // Vérifier si l'événement existe
    const existingEvent = await prisma.event.findUnique({
      where: { id: eventId },
    });
    
    if (!existingEvent) {
      return NextResponse.json(
        { error: 'Événement non trouvé' },
        { status: 404 }
      );
    }
    
    // Mettre à jour l'événement
    const updatedEvent = await prisma.event.update({
      where: { id: eventId },
      data: {
        title,
        date: new Date(date),
        location,
        description,
        imageUrl,
        category
      },
    });
    
    return NextResponse.json(updatedEvent);
  } catch (error) {
    console.error('Erreur lors de la mise à jour de l\'événement:', error);
    return NextResponse.json(
      { error: 'Erreur lors de la mise à jour de l\'événement' },
      { status: 500 }
    );
  }
}

// DELETE /api/events/[id] - Supprimer un événement
export async function DELETE(request, { params }) {
  try {
    const { id } = params;
    const eventId = parseInt(id);
    
    if (isNaN(eventId)) {
      return NextResponse.json(
        { error: 'ID d\'événement invalide' },
        { status: 400 }
      );
    }
    
    // Vérifier si l'événement existe
    const existingEvent = await prisma.event.findUnique({
      where: { id: eventId },
    });
    
    if (!existingEvent) {
      return NextResponse.json(
        { error: 'Événement non trouvé' },
        { status: 404 }
      );
    }
    
    // Supprimer l'événement
    await prisma.event.delete({
      where: { id: eventId },
    });
    
    return NextResponse.json(
      { message: 'Événement supprimé avec succès' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Erreur lors de la suppression de l\'événement:', error);
    return NextResponse.json(
      { error: 'Erreur lors de la suppression de l\'événement' },
      { status: 500 }
    );
  }
} 