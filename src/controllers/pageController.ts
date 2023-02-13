import { Request, Response } from "express";

export const home = (req: Request, res: Response) => {
  res.send("home no controller");
};
export const adicionar = (req: Request, res: Response) => {
  // res.render ('pages/page');
};
export const deletar = (req: Request, res: Response) => {
  // res.render ('pages/page');
};
