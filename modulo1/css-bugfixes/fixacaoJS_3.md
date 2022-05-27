 function calculaNota(ex, p1, p2) {
  let conceito 
  let nota = ((ex*1) + (p1*2) + (p2*3)) /6
  if (nota >= 9) {
    conceito = "A"
  } else if (nota < 9 && nota >= 7.5) {
    conceito = "B"
  } else if (nota < 7.5 && nota >= 6){
    conceito = "C"
  } else {conceito = "D"}
  
  return conceito
}