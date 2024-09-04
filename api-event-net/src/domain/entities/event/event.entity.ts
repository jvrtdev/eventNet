import { Event } from '@prisma/client'

export class EventEntity implements Event{
  id: string;
  title: string;
  description: string;
  conversationId: string;
  start_datetime: Date;
  end_datetime: Date;
  image: string;
  location: string;
  qr_code: string;
}