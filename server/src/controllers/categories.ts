import * as HttpStatus from 'http-status-codes'
import { Request, Response } from "express";

import { default as Category, CategoryModel } from "../models/Category";

export function all(req: Request, res: Response) {
  Category.find({}).then(all => res.send(all));
}

export async function add(req: Request, res: Response) {
  if (req.body.title) {
    await new Category(req.body as CategoryModel).save()
    res.sendStatus(HttpStatus.CREATED)
  } else {
    res.sendStatus(HttpStatus.BAD_REQUEST)
  }
}

export async function update(req: Request, res: Response) {
  if (req.body.title) {
    await Category.findOneAndUpdate({ id: req.params.id as number }, { title: req.body.title as string })
    res.sendStatus(HttpStatus.OK)
  } else {
    res.sendStatus(HttpStatus.BAD_REQUEST)
  }
}