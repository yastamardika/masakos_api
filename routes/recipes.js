const express = require("express");

const router = express.Router();

const Recipe = require("../model/Recipe");

router.get("/",async (req, res) => {
  try {
    const resep = await Recipe.find();
    res.json(resep)
  } catch (error) {
    res.json({ message : error}) 
  }
});

router.post("/", async (req, res) => {
  const recipe = new Recipe({
    title: req.body.title,
    author: req.body.author,
    recipeType : req.body.recipeType,
    category : req.body.category,
    desc: req.body.desc,
    recipes: req.body.recipes,
    steps:  req.body.steps
  });
  try {
    const savedRecipe =  await recipe.save();
   res.json(savedRecipe)
  } catch (error) {
    res.json({ message : error})
  }
  
});

router.get('/:recipeId' ,async (req ,res)=>{
  try {
   const recipe = await Recipe.findById(req.params.recipeId)
    res.json(recipe)
  } catch (error) {
    res.json({ message : error}) 
  }
})

router.patch('/:recipeId' ,async (req ,res)=>{
  try {
    const updateRecipe = await Recipe.updateOne({_id: req.params.recipeId},{
      $set :{
        title: req.body.title
      }
    }); 
    res.json({diedit : updateRecipe}) 
  } catch (error) {
    res.json({ message : error}) 
  }
})
router.delete('/:recipeId' ,async (req ,res)=>{
  try {
    const removeRecipe = await Recipe.remove({_id: req.params.recipeId});
    res.json({dihapus : removeRecipe}) 
  } catch (error) {
    res.json({ message : error}) 
  }
})
module.exports = router;
