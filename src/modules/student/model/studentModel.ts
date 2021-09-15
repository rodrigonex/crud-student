import { Schema, model } from 'mongoose';

interface Student {
  name: string;
  subject: string;
  type: string;
  lastModified?: Date;
  value: number;
}
const schema = new Schema<Student>({
  name: {
    type: String,
    require: true,
  },
  subject: {
    type: String,
    require: true,
  },
  type: {
    type: String,
    require: true,
    min: 0,
  },
  value: {
    type: Number,
    require: true,
  },
  lastModified: {
    type: Date,
    default: Date.now(),
  },
});

const UserModel = model<Student>('student', schema, 'student');

export default UserModel;
