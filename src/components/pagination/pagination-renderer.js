import React from "react";
import "./pagination-styles.css";
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";

export const PaginationRenderer = ({ value }) => {
  const { pageArray, handleRight, handleLeft, handleClick, currentPage } =
    value;

  return (
    <>
      <div className="pagination_container">
        <ul className="pagination">
          <li className="left_arrow">
            <a href="/#" className="page-link" onClick={handleLeft}>
              <FaAngleLeft />
            </a>
          </li>
          {pageArray.map((value, index) => {
            return (
              <li key={index} className="page_number">
                <a
                  href="/#"
                  className={value === currentPage ? "active" : ""}
                  onClick={() => handleClick(value)}
                >
                  {value}
                </a>
              </li>
            );
          })}
          <li className="right_arrow">
            <a href="/#" className="page-link" onClick={handleRight}>
              <FaAngleRight />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};
