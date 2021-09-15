import { Request, Response } from 'express';
import CreatedStudentService from '../Services/CreateService';
import DeleteStudentService from '../Services/DeleteService';
import ListServices from '../Services/ListService';
import getByIdService from '../Services/StudentService';
import UpdateStudentService from '../Services/updateService';

export default class StudentController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, subject, type, value } = request.body;

    const createStudent = new CreatedStudentService();

    const student = await createStudent.execute({
      name,
      subject,
      type,
      value,
    });

    return response.json(student);
  }

  public async index(request: Request, response: Response): Promise<Response> {
    const listStudent = new ListServices();
    const students = await listStudent.execute();
    return response.json(students);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const getById = new getByIdService();
    const students = await getById.execute(id);

    return response.json(students);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { name, subject, type, value } = request.body;
    const { id } = request.params;

    const updateStudent = new UpdateStudentService();

    const student = await updateStudent.execute({
      name,
      subject,
      type,
      value,
      id,
    });

    return response.json(student);
  }

  public async delete(request: Request, response: Response): Promise<void> {
    const { id } = request.params;
    const deleteService = new DeleteStudentService();

    await deleteService.execute(id);

    response.end();
  }
}
