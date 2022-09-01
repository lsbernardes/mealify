const maxReceitas = 4;

const maxHandler = (pagina) => {
  const inicio = (pagina - 1) * maxReceitas;
  const fim = pagina * maxReceitas;
  return { inicio, fim };
};

const fetchHandler = async (url, post = false) => {
  const res = !post
    ? await fetch(url, { mode: 'cors' })
    : await fetch(url, post);
  const data = await res.json();
  return data;
};

const recuperarDados = async (handler) => {
  const dados = await fetchHandler('http://127.0.0.1:3001/api/v1/receita');
  if (!dados) return [];

  const dadosParsed = await dados.data.receita;
  const dadosOrdenados = dadosParsed.sort(
    (a, b) => Date.parse(a.data) - Date.parse(b.data)
  );
  return dadosOrdenados;
};

export { recuperarDados, maxReceitas, maxHandler };
