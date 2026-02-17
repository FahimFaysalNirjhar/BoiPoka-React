import Swal from "sweetalert2";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const getWishLocal = () => {
  const storedId = localStorage.getItem("wishList");

  if (storedId) {
    return JSON.parse(storedId);
  }
  return [];
};

const addWishListLocal = (id) => {
  const storedId = getWishLocal();
  if (storedId.includes(id)) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "You’ve already added this book to your wish list!",
    });
  } else {
    storedId.push(id);

    localStorage.setItem("wishList", JSON.stringify(storedId));

    toast.success("Book added to your wishList list!", {
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

export { addWishListLocal, getWishLocal };
