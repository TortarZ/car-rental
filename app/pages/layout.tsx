import React from "react";
import Header from "../components/Header";

function Pages({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header header="bg-header" navbar="navbar-container" />
      {children}
    </>
  );
}

export default Pages;
