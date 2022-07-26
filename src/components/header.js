import React from 'react';

export default function Header()
{
  function apagar() {document.querySelector("#pesquisa").value=""};

  let buscar = (e)=>
  {
    let pesquisa = document.querySelector("#pesquisa").value;
    if(pesquisa != "")
      window.location.href=`/search/${pesquisa}`;
  }

  let buscarEnter =(e)=>
  {
    let pesquisa = document.querySelector("#pesquisa").value;
    if(e.which == 13 && pesquisa != "")
      window.location.href=`/search/${pesquisa}`;
  }

  let toggle = ()=>
  {
    document.querySelector("#header").classList.toggle('dark');
    document.querySelector(".iclose").classList.toggle('dark');
    document.querySelector(".isearch").classList.toggle('dark');
    document.querySelector("#pesquisa").classList.toggle('dark');
    document.body.classList.toggle('dark');
    document.querySelector("#footer-link").classList.toggle('dark');
  };

  return(
    <header id="header" class="flex">
      <div class="nav flex">
        <div class="input-containter flex">
          <input onKeyPress={(e)=>buscarEnter(e)}  id="pesquisa" type="text" minlength="0" maxlength="200" required/>
          <i onClick={()=>apagar()} class="material-icons iclose">close</i>
          <i onClick={()=>buscar()} class="material-icons isearch">search</i>
        </div>

        <div class="tema-container flex">
          <input type="checkbox" id="check"/>
          <label onClick={()=>toggle()} class="flex" for="check">
            <div class="bola"></div>
            <i class="material-icons itema">brightness_3</i>
            <i class="material-icons itema">brightness_7</i>
          </label>
        </div>

      </div>
    </header>
  )
}
