import React,{useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';

export default function Details()
{
  const {id} = useParams();

  const [filmes, setFilmes] = useState({});
  const imgUrl = "https://image.tmdb.org/t/p/w500";
  const key = "81f53b053860ab5f9da9a4764d548070";

  useEffect(()=>
  {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=81f53b053860ab5f9da9a4764d548070&language=en-US&page=1`)
    .then(response => response.json())
    .then(data =>
    {
      const filme =
      {
        id,
        titulo: data.title,
        descricao: data.overview,
        imagem: `${imgUrl}${data.poster_path}`,
        data: data.release_date,
        avalicao:data.vote_average
      }

      setFilmes(filme);
      console.log()
    })
  }, [id])

  let deletar = (id)=>
  {
    fetch(`https://api.themoviedb.org/3/movie/${id}/lists?api_key=${key}&language=en-US&page=1`)
      .then(response => response.json())
      .then(data =>
        {
          setFilmes(data.results);
          window.location.href="/";
        })
  }

  return(
    <div class="pag flex">
      <div class="nav-container flex">
        <i onClick={()=>window.location.href="/"} class="material-icons voltar">arrow_back</i>
        <div class="ferramentas flex">
          <i onClick={()=>deletar(filmes.id)} class="material-icons iferramentas">delete</i>
        </div>
      </div>
      <div class="imagem-container">
        <img src={filmes.imagem} title={filmes.titulo} alt={filmes.titulo}/>
      </div>
      <div class="detalhes-container">
        <div class="paragrafo">
          <p class="titulo">ID</p> <p class="resposta">{filmes.id}</p>
        </div>

        <div class="paragrafo">
          <p class="titulo">Nome</p> <p class="resposta">{filmes.titulo}</p>
        </div>

        <div class="paragrafo">
          <p class="titulo">Lançamento</p> <p class="resposta">{filmes.data}</p>
        </div>

          <div class="paragrafo">
            <p class="titulo">Avaliação</p> <p class="resposta">
              {

                filmes.avalicao != 0?`${filmes.avalicao/2}/5`:''
              }
            </p>
          </div>

          <div class="paragrafo">
            <p class="titulo">Descrição</p> <p class="resposta">{filmes.descricao}</p>
          </div>
      </div>
    </div>
  );
}
