const AUTH_STORAGE_KEY = "riterealty_blog_auth_token";
const AUTH_EVENT_NAME = "riterealty:blog-auth-change";

export function getAuthToken() {
  if (typeof window === "undefined") {
    return null;
  }

  const token = window.localStorage.getItem(AUTH_STORAGE_KEY);
  return token?.trim() || null;
}

export function setAuthToken(token: string) {
  if (typeof window === "undefined") {
    return;
  }

  const normalized = token.trim();
  if (!normalized) {
    clearAuthToken();
    return;
  }

  window.localStorage.setItem(AUTH_STORAGE_KEY, normalized);
  window.dispatchEvent(new Event(AUTH_EVENT_NAME));
}

export function clearAuthToken() {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.removeItem(AUTH_STORAGE_KEY);
  window.dispatchEvent(new Event(AUTH_EVENT_NAME));
}

export function getAuthEventName() {
  return AUTH_EVENT_NAME;
}
