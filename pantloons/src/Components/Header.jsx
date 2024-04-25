import React from "react";

const Header = () => {
  return (
    <ul className="flex items-center pt-5 pb-5 navbar">
      <li>
        <a href="/">
          <img
            src="https://imagescdn.pantaloons.com/img/app/brands/pantaloons/icons/logo_pantaloons.svg"
            alt=""
            height={"100px"}
            width={"178px"}
          />
        </a>
      </li>
      <li className="flex items-center justify-between w-full">
        <li className="flex gap-[30px] items-center ps-8">
          <li>
            <a href="/" className="font-medium">
              Home
            </a>
          </li>
          <li>
            <a href="/" className="font-medium">
              Womens
            </a>
          </li>
          <li>
            <a href="/" className="font-medium">
              Mens
            </a>
          </li>
          <li>
            <a href="/" className="font-medium">
              Kids
            </a>
          </li>
          <li>
            <a href="/" className="font-medium">
              Beauty
            </a>
          </li>
          <li>
            <a href="/" className="font-medium">
              Brands
            </a>
          </li>
        </li>
        <li className="flex gap-[30px] items-center">
          <span className="head-span">
            <input
              type="text"
              className="head-inp"
              placeholder="search for products abd more..."
            />
            <i class="fa fa-search"></i>
          </span>
          <i class="fa fa-heart"></i>
          <i class="fa fa-user"></i>
          <i class="fa fa-shopping-bag"></i>
        </li>
      </li>
    </ul>
  );
};

export default Header;
