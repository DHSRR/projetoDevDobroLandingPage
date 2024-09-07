/* Quando clicar na SETA de Avançar, temos de esconder todas as imagens e mostrar a próxima imagem.
    
        A imagem atual começa em 0 pois é a primeira, assim que for clicado no avançar eu preciso adicionar mais 1 ao contador de imagens para poder sber o que agora eu vou mostrar a segunda imagem.
    
            Pegar o problema num todo e quebrar em várias problemas menores, para conseguir resolver de uma melhor forma. Conseguir escrever em um papel tudo a ser feito.

                Esconder todas as imagens; 
                    Pegar todas as imagens usando o DOM e remover a classe mostrar. 
                Mostrar a próxima imagem;
                    pegar todas as imagens, descobrir qual é a próxima e colocar a classe mostrar. 

Normalmente, iremos precisar criar algumas variáveis (referências) no JS que irão  representar o que estará aparecendo na tela. O "CONST" serve para dizer que a variável não terá seu valor modificado. Se for preciso alterar o seu valor, utilizamos o "LET"

o "CONSOLE.LOG" serve para ver o que está acontecendo no JS
*/

const imagensPainel = document.querySelectorAll('.imagem-painel');
const setaAvancar = document.getElementById('btn-avancar');
const setaVoltar = document.getElementById('btn-voltar');
let imagemAtual = 0;

//Se tiver uma função repetida, o ideal é refatorar o código duplicado para melhor visualização e futura manutenção. Se for preciso alterar algo, é só mudar na função ao invés de vários pontos do código repetido.
/* function esconderImagens(){
        imagensPainel.forEach(imagem => {
           imagem.classList.remove('mostrar')
        });
} como támbem faço em
function esconderImagem(){ 
imagensPainel[imagemAtual].classList.add('mostrar');
}*/
//Depois no lugar que estava o código repetido, eu chamo as funções criadas.
/*esconderImagens();
mostrarImagem();*/

/* Quando clicar na SETA de Avançar, temos de esconder todas as imagens e mostrar a próxima imagem. */
setaAvancar.addEventListener('click', function () {

    // Testa se o contador da imagemAtual é igual ao totel de imagens
    const totalDeImagens = imagensPainel.length -1;
    if(imagemAtual === totalDeImagens){
        return;
    }
    /*A imagem atual começa em 0 pois é a primeira, assim que for clicado no avançar eu preciso adicionar mais 1 ao contador de imagens para poder sber o que agora eu vou mostrar a segunda imagem. */
    imagemAtual++;
    /*Esconder todas as imagens; 
        Pegar todas as imagens usando o DOM e remover a classe mostrar.*/
    imagensPainel.forEach(imagem => {
        imagem.classList.remove('mostrar')
    });
    /*Mostrar a próxima imagem;
        pegar todas as imagens, descobrir qual é a próxima e colocar a classe mostrar. */
    imagensPainel[imagemAtual].classList.add('mostrar');
})

/* Quando clicar na SETA de Voltar, temos de esconder todas as imagens e mostrar a imagem anterior. */
setaVoltar.addEventListener('click', function () {


    if(imagemAtual === 0){
        return;
    }

    imagemAtual--;

    imagensPainel.forEach(imagem => {
        imagem.classList.remove('mostrar')
    });
    /*Mostrar a imagem anterior;
        pegar todas as imagens, descobrir qual é a anterior e colocar a classe mostrar. */
    imagensPainel[imagemAtual].classList.add('mostrar');
})
// console.log('tocouNaSetaAvancar')

/* addEventListener => Métudo para adicionar um evento (no caso aqui é o click) */
/* FUNCTION => Métudo de função, usado para uma ação a ser executada */
/* FOR_EACH => é um métudo utilizado dentro de ARRAYs "listas", onde conseguimos interar em cada item */
/* classList => Lista de classe do elemento (no caso, da imagem)*/