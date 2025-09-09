export interface PasswordValidation {
  hasMinLength: boolean;
  hasUppercase: boolean;
  hasNumber: boolean;
  hasSpecialChar: boolean;
  isValid: boolean;
}

export function validatePassword(password: string): PasswordValidation {
  const hasMinLength = password.length >= 8;
  const hasUppercase = /[A-Z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
  
  return {
    hasMinLength,
    hasUppercase,
    hasNumber,
    hasSpecialChar,
    isValid: hasMinLength && hasUppercase && hasNumber && hasSpecialChar
  };
}

export function calculatePasswordStrength(password: string): number {
  if (password.length < 8) return 0;
  if (password.length < 12) return 1;
  if (/[A-Z]/.test(password) && /[0-9]/.test(password)) return 3;
  return 2;
}

export const PASSWORD_STRENGTH_LABELS = [
  "Too weak",
  "Could be stronger", 
  "Strong enough",
  "Very strong",
];

export const FORM_CONTAINER_CLASSES = "w-full max-w-md space-y-8 p-8 rounded-2xl bg-white dark:bg-gray-900 shadow-lg animate-scale-in";
export const FORM_HEADER_CLASSES = "w-full max-w-md mb-8 text-center";
