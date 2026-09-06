"use client";

import React, { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { gsap } from 'gsap';

import './Masonry.css';

const useMedia = (queries: string[], values: number[], defaultValue: number): number => {
  const get = () => {
    if (typeof window === 'undefined') return defaultValue;
    return values[queries.findIndex(q => matchMedia(q).matches)] ?? defaultValue;
  };

  const [value, setValue] = useState<number>(get);

  useEffect(() => {
    const handler = () => setValue(get);
    queries.forEach(q => matchMedia(q).addEventListener('change', handler));
    return () => queries.forEach(q => matchMedia(q).removeEventListener('change', handler));
  }, [queries]);

  return value;
};

const useMeasure = <T extends HTMLElement>() => {
  const ref = useRef<T | null>(null);
  const [size, setSize] = useState({ width: 0, height: 0 });

  useLayoutEffect(() => {
    if (!ref.current) return;
    const ro = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect;
      setSize({ width, height });
    });
    ro.observe(ref.current);
    return () => ro.disconnect();
  }, []);

  return [ref, size] as const;
};

const preloadImages = async (urls: string[]): Promise<Record<string, { width: number; height: number }>> => {
  const result: Record<string, { width: number; height: number }> = {};
  await Promise.all(
    urls.map(
      src =>
        new Promise<void>(resolve => {
          const img = new Image();
          const safeSrc = encodeURI(src);
          img.src = safeSrc;
          img.onload = () => {
            result[src] = { width: img.naturalWidth || 600, height: img.naturalHeight || 600 };
            resolve();
          };
          img.onerror = () => {
            result[src] = { width: 600, height: 600 };
            resolve();
          };
        })
    )
  );
  return result;
};

export interface MasonryItem {
  id: string;
  img: string;
  url?: string;
  title?: string;
  category?: string;
  height?: number;
  isTall?: boolean;
}

interface GridItem extends MasonryItem {
  x: number;
  y: number;
  w: number;
  h: number;
}

interface MasonryProps {
  items: MasonryItem[];
  ease?: string;
  duration?: number;
  stagger?: number;
  animateFrom?: 'bottom' | 'top' | 'left' | 'right' | 'center' | 'random';
  scaleOnHover?: boolean;
  hoverScale?: number;
  blurToFocus?: boolean;
  colorShiftOnHover?: boolean;
  onItemClick?: (item: MasonryItem) => void;
}

const Masonry: React.FC<MasonryProps> = ({
  items,
  ease = 'power3.out',
  duration = 1.2,
  stagger = 0.05,
  animateFrom = 'bottom',
  scaleOnHover = true,
  hoverScale = 0.96,
  blurToFocus = true,
  colorShiftOnHover = false,
  onItemClick,
}) => {
  const columns = useMedia(
    ['(min-width:1400px)', '(min-width:1024px)', '(min-width:640px)'],
    [4, 3, 2],
    1
  );

  const [containerRef, { width }] = useMeasure<HTMLDivElement>();
  const [imagesReady, setImagesReady] = useState(false);
  const [imageSizes, setImageSizes] = useState<Record<string, { width: number; height: number }>>({});

  const getInitialPosition = (item: GridItem) => {
    const containerRect = containerRef.current?.getBoundingClientRect();
    if (!containerRect) return { x: item.x, y: item.y };

    let direction = animateFrom;

    if (animateFrom === 'random') {
      const directions = ['top', 'bottom', 'left', 'right'];
      direction = directions[Math.floor(Math.random() * directions.length)] as typeof animateFrom;
    }

    switch (direction) {
      case 'top':
        return { x: item.x, y: -200 };
      case 'bottom':
        return { x: item.x, y: window.innerHeight + 200 };
      case 'left':
        return { x: -200, y: item.y };
      case 'right':
        return { x: window.innerWidth + 200, y: item.y };
      case 'center':
        return {
          x: containerRect.width / 2 - item.w / 2,
          y: containerRect.height / 2 - item.h / 2
        };
      default:
        return { x: item.x, y: item.y + 100 };
    }
  };

  useEffect(() => {
    preloadImages(items.map(i => i.img)).then(sizes => {
      setImageSizes(sizes);
      setImagesReady(true);
    });
  }, [items]);

  const [maxHeight, setMaxHeight] = useState(0);

  const grid = useMemo<GridItem[]>(() => {
    if (!width) return [];

    const colHeights = new Array(columns).fill(0);
    const columnWidth = width / columns;

    // Sort items so that tallest/longest images (highest aspect ratio) are placed FIRST at top of columns (y = 0)
    const sortedItems = [...items].sort((a, b) => {
      const sizeA = imageSizes[a.img];
      const sizeB = imageSizes[b.img];
      const ratioA = sizeA && sizeA.width > 0 ? sizeA.height / sizeA.width : (a.isTall ? 2.5 : 1.0);
      const ratioB = sizeB && sizeB.width > 0 ? sizeB.height / sizeB.width : (b.isTall ? 2.5 : 1.0);
      return ratioB - ratioA; // Descending order: tallest images first
    });

    const itemsGrid = sortedItems.map(child => {
      const col = colHeights.indexOf(Math.min(...colHeights));
      const x = columnWidth * col;
      
      const size = imageSizes[child.img];
      let itemHeight = columnWidth; // fallback
      
      if (size && size.width > 0) {
        itemHeight = (size.height / size.width) * columnWidth;
      } else if (child.height) {
        itemHeight = child.height;
      }
        
      const y = colHeights[col];
      colHeights[col] += itemHeight;

      return { ...child, x, y, w: columnWidth, h: itemHeight };
    });

    setMaxHeight(Math.max(...colHeights));
    return itemsGrid;
  }, [columns, items, width, imageSizes]);

  const hasMounted = useRef(false);

  useLayoutEffect(() => {
    if (!imagesReady || grid.length === 0) return;

    grid.forEach((item, index) => {
      const selector = `[data-key="${item.id}"]`;
      const animationProps = {
        x: item.x,
        y: item.y,
        width: item.w,
        height: item.h
      };

      if (!hasMounted.current) {
        const initialPos = getInitialPosition(item);
        const initialState = {
          opacity: 0,
          x: initialPos.x,
          y: initialPos.y,
          width: item.w,
          height: item.h,
          ...(blurToFocus && { filter: 'blur(10px)' })
        };

        gsap.fromTo(selector, initialState, {
          opacity: 1,
          ...animationProps,
          ...(blurToFocus && { filter: 'blur(0px)' }),
          duration: duration,
          ease: ease,
          delay: index * stagger
        });
      } else {
        // Ultra-smooth GSAP puzzle transition
        gsap.to(selector, {
          ...animationProps,
          duration: duration,
          ease: ease,
          overwrite: 'auto'
        });
      }
    });

    hasMounted.current = true;
  }, [grid, imagesReady, stagger, animateFrom, blurToFocus, duration, ease]);

  const handleMouseEnter = (e: React.MouseEvent, item: GridItem) => {
    const selector = `[data-key="${item.id}"]`;

    if (scaleOnHover) {
      gsap.to(selector, {
        scale: hoverScale,
        duration: 0.4,
        ease: 'power2.out'
      });
    }

    if (colorShiftOnHover) {
      const element = e.currentTarget as HTMLElement;
      const overlay = element.querySelector('.color-overlay') as HTMLElement;
      if (overlay) {
        gsap.to(overlay, {
          opacity: 0.3,
          duration: 0.3
        });
      }
    }
  };

  const handleMouseLeave = (e: React.MouseEvent, item: GridItem) => {
    const selector = `[data-key="${item.id}"]`;

    if (scaleOnHover) {
      gsap.to(selector, {
        scale: 1,
        duration: 0.4,
        ease: 'power2.out'
      });
    }

    if (colorShiftOnHover) {
      const element = e.currentTarget as HTMLElement;
      const overlay = element.querySelector('.color-overlay') as HTMLElement;
      if (overlay) {
        gsap.to(overlay, {
          opacity: 0,
          duration: 0.3
        });
      }
    }
  };

  return (
    <div ref={containerRef} className="list transition-all duration-500" style={{ height: maxHeight || '600px' }}>
      {grid.map(item => {
        const safeImgSrc = encodeURI(item.img);

        return (
          <div
            key={item.id}
            data-key={item.id}
            className="item-wrapper"
            onClick={() => {
              if (onItemClick) {
                onItemClick(item);
              } else if (item.url) {
                window.open(item.url, '_blank', 'noopener');
              }
            }}
            onMouseEnter={e => handleMouseEnter(e, item)}
            onMouseLeave={e => handleMouseLeave(e, item)}
          >
            <div className="item-img group relative overflow-hidden rounded-xl border border-white/10 shadow-xl transition-all duration-300 w-full h-full bg-[#0A1F44]">
              <img
                src={safeImgSrc}
                alt="Creative asset"
                className="w-full h-full object-cover rounded-xl transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />

              {colorShiftOnHover && (
                <div
                  className="color-overlay"
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(45deg, rgba(255,0,150,0.5), rgba(0,150,255,0.5))',
                    opacity: 0,
                    pointerEvents: 'none',
                    borderRadius: '10px'
                  }}
                />
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Masonry;
