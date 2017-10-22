import { Request, Response } from 'express'
import * as HttpStatus from 'http-status-codes'

import TransactionsCond from '../classes/TransactionsCond'
import { default as Transaction, TransactionModel } from '../models/Transaction'

export async function all(req: Request, res: Response) {
  try {
    let condition: TransactionsCond =
      new TransactionsCond(req.query, req.session.passport.user)
    Transaction
      .find(condition)
      .select('category currency description timestamp type value')
      .then(data => res.status(HttpStatus.OK).send(data))
  } catch(err) {
    res.status(HttpStatus.BAD_REQUEST).send(err)
  }
}

export function one(req: Request, res: Response) {
  Transaction.findById(req.params.id)
    .then((payload: TransactionModel) => res.send(payload))
}

export async function add(req: Request, res: Response) {
  try {
    let data = {
      ...req.body,
      user: req.session.passport.user
    }
    new Transaction(data)
      .save()
      .then(newTransaction =>
        res.status(HttpStatus.CREATED).send(newTransaction))
  } catch(err) {
    res.status(HttpStatus.BAD_REQUEST).send(err)
  }
}

export async function remove(req: Request, res: Response) {
  try {
    Transaction.findByIdAndRemove(req.params.id)
      .then(() => res.sendStatus(HttpStatus.OK))
  } catch(err) {
    res.status(HttpStatus.BAD_REQUEST).send(err)
  }
}

export async function update(req: Request, res: Response) {
  try {
    let transaction = await Transaction.findByIdAndUpdate(
      req.params.id,
      req.body as TransactionModel,
      { 'new': true })
    res.status(HttpStatus.OK).send(transaction)
  } catch(err) {
    res.status(HttpStatus.BAD_REQUEST).send(err)
  }
}