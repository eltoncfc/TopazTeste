import AsyncStorage from "@react-native-async-storage/async-storage";
import { NavigationProp } from "@react-navigation/native";
import { CommonActions } from "@react-navigation/native";

export const saveAuthData = async (token: string, user: object) => {
  try {
    await AsyncStorage.setItem("token", token);
    await AsyncStorage.setItem("user", JSON.stringify(user));
  } catch (err) {
    console.warn("Erro ao salvar dados no AsyncStorage:", err);
  }
};

export const getToken = async () => {
  try {
    return await AsyncStorage.getItem("token");
  } catch {
    return null;
  }
};

export const getUser = async () => {
  try {
    const user = await AsyncStorage.getItem("user");
    return user ? JSON.parse(user) : null;
  } catch {
    return null;
  }
};

export const clearAuthData = async () => {
  try {
    await AsyncStorage.removeItem("token");
    await AsyncStorage.removeItem("user");
  } catch (err) {
    console.warn("Erro ao limpar dados do AsyncStorage:", err);
  }
};

export const logout = async (
  navigation: NavigationProp<Record<string, object | undefined>>
) => {
  try {
    await clearAuthData();
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: "Login" }],
      })
    );
  } catch (err) {
    console.warn("Erro no logout:", err);
  }
};
