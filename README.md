# 📚 Book Vibe

Book Vibe is a modern React web application for book lovers.  
It allows users to browse books, view detailed book information, add books to their reading list or wishlist, and track their reading progress. Built with **React**, **React Router v6**, **Tailwind CSS**, and **DaisyUI** for styling, with **localStorage** persistence.

---

## 🌟 Features

- Browse books in a responsive grid layout
- View detailed book information:
  - Title, author, category, review, tags, publisher, year, rating
- Add books to:
  - **Reading List**
  - **Wishlist**
- Prevent duplicate entries with SweetAlert popups
- Notifications for user actions using Toastify
- Responsive design with Tailwind CSS and DaisyUI
- Dynamic routing using React Router v6.4+ loaders

---

## 🛠 Tech Stack

- **Frontend**: React 18, React Router v6, JSX
- **Styling**: Tailwind CSS, DaisyUI, Google Fonts (Work Sans & Playfair Display)
- **State & Storage**: localStorage for reading list and wishlist
- **Notifications & Alerts**: react-toastify, sweetalert2
- **Deployment**: Netlify / Vite

---

## 📂 Project Structure

book-vibe/
├─ public/
│ └─ book.ico
├─ src/
│ ├─ components/
│ │ ├─ Book/
│ │ ├─ Header/
│ │ └─ localStorage/
│ │ ├─ readLocal.js
│ │ └─ wishLocal.js
│ ├─ pages/
│ │ ├─ Root/
│ │ ├─ Home/
│ │ ├─ Listed_Books/
│ │ └─ BookDetails/
│ ├─ Router/
│ │ └─ Router.jsx
│ ├─ index.css
│ └─ main.jsx
├─ package.json
└─ tailwind.config.js

---

## 🚀 Routing

Uses **React Router v6.4+** with loaders to fetch book data from a GitHub JSON file.

| Path               | Component   |
| ------------------ | ----------- |
| `/`                | Home        |
| `/ListedBooks`     | ListedBooks |
| `/bookdetails/:id` | BookDetails |

---

## 💾 LocalStorage Helpers

- `readLocal.js` → manages reading list
- `wishLocal.js` → manages wishlist
- Both prevent duplicates and show alerts/toasts

---

## 🎨 Customization

- Colors, fonts, and buttons are easily customizable via Tailwind CSS.
- Change Google Fonts in `index.css`.
- Update DaisyUI themes in `tailwind.config.js`.

---

## 📚 Future Improvements

- User authentication
- Sync reading/wishlist to a backend
- Sorting and filtering books
- Dark mode toggle
- Pagination for large book lists

---

## 📜 License

This project is **open-source and free** for personal or educational use. Contributions are welcome.

---

## 👤 Author

**Fahim Faysal – Front-End Developer**

- GitHub: [https://github.com/FahimFaysalNirjhar](https://github.com/FahimFaysalNirjhar)
- Email: fahimfaysal1995@gmail.com
