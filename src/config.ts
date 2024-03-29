interface ConfigObject {
  apiBaseUrl?: string;
}

let config: ConfigObject = {};

if (process.env.NODE_ENV === 'development') {
  config = {
    apiBaseUrl: 'http://localhost:3001/api',
  };
} else if (process.env.NODE_ENV === 'production') {
  config = {
    apiBaseUrl: 'https://fridge-app-backend.onrender.com/api',
  };
}

export default config;
