# Environment Variables Setup

This project uses environment variables to manage API endpoints for both local development and live production environments.

## 📋 Configuration Files

### `.env` (Production - Not Committed to Git)
Contains sensitive environment variables for your specific machine.

### `.env.example` (Template - Committed to Git)
Template file showing what environment variables need to be set. Copy this to `.env` and customize.

## 🔧 Environment Variables

### Available Variables

```
VITE_API_LOCAL       = http://localhost:3000        # Local API endpoint
VITE_API_LIVE        = https://elon-backend-1111.onrender.com  # Live API endpoint
VITE_USE_LOCAL       = false                         # Toggle between local/live
```

## 🚀 How to Use

### 1. Development (Local Backend)

To use your local backend for development:

```env
VITE_USE_LOCAL=true
VITE_API_LOCAL=http://localhost:3000
VITE_API_LIVE=https://elon-backend-1111.onrender.com
```

### 2. Production (Live Backend)

To use the live backend:

```env
VITE_USE_LOCAL=false
VITE_API_LOCAL=http://localhost:3000
VITE_API_LIVE=https://elon-backend-1111.onrender.com
```

## 📍 Using API Endpoints in Components

Import the API configuration in your component:

```javascript
import { API_ENDPOINTS } from '../config/apiConfig';

// Use endpoints
const response = await axios.get(API_ENDPOINTS.GET_PRODUCTS);
const response = await axios.post(API_ENDPOINTS.CREATE_PRODUCT, formData);
const response = await axios.put(API_ENDPOINTS.UPDATE_PRODUCT(id), data);
const response = await axios.delete(API_ENDPOINTS.DELETE_PRODUCT(id));
```

## 🔄 OR Operator Logic

The system uses an OR operator for fallback logic:

```javascript
export const API_BASE_URL = USE_LOCAL ? API_LOCAL : API_LIVE;
```

**Behavior:**
- If `VITE_USE_LOCAL=true` → Use local API
- If `VITE_USE_LOCAL=false` → Use live API
- If environment variable is missing → Falls back to default values

## ⚙️ Accessing Base URL in Code

```javascript
import API_BASE_URL, { API_ENDPOINTS } from '../config/apiConfig';

console.log(API_BASE_URL); // Logs current API base URL
```

## 🛡️ Security

- `.env` files are ignored by Git (see `.gitignore`)
- Never commit sensitive data to version control
- Always use `.env.example` as a template for team members
- Store actual credentials and API keys in `.env` only

## 📝 Steps to Setup for New Team Members

1. Clone the repository
2. Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```
3. Update the values in `.env` with your local/live endpoints
4. Run the development server:
   ```bash
   npm run dev
   ```

## 🐛 Debugging

The system logs the current API endpoint on startup:

```javascript
🚀 API Base URL: http://localhost:3000 (LOCAL)
// or
🚀 API Base URL: https://elon-backend-1111.onrender.com (LIVE)
```

Check the browser console to verify which API is being used.
