const maxReceitas = 3;
let receitasPag = false;

const fetchHandler = async (url, post = false) => {
  const res = !post
    ? await fetch(url, { mode: 'cors' })
    : await fetch(url, post);
  const data = await res.json();
  return data;
};

const recuperarDados = async (handler) => {
  // const dados = localStorage.getItem('receitas');
  const dados = await fetchHandler('http://127.0.0.1:3001/api/v1/receita');
  if (!dados) return [];

  const dadosParsed = await dados.data.receita;
  const dadosOrdenados = dadosParsed.sort(
    (a, b) => Date.parse(a.data) - Date.parse(b.data)
  );
  // console.log('Recuperou', dadosOrdenados);
  // handler(dadosOrdenados);
  return dadosOrdenados;
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

export { recuperarDados, maxReceitas };
