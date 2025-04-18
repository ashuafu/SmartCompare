import Swal from "sweetalert2";

export const showAlert = (icon, title, message) => {
  Swal.fire({
    icon: icon, // 'success' | 'error' | 'warning' | 'info' | 'question'
    title: title,
    text: message,
  });
};

// Utils/Utils.js
export const setTokenWithExpiry = (token, days = 3) => {
  const now = new Date();
  const item = {
    token: token,
    expiry: now.getTime() + days * 24 * 60 * 60 * 1000, // expiry in ms
  };
  localStorage.setItem("authToken", JSON.stringify(item));
};

export const getToken = () => {
  const itemStr = localStorage.getItem("authToken");
  if (!itemStr) return null;

  const item = JSON.parse(itemStr);
  const now = new Date();

  if (now.getTime() > item.expiry) {
    localStorage.removeItem("authToken");
    return null;
  }
  return item.token;
};
