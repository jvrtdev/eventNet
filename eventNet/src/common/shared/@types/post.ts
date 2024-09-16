export interface PostInterface {
  id?: string;
  createdAt?: string;
  updatedAt?: string;
  text: string;
  ownerId: string;
  comments?: any;
  reposts?: any;
  likes?: any;
}
