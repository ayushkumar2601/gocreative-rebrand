"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

interface ShufflingGalleryCardProps {
  id: string;
  folderName: string;
  displayName: string;
  images: string[];
  staggerDelay?: number;
  intervalDuration?: number;
  onClickImage?: (imageSrc: string) => void;
}

export default function ShufflingGalleryCard({
  id,
  folderName,
  displayName,
  images,
  staggerDelay = 0,
  intervalDuration = 4000,
  onClickImage,
}: ShufflingGalleryCardProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState<number | null>(null);
  const [isFading, setIsFading] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Auto shuffle effect
  useEffect(() => {
    if (!images || images.length <= 1) return;

    // Start timer with stagger delay on initial mount
    const startTimer = () => {
      timeoutRef.current = setTimeout(() => {
        cycleImage();
      }, staggerDelay + intervalDuration);
    };

    const cycleImage = () => {
      if (isHovered) {
        // Pause shuffle if hovered, retry after short interval
        timeoutRef.current = setTimeout(cycleImage, 2000);
        return;
      }

      const upcoming = (currentIndex + 1) % images.length;
      setNextIndex(upcoming);
      setIsFading(true);

      setTimeout(() => {
        setCurrentIndex(upcoming);
        setNextIndex(null);
        setIsFading(false);
        timeoutRef.current = setTimeout(cycleImage, intervalDuration);
      }, 700); // 700ms crossfade match CSS
    };

    startTimer();

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [currentIndex, images, isHovered, intervalDuration, staggerDelay]);

  if (!images || images.length === 0) {
    return null;
  }

  const currentImg = images[currentIndex];
  const nextImg = nextIndex !== null ? images[nextIndex] : null;

  return (
    <div
      className="group relative w-full h-[320px] sm:h-[360px] rounded-2xl overflow-hidden bg-[#0A1F44]/40 border border-white/10 shadow-lg hover:shadow-2xl hover:border-[#FF1493]/50 transition-all duration-500 cursor-pointer flex flex-col justify-end"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onClickImage && onClickImage(currentImg)}
    >
      {/* Current Image */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src={currentImg}
          alt={`${displayName} asset ${currentIndex + 1}`}
          className={`w-full h-full object-cover transition-all duration-700 ${
            isFading ? "opacity-30 scale-105" : "opacity-100 scale-100"
          } group-hover:scale-110`}
          loading="lazy"
        />
      </div>

      {/* Crossfading Next Image */}
      {nextImg && (
        <div
          className={`absolute inset-0 w-full h-full transition-opacity duration-700 ${
            isFading ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={nextImg}
            alt={`${displayName} asset`}
            className="w-full h-full object-cover scale-105"
            loading="lazy"
          />
        </div>
      )}

      {/* Dark Gradient Overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300 pointer-events-none" />

      {/* Top Badge: Shuffle Indicator & Count */}
      <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none z-10">
        <span className="bg-black/60 backdrop-blur-md text-white/90 border border-white/20 text-[10px] sm:text-xs font-bold px-2.5 py-1 rounded-full flex items-center gap-1.5 shadow">
          <span className="w-1.5 h-1.5 rounded-full bg-[#00B4FF] animate-pulse" />
          <span>{images.length} {images.length === 1 ? 'image' : 'images'}</span>
        </span>

        <span className="bg-[#FF1493]/80 backdrop-blur-md text-white text-[10px] sm:text-xs font-extrabold px-2.5 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow">
          {currentIndex + 1} / {images.length}
        </span>
      </div>

      {/* Bottom Information */}
      <div className="relative z-10 p-5 transform group-hover:-translate-y-1 transition-transform duration-300">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-[10px] font-black uppercase tracking-widest text-[#00B4FF] bg-[#00B4FF]/10 border border-[#00B4FF]/30 px-2 py-0.5 rounded">
            BRAND ASSETS
          </span>
        </div>

        <h3 className="text-white font-extrabold text-lg sm:text-xl tracking-tight line-clamp-1 group-hover:text-[#FF1493] transition-colors">
          {displayName}
        </h3>

        <div className="flex items-center justify-between mt-2 pt-2 border-t border-white/10">
          <span className="text-white/70 text-xs font-medium truncate max-w-[200px]">
            {folderName}
          </span>
          <span className="text-[#00B4FF] text-xs font-bold flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
            View
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
}
