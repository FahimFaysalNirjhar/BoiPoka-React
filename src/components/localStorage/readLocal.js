import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";

const readgetLocal = () => {
  const storedId = localStorage.getItem("readList");
  if (storedId) {
    return JSON.parse(storedId);
  }
  return [];
};

const addreadLocal = (id) => {
  const storedId = readgetLocal();
  if (storedId.includes(id)) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "You’ve already added this book to your reading list!",
    });
  } else {
    storedId.push(id);

    localStorage.setItem("readList", JSON.stringify(storedId));

    toast.success("Book added to your reading list!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }
};

const removeReadLocal = (id) => {
  const storedId = readgetLocal();
  const remainingId = storedId.filter((storedId) => storedId !== id);
  localStorage.setItem("readList", JSON.stringify(remainingId));
};

export { addreadLocal, readgetLocal, removeReadLocal };
