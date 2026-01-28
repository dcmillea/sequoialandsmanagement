import Link from "next/link";
import Image from "next/image";
import { Phone, Mail } from "lucide-react";
import { Button } from "./ui/button";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "Areas We Serve", href: "/areas-we-serve" },
  { name: "Protect Your Land", href: "/protect-your-land" },
  { name: "About", href: "/about" },
];

export default function Header() {
  return (
    <header className="w-full border-b border-border bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex h-20 items-center justify-between">
          {/* LEFT — Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="Sequoia Lands Management"
              width={80}
              height={80}
              priority
            />
          </Link>

          {/* CENTER — Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="
                  text-md font-medium text-foreground
                  hover:text-primary
                  transition-colors
                "
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* RIGHT — Actions */}
          <div className="flex items-center gap-3">
            {/* Phone (utility) */}
            <Button
              variant="ghost"
              className="
                hidden md:flex items-center gap-2
                text-foreground
                hover:text-green-900
              "
              asChild
            >
              <a href="tel:+13106257951">
                <Phone className="h-4 w-4" />
                <span className="text-sm">(310) 625-7951</span>
              </a>
            </Button>

            {/* Primary CTA */}
            <Button
              className="
                flex items-center gap-2
                bg-green-900 text-primary-foreground
                hover:bg-green-900/90
              "
            >
              <Mail className="h-4 w-4" />
              <span className="text-sm">Contact</span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
