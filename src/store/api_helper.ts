
export const getToken = () => {
  try {
    const token: string | null = localStorage.getItem("token");
    return token;
  } catch (error) {
    return error;
  }
};

export const API_URL = `${import.meta.env.VITE_API_URL}`;
