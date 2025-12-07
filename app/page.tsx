"use client";

import Link from "next/link";
import Image from "next/image";
import { AnvilIcon, ArrowLeftIcon, CircleStarIcon, ClockIcon, TrendingUpIcon, UsersIcon } from "lucide-react";
import Slider from "react-slick";

import ShadowDiv from "@/components/modules/shadowDiv/shadowDiv";
import ProductsCarousel from "@/components/templates/productsCarousel/productsCarousel";

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
        <p className="text-foreground-mute">
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

      <div className="wrapper mt-40">
        <ShadowDiv>{"< لیست پکیج های آموزشی />"}</ShadowDiv>
        <div className="f-between gap-3 mt-5">
          <h3 className="heading">جذاب ترین پکیج های آموزشی</h3>

          <Link className="btn btn-outline" href={"/"}>
            <span>
              مشاهده همه
            </span>
            <ArrowLeftIcon />
          </Link>
        </div>
        <ProductsCarousel />
      </div>

      <div className="wrapper mt-40">
        <ShadowDiv>{"< لیست پکیج های آموزشی />"}</ShadowDiv>
        <div className="f-between gap-3 mt-5">
          <h3 className="heading">جذاب ترین پکیج های آموزشی</h3>
          <ShadowDiv color="danger">
            <span>12:56:25</span>
            <ClockIcon />
          </ShadowDiv>
          <Link className="btn btn-outline mr-auto" href={"/"}>
            <span>
              مشاهده همه
            </span>
            <ArrowLeftIcon />
          </Link>
        </div>
        <ProductsCarousel />
      </div>

      <div className="wrapper f-col-center gap-5 mt-40">
        <ShadowDiv>{"< خدمات و ویژگی ها />"}</ShadowDiv>
        <p className="heading">خدمات و سرویس هایی که نظیرش را نخواهید دید !</p>
        <p className="text-foreground-mute">
          استودیو ویرالرن افتخار این را دارد که بهترین و شگفت انگیز ترین سرویس هایی که کمک کننده مسیر شما هستند را ارائه میکند .
        </p>

        <div className="grid grid-cols-3 gap-6 mt-5">
          <div className="card space-y-4 row-span-2 ring-12 inset-shadow-sm inset-shadow-foreground/10 ring-background-thick">
            <div className="bg-linear-to-t from-transparent to-primary rounded-xl size-12.5 f-center">
              <div className="size-12 rounded-xl bg-background text-primary f-center">
                <UsersIcon />
              </div>
            </div>
            <p>هرجایی از دنیا باشی</p>
            <p className="heading">ویرالرن همیشه همراهته</p>
            <p className="text-foreground-mute">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان....
            </p>
          </div>
          <div className="card col-span-2 space-y-3">
            <div className="bg-linear-to-t from-transparent to-primary rounded-xl size-12.5 f-center">
              <div className="size-12 rounded-xl bg-background text-primary f-center">
                <TrendingUpIcon />
              </div>
            </div>
            <p className="heading">
              <span className="text-base font-modam">قدم به قدم همراه شما</span> تا قله موفقیت شغلی
            </p>
            <p className="text-foreground-mute w-1/2">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان....
            </p>
          </div>
          <div className="card space-y-3">
            <div className="bg-linear-to-t from-transparent to-primary rounded-xl size-12.5 f-center">
              <div className="size-12 rounded-xl bg-background text-primary f-center">
                <CircleStarIcon />
              </div>
            </div>
            <p className="heading">
              <span className="text-base font-modam inline-block">بهترین</span> اساتید همراه شما!
            </p>
            <p className="text-foreground-mute">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان....
            </p>
          </div>
          <div className="card ring-12 inset-shadow-sm f-col-evenly inset-shadow-foreground/10 ring-background-thick">
            <div className="bg-linear-to-t from-transparent to-primary rounded-xl size-12.5 f-center">
              <div className="size-12 rounded-xl bg-background text-primary f-center">
                <AnvilIcon />
              </div>
            </div>
            <p className="heading">
              <span className="text-base font-modam inline-block">بروزترین</span> فریم‌وورک ها در مسیر
            </p>
            <p className="text-foreground-mute">
              لورم ایپسوم متن ساختگی با تولید سادگی...
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default Page;
