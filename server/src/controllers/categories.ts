import * as HttpStatus from 'http-status-codes'
import { Request, Response } from "express"

import { default as Category, CategoryModel } from "../models/Category"

export function all(req: Request, res: Response) {
  Category.find({ user: req.session.passport.user })
    .then(all => res.send(all))
}

export async function add(req: Request, res: Response) {
  if (req.body.title) {
    let data: CategoryModel = {
      ...req.body,
      user: req.session.passport.user
    }
    new Category(data)
      .save()
      .then(() => res.sendStatus(HttpStatus.CREATED))
  } else {
    res.sendStatus(HttpStatus.BAD_REQUEST)
  }
}

export async function update(req: Request, res: Response) {
  if (req.body.title) {
    Category.findOneAndUpdate({ id: req.params.id }, { title: req.body.title })
      .then(() => res.sendStatus(HttpStatus.OK))
  } else {
    res.sendStatus(HttpStatus.BAD_REQUEST)
  }
}