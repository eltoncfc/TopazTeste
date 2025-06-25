const API_URL =
  "https://qf5k9fspl0.execute-api.us-east-1.amazonaws.com/default/login";

type LoginResponse = {
  token: string;
  user: {
    id: number;
    name: string;
    email: string;
  };
};

export const login = async (
  email: string,
  password: string
): Promise<LoginResponse> => {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};
