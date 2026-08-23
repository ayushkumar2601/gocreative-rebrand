"use client";

import React from "react";
import Masonry from "./Masonry";

export default function MasonrySection() {
  const items = [
    {
      id: "1",
      img: "https://images.unsplash.com/photo-1616423640778-28d1b53229bd?q=80&w=1200&h=1600&auto=format&fit=crop", // Portrait (3:4)
      url: "#",
    },
    {
      id: "2",
      img: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=1600&h=900&auto=format&fit=crop", // Landscape (16:9)
      url: "#",
    },
    {
      id: "3",
      img: "https://images.unsplash.com/photo-1551218808-94e220e084d2?q=80&w=1200&h=1200&auto=format&fit=crop", // Square (1:1)
      url: "#",
    },
    {
      id: "4",
      img: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800&h=1200&auto=format&fit=crop", // Portrait (2:3)
      url: "#",
    },
    {
      id: "5",
      img: "https://images.unsplash.com/photo-1542744094-24638ea89614?q=80&w=1200&h=675&auto=format&fit=crop", // Landscape (16:9)
      url: "#",
    },
    {
      id: "6",
      img: "https://images.unsplash.com/photo-1531297172867-4f54ed9d1461?q=80&w=1600&h=1200&auto=format&fit=crop", // Landscape (4:3)
      url: "#",
    },
    {
      id: "7",
      img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800&h=1600&auto=format&fit=crop", // Tall Portrait (1:2)
      url: "#",
    },
    {
      id: "8",
      img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&h=1200&auto=format&fit=crop", // Square (1:1)
      url: "#",
    },
    {
      id: "9",
      img: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600&h=900&auto=format&fit=crop", // Landscape (16:9)
      url: "#",
    }
  ];

  return (
    <section className="w-full py-16 bg-white overflow-hidden relative">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-8 lg:px-12 mb-8 text-center">
        <h2 className="text-[#0A1F44] font-black text-3xl sm:text-4xl lg:text-5xl uppercase mb-4 tracking-[-0.03em]">
          Creative <span className="gocreative-gradient-text">Gallery</span>
        </h2>
        <p className="text-[#374151] text-lg font-medium max-w-2xl mx-auto">
          Explore a selection of our finest creative assets, optimized for growth and conversion.
        </p>
      </div>
      
      {/* Container for Masonry (Height is now set dynamically by the component) */}
      <div style={{ width: '100%', paddingBottom: '40px' }}>
        <Masonry
          items={items}
          ease="power3.out"
          duration={0.6}
          stagger={0.05}
          animateFrom="bottom"
          scaleOnHover={true}
          hoverScale={0.95}
          blurToFocus={true}
          colorShiftOnHover={false}
        />
      </div>
    </section>
  );
}
