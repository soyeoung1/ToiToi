import api from "./api";
import type { User } from "../types";

interface LoginCredentials {
  email: string;
  password: string;
}

interface SignupData {
  email: string;
  password: string;
  nickname: string;
}

interface AuthResponse {
  message: string;
  token: string;
  user: User;
}

export const authService = {
  async signup(data: SignupData): Promise<AuthResponse> {
    const response = await api.post<AuthResponse>("/auth/signup", data);
    return response.data;
  },

  async login(credentials: LoginCredentials): Promise<AuthResponse> {
    const response = await api.post<AuthResponse>("/auth/login", credentials);
    return response.data;
  },

  logout() {
    localStorage.removeItem("auth-storage");
  },
};

export default authService;
