const mercadopago = require('mercadopago');
require('dotenv').config()

const createOrder = async (req, res) => {
  try {
    mercadopago.configure({
      access_token: `${process.env.ACCESS_TOKEN}`
    });
  
    const result = await mercadopago.preferences.create({
      items: [
        {
        title: 'Laptop Lenovo',
        unit_price: 500,
        currency_id: 'ARS',
        quantity: 1
        }
      ],
      back_urls: 
        {
          success: 'http://localhost:3001/success',
          failure: 'http://localhost:3001/failure',
          pending: 'http://localhost:3001/pending'
        },
      notification_url: 'https://8a99-2803-9800-9444-6e61-b415-87c6-1831-ef9a.ngrok.io/webhook'
    })
    // console.log(result)
    // res.send('creating order');
    res.json(result.body)
    
  } catch (error) {
    console.log(error)
  }
}

const receiveWebhook = async (req, res) => {
  const payment = req.query;
  try {
    if (payment.type === 'payment') {
      const data = await mercadopago.payment.findById(payment['data.id'])
      console.log(data)
      // Guardar en base de datos
    }
    res.sendStatus(204);
  } catch(error) {
    console.log(error);
  }
}

module.exports = {
  createOrder,
  receiveWebhook
}