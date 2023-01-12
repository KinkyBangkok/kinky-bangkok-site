export interface Ticket {
  person?: string;
  reference: string;
  event: string;
  status?: 'paid' | 'pending' | 'free';
}