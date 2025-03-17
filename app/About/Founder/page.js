import React from "react";

const page = () => {
  return (
    <div className="flex items-center px-[7%] space-x-6 container">
      <div className="w-[40%]">
        <img
          src="/images/founder.jpg"
          className="rounded-full w-[400px] "
        ></img>
      </div>

      <div className="w-[60%]">
        <blockquote class=" italic font-semibold ">
          <svg
            class="w-8 h-8 text-gray-400 dark:text-gray-600 mb-4"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 18 14"
          >
            <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
          </svg>
          <h1 className="">
            " Our journey began with a simple yet powerful vision: to provide
            reliable, high-quality service and products that enhance your daily
            life. Whether it's servicing your devices or offering top-tier
            products, we are committed to excellence, innovation, and customer
            satisfaction.
            <br></br>
            <br></br>
            We understand how essential your gadgets and appliances are, and
            that’s why our expert team ensures swift, trustworthy repairs while
            maintaining the highest standards of quality. In addition, our
            carefully curated range of products is designed to meet your needs
            with durability and performance.<br></br>
            <br></br>
            As we grow, our focus remains on you—our valued customers. Your
            trust drives us to improve every day, and we promise to continue
            delivering exceptional service and products that exceed
            expectations.<br></br>
            Thank you for being a part of our journey. We look forward to
            serving you! "
          </h1>
          <br></br>
          <br></br>
        </blockquote>

        <h1 className="font-bold text-2xl ">Zillur Rahman Sohel</h1>
        <p>Founder, Astro</p>
      </div>
    </div>
  );
};

export default page;
