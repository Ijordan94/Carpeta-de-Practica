import { Request, Response, NextFunction } from "express";
const autenticacion = (req: Request, res: Response, next: NextFunction) => {
  const { token } = req.headers;
  if (token === "autenticado") {
    next();
  } else {
    res.status(400).json({ message: "Error: Autenticación incorrecta" });
  }
};

export default autenticacion;
