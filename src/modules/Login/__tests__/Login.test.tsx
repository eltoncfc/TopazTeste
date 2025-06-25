import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react-native";
import Login from "../index";
import * as service from "../service";

jest.mock("@react-navigation/native", () => ({
  useNavigation: () => ({
    navigate: jest.fn(),
  }),
}));
jest.mock("../../../store/store", () => ({
  useAppDispatch: () => jest.fn(),
}));
jest.mock("../../../store/modules/auth/authSlice", () => ({
  setToken: jest.fn(),
  setUserName: jest.fn(),
}));

jest.mock("../service");

describe("Login screen", () => {
  it("preenche campos e faz login com sucesso", async () => {
    const loginMock = service.login as jest.Mock;
    loginMock.mockResolvedValue({
      token: "fake-token",
      user: { id: 1, name: "Teste", email: "teste@exemplo.com" },
    });

    const { getByPlaceholderText, getByText } = render(<Login />);

    fireEvent.changeText(getByPlaceholderText("E-mail"), "user@teste.com");
    fireEvent.changeText(getByPlaceholderText("Senha"), "123456");

    fireEvent.press(getByText("Entrar"));

    await waitFor(() => {
      expect(loginMock).toHaveBeenCalledWith("user@teste.com", "123456");
    });
  });
});
