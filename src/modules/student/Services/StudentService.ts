import IStudent from '@modules/interface/StudentInterface';
import studentModel from '../model/studentModel';
import mongo from '@shared/mongodb/mogodb';
import AppError from '@shared/errors/AppError';

class getByIdService {
  public async execute(id: string): Promise<IStudent> {
    mongo();
    const student = await studentModel.findById(id);

    if (!student) {
      throw new AppError('Not found.');
    }

    return student;
  }
}
export default getByIdService;
