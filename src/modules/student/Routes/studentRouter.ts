import { Router } from 'express';
import StudentController from '../Controller/StudentController';
import { celebrate, Joi, Segments } from 'celebrate';

const studentRouter = Router();
const studentController = new StudentController();

studentRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      subject: Joi.string().required(),
      type: Joi.string().required(),
      value: Joi.number().required(),
    },
  }),
  studentController.create,
);

studentRouter.get(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().required(),
    },
  }),
  studentController.show,
);

studentRouter.get('/', studentController.index);

studentRouter.put(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().required(),
    },
    [Segments.BODY]: {
      name: Joi.string().required(),
      subject: Joi.string().required(),
      type: Joi.string().required(),
      value: Joi.number().required(),
    },
  }),
  studentController.update,
);

studentRouter.delete(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().required(),
    },
  }),
  studentController.delete,
);

export default studentRouter;
