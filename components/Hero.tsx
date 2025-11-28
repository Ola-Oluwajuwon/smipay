import { PartyPopper } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-6 bg-white">
      <div className="mt-20 grid grid-cols-1 items-center gap-12 md:grid-cols-2">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full bg-brand-bg-primary px-6 py-3 text-white">
            <PartyPopper className="w-4 h-4" />
            <span className="text-sm">Financial revolution awaits you</span>
          </div>
          <h1 className="font-funnel text-brand-text-primary text-[56px] leading-[140%] tracking-[0%] font-semibold">
            The Smarter Way to Take Control of Your Money
          </h1>
          <p className="font-funnel text-[16px] leading-[150%] text-brand-text-secondary max-w-xl">
            Experience seamless digital transactions, instant airtime & data
            top-ups, bill payments, virtual cards, and gift card redemptions—all
            in one powerful platform.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="#"
              className="inline-flex h-12 items-center gap-3 rounded-lg border border-zinc-300 bg-white px-4 shadow-sm hover:bg-zinc-50"
            >
              <Image
                src="/svgs/misc/appstore.svg"
                alt="App Store"
                width={120}
                height={36}
              />
            </a>
            <a
              href="#"
              className="inline-flex h-12 items-center gap-3 rounded-lg border border-zinc-300 bg-white px-4 shadow-sm hover:bg-zinc-50"
            >
              <Image
                src="/svgs/misc/googleplay.svg"
                alt="Google Play"
                width={140}
                height={36}
              />
            </a>
          </div>
        </div>
        <div className="flex justify-center md:justify-end">
          <div className="overflow-hidden">
            <Image
              src="/imgs/smipay-hero-image.png"
              alt="Hero placeholder"
              width={480}
              height={480}
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
