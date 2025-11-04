"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeftIcon, ChevronLeftIcon } from "lucide-react";
import Slider from "react-slick";

import ShadowDiv from "@/components/modules/shadowDiv/shadowDiv";

function Page() {
  return (
    <>
      <div className="wrapper f-col-center mt-20">
        <ShadowDiv>{"< برترین آموزشگاه آنلاین />"}</ShadowDiv>

        <div className="f-align text-5xl font-modam-medium gap-6 mt-10">
          <span className="h-1 w-20 rounded-full bg-linear-to-r from-foreground to-transparent to-90%" />
          <p>یادگیری آسان</p>
          <p className="font-modam-bold p-6 bg-primary/10 text-primary border border-primary relative">
            <span className="size-3 absolute bg-primary -top-1.5 -right-1.5"></span>
            <span className="size-3 absolute bg-primary -bottom-1.5 -right-1.5"></span>
            <span className="size-3 absolute bg-primary -top-1.5 -left-1.5"></span>
            <span className="size-3 absolute bg-primary -bottom-1.5 -left-1.5"></span>

            <span>برنامه نویسی</span>
          </p>
          <p>یک شوخی نیست !</p>
          <span className="h-1 w-20 rounded-full bg-linear-to-l from-foreground to-transparent to-90%" />
        </div>

        <p className="text-foreground-mute mt-5">
          ویرالرن استودیو بزرگ ترین و کامل ترین آموزشگاه برنامه نویسی می باشد که
          با بهترین اساتید شما را به جمع برترین ها اضافه میکنند
        </p>

        <div className="rounded-full p-1.5 bg-primary/5 mt-10">
          <div className="rounded-full p-1.5 bg-primary/10">
            <div className="rounded-full p-1.5 bg-primary/15">
              <Link className="btn btn-fill" href="/">
                <span>مسیرت رو شروع کن</span>
                <ArrowLeftIcon />
              </Link>
            </div>
          </div>
        </div>

        <Image
          width={1280}
          height={456}
          alt="ویرالرن"
          className="mt-10"
          src="/images/hero-section.png"
        />

        <div className="p-1.5 bg-background-thick rounded-full">
          <div
            style={{
              boxShadow:
                "inset 0 5px 20px 0 color-mix(in srgb, var(--color-foreground) 5%, transparent)",
            }}
            className="py-3 px-6 rounded-full grid grid-cols-4 gap-6"
          >
            <div className="f-center gap-3 border-l pl-6">
              <span className="heading" dir="ltr">
                5690+
              </span>
              <span className="text-xs translate-y-1">کارجوی موفق</span>
            </div>
            <div className="f-center gap-3 border-l pl-6">
              <span className="heading" dir="ltr">
                17+
              </span>
              <span className="text-xs translate-y-1">کارجوی موفق</span>
            </div>
            <div className="f-center gap-3 border-l pl-6">
              <span className="heading" dir="ltr">
                3200+
              </span>
              <span className="text-xs translate-y-1">کارجوی موفق</span>
            </div>
            <div className="f-center gap-3">
              <span className="heading" dir="ltr">
                235+
              </span>
              <span className="text-xs translate-y-1">کارجوی موفق</span>
            </div>
          </div>
        </div>
      </div>

      <div className="wrapper f-col-center gap-5 mt-40">
        <ShadowDiv>{"< مهارت های برنامه نویسی />"}</ShadowDiv>
        <p className="heading">هر مهارتی که دنبال هستین اینجاست!</p>
        <p>
          ویرالرن استودیو بزرگ ترین و کامل ترین آموزشگاه برنامه نویسی می باشد که
          با بهترین اساتید شما را به جمع برترین ها اضافه میکنند
        </p>
        <Slider
          dots
          infinite
          speed={500}
          slidesToShow={7}
          slidesToScroll={7}
          className="w-3/4"
        >
          {Array.from({ length: 21 }).map((_, index) => (
            <div className="px-1.5" key={index}>
              <div className="w-full aspect-square bg-background-thin rounded-lg f-center">
                {index + 1}
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
}
export default Page;
