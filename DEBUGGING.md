# Debugging "Missing credentials for 'PLAIN'" Error

## ❌ Error Message
```
Missing credentials for "PLAIN"
```

## 🔍 What This Means

This error is a **SASL (Simple Authentication and Security Layer) authentication error** that typically occurs on the **backend**, not the frontend. It indicates one of these issues:

### 1. **MongoDB Connection String Issue** (Most Common)
If using MongoDB with SASL authentication:
```
mongodb+srv://username:password@cluster.mongodb.net/dbname
```

**Problems:**
- Username or password not provided
- Username/password contains special characters not URL-encoded
- MongoDB credentials are missing/expired

### 2. **Email Service Configuration** (SMTP)
If backend uses nodemailer or similar:
- Missing email credentials
- Invalid SMTP configuration
- Auth mechanism set to "PLAIN" but credentials not provided

### 3. **Other Backend Services**
- Redis with authentication
- Message queues (RabbitMQ)
- Other services requiring SASL auth

## ✅ Solutions

### Step 1: Check Backend Configuration

Look at your backend `.env` file (or config) for:

```env
# MongoDB
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/dbname

# Or separate credentials
MONGODB_USER=username
MONGODB_PASSWORD=password
MONGODB_HOST=cluster.mongodb.net

# Email (if using OTP)
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password  # Use app-specific password for Gmail
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
```

### Step 2: For Gmail with 2FA
Use **App-Specific Password**, not your regular password:
1. Go to myaccount.google.com
2. Select "Security" → "App passwords"
3. Generate password for "Mail" and "Windows Computer"
4. Use this 16-character password in `EMAIL_PASSWORD`

### Step 3: URL Encode Special Characters
If your password contains special chars, encode them:

```
! = %21
@ = %40
# = %23
$ = %24
% = %25
& = %26
```

Example:
```
// Wrong
mongodb+srv://user:pass@word@cluster.mongodb.net

// Correct
mongodb+srv://user:pass%40word@cluster.mongodb.net
```

### Step 4: Check Backend Logs
Run backend locally and check console output:
```bash
npm run dev
# or
node server.js
```

Look for MongoDB connection errors.

## 🛠️ Frontend Debugging

The frontend now includes **detailed API logging**. Open Browser Console (F12) and check:

```
🚀 API Request: {
  method: "POST",
  url: "http://localhost:3000/api/auth/login",
  data: {...}
}

❌ API Error: {
  status: 500,
  message: "Missing credentials for 'PLAIN'",
  data: {...}
}
```

## 📋 Quick Checklist

- [ ] Backend `.env` file exists and has all required credentials
- [ ] MongoDB connection string is correct with URL-encoded special chars
- [ ] Email credentials are correct (use App Password if Gmail with 2FA)
- [ ] Backend server is running (`npm run dev`)
- [ ] Backend is on `http://localhost:3000` (or configured port)
- [ ] Frontend `.env` has `VITE_USE_LOCAL=true`
- [ ] Browser console shows full error details
- [ ] Backend console shows connection errors

## 🔗 Verify Connection

Test your backend directly:

```bash
# Using curl (from your curl command example)
curl "http://localhost:3000/api/auth/login" \
  -H "Content-Type: application/json" \
  --data '{"email":"vipkaur12@gmail.com","password":"qwe"}'
```

The response should show the actual backend error.

## 📝 Common Fix Pattern

**Most likely:** Backend MongoDB isn't configured properly.

**Solution:**
1. Check backend `.env` has `MONGODB_URI` or connection credentials
2. Test MongoDB connection: `mongosh mongodb+srv://user:pass@host`
3. Verify credentials haven't expired
4. Check environment variables are loaded (nodemon needs `-r dotenv/config`)
