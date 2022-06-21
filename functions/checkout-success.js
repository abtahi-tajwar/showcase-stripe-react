const { redirect, response, headers_post } = require('../utils/http')
const fetch = require("node-fetch");
const stripe = require('stripe')(process.env.STRIPE_SECRET)

exports.handler = async function (event, context) {
    const url = `https://api.hubapi.com/crm/v3/objects/contacts?hapikey=${process.env.ASSURE_HUBSPOT_API_KEY}`
    
    const session = await stripe.checkout.sessions.retrieve(event.queryStringParameters.session_id);
    const customer = await stripe.customers.retrieve(session.customer);
    const hubspot_contact = JSON.stringify({
        properties: {
            email: customer.email,
            firstname: customer.name
        }
    })
    console.log(hubspot_contact)
    const response = await fetch(url, {
        method: 'POST',
        headers: headers_post,
        body: hubspot_contact
    })
    console.log(response)

    return redirect(process.env.BASE_URL);
}