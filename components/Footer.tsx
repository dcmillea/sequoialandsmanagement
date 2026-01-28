import Link from "next/link";
import Image from "next/image";
import { Phone, Mail } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "Areas We Serve", href: "/areas-we-serve" },
  { name: "Protect Your Land", href: "/protect-your-land" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-green-900 text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-3 lg:items-start">
          {/* LEFT — Large Logo */}
          <div>
            <Link href="/" className="inline-flex items-center gap-4">
              <Image
                src="/logo.png"
                alt="Sequoia Lands Management"
                width={150}
                height={150}
              />
              <div>
                <p className="text-xl font-semibold tracking-wide">
                  Sequoia Lands
                </p>
                <p className="text-sm opacity-80">
                  Responsible Land Stewardship
                </p>
              </div>
            </Link>
          </div>

          {/* CENTER — Navigation */}
          <nav className="grid grid-cols-2 gap-x-8 gap-y-3 text-sm">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="
                  opacity-80
                  hover:opacity-100
                  transition-opacity
                "
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* RIGHT — Contact */}
          <div className="space-y-4 text-sm">
            <div className="flex items-center gap-3">
              <Phone className="h-4 w-4 opacity-80" />
              <a href="tel:+18005551234" className="hover:underline">
                (800) 555-1234
              </a>
            </div>

            <div className="flex items-center gap-3">
              <Mail className="h-4 w-4 opacity-80" />
              <a
                href="mailto:info@sequoialands.com"
                className="hover:underline"
              >
                info@sequoialands.com
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 h-px w-full bg-primary-foreground/20" />

        {/* Bottom Row */}
        <div className="flex flex-col gap-3 text-xs opacity-75 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Sequoia Lands Management. All rights
            reserved.
          </p>
          <p>Stewardship • Preservation • Restoration</p>
        </div>
      </div>
    </footer>
  );
}
