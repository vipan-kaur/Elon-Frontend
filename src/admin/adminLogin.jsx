import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, TextField, Typography, Paper, Container, Alert, CircularProgress, InputAdornment, IconButton } from '@mui/material';
import { Lock, Visibility, VisibilityOff } from '@mui/icons-material';

const AdminLogin = () => {
  const [adminCode, setAdminCode] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Default admin code - Change this to your secure code
  const ADMIN_CODE = "ADMIN@2024";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      if (adminCode.trim() === ADMIN_CODE) {
        // Set admin key in localStorage
        localStorage.setItem("adminKey", "true");
        alert("Admin access granted!");
        navigate("/admin");
      } else {
        setError("Invalid admin code. Please try again.");
      }
    } catch (err) {
      setError("Authentication failed. Please try again.");
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
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
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
          <Box sx={{ p: { xs: 3, md: 5 } }}>
            <Typography 
              variant="h4" 
              fontWeight="bold" 
              color="primary.dark" 
              gutterBottom 
              align="center"
            >
              🔐 Admin Portal
            </Typography>
            <Typography 
              variant="body2" 
              color="text.secondary" 
              align="center" 
              sx={{ mb: 4 }}
            >
              Enter your admin code to access the admin dashboard
            </Typography>

            {error && (
              <Alert severity="error" sx={{ mb: 3, borderRadius: 2 }}>
                {error}
              </Alert>
            )}

            <form onSubmit={handleSubmit}>
              <TextField
                fullWidth
                type={showPassword ? "text" : "password"}
                label="Admin Code"
                placeholder="Enter admin code"
                value={adminCode}
                onChange={(e) => {
                  setAdminCode(e.target.value);
                  if (error) setError("");
                }}
                margin="normal"
                variant="outlined"
                required
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Lock color="action" />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => setShowPassword(!showPassword)}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  )
                }}
              />

              <Button
                fullWidth
                variant="contained"
                color="primary"
                size="large"
                sx={{ mt: 4, py: 1.5, fontWeight: "bold", fontSize: "1.1rem" }}
                disabled={loading}
                type="submit"
              >
                {loading ? (
                  <CircularProgress size={24} color="inherit" />
                ) : (
                  "Access Admin Dashboard"
                )}
              </Button>
            </form>

            <Typography 
              variant="body2" 
              color="text.secondary" 
              align="center" 
              sx={{ mt: 4, pt: 4, borderTop: 1, borderColor: "divider" }}
            >
              Want to go back? 
              <Button 
                color="primary" 
                onClick={() => navigate("/")}
                sx={{ textTransform: "none", ml: 1 }}
              >
                Return to Home
              </Button>
            </Typography>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default AdminLogin;
