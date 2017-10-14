import * as mongoose from "mongoose";

export type TransactionModel = mongoose.Document & {
  type: number,
  value: number,
  timestamp: number,
  category: number,
  currency: string,
  description: string
};

const TransactionSchema = new mongoose.Schema({
  type: { required: true, type: Number},
  value: { required: true, type: Number},
  timestamp: { required: true, type: Number},
  category: { required: true, type: Number},
  currency: { required: true, type: String},
  description: String,
}, { collection : 'transactions' })

export default mongoose.model("Transaction", TransactionSchema);