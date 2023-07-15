import { useEffect, useState } from "react";

function Popular() {
  const [popular, setPopular] = useState([])
  useEffect(() => {
    getPopular();
    // the empty array is to make sure to only run it when the component is mounted
  }, []);

  const getPopular = async () => {
    // need to fix fetching error (check key)
    const api = await fetch(`
    https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=10`);
    const data = await api.json();
setPopular(data.recipes)
  };

  return <div>{popular.map((recipe) => {
    return (
<div key={recipe.id}>
  <p>{recipe.title}</p>
</div>
    )
  })}</div>;
}

export default Popular;
