function calculaPrecoTotal(quantidade) {
  // Escreva seu código aqui
  let valorTotal 
  if (quantidade < 12) {
   valorTotal = (quantidade*1.30)
  } 
  else if (quantidade >= 12)
  { valorTotal = (quantidade*1.00)}
  
 return valorTotal 
}