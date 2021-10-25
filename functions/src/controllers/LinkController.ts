import { Request, Response } from 'express';
import { Link } from '../models/Link';


const create = async (req: Request, res: Response): Promise<Response> => {
  const { original, created } = req.body;

  try {
    const linkExists = await Link.findOne({ where: { created } });

    if (linkExists)
      return res.status(400).json({ msg: 'link already registered' });

    const link = await Link.create({ original, created });

    return res.status(200).json(link);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: 'internal server error' });
  }
};

const getLink = async (req: Request, res: Response): Promise<Response> => {
  const { created } = req.params;

  if (!created)
    return res.status(400).json({ msg: 'missing data' });

  try {
    const link = await Link.findOne({ where: { created } });

    if (!link)
      return res.status(404).json({ msg: 'not found' });

    res.redirect(link.original);
    return res.status(200);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: 'internal server error' });
  }
};

export { create, getLink };
