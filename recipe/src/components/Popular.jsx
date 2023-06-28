import { useEffect } from "react";

function Popular() {
  useEffect(() => {
    getPopular();
    // the empty array is to make sure to only run it when the component is mounted
  }, []);

  const getPopular = async () => {
    // need to fix fetching error (check key)
    const api = await fetch(`
  https://api.edamam.com/api/recipes/v2?apiKey=${process.env.REACT_APP_API_KEY}&number=10`);
    const data = await api.json();
    console.log(data);
  };

  return <div>Popular</div>;
}

export default Popular;
