// recipe-app/frontend/src/components/AddRecipe.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addRecipe } from '../features/recipes/recipesSlice';
import { Link } from 'react-router-dom';

const AddRecipe = () => {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');
  const [category, setCategory] = useState('');
  const [prepTime, setPrepTime] = useState('');
  const [cookTime, setCookTime] = useState('');
  const [totalTime, setTotalTime] = useState('');
  const [servings, setServings] = useState('');
  const [nutrition, setNutrition] = useState({
    calories: '',
    protein: '',
    fat: '',
    carbohydrates: '',
  });
  const [author, setAuthor] = useState('');
  const [datePublished, setDatePublished] = useState('');
  const [image, setImage] = useState('');
  const [notes, setNotes] = useState('');
  const [tags, setTags] = useState('');
  const [rating, setRating] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRecipe = {
      title,
      ingredients,
      instructions,
      category,
      prepTime,
      cookTime,
      totalTime,
      servings,
      nutrition,
      author,
      datePublished,
      image,
      notes,
      tags,
      rating,
    };
    dispatch(addRecipe(newRecipe));
    // Tüm alanları temizleme
    setTitle('');
    setIngredients('');
    setInstructions('');
    setCategory('');
    setPrepTime('');
    setCookTime('');
    setTotalTime('');
    setServings('');
    setNutrition({ calories: '', protein: '', fat: '', carbohydrates: '' });
    setAuthor('');
    setDatePublished('');
    setImage('');
    setNotes('');
    setTags('');
    setRating('');
  };
  const handleNutritionChange = (e) => {
    const { name, value } = e.target;
    setNutrition((prevNutrition) => ({
      ...prevNutrition,
      [name]: value,
    }));
  };
  
  return (
    <div>
            <Link to="/">Back to Recipe List</Link>
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title*"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Ingredients*"
        value={ingredients}
        onChange={(e) => setIngredients(e.target.value)}
      />
      <textarea
        placeholder="Instructions*"
        value={instructions}
        onChange={(e) => setInstructions(e.target.value)}
      />
      <input
        type='text'
        placeholder='Category*'
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <input
        type='text'
        placeholder='Prep Time*'
        value={prepTime}
        onChange={(e) => setPrepTime(e.target.value)}
      />
       <input
        type='text'
        placeholder='Cook Time*'
        value={cookTime}
        onChange={(e) => setCookTime(e.target.value)}
      />
       <input
        type='text'
        placeholder='Total Time*'
        value={totalTime}
        onChange={(e) => setTotalTime(e.target.value)}
      />
      <input
        type='text'
        placeholder='Servings*'
        value={servings}
        onChange={(e) => setServings(e.target.value)}
      />
      <div>
        <h3>Nutrition</h3>
        <input
          type='number'
          name='calories'
          placeholder='Calories*'
          value={nutrition.calories}
          onChange={handleNutritionChange}
        />
        <input
          type='number'
          name='protein'
          placeholder='Protein (g)*'
          value={nutrition.protein}
          onChange={handleNutritionChange}
        />
        <input 
          type='number'
          name='fat'
          placeholder='Fat (g)*'
          value={nutrition.fat}
          onChange={handleNutritionChange}
        ></input>
          <input 
          type='number'
          name='carbohydrates'
          placeholder='Carbohydrates (g)*'
          value={nutrition.carbohydrates}
          onChange={handleNutritionChange}
        ></input>
      </div>
      <input
      type="text"
      placeholder="Author*"
      value={author}
      onChange={(e) => setAuthor(e.target.value)}
    />
    <input
      type="date"
      placeholder="Date Published*"
      value={datePublished}
      onChange={(e) => setDatePublished(e.target.value)}
    />
    <input
      type="text"
      placeholder="Image URL*"
      value={image}
      onChange={(e) => setImage(e.target.value)}
    />
    <textarea
      placeholder="Notes*"
      value={notes}
      onChange={(e) => setNotes(e.target.value)}
    />
    <input
      type="text"
      placeholder="Tags*"
      value={tags}
      onChange={(e) => setTags(e.target.value)}
    />
    <input
      type="number"
      placeholder="Rating*"
      value={rating}
      onChange={(e) => setRating(e.target.value)}
    />
      <button type="submit">Add Recipe</button>
    </form>
    </div>
  );
};

export default AddRecipe;
