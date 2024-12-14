import mongoose, { Schema } from "mongoose";

const likeSchema = new Schema(
  {
    // Either Video, Comment or tweet will be assigned, other will be null
    video: { type: Schema.Types.ObjectId, ref: "Video" },
    Comment: { type: Schema.Types.ObjectId, ref: "Comment" },
    Tweet: { type: Schema.Types.ObjectId, ref: "Tweet" },
    likedBy: { type: Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true }
);

export const Like = mongoose.model("Like", likeSchema);
