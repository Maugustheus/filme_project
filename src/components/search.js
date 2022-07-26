import React,{useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';

export default function Content()
{
  const [filmes, setFilmes] = useState([]);
  const imgUrl = "https://image.tmdb.org/t/p/w500";
  const busca = useParams();

  useEffect(()=>
{
  fetch(`https://api.themoviedb.org/3/search/movie?api_key=81f53b053860ab5f9da9a4764d548070&query=${busca.title}`)
  .then(response => response.json())
  .then(data => setFilmes(data.results))
}, [])

return(
  <>
  <div class="voltar-buscaContainer">
    <i onClick={()=>window.location.href="/"} class="material-icons voltar-busca">arrow_back</i>
  </div>

  <main>
    {filmes.map((filme)=>{
      return(
        <div class="grid-item flex">
          <img onClick={()=>window.location.href=`/details/${filme.id}`} src={`${imgUrl}${filme.poster_path}`}/>
          <p class="titulo">{filme.title}</p>
        </div>
      )
    })}
    {filmes.length <1 ? <p class="aviso">Sem filme com esse título.</p> :''}
  </main>
  </>
)
}
