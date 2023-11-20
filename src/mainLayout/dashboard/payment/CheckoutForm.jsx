import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useCarts from '../../../hooks/useCarts'
import useAuth from "../../../hooks/useAuth";

const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState('');
    const [transactionId, setTransactionId] = useState('');
    const [clientSecret, setClientSecret] = useState('')
    const axiosSecure = useAxiosSecure();
    const [carts] = useCarts();
    const {user} = useAuth();

    const totalPrice = carts.reduce((total, item) => total + item.price, 0);

    useEffect(() => {
        axiosSecure.post('/create-payment-intent', { price: totalPrice })
            .then(res => {
                console.log('client secret is here --->',res.data.clientSecret);
                setClientSecret(res?.data?.clientSecret)
            })
    }, [axiosSecure, totalPrice])
    // console.log(clientSecret);
    // console.log(carts);
    const handlePayment = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) {
            // card stripe ba elements gulo na pele 
            return
        }

        const card = elements.getElement(CardElement);
        // atao jodi na pawa jay tahle akhan thekei return  kore dibe 
        if (card === null) {
            return
        }
        // create payment Method 
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })
        if (error) {
            setError(error.message)
            console.log('payment error', error);
        }
        else {
            toast.success('payment success!')
            console.log('payment method', paymentMethod);
            setError('')
        }

        // confirm payment 
        const {paymentIntent,error:confirmError} = await stripe.confirmCardPayment(clientSecret, {
            payment_method:{
                card:card,
                billing_details: {
                    email: user?.email || 'anonymous',
                    name: user?.displayName || 'anonymous'
                }
            }
        })
        if(confirmError){
            console.log('confirm error');
        } else{
            if(paymentIntent?.status === 'succeeded'){
                console.log('payment intent id -->', paymentIntent?.id);
                setTransactionId(paymentIntent?.id)

                // now save the payment in the database
                const payment = {
                    email: user?.email,
                    price : totalPrice,
                    transactionId: paymentIntent.id,
                    date: new Date(), // utc date convert. use moment js to server
                    cartIds : carts?.map(item => item._id),
                    menuItemIds : carts?.map(item => item.menuId),
                    status: 'Pending'
                }
               const res = await axiosSecure.post('/payments', payment);
                console.log('payment save it ---->',res.data);
            }
        }
    }
    return (
        <>
            <form onSubmit={handlePayment}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146'
                            },
                        },
                    }}
                ></CardElement>
                <button className="btn btn-primary text-[18px] capitalize my-5" type="submit" disabled={!stripe || !clientSecret}>pay</button>
               {transactionId && <p className="text-green-500 font-medium">Your Transaction id is:  {transactionId}</p>}
                <p className="text-red-500 font-medium">{error}</p>
            </form>
        </>
    );
};

export default CheckoutForm;