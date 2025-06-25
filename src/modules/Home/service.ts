import axios from "axios";

const API_URL =
  "https://2k0ic4z7s5.execute-api.us-east-1.amazonaws.com/default/balance";

export type BalanceResponse = {
  currency: string;
  accountBalance: number;
};

export const getBalance = async (token: string): Promise<BalanceResponse> => {
  try {
    const response = await axios.get<BalanceResponse>(API_URL, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    return response.data;
  } catch (error: any) {
    console.error(
      " Erro ao buscar saldo:",
      error?.response?.data || error.message
    );
    throw error;
  }
};
