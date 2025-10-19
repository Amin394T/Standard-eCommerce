import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter } from 'react-router-dom';
import { CartProvider } from "./utilities/contexts/CartContext.tsx";

import "./global.css";
import App from "./components/App.tsx";


const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
    <BrowserRouter>
    <CartProvider>
    
      <App />

    </CartProvider>
    </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>
);