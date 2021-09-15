import IStudent from '@modules/interface/StudentInterface';
import studentModel from '../model/studentModel';
import mongo from '@shared/mongodb/mogodb';

class ListServices {
  public async execute(): Promise<IStudent[]> {
    mongo();
    return await studentModel.find({});
  }
}

export default ListServices;
