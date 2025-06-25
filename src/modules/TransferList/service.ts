import axios from "axios";

const API_URL =
  "https://n0qaa2fx3c.execute-api.us-east-1.amazonaws.com/default/transferList";

export type TransferItem = {
  value: number;
  date: string;
  currency: string;
  payeer: {
    document: string;
    name: string;
  };
};

export const getTransfers = async (
  token: string
): Promise<{ transfers: TransferItem[] }> => {
  try {
    const response = await axios.get<{ transfers: TransferItem[] }>(API_URL, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    return response.data;
  } catch (error: any) {
    console.error(
      "Erro ao buscar transferências:",
      error?.response?.data || error.message
    );
    throw error;
  }
};
