import { Button } from "@/components/ui/button";
import React from "react";

export default function Frame() {
  // Navigation menu items
  const navItems = [
    { text: "Home", href: "#" },
    { text: "About Us", href: "#" },
    { text: "Contact", href: "#" },
    { text: "Service", href: "#" },
  ];

  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white w-full h-[1440px] relative">
        {/* Background with car image */}
        <div className="relative h-[1440px] bg-[url(/koenigsegg-jesko-red-cherry-edition-1.png)] bg-cover bg-[50%_50%]">
          {/* JESKO text overlay with effects */}
          <div className="absolute w-[2212px] h-[624px] top-[244px] left-[817px]">
            <div className="relative w-[2208px] h-[624px] -top-5 left-[-15px]">
              <div className="absolute w-[2208px] h-[527px] top-[54px] left-0 [-webkit-text-stroke:30px_#ff0000bf] [font-family:'Neographik_MT_Std-Regular',Helvetica] font-normal text-transparent text-[500px] text-center tracking-[25.00px] leading-[normal] whitespace-nowrap">
                JESKO
              </div>

              <div className="absolute w-[1663px] h-[624px] top-0 left-[268px] [text-shadow:0px_0px_25px_#ff0000] [-webkit-text-stroke:20px_#dd0101] [font-family:'Neographik_MT_Std-Regular',Helvetica] font-normal text-transparent text-[500px] text-center tracking-[25.00px] leading-[625px] whitespace-nowrap">
                JESKO
              </div>
            </div>
          </div>

          {/* Main car image overlay */}
          <img
            className="absolute w-full h-[1440px] top-0 left-0 object-cover"
            alt="Koenigsegg Jesko Red Cherry Edition"
            src="/koenigsegg-jesko-red-cherry-edition-2.png"
          />

          {/* Learn More button */}
          <div className="absolute top-[1233px] left-[108px]">
            <Button className="w-[451px] h-[110px] bg-[#d80000] rounded-[30px] hover:bg-[#b80000] transition-colors">
              <span className="[font-family:'Sonsie_One-Regular',Helvetica] font-normal text-white text-[50px]">
                Learn More
              </span>
            </Button>
          </div>

          {/* Navigation bar */}
          <nav className="absolute w-[2908px] h-14 top-[42px] left-[92px] flex justify-between items-center">
            {/* Brand logo/text */}
            <div className="w-[299px] [font-family:'Neographik_MT_Std-Regular',Helvetica] text-[45px] font-normal text-white tracking-[0] leading-[normal]">
              Koenigsegg
            </div>

            {/* Navigation menu */}
            <div className="flex gap-8">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="[font-family:'Sonsie_One-Regular',Helvetica] font-normal text-white text-3xl text-center tracking-[0] leading-[normal] hover:text-gray-200 transition-colors"
                >
                  {item.text}
                </a>
              ))}
            </div>
          </nav>

          {/* Tagline */}
          <div className="absolute w-[1003px] h-[419px] top-[484px] left-[122px] [font-family:'Sonsie_One-Regular',Helvetica] font-normal text-white text-[65px] text-center tracking-[0] leading-[normal]">
            A Swedish Rocket with a V8 Soul.
          </div>
        </div>
      </div>
    </div>
  );
}
