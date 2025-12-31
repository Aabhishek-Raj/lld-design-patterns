
const payBad = (type: string, amount: number) => {
  if (type === "upi") {}
  if (type === "card") {}
}


// FP OCP (Behavior Injection)
type Payment = (amount: number) => void

// Implement behaviors
const upiPayment: Payment = amount => {
  console.log(amount + " credited through Upi")
}
const cardPayment: Payment = amount => {
  console.log(amount + " credited through Card")
}
// Can Add new behavior ^ (NO modification)

const processPayment = (pay: Payment) => (amount: number) => {
    console.log(pay)
    pay(amount)
} 

processPayment(upiPayment)(440);

