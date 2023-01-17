export interface Ticket {
	id?: number;
	created_at?: string;
	person?: string;
	reference: string;
	event_name: string;
	status?: TicketStatus;
}

export enum TicketStatus {
	PAID = 'paid',
	PENDING = 'pending',
	FREE = 'free',
	CANCELED = 'canceled'
}
