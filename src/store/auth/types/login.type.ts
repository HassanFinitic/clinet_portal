interface LoginCredentials {
  email: string;
  password: string;
}

interface LoginResponse {
  result: UserProfile;
}

interface UserProfile {
  token: string;
  firstName: string;
  lastName: string;
  email: string;
  category: string;
  isLead: boolean;
  defaultPortal: string;
  defaultSupPortal: string;
  twoFactorAuthEnabled: boolean;
}



export type { LoginCredentials, LoginResponse, UserProfile };
