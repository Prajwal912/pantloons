import React from "react";

const Icons = () => {
  return (
    <>
      <div className='block gap-20 justify-center items-center w-full lg:flex px-[100px] py-[30px] bg-[#d2fdff]' >
        <div className="flex items-center flex-col justify-center">
          <i class="fa fa-taxi mb-5 text-4xl" aria-hidden="true"></i>
          <p className="font-medium uppercase">EASY RETURNS</p>
        </div>
        <div className="flex items-center flex-col justify-center">
          <i class="fa fa-user-o mb-5 text-4xl" aria-hidden="true"></i>
          <p className="font-medium uppercase"><a href="tel:1234567891">1234-5678-91</a></p>
        </div>
        <div className="flex items-center flex-col justify-center">
          <i class="fa fa-truck mb-5 text-4xl" aria-hidden="true"></i>
          <p className="font-medium uppercase">Free Shipping</p>
        </div>
        <div className="flex items-center flex-col justify-center">
          <i class="fa fa-money mb-5 text-4xl" aria-hidden="true"></i>
          <p className="font-medium uppercase">CASH ON DELIVERY</p>
        </div>
        <div className="flex items-center flex-col justify-center">
          <i class="fa fa-id-card mb-5 text-4xl" aria-hidden="true"></i>
          <p className="font-medium uppercase">SECURE PAYMENT</p>
        </div>
      </div>
    </>
  );
};

export default Icons;
