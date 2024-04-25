import React from "react";

const Socials = () => {
  return (
    <>
      <section className="social flex justify-between py-10">
        <div className="flex gap-5 relative">
          <p className="flex flex-col">
          <span> GET AHEAD OF THE STYLE CURVE</span>  
          <span>SUBSCRIBE TO THE FASHION NEWSLETTER</span> 
          </p>
          <input
            placeholder="YOUR EMAIL ADDRESS"
            type="text"
            aria-label="YOUR EMAIL ADDRESS"
            data-cs-mask="true"
            class="MuiInputBase-input"
            value=""
          />
          <button className="join absolute">Join</button>
        </div>

        <ul className="flex gap-10 items-center justify-center text-[20px]">
          <li><i class="fa fa-facebook-official" aria-hidden="true"></i></li>
          <li><i class="fa fa-twitter" aria-hidden="true"></i></li>
          <li><i class="fa fa-instagram" aria-hidden="true"></i></li>
          <li><i class="fa fa-youtube-play" aria-hidden="true"></i></li>
          <li><i class="fa fa-whatsapp" aria-hidden="true"></i></li>
        </ul>
      </section>
    </>
  );
};

export default Socials;
