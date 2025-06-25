import { render } from "@testing-library/react-native";
import { Text } from "react-native";

test("Exibe mensagem", () => {
  const { getByText } = render(<Text>Bem-vindo</Text>);
  expect(getByText("Bem-vindo")).toBeTruthy();
});
