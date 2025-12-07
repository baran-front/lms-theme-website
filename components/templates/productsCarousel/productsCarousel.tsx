"use client";

import { useEffect } from "react";
import { ArrowLeftIcon } from "lucide-react"
import Slider from "react-slick"

function ProductsCarousel() {
  useEffect(() => {
    const all = document.querySelectorAll(".glow");

    const handleMouseMove = (ev: MouseEvent) => {
      all?.forEach((itemEv) => {
        const blob = itemEv.querySelector(".glow-blob") as HTMLElement;
        const fakeBlob = itemEv.querySelector(".glow-fake-blob") as HTMLElement;
        const rec = fakeBlob?.getBoundingClientRect();
        if (blob) {
          blob.style.opacity = "1";
          blob.animate(
            [
              {
                transform: `translate(${ev.clientX - (rec?.left || 0) - (rec?.width || 0) / 2
                  }px,${ev.clientY - (rec?.top || 0) - (rec?.height || 0) / 2
                  }px)`,
              },
            ],
            {
              duration: 300,
              fill: "forwards",
            }
          );
        }
      });
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <Slider
      dots
      infinite
      speed={500}
      slidesToShow={4}
      slidesToScroll={4}
      className="mt-5"
    >
      {Array.from({ length: 12 }).map((_, index) => (
        <div className="px-1.5" key={index}>
          <div className="glow free-card gradient-cart relative overflow-hidden cursor-pointer group">
            {/* Fake blob for positioning calculations */}
            <div className="glow-fake-blob absolute inset-0 size-full"></div>

            {/* Actual blob glow effect */}
            <div className="glow-blob absolute size-full glow-blob-bg-gradient-radial rounded-full opacity-0 pointer-events-none blur-xl transition-opacity duration-300 group-hover:opacity-20"></div>

            {/* Card content */}
            <div className="relative z-10 size-[calc(100%-4px)] m-[2px] rounded-2xl bg-background/95 py-3">
              <div className="infinite-scroll-container">
                <div className="f-align gap-3 text-lg">
                  {Array.from({ length: 10 }).map((_, tagIndex) => (
                    <div key={`first-${tagIndex}`} className="f-align gap-3 shrink-0">
                      <p className="f-align gap-1">
                        <span className="block size-2 rounded-xs bg-primary"></span>
                        <span>CSS</span>
                      </p>
                      <span className="size-1 min-w-1 rounded-full bg-foreground-mute"></span>
                      <p className="f-align gap-1.5">
                        <span className="block size-2 rounded-xs bg-primary"></span>
                        <span className="font-stroke">CSS</span>
                      </p>
                      <span className="size-1 min-w-1 rounded-full bg-foreground-mute"></span>
                    </div>
                  ))}
                  {Array.from({ length: 10 }).map((_, tagIndex) => (
                    <div key={`second-${tagIndex}`} className="f-align gap-3 shrink-0">
                      <p className="f-align gap-1">
                        <span className="block size-2 rounded-xs bg-primary"></span>
                        <span>CSS</span>
                      </p>
                      <span className="size-1 min-w-1 rounded-full bg-foreground-mute"></span>
                      <p className="f-align gap-1.5">
                        <span className="block size-2 rounded-xs bg-primary"></span>
                        <span className="font-stroke">CSS</span>
                      </p>
                      <span className="size-1 min-w-1 rounded-full bg-foreground-mute"></span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-3">
                <div className="size-24 rounded-2xl bg-background-thick mx-auto"></div>
              </div>

              <div className="infinite-scroll-container-reverse">
                <div className="f-align gap-3 text-lg">
                  {Array.from({ length: 10 }).map((_, tagIndex) => (
                    <div key={`first-${tagIndex}`} className="f-align gap-3 shrink-0">
                      <p className="f-align gap-1">
                        <span className="block size-2 rounded-xs bg-primary"></span>
                        <span>CSS</span>
                      </p>
                      <span className="size-1 min-w-1 rounded-full bg-foreground-mute"></span>
                      <p className="f-align gap-1.5">
                        <span className="block size-2 rounded-xs bg-primary"></span>
                        <span className="font-stroke">CSS</span>
                      </p>
                      <span className="size-1 min-w-1 rounded-full bg-foreground-mute"></span>
                    </div>
                  ))}
                  {Array.from({ length: 10 }).map((_, tagIndex) => (
                    <div key={`second-${tagIndex}`} className="f-align gap-3 shrink-0">
                      <p className="f-align gap-1">
                        <span className="block size-2 rounded-xs bg-primary"></span>
                        <span>CSS</span>
                      </p>
                      <span className="size-1 min-w-1 rounded-full bg-foreground-mute"></span>
                      <p className="f-align gap-1.5">
                        <span className="block size-2 rounded-xs bg-primary"></span>
                        <span className="font-stroke">CSS</span>
                      </p>
                      <span className="size-1 min-w-1 rounded-full bg-foreground-mute"></span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-6" dir="rtl">
                <div className="border-t-2 border-dashed space-y-1.5 border-foreground-mute pt-6">
                  <p className="font-modam-medium">دوره آموزشی css 3</p>
                  <div className="f-between">
                    <div>
                      <div className="f-align gap-3">
                        <p className="text-primary">{(1_500_000).toLocaleString("fa")} ت</p>
                        <span className="bg-danger p-0.5 text-xs rounded-sm">55%</span>
                      </div>
                      <p className="text-xs text-foreground-mute">
                        {(1_900_000).toLocaleString("fa")} ت
                      </p>
                    </div>
                    <button className="btn btn-sm btn-outline">
                      <ArrowLeftIcon />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  )
}

export default ProductsCarousel