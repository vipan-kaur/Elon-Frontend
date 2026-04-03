
import React, { useState } from "react";
import {
  Typography,
  Button,
  TextField,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearCart } from "../slice/cartslice";

const Checkout = () => {
  const cartItems = useSelector((state) => state.cart.cartitem);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [paymentMethod, setPaymentMethod] = useState("cod");

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const shipping = 10;
  const total = subtotal + shipping;

  const handlePlaceOrder = () => {
    dispatch(clearCart());
    navigate("/success");
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 md:px-12">
      <Typography variant="h4" className="font-bold pb-10 text-center">
        Secure Checkout
      </Typography>

      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        
        {/* LEFT SIDE - FORM */}
        <div className="bg-white p-8 rounded-xl shadow-lg space-y-6">
          
          {/* Shipping Info */}
          <div>
            <Typography variant="h6" className="mb-4 font-semibold">
              Shipping Information
            </Typography>

            <div className="grid gap-4">
              <TextField label="Full Name" fullWidth required />
              <TextField label="Email Address" fullWidth required />
              <TextField label="Phone Number" fullWidth required />
              <TextField label="Address" fullWidth multiline rows={3} required />
            </div>
          </div>

          {/* Payment Method */}
          <div>
            <Typography variant="h6" className="mb-4 font-semibold">
              Payment Method
            </Typography>

            <FormControl>
              <RadioGroup
                value={paymentMethod}
                onChange={(e) => setPaymentMethod(e.target.value)}
              >
                <FormControlLabel
                  value="cod"
                  control={<Radio />}
                  label="Cash on Delivery"
                />
                <FormControlLabel
                  value="Upi"
                  control={<Radio />}
                  label="Online Payment (UPI)"
                />
                 <FormControlLabel
                  value="card"
                  control={<Radio />}
                  label="Online Payment (Card / UPI)"
                />
              </RadioGroup>
            </FormControl>

            {/* Conditional Online Payment Fields */}
            {paymentMethod === "card" && (
              <div className="mt-4 space-y-4">
                <TextField label="Card Number" fullWidth />
                <div className="grid grid-cols-2 gap-4">
                  <TextField label="Expiry Date" placeholder="MM/YY" />
                  <TextField label="CVV" type="password" />

                </div>
              </div>
            )}
            {paymentMethod==="Upi" &&(
                <div className="mt-4 space-y-4">
                <TextField label="Upi id" fullWidth />
                </div>
            )}
          </div>
        </div>

        {/* RIGHT SIDE - ORDER SUMMARY */}
        <div className="bg-white p-8 rounded-xl shadow-lg h-fit">
          <Typography variant="h6" className="font-semibold mb-4">
            Order Summary
          </Typography>

          <div className="space-y-3">
            {cartItems.map((item) => (
              <div key={item.id} className="flex justify-between text-sm">
                <span>
                  {item.name} x {item.quantity}
                </span>
                <span>
                  ${(item.price * item.quantity).toFixed(2)}
                </span>
              </div>
            ))}
          </div>

          <div className="border-t my-4"></div>

          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>

          <div className="flex justify-between">
            <span>Shipping</span>
            <span>${shipping.toFixed(2)}</span>
          </div>

          <div className="flex justify-between font-bold text-lg border-t pt-4 mt-4">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>

          <Button
            variant="contained"
            color="primary"
            fullWidth
            className="mt-6 py-3"
            onClick={handlePlaceOrder}
          >
            {paymentMethod === "cod"
              ? "Place Order"
              : "Pay & Place Order"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;