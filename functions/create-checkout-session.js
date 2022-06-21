const { redirect } = require('../utils/http')
const stripe = require('stripe')(process.env.STRIPE_SECRET)

exports.handler = async function (event, context) {
    const ids = event.queryStringParameters.ids.split(",").map(id => parseInt(id))
    const products = [
      { id: 1, name: 'Bolt On 1', price: 699 },
      { id: 2, name: 'Bolt On 2', price: 599 },
      { id: 3, name: 'Bolt On 3', price: 500 },
      { id: 4, name: 'Bolt On 4', price: 499 },
      { id: 5, name: 'Bolt On 5', price: 459 },
      { id: 6, name: 'Bolt On 6', price: 299 },
    ]
    const line_items = ids.map(id => {
      let product = products.find(item => item.id === id)
      if (product) {
        return {
          price_data: {
            currency: 'usd',
            product_data: {
              name: product.name,
            },
            unit_amount: product.price,
          },
          quantity: 1,
        }
      }
    })

    const session = await stripe.checkout.sessions.create({
        line_items,
        mode: 'payment',
        success_url: process.env.SERVERLESS_URL+'/checkout-success?session_id={CHECKOUT_SESSION_ID}',
        cancel_url: process.env.BASE_URL+'?success=false',
      });
    
    return redirect(session.url, 303);
}