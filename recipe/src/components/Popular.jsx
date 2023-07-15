import { useEffect } from "react";

function Popular() {
  useEffect(() => {
    getPopular();
    // the empty array is to make sure to only run it when the component is mounted
  }, []);

  const getPopular = async () => {
    const api = await fetch(`
    https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=10`);
    const data = await api.json();
    console.log(data);
  };

  return <div>Popular</div>;
}

export default Popular;
