import { UserIcon } from "lucide-react";
import Link from "next/link";

function Header() {
  return (
    <header className="wrapper h-20 f-between">
      <p className="font-modam-bold text-lg">
        <span className="text-primary">ویرالرن</span> استودیو
      </p>

      <nav className="bg-background-thin px-4 text-foreground-mute f-center gap-3 h-14 rounded-full">
        <Link className="relative h-full f-align overflow-hidden" href="/">
          <span className="absolute left-1.5 right-1.5 bottom-0 top-0 bg-linear-to-t from-primary/30 from-10% to-60% to-transparent blur-[3px]"></span>
          <span className="absolute left-1 right-1 bottom-0 bg-primary shadow-primary h-px blur-[1px] rounded-full"></span>
          <div className="btn text-primary relative">
            <span>صفحه اصلی</span>
          </div>
        </Link>
        <Link className="btn hover:text-primary" href="/">
          محصولات
        </Link>
        <Link className="btn hover:text-primary" href="/">
          پیشنهاد ویژه
        </Link>
        <Link className="btn hover:text-primary" href="/">
          پکیج آموزشی
        </Link>
        <Link className="btn hover:text-primary" href="/">
          درباره ما
        </Link>
        <Link className="btn hover:text-primary" href="/">
          تماس با ما
        </Link>
      </nav>

      <Link className="btn btn-outline" href="/">
        <UserIcon />
        <span>ورود / ثبت نام</span>
      </Link>
    </header>
  );
}

export default Header;
