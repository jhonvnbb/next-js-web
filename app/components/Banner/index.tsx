import React from "react";
import Link from "next/link";

const BannerSection = () => {
  return (
    <section className="bg-gray-800">
      <div className="container mx-auto flex items-center justify-around h-[100vh] bg-[#333]">
        <div>
          <h1>Dare to Dream Strive for Greatness</h1>
          <Link href="">Get Started</Link>
        </div>
        <div>
            <img src="/himakom.png" alt="logo-himakom" />
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
