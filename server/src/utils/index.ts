import { Response } from "express";

export let respondWithErrors = (res: Response, code: number) =>
  (error: Error) => res.status(code).send(error)