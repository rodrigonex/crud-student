import IStudent from '@modules/interface/StudentInterface';
import studentModel from '../model/studentModel';
import mongo from '@shared/mongodb/mogodb';
import AppError from '@shared/errors/AppError';

class CreatedStudentService {
  public async execute({
    name,
    subject,
    type,
    value,
  }: IStudent): Promise<IStudent> {
    mongo();

    const nameExists = await studentModel.find({ name });
    if (nameExists) {
      throw new AppError('Name is already being used.');
    }

    const student = new studentModel({ name, subject, type, value });
    await student.save();
    return nameExists;
  }
}
export default CreatedStudentService;
