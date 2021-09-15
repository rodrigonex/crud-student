import IStudent from '@modules/interface/StudentInterface';
import studentModel from '../model/studentModel';
import mongo from '@shared/mongodb/mogodb';
import AppError from '@shared/errors/AppError';
import mongoose from 'mongoose';

interface IRequest {
  id: string;
  name: string;
  subject: string;
  type: string;
  value: number;
}
class UpdateStudentService {
  public async execute({
    id,
    name,
    subject,
    type,
    value,
  }: IRequest): Promise<IStudent | null> {
    mongo();
    const studentId = await studentModel.findById(id);

    if (!studentId) {
      throw new AppError('Not found');
    }
    const updateStudent = {
      id,
      name,
      subject,
      type,
      value,
      lastModified: studentId.lastModified,
    };

    mongoose.set('returnOriginal', false);
    const newStudent = await studentModel.findOneAndUpdate(
      { _id: id },
      updateStudent,
    );
    return newStudent;
  }
}
export default UpdateStudentService;
