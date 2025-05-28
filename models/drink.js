import mongoose, { Schema } from "mongoose";

const drinkSchema = new Schema(
  {
    category: String,
    brand: String,
    kind: String,
    size: Number,
    price: Number,
    alcohol: Number,
    origin: String,
    status: String,
  },
  {
    timestamps: true,
  }
);

const Drink = mongoose.models.Drink || mongoose.model("Drink", drinkSchema);

export default Drink;