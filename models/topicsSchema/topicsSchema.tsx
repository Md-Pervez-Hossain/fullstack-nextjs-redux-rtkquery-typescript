import { Schema, model, models } from "mongoose";

const topicsSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const Topic = models.Topic || model("Topic", topicsSchema);
export default Topic;
