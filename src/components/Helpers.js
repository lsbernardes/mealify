const maxReceitas = 3;
let receitasPag = false;

const fetchHandler = async (url, post = false) => {
  const res = !post
    ? await fetch(url, { mode: "cors" })
    : await fetch(url, post);
  const data = await res.json();
  return data;
};

const recuperarDados = async (handler) => {
  // const dados = localStorage.getItem('receitas');
  const dados = await fetchHandler("http://127.0.0.1:3000/api/v1/receita");
  if (!dados) return [];

  const dadosParsed = await dados.data.receita;
  const dadosOrdenados = dadosParsed.sort(
    (a, b) => Date.parse(a.data) - Date.parse(b.data)
  );
  console.log("Recuperou", dadosOrdenados);
  handler(dadosOrdenados);
};

//////////////////////////////////////////////////////////////////
///// Paginação

// const avalPagin = (receitas, pagina) => {
//   let paginationState = false;
//   const inicio = (pagina - 1) * maxReceitas;
//   const fim = pagina * maxReceitas;

//   if (receitas.length > maxReceitas) {
//     receitasPag = receitas.slice(inicio, fim);
//     paginationState = true;
//   } else {
//     paginationState = false;
//     receitasPag = receitas;
//   }

//   return {
//     receitasPorPagina: receitasPag,
//     paginationState: paginationState,
//   };
// };

// const pagination = (dados, pagina) => {
//   atualizarPagina(pagina);
//   dados.containerPag.classList.remove("hidden");

//   if (dados.pagina <= 1) {
//     dados.pagDireita.innerHTML = "";
//     dados.pagDireita.insertAdjacentText("afterbegin", `página ${pagina + 1}`);
//     dados.pagEsquerda.innerHTML = "";
//   } else if (pagina === numeroPaginas) {
//     dados.pagEsquerda.insertAdjacentText("afterbegin", `página ${pagina - 1}`);
//     dados.pagDireita.innerHTML = "";
//   } else {
//     dados.pagDireita.insertAdjacentText("afterbegin", `página ${pagina + 1}`);
//     dados.pagEsquerda.insertAdjacentText("afterbegin", `página ${pagina - 1}`);
//   }
// };

//////////////////////////////////////////////////////////////////
///// RENDERIZATION

const vista = (receita, data, id) => {
  const dias =
    this.diferData(data) === 1
      ? `${this.diferData(data)} dia`
      : `${this.diferData(data)} dias`;

  const markup = `
          <div class="receita" id=${id}>
            <div class="card__interno card__siblings">${receita}</div>
            <div class="card__interno card__siblings">${dias}</div>
            </div>
            `;
  this.busca.insertAdjacentHTML("afterbegin", markup);
};

// const atualizarPagina = (paginaAtualizada = paginaAtual) => {
//   if (!paginaAtualizada) return;
//   const dados = {
//     pagina: paginaAtualizada,
//   };
//   this.paginaAtual = paginaAtualizada;
//   localStorage.setItem("state", JSON.stringify(dados));
// };

// const renderReceitas = async (receitas, pagina = paginaAtual) => {
//   const numeroPaginas = Math.ceil(receitas.length / maxReceitas);
//   if (pagina > numeroPaginas) return;

//   const { receitasPorPagina, paginationState } = Pagination.avalPagin(
//     receitas,
//     pagina
//   );

//   const receitasInvertidas = [...receitasPorPagina].reverse();

//   this.busca.innerHTML = "";
//   receitasInvertidas.map((receita) => {
//     const [dataString] = receita.data;
//     this.vista(receita.nome, dataString, receita._id);
//   });
//   !paginationState && this.containerPag.classList.add("hidden");
//   paginationState && Pagination.pagination(pagina, numeroPaginas);
// };

// const receitasIndividual = (evento) => {
//   if (!evento.target.getAttribute("class").includes("receita")) return;
//   const id = evento.target.getAttribute("id");

//   this.container.classList.add("hidden");
//   this.receitaCard.classList.remove("hidden", "box");
//   this.overlay.classList.remove("hidden");

//   console.log(state);
//   const [receita] = state.receitas.filter((receita) => {
//     if (receita._id == id) return receita;
//   });
//   const { nome, data, comentario } = receita;
//   const markup = `
//   <div class="receita__dados">
//     <div class="header"> <h2> ${nome} </h2><div>
//     <div class="data">${data}</div>
//     <div class="coment"> <textarea>${comentario}</textarea> </div>
//   </div>`;

//   this.receitaCard.innerHTML = markup;
// };

export { recuperarDados, maxReceitas };
