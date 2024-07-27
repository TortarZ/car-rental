import React from "react";
import Header from "../components/Header";
import BookBanner from "../components/BookBanner";

function Pages({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header header="bg-header" navbar="navbar-container" />
      {children}
      <BookBanner />
    </>
  );
}

export default Pages;
