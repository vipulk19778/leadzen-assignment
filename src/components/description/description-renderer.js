import React from "react";
import "./description-styles.css";

export const DescriptionRenderer = ({ item }) => {
  return (
    <>
      <div className="main_description_container">
        <div className="header">
          <h2>Description</h2>
          <div>{item.company.catchPhrase}</div>
        </div>
        <div key={item.id} className="description_container">
          <div className="left_description">
            <div className="contact">
              <span className="title">Contact Person</span>
              <br />
              {item.name}
            </div>
            <div className="website">
              <span className="title">Website</span>
              <br />
              {item.website}
            </div>
            <div className="email">
              <span className="title">Email</span>
              <br />
              {item.email}
            </div>
            <div className="phone">
              <span className="title">Phone</span>
              <br />
              {item.phone}
            </div>
          </div>

          <div className="right_description">
            <div className="city">
              <span className="title">City</span>
              <br />
              {item.address.city}
            </div>
            <div className="street">
              <span className="title">Street</span>
              <br />
              {item.address.street}
            </div>
            <div className="suite">
              <span className="title">Suite</span>
              <br />
              {item.address.suite}
            </div>
            <div className="zip_code">
              <span className="title">Zip Code</span>
              <br />
              {item.address.zipcode}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
