import React from "react";
import { Link } from "react-router-dom";
const Breadcrumbs = ({ items }) => {
  return (
    <div className=" p-4 flex items-center flex-wrap">
      <ul className="flex items-center">
        {items &&
          items.map((item, index) => {
            const isLastItem = index === items.length - 1;
            return (
              <li className="inline-flex items-center" key={index}>
                <Link
                  to={item.href}
                  className={`z-50 hover:text-blue-500 ${
                    isLastItem ? "text-blue-500" : "text-black"
                  }`}
                >
                  {item.label}
                </Link>
                {!isLastItem && (
                  <svg
                    className="w-5 h-auto fill-current mx-2 text-blue-600"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M0 0h24v24H0V0z" fill="none" />
                    <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z" />
                  </svg>
                )}
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default Breadcrumbs;
