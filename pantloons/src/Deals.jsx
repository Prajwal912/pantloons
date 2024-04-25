import React from "react";

const Deals = () => {
  return (
    <>
      <section className="deals h-full my-9">
        <div className="head flex items-center justify-between py-[40px] px-[100px]">
          <h2 className="text-[30px] italic font-medium">Deals of the Day</h2>
          <p className="deals-view uppercase  font-medium text-[16px]">view all</p>
        </div>

        <div className="deals-cards flex items-center justify-center py-5 gap-5">
         <div className="deals-card">
            <a href="#">
                <img src="https://imagescdn.pantaloons.com/img/app/product/8/870615-10356438.jpg?q=75&auto=format&w=250&h=400" alt="" />
                <div className="deals-text p-4">
                    <div className="flex items-center justify-between">
                        <span className="off">15% off</span>
                        <span>Bargain Buy</span>
                    </div>
                    <p className="name uppercase">Ajile</p>
                    <p className="details">Navy Check Men Regular Fit Boxer</p>
                    <small className="product-price">$20 <span className="line-through">$30</span></small>
                </div>
            </a>
         </div>
         <div className="deals-card">
            <a href="#">
                <img src="https://imagescdn.pantaloons.com/img/app/product/8/870615-10356438.jpg?q=75&auto=format&w=250&h=400" alt="" />
                <div className="deals-text p-4">
                    <div className="flex items-center justify-between">
                        <span className="off">15% off</span>
                        <span>Bargain Buy</span>
                    </div>
                    <p className="name uppercase">Ajile</p>
                    <p className="details">Navy Check Men Regular Fit Boxer</p>
                    <small className="product-price">$20 <span className="line-through">$30</span></small>
                </div>
            </a>
         </div>
         <div className="deals-card">
            <a href="#">
                <img src="https://imagescdn.pantaloons.com/img/app/product/8/870615-10356438.jpg?q=75&auto=format&w=250&h=400" alt="" />
                <div className="deals-text p-4">
                    <div className="flex items-center justify-between">
                        <span className="off">15% off</span>
                        <span>Bargain Buy</span>
                    </div>
                    <p className="name uppercase">Ajile</p>
                    <p className="details">Navy Check Men Regular Fit Boxer</p>
                    <small className="product-price">$20 <span className="line-through">$30</span></small>
                </div>
            </a>
         </div>
         <div className="deals-card">
            <a href="#">
                <img src="https://imagescdn.pantaloons.com/img/app/product/8/870615-10356438.jpg?q=75&auto=format&w=250&h=400" alt="" />
                <div className="deals-text p-4">
                    <div className="flex items-center justify-between">
                        <span className="off">15% off</span>
                        <span>Bargain Buy</span>
                    </div>
                    <p className="name uppercase">Ajile</p>
                    <p className="details">Navy Check Men Regular Fit Boxer</p>
                    <small className="product-price">$20 <span className="line-through">$30</span></small>
                </div>
            </a>
         </div>
         <div className="deals-card">
            <a href="#">
                <img src="https://imagescdn.pantaloons.com/img/app/product/8/870615-10356438.jpg?q=75&auto=format&w=250&h=400" alt="" />
                <div className="deals-text p-4">
                    <div className="flex items-center justify-between">
                        <span className="off">15% off</span>
                        <span>Bargain Buy</span>
                    </div>
                    <p className="name uppercase">Ajile</p>
                    <p className="details">Navy Check Men Regular Fit Boxer</p>
                    <small className="product-price">$20 <span className="line-through">$30</span></small>
                </div>
            </a>
         </div>
        </div>
      </section>
    </>
  );
};

export default Deals;
