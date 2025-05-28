import mongoose, { Schema } from "mongoose";

const newsletterSchema = new Schema(
  {
    email: String,  
    datenverify: Boolean  
  },
  {
    timestamps: true,
  }
);

const Newsletter = mongoose.models.Newsletter || mongoose.model("Newsletter", newsletterSchema);

export default Newsletter;