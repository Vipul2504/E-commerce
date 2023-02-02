require("dotenv").config();
const stripe = require('stripe')('sk_test_51MVwT9SCOnxN1vxupo2xyzks3rnjfGwXpqTBjoYIjoowo3fs3FUZke3qXV7Zfh95zc5YXaqgRj8hyNCkMMljr5EY00sK2gyc0y');

export async function handler(event) {
  try {
    const { amount } = JSON.parse(event.body);

    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: "usd",
      payment_method_types: ["card"],
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ paymentIntent }),
    };
  } catch (error) {
    console.log({ error });

    return {
      statusCode: 400,
      body: JSON.stringify({ error }),
    };
  }
}