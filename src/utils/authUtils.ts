import { toast } from "sonner";
import { NavigateFunction } from "react-router-dom";
import { navigateToAgents } from "./navigationUtils";

export interface AuthResponse {
  success: boolean;
  message: string;
}

export async function simulateAuthCall(delay: number = 1000): Promise<AuthResponse> {
  await new Promise(resolve => setTimeout(resolve, delay));
  return { success: true, message: "Success" };
}

export function handleAuthSuccess(message: string, navigate: NavigateFunction) {
  toast.success(message);
  navigateToAgents(navigate);
}

export function handleAuthError(message: string) {
  toast.error(message);
}

export function handleOAuthAuth(provider: string, navigate: NavigateFunction, delay: number = 1000) {
  setTimeout(() => {
    toast.success(`${provider} login successful!`);
    navigateToAgents(navigate);
  }, delay);
}

export function handleOAuthSignup(provider: string, navigate: NavigateFunction, delay: number = 1000) {
  setTimeout(() => {
    toast.success(`${provider} account connected!`);
    navigateToAgents(navigate);
  }, delay);
}
