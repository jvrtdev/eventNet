export interface EventInterface {
  id?: string;
  userId: string;
  title: string;
  description: string;
  conversationId?: string;
  start_datetime: Date;
  end_datetime: Date;
  image: string;
  location: string;
  qr_code?: string;
  createdAt?: Date;
  eventDate?: string;
}
