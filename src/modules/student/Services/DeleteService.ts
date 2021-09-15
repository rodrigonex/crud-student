import studentModel from '../model/studentModel';
import mongo from '@shared/mongodb/mogodb';

class DeleteStudentService {
  public async execute(id: string): Promise<void> {
    mongo();
    await studentModel.findOneAndDelete({ _id: id });
  }
}
export default DeleteStudentService;
