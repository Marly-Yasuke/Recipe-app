

function Popular (){

const getPopular = async () => {
  const api = await fetch(`
  https://api.edamam.com/api/recipes/v2?apiKey=${process.env.REACT_APP_API_KEY}&number=10`)
  const data = await api.json()
  console.log(data)
}

  return (
    <div>Popular</div>
  )
}

export default Popular
