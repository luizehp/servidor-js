

function enviarSolucao(token, slug, answer) {
  const exerciseHeaders = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Authorization': `Bearer ${token}`
  }
    ;

  axios.post(`https://tecweb-js.insper-comp.com.br/exercicio/${slug}`, { resposta: answer }, { headers: exerciseHeaders })
    .then((response) => {
      console.log(`[${response.data.sucesso ? 'CORRETO' : 'ERRADO'}] Resposta ${answer} enviada para '${slug}'`);
      console.log('');
    })
    .catch((error) => {
      console.error(`[ERRO] ao enviar resposta para ${slug}:`);
});
}



const header = {headers:{
    "Content-type": "application/json",
    "Accept": "application/json",
  }};
  

const axios = require("axios");




function square(tk) {

  const header = {headers:{
    "Content-type": "application/json",
    "Accept": "application/json",
    "Authorization": "Bearer "+tk
  }};
  axios
    .get("https://tecweb-js.insper-comp.com.br/exercicio", header)
    .then(async (response) => {
      console.log(response.data)
      ex=(response.data);

      nesimo(ex["n-esimo-primo"].entrada.n)

      enviarSolucao(tk,'soma',soma(ex.soma.entrada));
      enviarSolucao(tk,'tamanho-string',tString(ex["tamanho-string"].entrada.string));
      enviarSolucao(tk,'nome-do-usuario',nusuario(ex["nome-do-usuario"].entrada.email));
      enviarSolucao(tk,'jaca-wars',jwars(ex["jaca-wars"].entrada));
      enviarSolucao(tk,'ano-bissexto',bissexto(ex["ano-bissexto"].entrada.ano));
      enviarSolucao(tk,'volume-da-pizza',vpizza(ex["volume-da-pizza"].entrada));
      enviarSolucao(tk,'mru',mru(ex.mru.entrada));
      enviarSolucao(tk,'inverte-string',inverte(ex["inverte-string"].entrada.string));
      enviarSolucao(tk,'soma-valores',somav(ex["soma-valores"].entrada.objeto));
      enviarSolucao(tk,'soma-segundo-maior-e-menor-numeros',somamm(ex["soma-segundo-maior-e-menor-numeros"].entrada.numeros));
      enviarSolucao(tk,'conta-palindromos',palindromo(ex["conta-palindromos"].entrada.palavras));
      enviarSolucao(tk,'soma-de-strings-de-ints',sstring(ex["soma-de-strings-de-ints"].entrada.strings));
      r=await sreq(ex["soma-com-requisicoes"].entrada.endpoints,header);
      enviarSolucao(tk,'soma-com-requisicoes',r);
      c=await tesouro(ex["caca-ao-tesouro"].entrada.inicio,header)
      enviarSolucao(tk,'caca-ao-tesouro',c);
      enviarSolucao(tk,'maior-prefixo-comum',mpc(ex["maior-prefixo-comum"].entrada.strings));






      
  });
   
};


axios.post('https://tecweb-js.insper-comp.com.br/token', {
    username:"luizehp"
},header)
.then((response) => {
    tk=(response.data.accessToken);
    console.log(tk);
    square(tk);
}, (error) => {
    console.log(error);
});

function soma (soma){
  return (soma.a + soma.b)
  
}
function tString(s){
  return (s.length)
}
function nusuario(e){
  return (e.split("@")[0])
}
function jwars(e){
  theta=e.theta
  v=e.v
  const g = 9.8; 
  const distanciaAlcancada = (Math.pow(v, 2) * Math.sin(2 * (theta * (Math.PI / 180)))) / g;
  a= 0;

  if (distanciaAlcancada < 100 - 2) {
    a= -1;
  } else if (distanciaAlcancada > 100 + 2) {
    a= 1;
  }
  return a
}
function bissexto(ano){
  b=false
  if (ano%4==0){
    b=true
  }
  return b
}
function vpizza(a){
  return (Math.round((Math.PI*a.z**2)*a.a))
}
function mru(a){
  return (a.s0+(a.v*a.t))
}
function inverte(a){
  return (a.split('').reverse().join(''))
}
function somav(obj){
  console.log("soma-valores")
  //console.log(obj)
  var c = 0
  for (const chave in obj){
    c=c+obj[chave]
    //console.log(obj[chave])
  }
  return c
}
function nesimo(n){
  a=0
}
function somamm(n){
  //console.log(n)
  ordenada = n.sort((a,b)=>a-b);
  menor = ordenada[1];
  maior = ordenada[ordenada.length-2]
  return(maior+menor)
}
function palindromo(p){
  let qnt = 0 
  for (let i=0;i<=p.length-1;i++){
      q=Math.round(p[i].length/2)
      m1=p[i].slice(0, q)
      m2=p[i].slice(-q)
      if (m1==m2.split('').reverse().join('')){
        qnt+=1
      }
  }
  return qnt
}
function sstring(strings){
  let int = strings.map((n) => parseInt(n, 10));
  return int.reduce((a, b) => a + b, 0);
}

async function sreq(endponits,header){
  var t=0
  for (let i=0;i<=endponits.length-1;i++){
    r = await axios.get(endponits[i], header)
    t+=r.data
  }
  return t
}
async function tesouro(url,header){
  while (true){
    url = await axios.get(url, header)
    url=url.data
    if (typeof url==="string"){
    }else{
      return parseInt(url, 10)
    }
  }
}
function mpc (strings){
  px=0
}



