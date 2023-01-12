import type { Ticket } from './Ticket';

//Just add tickets here and they'll be available on the website.
const tickets: Ticket[] = [
	{ event: 'valentine', person: 'Coo', reference: 'PAJQEEP0', status: 'paid' },
  { event: 'valentine', person: 'Robert', reference: '3G993MCI', status: 'free' },
  { event: 'valentine', person: 'Stef', reference: 'MIGX0VOJ', status: 'pending' },
];

export { tickets as valentineTickets };

/* 
Generate nanoids: https://nanoid.yuuniworks.com/
PAJQEEP0
3G993MCI
MIGX0VOJ
F0Y7402Y
OQ60FEFQ
Y17KEKOJ
LSEQVXIL
Y5W7O7TX
RYBPST2L
2OFRA6RX
4WAKN4EP
4PTB5KT2
BM6K103D
QIKB2651
GYFY8GW1
8W2F2EXY
D1SPUA4M
2DZMYOX3
YI0HGHQR
SH3UOUL7
 */