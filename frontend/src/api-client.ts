import { RegisterFormData } from "./pages/Register";
import { SignInFormData } from "./pages/SignIn";

const apiUrl = import.meta.env.VITE_API_URL || "";

export const register = async (FormData: RegisterFormData) => {
  const response = await fetch(`${apiUrl}/api/users/register`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(FormData),
  });

  const responseBody = await response.json();
  if (!response.ok) {
    throw new Error(responseBody.message);
  }
};

// };
export const validateToken = async () => {
  // `${apiUrl}/api/auth/validate-token`
  const response = await fetch(
    `http://localhost:8080/api/auth/validate-token`,
    {
      method: "GET",
      credentials: "include",
    }
  );

  if (!response.ok) {
    throw new Error("Token invalid");
  }

  return response.json();
};

export const SignIn = async (formData: SignInFormData) => {
  const response = await fetch(`${apiUrl}/api/auth/login`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  const body = await response.json();
  if (!response.ok) {
    throw new Error(body.message);
  }

  return body;
};

export const SignOut = async() => {
  const response = await fetch(`${apiUrl}/api/auth/logout`,{
    credentials : "include",
    method : "POST"
  })
  if(!response.ok){
    throw new Error("Error during sign out");
  }
}