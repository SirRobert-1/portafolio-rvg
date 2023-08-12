import React from "react";
import Footer from "@/components/layout/Footer";
import Nabvar from "@/components/layout/Nabvar";

function Layout({ children }) {
  return (
    <div>
      <Nabvar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
