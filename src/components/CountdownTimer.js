import { useEffect, useRef, useState } from "react";
import api from "../api";
import { enqueueSnackbar } from "notistack";
import { clearCart } from "./StateManagement";

export default function CountdownTimer({ targetTime, orderId, HandleSuccessOpen, HandleCompletePaymentClose, fetchCart }) {
    const [timeoutOccurred, setTimeoutOccurred] = useState(false);
    const [checkOrderAllowed, setCheckOrderAllowed] = useState(true);
    const timerIntervalRef = useRef(null);
    const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());


    useEffect(() => {
        // Clear the previous interval when the targetTime changes
        clearInterval(timerIntervalRef.current);
        setTimeoutOccurred(false);
        setCheckOrderAllowed(true)
        // Set a new interval
        timerIntervalRef.current = setInterval(() => {
            setTimeRemaining(calculateTimeRemaining());
            if (orderId && checkOrderAllowed) {
                checkOrder();
            }

        }, 1000);

        // Clear the interval on component unmount or when the targetTime changes
        return () => clearInterval(timerIntervalRef?.current);
    }, [targetTime]);

    function calculateTimeRemaining() {
        const targetDate = new Date(targetTime);
        const currentDate = new Date();
        const difference = targetDate - currentDate;

        if (difference <= 0 && !timeoutOccurred) {
            // Timer expired
            clearInterval(timerIntervalRef?.current);
            enqueueSnackbar('Payment Timeout 😞', { variant: 'error' })
            HandleCompletePaymentClose();
            setTimeoutOccurred(true);
            setCheckOrderAllowed(false);
            return {
                minutes: 0,
                seconds: 0,
            };
        }

        const minutes = Math.floor(difference / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        return {
            minutes,
            seconds,
        };
    }

    async function checkOrder() {
        try {
            const response = await api.checkOrder({
                order_id: orderId,

            });
            console.log('order response===>', response);
            if (response.paid) {
                HandleSuccessOpen()
                enqueueSnackbar('Checkout Successful', { variant: 'success' })
                clearInterval(timerIntervalRef?.current);
                setCheckOrderAllowed(false);
                setTimeoutOccurred(true);
                clearCart()
                fetchCart()
            }
        } catch (error) {

        }

    }


    return (

        <p className="text-center text-[14px] text-[#000] mb-[14px] md:mb-[20px] lg:mb-[24px] ">{`${timeRemaining.minutes}min : ${timeRemaining.seconds} sec`}</p>

    );
};