import React from "react";
import "./list-item-styles.css";
import { PaginationContainer } from "../pagination/pagination-container";
import { DescriptionContainer } from "../description/description-container";

export const ListItemRenderer = ({ store }) => {
  const { filterArr, handleViewDetails, temp } = store;

  return (
    <>
      <h1>Company Details</h1>
      <div className="main_container">
        <div>
          {filterArr.length === 0 ? (
            <div>No Data Found</div>
          ) : (
            filterArr.map((item) => (
              <div key={item.id}>
                <div className="item_container">
                  <div className="company_name">{item.company.name}</div>
                  <div className="contact">
                    <p className="headers">Contact</p>
                    {item.name}
                  </div>
                  <div className="city">
                    <p className="headers">City</p>
                    {item.address.city}
                  </div>
                  <div className="street">
                    <p className="headers">Street</p>
                    {item.address.street}
                  </div>
                  <div className="button_container">
                    <button
                      className="button"
                      onClick={() => handleViewDetails(item.id)}
                    >
                      {temp.includes(item.id) ? "Hide Details" : "View Details"}
                    </button>
                  </div>
                  {temp.includes(item.id) ? (
                    <DescriptionContainer item={item} />
                  ) : null}
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      <PaginationContainer store={store} />
    </>
  );
};
