import { error, json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import type { Ticket } from './Ticket';
import { valentineTickets } from './ValentinesTickets';

export const GET: RequestHandler = async (e) => {
  const tickets = events[e.params.event];
  if (!tickets) throw error(404, { message: 'Event not found' }) ;

  const ticket = tickets.find(t => t.reference === e.params.reference);
  if (!ticket) throw error(404, { message: 'Ticket not found' }) ;
  
  //Remove the person for Privacy purposes
  return json({ ...ticket, person: undefined });
};

const events: Record<string, Ticket[]> = {
  valentine: valentineTickets
};