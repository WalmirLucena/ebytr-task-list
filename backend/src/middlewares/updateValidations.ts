import { Response, NextFunction } from 'express';
import Joi from 'joi';
import { RequestWithBody } from '../controller/TaskController';
import { update } from '../interfaces';

const updateSchema = Joi.object().keys({
  content: Joi.string().required(),
  status: Joi.string().required().valid('A começar', 'Em andamento', 'Pendente', 'Finalizado'),
});

const updateValidations = async (
  req: RequestWithBody<update>,
  res: Response,
  next: NextFunction,
): Promise< typeof res | undefined> => {
  const validation = updateSchema.validate(req.body);

  if (validation.error) return res.status(400).json({ message: validation.error.message });

  next();
};

export default updateValidations;
