// // SDK de Mercado Pago
// const mercadopago = require("mercadopago");

// // Agrega credenciales
// mercadopago.configure({
//   access_token:
//     "TEST-7039161888137857-011115-7acfdca809308e76679c5691712bc69b-203515476",
// });

// Crea un objeto de preferencia
let preference = {
  items: [
    {
      id: "item-ID-1234",
      title: "Mi producto",
      unit_price: 100,
      quantity: 1,
      currency_id: "ARS",
    },
  ],
  payer: {
    name: "Juan",
    surname: "Lopez",
    email: "payer@email.com",
  },
};

// mercadopago.preferences
//   .create(preference)
//   .then( (response)=> {
//     // Este valor reemplazará el string "<%= global.id %>" en tu HTML
//     global.id = response.body.id;
//   })
//   .catch(function (error) {
//     console.log(error);
//   });
