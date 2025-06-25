export const formatCPF = (value: string): string => {
  const numeric = value.replace(/\D/g, "").slice(0, 11);
  return numeric
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d{1,2})$/, "$1-$2");
};
