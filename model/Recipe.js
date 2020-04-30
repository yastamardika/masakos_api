const mongoose = require("mongoose");

const IngSchema = mongoose.Schema({
    no: Number,
    recipe: String,
})

const StepSchema = mongoose.Schema({
    step: Number,
    desc: String,
})
const RecipeSchema = mongoose.Schema({
  title: { type: String, required: true },
  author: {type : String},
  date: { type: Date, default: Date.now },
  recipeType : { type: String},
  category : {type: String},
  desc: { type: String, required: true },
  videoUrl: {type : String},
  recipes: {type: Object, of: IngSchema},
  steps: {type:Object, of: StepSchema}
});

module.exports = mongoose.model('Recipes', RecipeSchema);