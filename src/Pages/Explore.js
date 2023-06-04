import React from "react";
import Slider from "../Components/Slider";
import { Link } from "react-router-dom";
import RentCategoryImage from "../assets/jpg/rentCategoryImage.jpg";
import SellCategoryImage from "../assets/jpg/sellCategoryImage.jpg";

function Explore() {
  return (
    <div className="explore">
      <header>
        <p className="pageHeader">House-Marketplace</p>
        <main>
          {/*           <Slider />
           */}{" "}
          <p className="exploreCategoryHeading">Categories</p>
          <div className="exploreCategories">
            <Link to="/category/rent">
              <img
                src={RentCategoryImage}
                alt="Apartment"
                className="exploreCategoryImg"
              />
              <p className="exploreCategoryName">Places For Rent</p>
            </Link>
            <Link to="/category/sell">
              <img
                src={SellCategoryImage}
                alt="House"
                className="exploreCategoryImg"
              />
              <p className="exploreCategoryName">Places For Sale</p>
            </Link>
          </div>
        </main>
      </header>
    </div>
  );
}

export default Explore;
