import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  Box,
  Button,
  TextField,
  Typography,
  Paper,
  Container,
  Tab,
  Tabs,
  InputAdornment,
  IconButton,
  Alert,
  CircularProgress
} from "@mui/material";
import {
  Email,
  Lock,
  Person,
  Visibility,
  VisibilityOff
} from "@mui/icons-material";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showOtp, setShowOtp] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    otp: ""
  });

  const navigate = useNavigate();

  const handleModeChange = (event, newValue) => {
    setIsLogin(newValue === 0);
    setShowOtp(false);
    setError("");
  };

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
    if (error) setError("");
  };

  const validate = () => {
    if (showOtp) {
      if (!formData.otp) {
        setError("OTP is required");
        return false;
      }
      return true;
    }

    if (isLogin) {
      if (!formData.email || !formData.password) {
        setError("Email and password are required");
        return false;
      }
    } else {
      if (!formData.name || !formData.email || !formData.password || !formData.confirmPassword) {
        setError("All fields are required");
        return false;
      }
      if (formData.password !== formData.confirmPassword) {
        setError("Passwords do not match");
        return false;
      }
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    setError("");

    try {
      if (showOtp) {
        // Handle OTP Verification
        const response = await axios.post("http://localhost:3000/api/auth/verify", {
          email: formData.email,
          otp: formData.otp
        });
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("user", JSON.stringify(response.data.user));
        navigate("/");
        return;
      }

      const url = isLogin
        ? "http://localhost:3000/api/auth/login"
        : "http://localhost:3000/api/auth/signup";

      const payload = isLogin
        ? { email: formData.email, password: formData.password }
        : { name: formData.name, email: formData.email, password: formData.password, confirmPassword: formData.confirmPassword };

      const response = await axios.post(url, payload);

      if (isLogin) {
        // For login, backend sends OTP
        // response.data should be { message: "Otp sent" }
        setShowOtp(true);
        alert("OTP has been sent to your email!");
      } else {
        alert("Signup successful! Please login.");
        setIsLogin(true);
        setFormData(prev => ({ ...prev, password: "", confirmPassword: "" }));
      }
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.message || "Authentication failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        minHeight: "90vh",
        display: "flex",
        alignItems: "center",
        background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
        py: 4
      }}
    >
      <Container maxWidth="sm">
        <Paper
          elevation={10}
          sx={{
            borderRadius: 4,
            overflow: "hidden",
            backdropFilter: "blur(10px)",
            backgroundColor: "rgba(255, 255, 255, 0.9)"
          }}
        >
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={isLogin ? 0 : 1}
              onChange={handleModeChange}
              variant="fullWidth"
              textColor="primary"
              indicatorColor="primary"
            >
              <Tab label="Login" sx={{ py: 3, fontWeight: "bold", fontSize: "1.1rem" }} />
              <Tab label="Signup" sx={{ py: 3, fontWeight: "bold", fontSize: "1.1rem" }} />
            </Tabs>
          </Box>

          <Box sx={{ p: { xs: 3, md: 5 } }}>
            <Typography variant="h4" fontWeight="bold" color="primary.dark" gutterBottom align="center">
              {showOtp ? "Verify OTP" : (isLogin ? "Welcome Back" : "Create Account")}
            </Typography>
            <Typography variant="body2" color="text.secondary" align="center" sx={{ mb: 4 }}>
              {showOtp 
                ? `Please enter the 4-digit code sent to ${formData.email}` 
                : (isLogin ? "Please enter your details to sign in" : "Join us to get started with ELON COUTURE")}
            </Typography>

            {error && (
              <Alert severity="error" sx={{ mb: 3, borderRadius: 2 }}>
                {error}
              </Alert>
            )}

            <form onSubmit={handleSubmit}>
              {!showOtp && (
                <>
                  {!isLogin && (
                    <TextField
                      fullWidth
                      name="name"
                      label="Full Name"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleChange}
                      margin="normal"
                      variant="outlined"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <Person color="action" />
                          </InputAdornment>
                        ),
                      }}
                      sx={{ mb: 2 }}
                    />
                  )}

                  <TextField
                    fullWidth
                    name="email"
                    label="Email Address"
                    type="email"
                    placeholder="email@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    margin="normal"
                    variant="outlined"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Email color="action" />
                        </InputAdornment>
                      ),
                    }}
                    sx={{ mb: 2 }}
                  />

                  <TextField
                    fullWidth
                    name="password"
                    label="Password"
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    value={formData.password}
                    onChange={handleChange}
                    margin="normal"
                    variant="outlined"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Lock color="action" />
                        </InputAdornment>
                      ),
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                    sx={{ mb: 2 }}
                  />

                  {!isLogin && (
                    <TextField
                      fullWidth
                      name="confirmPassword"
                      label="Confirm Password"
                      type="password"
                      placeholder="••••••••"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      margin="normal"
                      variant="outlined"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <Lock color="action" />
                          </InputAdornment>
                        ),
                      }}
                      sx={{ mb: 3 }}
                    />
                  )}
                </>
              )}

              {showOtp && (
                <TextField
                  fullWidth
                  name="otp"
                  label="Enter OTP"
                  placeholder="1234"
                  value={formData.otp}
                  onChange={handleChange}
                  margin="normal"
                  variant="outlined"
                  autoFocus
                  sx={{ mb: 3 }}
                />
              )}

              <Button
                fullWidth
                type="submit"
                variant="contained"
                size="large"
                disabled={loading}
                sx={{
                  py: 1.5,
                  borderRadius: 2,
                  fontSize: "1.1rem",
                  textTransform: "none",
                  fontWeight: "bold",
                  mt: 2,
                  boxShadow: "0 4px 12px rgba(25, 118, 210, 0.3)"
                }}
              >
                {loading ? <CircularProgress size={24} color="inherit" /> : (showOtp ? "Verify" : (isLogin ? "Sign In" : "Sign Up"))}
              </Button>

              {showOtp && (
                <Button
                  fullWidth
                  variant="text"
                  onClick={() => setShowOtp(false)}
                  sx={{ mt: 2, textTransform: "none" }}
                >
                  Change Email or Retry Login
                </Button>
              )}
            </form>

            {!showOtp && (
              <Box sx={{ mt: 4, textAlign: "center" }}>
                <Typography variant="body2" color="text.secondary">
                  {isLogin ? "New to ELON COUTURE?" : "Already have an account?"}
                  <Button
                    onClick={() => { setIsLogin(!isLogin); setError(""); }}
                    sx={{ ml: 1, fontWeight: "bold", textTransform: "none" }}
                  >
                    {isLogin ? "Create an account" : "Sign in here"}
                  </Button>
                </Typography>
              </Box>
            )}
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default Login;
