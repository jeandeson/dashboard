export default function ToCurrency(value) {
  let currency = parseFloat(value)
  return currency.toLocaleString('pt-BR', {style:'currency', currency: 'BRL'})
}