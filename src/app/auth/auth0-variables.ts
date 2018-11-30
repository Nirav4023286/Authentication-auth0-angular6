interface AuthConfig {
  clientID: string;
  domain: string;
  callbackURL: string;
}

export const AUTH_CONFIG: AuthConfig = {
 clientID: 'tBq1RMClXmT8etw8cDE5AmBus64DUgnK',
    domain: 'ost.auth0.com',
    redirectUri: 'https://localhost:3000/callback',
    
};
