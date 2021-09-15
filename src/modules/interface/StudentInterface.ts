import { ObjectId } from 'mongoose';

export default interface IStudent {
  name: string;
  subject: string;
  type: string;
  value: number;
  lastModified?: Date;
  _id?: ObjectId;
}
