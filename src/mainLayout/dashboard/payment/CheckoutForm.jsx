import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";

const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();

    const handlePayment = async (e) => {
        e.preventDefault();

        if(!stripe || !elements){
            // card stripe ba elements gulo na pele 
            return 
        }

        const card = elements.getElement(CardElement);
        // atao jodi na pawa jay tahle akhan thekei return  kore dibe 
        if(card === null){
            return 
        }
    }
    return (
        <>
            <form onSubmit={handlePayment}>
                <CardElement
                options={{
                    style:{
                        base: {
                            fontSize:'16px',
                            color:'#424770',
                            '::placeholder':{
                                color:'#aab7c4',
                            },
                        },
                        invalid: {
                            color:'#9e2146'
                        },
                    },
                }}
                ></CardElement>
            </form>
        </>
    );
};

export default CheckoutForm;