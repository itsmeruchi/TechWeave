import React, { Fragment, useEffect, useRef } from "react";
import CheckoutSteps from "../Cart/CheckoutSteps";
import { useSelector, useDispatch } from "react-redux";
import MetaData from "../layout/MetaData";
import { Typography } from "@material-ui/core";
import { useAlert } from "react-alert";
import { useNavigate } from "react-router-dom"; // Updated for React Router v6
import "./payment.css";
import CreditCardIcon from "@material-ui/icons/CreditCard";
import EventIcon from "@material-ui/icons/Event";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import { createOrder, clearErrors } from "../../actions/orderAction.js";

const Payment = () => {
  const orderInfo = JSON.parse(sessionStorage.getItem("orderInfo"));

  const dispatch = useDispatch();
  const alert = useAlert();
  const navigate = useNavigate(); // Replaces history
  const payBtn = useRef(null);

  const { shippingInfo, cartItems } = useSelector((state) => state.cart);
  // const { user } = useSelector((state) => state.user);
  const { error } = useSelector((state) => state.newOrder || {}); // Handle undefined 'newOrder'

  // const paymentData = {
  //   amount: Math.round(orderInfo.totalPrice * 100),
  // };

  const order = {
    shippingInfo,
    orderItems: cartItems,
    itemsPrice: orderInfo.subtotal,
    taxPrice: orderInfo.tax,
    shippingPrice: orderInfo.shippingCharges,
    totalPrice: orderInfo.totalPrice,
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    payBtn.current.disabled = true;

    try {
      // Mock payment processing logic
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulating network delay

      // Mock payment success
      order.paymentInfo = {
        id: "mock_payment_id",
        status: "succeeded",
      };

      dispatch(createOrder(order));

      alert.success("Payment processed successfully!");
      navigate("/success"); // Updated for React Router v6
    } catch (error) {
      payBtn.current.disabled = false;
      alert.error("Payment failed. Please try again.");
    }
  };

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
  }, [dispatch, error, alert]);

  return (
    <Fragment>
      <MetaData title="Payment" />
      <CheckoutSteps activeStep={2} />
      <div className="paymentContainer">
        <form className="paymentForm" onSubmit={(e) => submitHandler(e)}>
          <Typography>Card Info</Typography>
          <div>
            <CreditCardIcon />
            <input
              type="text"
              placeholder="Card Number"
              className="paymentInput"
              required
            />
          </div>
          <div>
            <EventIcon />
            <input
              type="text"
              placeholder="MM/YY"
              className="paymentInput"
              required
            />
          </div>
          <div>
            <VpnKeyIcon />
            <input
              type="password"
              placeholder="CVC"
              className="paymentInput"
              required
            />
          </div>

          <input
            type="submit"
            value={`Pay - ₹${orderInfo && orderInfo.totalPrice}`}
            ref={payBtn}
            className="paymentFormBtn"
          />
        </form>
      </div>
    </Fragment>
  );
};

export default Payment;
