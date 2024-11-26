'use client'

//import type { Metadata } from "next";
import "./globals.css";
import NavigationBar from "./shared/NavigationBar";
import { useState } from "react";
import CartProvider from "./utils/contexts/CartContext";
import Cart from "./shared/Cart";
import Categories from "./shared/Categories";

// export const metadata: Metadata = {
//   title: "Standard eCommerce",
//   description: "Generic eCommerce Platform",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const [cartShown, updateCartShown] = useState(false)
  const toggleCartShown = () => { updateCartShown(!cartShown) }

  return (
    <html lang="en">
      <body>
        <CartProvider>
          <NavigationBar {...{ toggleCartShown }} />
          <Categories />
          {children}
          { cartShown && <Cart /> }
        </CartProvider>
      </body>
    </html>
  );
}
