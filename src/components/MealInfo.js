import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function MealInfo() {
  const { mealid } = useParams();
  const [info, setInfo] = useState();

  const getInfo = async () => {
    const get = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealid}`);
    const jsonData = await get.json();
    setInfo(jsonData.meals[0]);
  };

  useEffect(() => {
    getInfo();
  }, [mealid]);

  return (
    <div className="meal-info">
      {!info ? (
        <p>Data not found</p>
      ) : (
        <div className="meal-details">
          <img src={info.strMealThumb} alt={info.strMeal} />
          <div className="info">
            <h1>{info.strMeal}</h1>
            <h3>Instructions</h3>
            <p>{info.strInstructions}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default MealInfo;
