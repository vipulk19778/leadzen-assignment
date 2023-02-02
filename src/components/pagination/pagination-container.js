import React from "react";
import { PaginationRenderer } from "./pagination-renderer";

export const PaginationContainer = ({ store }) => {
  const { currentPage, setCurrentPage, pageArray, pages } = store;

  const handleLeft = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleRight = () => {
    if (currentPage < pages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleClick = (value) => {
    if (value !== currentPage) {
      setCurrentPage(value);
    }
  };

  const value = {
    pageArray,
    handleRight,
    handleLeft,
    handleClick,
    currentPage,
  };

  return <PaginationRenderer value={value} />;
};
