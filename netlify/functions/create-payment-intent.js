import Stripe from "stripe";

require("dotenv").config();
const stripeKey = process.env.STRIPE_SECRET_KEY;
console.log(process.env.STRIPE_SECRET_KEY);

if (!stripeKey) {
  throw new Error("Missing Stripe API key");
}

const stripe = new Stripe(stripeKey);


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