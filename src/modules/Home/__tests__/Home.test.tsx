import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react-native";
import { Home } from "../index";
import * as service from "../service";
import "@testing-library/jest-native/extend-expect";

jest.mock("../../../utils/storage", () => ({
  logout: jest.fn(),
}));

jest.spyOn(console, "warn").mockImplementation((msg) => {
  if (typeof msg === "string" && msg.includes("Token não encontrado")) {
    return;
  }
  console.warn(msg);
});

const mockNavigate = jest.fn();
jest.mock("@react-navigation/native", () => ({
  useNavigation: () => ({
    navigate: mockNavigate,
  }),
}));

jest.mock("../../../store/store", () => ({
  useAppSelector: (selector: any) => {
    const fakeState = {
      auth: {
        userName: "João",
        token: "fake-token",
      },
    };
    return selector(fakeState);
  },
}));

jest.spyOn(service, "getBalance").mockResolvedValue({
  currency: "BRL",
  accountBalance: 3520.45,
});

describe("Home Screen", () => {
  beforeEach(() => {
    mockNavigate.mockClear();
  });

  it("renderiza corretamente com nome do usuário e data", async () => {
    const { getByTestId } = render(<Home />);

    await waitFor(() => {
      expect(getByTestId("greeting-text")).toHaveTextContent("Olá");
      expect(getByTestId("username-text")).toHaveTextContent("João");
      expect(getByTestId("date-text")).toHaveTextContent(
        /\d{1,2} de .+ de \d{4}/
      );
    });
  });

  it("exibe saldo oculto por padrão e alterna visibilidade ao clicar", async () => {
    const { getByTestId, queryByText } = render(<Home />);

    expect(getByTestId("balance-value")).toHaveTextContent("••••••");

    fireEvent.press(getByTestId("balance-value"));

    await waitFor(() => {
      expect(queryByText(/R\$\s?3\.520,45/)).toBeTruthy();
    });

    fireEvent.press(getByTestId("balance-value"));
    expect(getByTestId("balance-value")).toHaveTextContent("••••••");
  });

  it("navega para telas corretas ao clicar nos botões", () => {
    const { getByTestId } = render(<Home />);

    fireEvent.press(getByTestId("btn-transfer"));
    expect(mockNavigate).toHaveBeenCalledWith("TransferScreen");

    fireEvent.press(getByTestId("btn-schedule"));
    expect(mockNavigate).toHaveBeenCalledWith("Scheduling");

    fireEvent.press(getByTestId("btn-transfer-list"));
    expect(mockNavigate).toHaveBeenCalledWith("TransferList");
  });
});
