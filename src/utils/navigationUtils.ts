import { NavigateFunction } from "react-router-dom";

export const ROUTES = {
  AGENTS: "/agents",
  LOGIN: "/login", 
  SIGNUP: "/signup",
  PRICING: "/pricing",
  FEATURES: "/features",
  ABOUT: "/about",
  CONTACT: "/contact",
  HELP: "/help",
  DOCS: "/docs",
  PRIVACY: "/privacy",
  TERMS: "/terms",
  BLOG: "/blog",
  CAREERS: "/careers",
  API: "/api"
} as const;

export function navigateToAgents(navigate: NavigateFunction) {
  navigate(ROUTES.AGENTS);
}

export function navigateToLogin(navigate: NavigateFunction) {
  navigate(ROUTES.LOGIN);
}

export function navigateToSignup(navigate: NavigateFunction) {
  navigate(ROUTES.SIGNUP);
}

export function navigateToPricing(navigate: NavigateFunction) {
  navigate(ROUTES.PRICING);
}
