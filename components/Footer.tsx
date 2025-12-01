import Link from "next/link";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export default function Footer() {
  return (
    <footer className="mt-16 md:mt-24 w-full bg-brand-text-primary text-white">
      <div className="mx-auto max-w-7xl px-6 py-8 md:py-12">
        <div className="grid grid-cols-1 gap-8 md:gap-12 lg:grid-cols-2">
          <div>
            <div className="text-xl font-semibold">Smipay</div>
            <div className="mt-6">
              <h3 className="text-base md:text-lg">
                Be the first to get latest information <br /> about Smipay
              </h3>
              <form className="mt-4 max-w-lg relative">
                <Input
                  placeholder="Enter your email"
                  type="email"
                  className="h-12 pr-28 border-white bg-white! text-brand-text-primary placeholder:text-brand-text-primary focus-visible:border-white focus-visible:ring-0 w-full rounded-sm"
                />
                <Button
                  type="submit"
                  className="absolute right-1 top-1/2 -translate-y-1/2 h-10 bg-brand-text-primary text-white hover:bg-brand-text-primary/90 px-6 rounded-sm"
                >
                  Submit
                </Button>
              </form>
            </div>
          </div>

          {/* Desktop: 3 columns */}
          <div className="hidden md:grid grid-cols-3 gap-6 text-sm">
            <div className="space-y-3">
              <Link href="#" className="block hover:opacity-90">
                Home
              </Link>
              <Link href="#" className="block hover:opacity-90">
                Services
              </Link>
              <Link href="#" className="block hover:opacity-90">
                About us
              </Link>
              <Link href="#" className="block hover:opacity-90">
                Support
              </Link>
            </div>
            <div className="space-y-3">
              <Link href="#" className="block hover:opacity-90">
                support@smipay.com
              </Link>
              <Link href="#" className="block hover:opacity-90">
                +234 201 887 0061
              </Link>
            </div>
            <div className="space-y-3">
              <Link href="#" className="block hover:opacity-90">
                Terms of service
              </Link>
              <Link href="#" className="block hover:opacity-90">
                Privacy policy
              </Link>
              <Link href="#" className="block hover:opacity-90">
                Cookies policy
              </Link>
            </div>
          </div>

          {/* Mobile: 2 columns layout */}
          <div className="md:hidden mt-4">
            <div className="grid grid-cols-2 gap-6 text-sm mb-12">
              <div className="space-y-3">
                <Link href="#" className="block hover:opacity-90">
                  Home
                </Link>
                <Link href="#" className="block hover:opacity-90">
                  Services
                </Link>
                <Link href="#" className="block hover:opacity-90">
                  About us
                </Link>
                <Link href="#" className="block hover:opacity-90">
                  Support
                </Link>
              </div>
              <div className="space-y-3">
                <Link href="#" className="block hover:opacity-90">
                  support@smipay.com
                </Link>
                <Link href="#" className="block hover:opacity-90">
                  +234 201 887 0061
                </Link>
              </div>
            </div>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
              <Link href="#" className="hover:opacity-90">
                Terms of service
              </Link>
              <Link href="#" className="hover:opacity-90">
                Privacy policy
              </Link>
              <Link href="#" className="hover:opacity-90">
                Cookies policy
              </Link>
            </div>
          </div>
        </div>
        <div className="my-8 md:my-10 h-px w-full bg-white/15" />
        <div className="text-xs text-white/80 text-center">
          © 2025 Smipay, subsidiary of Best Technologies Limited
        </div>
      </div>
    </footer>
  );
}
