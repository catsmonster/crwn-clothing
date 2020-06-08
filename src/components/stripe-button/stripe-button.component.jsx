import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51Grl31GPSPBCMsdt0Jr6ys2DE4UQieOLy4kYI7O3D301LgIuz201gmj1WhPdwas0yl8qzbhuNGxAkIlVamwHPi6Z00cQdoW8tt';
    
    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    };

    return (
        <StripeCheckout 
        label='Pay Now' 
        name='Crwn Clothing' 
        billingAddress 
        shippingAddress 
        image='https://svgshare.com/i/CUz.svg' 
        description={`Your total is $${price}`} 
        amount={priceForStripe} 
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;
