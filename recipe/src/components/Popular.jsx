import { useEffect } from "react";

function Popular() {
  useEffect(() => {
    getPopular();
    // the empty array is to make sure to only run it when the component is mounted
  }, []);

  const getPopular = async () => {
    // need to hide API key => issue when requesting to .env
    const api = await fetch(`
    https://api.spoonacular.com/recipes/random?apiKey=ed3eda3947f446d5a0d190fba46f0475&number=10`);
    const data = await api.json();
    console.log(data);
  };

  return <div>Popular</div>;
}

export default Popular;
