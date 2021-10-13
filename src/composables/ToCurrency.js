export default function ToCurrency(value) {
  let currency = parseFloat(value)
  return currency.toLocaleString('en-US', {style:'currency', currency: 'USD'})
}