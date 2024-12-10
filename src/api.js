const API_URL = "http://localhost:8080/api"; // URL  backend

function getToken() {
  return localStorage.getItem("jwtToken");
}


async function request(endpoint, options = {}) {
  const token = getToken();

  const headers = {
    "Content-Type": "application/json",
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
  };

  const config = { ...options, headers };

  const response = await fetch(`${API_URL}${endpoint}`, config);

  if (!response.ok) {
    throw new Error(`Error: ${response.status}`);
  }

  return response.json();
}


export function login(email, password) {
  return request("/users/login", {
    method: "POST",
    body: JSON.stringify({ email, password }),
  });
}


export function register(user) {
  return request("/users/register", {
    method: "POST",
    body: JSON.stringify(user),
  });
}


export function getUser(id) {
  return request(`/users/${id}`, {
    method: "GET",
  });
}
