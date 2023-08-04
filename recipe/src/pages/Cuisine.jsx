import React, { useEffect } from "react";
import { Styled } from "styled-components";
import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";

function Cuisine() {
  const [cuisine, setCuisine] = useState([]);
let params = useParams()
  const getCuisine = async (name) => {
    const data = await fetch( `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}&number=10`
    )
    const recipes = await data.json();
    setCuisine(recipes.results)
  }

  useEffect(()=>{
getCuisine(params.type)
console.log(params)
},[params.type])
  return <div>Cuisine</div>;
}

export default Cuisine;
