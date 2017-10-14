import { Request, Response } from "express";
import * as HttpStatus from 'http-status-codes'

import { default as Transaction, TransactionModel } from "../models/Transaction";

export function all(req: Request, res: Response) {
  Transaction.find({})
    .then((payload: Array<TransactionModel>) => res.send(payload));
}

export function one(req: Request, res: Response) {
  Transaction.findById(req.params.id)
    .then((payload: TransactionModel) => res.send(payload))
}

export async function add(req: Request, res: Response) {
  try {
    let newTransaction = await new Transaction(req.body as TransactionModel).save();
    res.status(HttpStatus.CREATED).send(newTransaction)
  } catch(err) {
    res.status(HttpStatus.BAD_REQUEST).send(err)
  }
}

export async function remove(req: Request, res: Response) {
  try {
    await Transaction.findByIdAndRemove(req.params.id)
    res.sendStatus(HttpStatus.OK)
  } catch(err) {
    res.status(HttpStatus.BAD_REQUEST).send(err)
  }
}

export async function update(req: Request, res: Response) {
  try {
    let transaction = await Transaction.findByIdAndUpdate(
      req.params.id,
      req.body as TransactionModel,
      { 'new': true });
    res.status(HttpStatus.OK).send(transaction);
  } catch(err) {
    res.status(HttpStatus.BAD_REQUEST).send(err)
  }
}
