import React,{useState, useEffect} from 'react';

export default function Content()
{
  const [filmes, setFilmes] = useState([]);
  const imgUrl = "https://image.tmdb.org/t/p/w500";

  useEffect(()=>
{
  fetch("https://api.themoviedb.org/3/movie/popular?api_key=81f53b053860ab5f9da9a4764d548070&language=en-US&page=1")
  .then(response => response.json())
  .then(data => setFilmes(data.results))
}, [])

return(
  <main>
    {filmes.map((filme)=>{
      return(
        <div class="grid-item flex">
          <img onClick={()=>window.location.href=`/details/${filme.id}`} src={`${imgUrl}${filme.poster_path}`}/>
          <p class="titulo">{filme.title}</p>
        </div>
      )
    })}
  </main>
)
}
