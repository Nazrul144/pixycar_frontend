import Image from "next/image";
import Link from "next/link";
import { ROUTES } from "@/constants/routes";
import { cn } from "@/lib/utils";

const LEGAL_LINKS = [
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
] as const;

const HELP_LINKS = [
  { label: "Support", href: "/support" },
  { label: "Contact", href: "/contact" },
] as const;

const linkClass = cn(
  "font-navbar text-base font-normal text-[#1E1E1E] underline-offset-2 hover:underline"
);

export function Footer() {
  return (
    <footer className="w-full bg-[#FFA51F] py-8 px-4 sm:px-8 md:px-16">
      <div
        className={cn(
          "mx-auto flex w-full max-w-screen-2xl flex-col items-center gap-8 text-center",
          "lg:flex-row lg:items-center lg:justify-between lg:text-left"
        )}
      >
        <div className="shrink-0">
          <Link
            href={ROUTES.home}
            className="inline-flex items-center"
            aria-label="PixyCar home"
          >
            <Image
              src="/pixycar-logo.png"
              alt=""
              width={160}
              height={68}
              className="h-10 w-auto sm:h-11"
              priority={false}
            />
          </Link>
        </div>

        <div
          className={cn(
            "flex flex-col items-center gap-8 sm:flex-row sm:gap-12 md:gap-16",
            "lg:items-start"
          )}
        >
          <nav
            className="flex flex-col items-center gap-3 text-center lg:items-start lg:text-left"
            aria-label="Legal"
          >
            {LEGAL_LINKS.map((item) => (
              <Link key={item.href} href={item.href} className={linkClass}>
                {item.label}
              </Link>
            ))}
          </nav>

          <nav
            className="flex flex-col items-center gap-3 text-center lg:items-start lg:text-left"
            aria-label="Help"
          >
            {HELP_LINKS.map((item) => (
              <Link key={item.href} href={item.href} className={linkClass}>
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
