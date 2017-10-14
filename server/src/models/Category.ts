import * as mongoose from "mongoose";

export type CategoryModel = mongoose.Document & {
  id: number,
  title: string
};

const CategorySchema = new mongoose.Schema({
  title: String,
  id: Number
}, {
  collection : 'categories'
})

export default mongoose.model("Category", CategorySchema);