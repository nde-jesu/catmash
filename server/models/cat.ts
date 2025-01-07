import { Schema, model } from 'mongoose';

const CatSchema = new Schema({
  id: {
    type: String,
  },
  votes: {
    type: Number,
  },
});

export const Cat = model<any>('Cat', CatSchema);