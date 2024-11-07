import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { store } from "./store/store.jsx";
import { Provider } from "react-redux";
import MovieContextProvider from "./context/context.jsx";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <MovieContextProvider>
      <App />
      </MovieContextProvider>
    </BrowserRouter>
  </Provider>
);
