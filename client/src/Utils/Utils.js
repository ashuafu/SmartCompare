import Swal from "sweetalert2";

const showAlert = (icon, title, message) => {
  Swal.fire({
    icon: icon, // 'success' | 'error' | 'warning' | 'info' | 'question'
    title: title,
    text: message,
  });
};

export default showAlert;
