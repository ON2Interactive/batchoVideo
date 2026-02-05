
/**
 * STRIPE CONFIGURATION (No-Server Method)
 * 
 * This method uses "Stripe Payment Links" which requires ZERO backend code.
 */

export const STRIPE_CONFIG = {
  // 1. Create a "Payment Link" in your Stripe Dashboard: 
  // Payments > Payment Links > New
  // Set the "After payment" behavior to "Don't show confirmation page" 
  // and redirect back to your app URL with "?paid=true"
  PAYMENT_LINK: 'https://buy.stripe.com/test_your_custom_link_here',

  // 2. Set to 'true' to use the real link, 'false' for the demo simulation.
  IS_LIVE: false 
};
