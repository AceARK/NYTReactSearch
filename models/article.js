// Requiring mongoose
var mongoose = require("mongoose");
// Creating Schema 
var Schema = mongoose.Schema;

// Create Article schema
var ArticleSchema = new Schema({
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
var Article = mongoose.model("Article", ArticleSchema);

// Export Article model 
module.exports = Article;
