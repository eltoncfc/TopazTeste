export function loginUser(email: string, password: string) {
  if (email === "admin@test.com" && password === "123") {
    return { success: true };
  }

  return { success: false, error: "Credenciais inválidas" };
}
