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
    apiBaseUrl: process.env.REACT_APP_BACK_URL,
  };
}

export default config;
