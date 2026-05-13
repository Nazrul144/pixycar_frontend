import Image from "next/image";
import Link from "next/link";
import { Clock, MapPin } from "lucide-react";
import { ROUTES } from "@/constants/routes";
import { cn } from "@/lib/utils";

const CAR_IMAGE = "/listing-car-placeholder.png";

type ListingCard = {
  id: string;
  title: string;
  imageSrc: string;
  km: string;
  location: string;
  timerLabel: string;
};

const DUMMY_LISTINGS: ListingCard[] = [
  {
    id: "1",
    title: "2021 Honda CR-V EX",
    imageSrc: CAR_IMAGE,
    km: "32,000 km",
    location: "Queens, NY",
    timerLabel: "1h 45 m left",
  },
  {
    id: "2",
    title: "2021 Honda CR-V EX",
    imageSrc: CAR_IMAGE,
    km: "32,000 km",
    location: "Queens, NY",
    timerLabel: "1h 45 m left",
  },
  {
    id: "3",
    title: "2021 Honda CR-V EX",
    imageSrc: CAR_IMAGE,
    km: "32,000 km",
    location: "Queens, NY",
    timerLabel: "1h 45 m left",
  },
];

function ListingCardItem({ listing }: { listing: ListingCard }) {
  return (
    <article className="overflow-hidden rounded-2xl bg-white shadow-sm">
      <div className="relative h-[180px] w-full">
        <Image
          src={listing.imageSrc}
          alt={listing.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>
      <div className="p-4">
        <h3 className="font-hero-heading text-lg font-bold leading-snug text-[#1E1E1E]">
          {listing.title}
        </h3>
        <div className="mt-3 flex items-center justify-between gap-3">
          <span
            className={cn(
              "font-navbar font-medium tracking-[-0.6px] text-[#5E5E5E]",
              "text-[16.757px]"
            )}
          >
            {listing.km}
          </span>
          <span
            className={cn(
              "flex shrink-0 items-center gap-1 font-navbar font-medium tracking-[-0.6px] text-[#5E5E5E]",
              "text-[16.757px]"
            )}
          >
            <MapPin className="size-4 shrink-0" strokeWidth={2} aria-hidden />
            {listing.location}
          </span>
        </div>
        <div className="mt-3 flex items-center gap-1.5 font-navbar text-sm font-normal text-[#FFA51F]">
          <Clock className="size-4 shrink-0" strokeWidth={2} aria-hidden />
          {listing.timerLabel}
        </div>
        <Link
          href={ROUTES.browse}
          className={cn(
            "mt-4 flex w-full items-center justify-center rounded-xl bg-[#FFA51F] py-3",
            "font-navbar text-base font-semibold text-black transition-opacity hover:opacity-90"
          )}
        >
          Place bid
        </Link>
      </div>
    </article>
  );
}

export function LiveListings() {
  return (
    <section className="bg-[#F9FAFB] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-screen-2xl px-3 sm:px-4 lg:px-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="font-hero-heading text-[32px] font-semibold leading-tight tracking-tight text-[#1E1E1E]">
              Live Listings
            </h2>
            <p className="mt-2 font-navbar text-base font-normal leading-relaxed text-[#5E5E5E]">
              Cars currently accepting offers from dealers
            </p>
          </div>
          <Link
            href={ROUTES.browse}
            className="shrink-0 font-navbar text-base font-normal text-[#8F4A00] no-underline hover:underline sm:pb-0.5"
          >
            View all
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:mt-12 lg:grid-cols-3">
          {DUMMY_LISTINGS.map((listing) => (
            <ListingCardItem key={listing.id} listing={listing} />
          ))}
        </div>
      </div>
    </section>
  );
}
