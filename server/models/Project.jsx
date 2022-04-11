const mongoose = require("mongoose");
const ProjectSchema = mongoose.Schema(
  {
    title: {
      type: String,
      maxLength: [150, "title cannot exceed 150 characters"],
      required: [true, "please provide a title"],
      trim: true,
    },
    description: {
      type: String,
      maxLength: [500, "description cannot exceed 500 characters"],
      required: [true, "please provide a description"],
      trim: true,
    },
    githubRepository: {
      type: String,
    },
    hostedOn: {
      type: String,
    },
    images: {
      type: [String],
    },
    video: {
      type: String,
    },
    batches: {
      type: [String],
    },
  },
  { timestamps: true }
);

mongoose.models = {};

module.exports = mongoose.model("Project", ProjectSchema);
