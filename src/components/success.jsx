import React from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Success = () => {
  const navigate = useNavigate();

  return (
    
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white text-center p-6">
      <h1 className="text-4xl font-bold mb-4">Thank You!</h1>
      <p className="mb-6 text-lg">
        Your order has been successfully placed.
      </p>

      <Button
        variant="contained"
        color="secondary"
        onClick={() => navigate("/")}
      >
        Continue Shopping
      </Button>
    </div>
  );
};

export default Success;