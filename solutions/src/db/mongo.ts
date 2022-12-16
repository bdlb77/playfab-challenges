import { MONGO_URL } from "$env/static/private";
import mongoose, { Mongoose } from 'mongoose'


export function startMongo(): Promise<Mongoose> {
  console.log("Starting Mongo...");

  return mongoose.connect(MONGO_URL);

}
