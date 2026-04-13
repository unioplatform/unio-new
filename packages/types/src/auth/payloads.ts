export interface LoginPayload {
  emailOrUsername: string;
  password: string;
}

export interface SignupPayload {
  firstName: string;
  lastName: string;
  username: string; 
  email: string;
  password: string;
  birthday: string;
  gender?: string;
  careerId?: string;
  termsAccepted: boolean;
}