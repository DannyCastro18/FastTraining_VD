const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const fetchUsuarios = async () => {
  const res = await fetch(`${API_URL}/usuarios`);
  return res.json();
};
