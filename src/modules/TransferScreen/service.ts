import axios from "axios";

const TRANSFER_API_URL =
  "https://ofqx4zxgcf.execute-api.us-east-1.amazonaws.com/default";

const TRANSFER_LIST_API_URL =
  "https://n0qaa2fx3c.execute-api.us-east-1.amazonaws.com/default";

export type TransferPayload = {
  value: number;
  currency: string;
  payeerDocument: string;
  transferDate: string;
};

export type TransferResponse = {
  status: "success" | "error";
};

export type TransferListItem = {
  value: number;
  date: string;
  currency: string;
  payeer: {
    document: string;
    name: string;
  };
};

export const transferAmount = async (
  data: TransferPayload,
  token: string
): Promise<TransferResponse> => {
  try {
    const response = await axios.post(`${TRANSFER_API_URL}/transfer`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error: any) {
    console.error("Erro ao transferir", error?.response?.data || error.message);
    throw new Error("Erro ao realizar transferênciaa.");
  }
};

export const getTransferList = async (
  token: string
): Promise<TransferListItem[]> => {
  try {
    const response = await axios.get(`${TRANSFER_LIST_API_URL}/transferList`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    console.log("📄 Lista de transferências recebida:", response.data);
    return response.data;
  } catch (error: any) {
    console.error(
      "Erro ao buscar transferências",
      error?.response?.data || error.message
    );
    throw new Error("Erro ao buscar transferências.");
  }
};
