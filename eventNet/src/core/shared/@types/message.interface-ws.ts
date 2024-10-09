import { MessageInterface } from './message';

export type MessageInterfaceWs = Pick<
  MessageInterface,
  'content' | 'senderId' | 'conversationId' | 'isRead'
>;
