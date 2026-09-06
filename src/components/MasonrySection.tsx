"use client";

import React, { useState, useEffect, useCallback, useMemo, useRef } from "react";
import Masonry, { MasonryItem } from "./Masonry";
import initialManifestData from "@/data/galleryManifest.json";

interface FolderAsset {
  id: string;
  folderName: string;
  displayName: string;
  imageCount: number;
  images: string[];
}

export default function MasonrySection() {
  const [folders, setFolders] = useState<FolderAsset[]>(initialManifestData as FolderAsset[]);
  const [selectedImage, setSelectedImage] = useState<MasonryItem | null>(null);

  // Keep track of recently displayed image URLs to avoid immediate duplicates across shuffles
  const recentlyShownRef = useRef<Set<string>>(new Set());

  // Fetch updated manifest if available
  useEffect(() => {
    const loadManifest = async () => {
      try {
        const res = await fetch("/api/gallery-manifest");
        if (res.ok) {
          const data = await res.json();
          if (data && data.length > 0) {
            setFolders(data);
          }
        }
      } catch (err) {
        // Fallback to initial import
      }
    };
    loadManifest();
  }, []);

  // Build full pool of all downloaded REAL images (flagging tall/email images)
  const { allImagesPool, tallEmailImages } = useMemo(() => {
    const pool: MasonryItem[] = [];
    const tallPool: MasonryItem[] = [];

    folders.forEach((folder) => {
      folder.images.forEach((rawImgUrl, idx) => {
        // Ignore fallback placeholder banners
        if (rawImgUrl.includes("brand_showcase")) return;

        // Ensure clean path under /image_assets/
        const imgUrl = rawImgUrl
          .replace("/image assests/", "/image_assets/")
          .replace("/image-assests/", "/image_assets/");

        const lowerUrl = imgUrl.toLowerCase();
        const isTall = lowerUrl.includes("email") || lowerUrl.includes("long") || lowerUrl.includes("abandoned");

        const item: MasonryItem = {
          id: `asset-${idx}-${imgUrl}`,
          img: imgUrl,
          category: folder.displayName || "Creative Assets",
          url: imgUrl,
          isTall: isTall,
        };

        pool.push(item);
        if (isTall) {
          tallPool.push(item);
        }
      });
    });

    return { allImagesPool: pool, tallEmailImages: tallPool };
  }, [folders]);

  // Select 18-20 unique random images (NO DUPLICATES) with 4-min shuffle logic
  const getRandom18To20Items = useCallback(() => {
    if (allImagesPool.length === 0) return [];

    const selected: MasonryItem[] = [];
    const usedImgSet = new Set<string>(); // Strictly guarantees zero duplicates on screen

    // 1. Pick 1 or 2 tall/long email images (prioritizing ones not recently shown)
    if (tallEmailImages.length > 0) {
      const freshTall = tallEmailImages.filter((t) => !recentlyShownRef.current.has(t.img));
      const poolToUse = freshTall.length >= 2 ? freshTall : tallEmailImages;
      const shuffledTall = [...poolToUse].sort(() => Math.random() - 0.5);
      const pickCount = Math.min(2, shuffledTall.length);

      for (let i = 0; i < pickCount; i++) {
        const item = shuffledTall[i];
        if (!usedImgSet.has(item.img)) {
          selected.push({
            ...item,
            id: `masonry-tall-${i}-${item.id}`,
          });
          usedImgSet.add(item.img);
        }
      }
    }

    // 2. Fill remaining slots up to 20 from overall pool (STRICT NO DUPLICATES)
    const freshPool = allImagesPool.filter((item) => !recentlyShownRef.current.has(item.img) && !usedImgSet.has(item.img));
    const fallbackPool = allImagesPool.filter((item) => !usedImgSet.has(item.img));
    const candidatePool = freshPool.length >= 10 ? freshPool : fallbackPool;
    const shuffledPool = [...candidatePool].sort(() => Math.random() - 0.5);

    for (const item of shuffledPool) {
      if (selected.length >= 20) break;
      if (!usedImgSet.has(item.img)) {
        selected.push({
          ...item,
          id: `masonry-slot-${selected.length}-${item.id}`,
        });
        usedImgSet.add(item.img);
      }
    }

    // Update recently shown history
    usedImgSet.forEach((url) => recentlyShownRef.current.add(url));
    if (recentlyShownRef.current.size > 100) {
      recentlyShownRef.current.clear();
    }

    // Separate tall email items vs standard assets
    const tallItems = selected.filter((item) => item.isTall);
    const standardItems = selected.filter((item) => !item.isTall).sort(() => Math.random() - 0.5);

    // Arrange: Place tall email items FIRST so they occupy the top of columns
    const arranged: MasonryItem[] = [];

    if (tallItems.length > 0) {
      arranged.push(tallItems[0]); // Top left column anchor
    }
    if (standardItems.length > 0) {
      arranged.push(...standardItems.slice(0, 3));
    }
    if (tallItems.length > 1) {
      arranged.push(tallItems[1]); // Second tall asset at top
    }
    if (standardItems.length > 3) {
      arranged.push(...standardItems.slice(3));
    }

    return arranged.slice(0, 20);
  }, [allImagesPool, tallEmailImages]);

  const [masonryItems, setMasonryItems] = useState<MasonryItem[]>([]);

  useEffect(() => {
    if (allImagesPool.length > 0 && masonryItems.length === 0) {
      setMasonryItems(getRandom18To20Items());
    }
  }, [allImagesPool, getRandom18To20Items, masonryItems.length]);

  // Auto puzzle shuffle interval: 240,000ms = 4 minutes (240 seconds)
  useEffect(() => {
    if (allImagesPool.length === 0) return;

    const interval = setInterval(() => {
      setMasonryItems(getRandom18To20Items());
    }, 240000); // Rearranges smoothly every 4 minutes

    return () => clearInterval(interval);
  }, [allImagesPool, getRandom18To20Items]);

  return (
    <section id="gallery" className="w-full py-20 bg-[#060B18] text-white relative overflow-hidden border-t border-b border-white/10">
      {/* Background Glow Accents */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-gradient-to-r from-[#FF1493]/15 via-[#7B1FA2]/15 to-[#00B4FF]/15 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-[1360px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header: Centered OUR GALLERY Title */}
        <div className="text-center mb-14">
          <h2 className="font-black text-4xl sm:text-5xl lg:text-6xl text-white uppercase tracking-tight">
            OUR <span className="gocreative-gradient-text">GALLERY</span>
          </h2>
        </div>

        {/* Masonry Layout Grid */}
        {masonryItems.length === 0 ? (
          <div className="py-24 text-center text-white/60 font-medium text-lg">
            Loading Masonry Creative Assets...
          </div>
        ) : (
          <div className="w-full pb-8">
            <Masonry
              items={masonryItems}
              ease="power3.out"
              duration={1.2}
              stagger={0.05}
              animateFrom="bottom"
              scaleOnHover={true}
              hoverScale={0.96}
              blurToFocus={true}
              colorShiftOnHover={false}
              onItemClick={(item) => setSelectedImage(item)}
            />
          </div>
        )}
      </div>

      {/* Expanded Lightbox Modal (Clean View) */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8 animate-fadeIn"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors z-50"
            onClick={() => setSelectedImage(null)}
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div
            className="relative max-w-5xl max-h-[85vh] overflow-hidden rounded-2xl border border-white/20 shadow-2xl bg-black flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.img}
              alt="Expanded asset"
              className="w-full h-full object-contain max-h-[85vh] rounded-2xl"
            />
          </div>
        </div>
      )}
    </section>
  );
}
