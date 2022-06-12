const valorDoProduto = parseFloat (prompt("Digite o valor do produto"));
const porcentagem45 = 0.45*valorDoProduto;
const porcentagem30 = 0.30*valorDoProduto; 

if (valorDoProduto < 20){
    alert(`Seu produto é menor que R$20,00 e deve ser vendido por R$ ${valorDoProduto + porcentagem45}`);
} else if (valorDoProduto > 20) {
    alert(`Seu produto é maior que R$20,00 e deve ser vendido por R$ ${valorDoProduto + porcentagem30}`);
} else if (valorDoProduto === 20) {
    alert(`Seu produto é igual a R$20,00 e deve ser vendido por R$ ${valorDoProduto + porcentagem30}`);
}

//if (valorDoProduto < 20){
//   console.log(`Seu produto é menor que R$20,00 e deve ser vendido por R$ ${valorDoProduto + porcentagem45}`);
//} else if (valorDoProduto > 20) {
//    console.log(`Seu produto é maior que R$20,00 e deve ser vendido por R$ ${valorDoProduto + porcentagem30}`);
//} else if (valorDoProduto === 20) {
//    console.log(`Seu produto é igual a R$20,00 e deve ser vendido por R$ ${valorDoProduto + porcentagem30}`);
//}