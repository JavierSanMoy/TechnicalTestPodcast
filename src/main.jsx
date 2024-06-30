import React from "react";
import ReactDOM from "react-dom/client";
import Routes from "./routes.jsx";
import { Provider } from "react-redux";
import store from "./store/store.js";
import { QueryClient, QueryClientProvider } from "react-query";
import "../src/styles/globalStyles.css";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <Routes />
    </QueryClientProvider>
  </Provider>
);
