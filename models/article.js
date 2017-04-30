// Requiring mongoose
import mongoose from "mongoose";
// Creating Schema 
const Schema = mongoose.Schema;

// Create Article schema
const ArticleSchema = new Schema({
  // Title 
  title: {
    type: String,
    required: true,
    unique: true
  },
  // Date 
  date: {
    type: Date,
    required: true
  },
  // Link
  url: {
    type: String,
    required: true
  }
});

// Create Article model with ArticleSchema
let Article = mongoose.model("Article", ArticleSchema);

// Export Article model 
export default Article;
