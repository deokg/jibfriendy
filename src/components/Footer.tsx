import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { siteConfig, navigation, contact } from "@/data/site";

export function Footer() {
  return (
    <footer className="bg-charcoal-950 text-white/70">
      <div className="container-narrow py-16 md:py-20">
        <div className="grid md:grid-cols-12 gap-10 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-4">
            <div className="text-2xl font-bold text-white">
              {siteConfig.legalName}
            </div>
          </div>

          {/* Nav */}
          <div className="md:col-span-3">
            <div className="text-xs font-mono uppercase tracking-widest text-gold-400 mb-4">
              Sitemap
            </div>
            <ul className="space-y-3">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/70 hover:text-gold-400 transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-5">
            <div className="text-xs font-mono uppercase tracking-widest text-gold-400 mb-4">
              Contact
            </div>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <Mail className="size-4 text-gold-400 shrink-0 mt-0.5" />
                <a
                  href={`mailto:${contact.email}`}
                  className="text-white hover:text-gold-300 transition-colors break-all"
                >
                  {contact.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="size-4 text-gold-400 shrink-0 mt-0.5" />
                <a
                  href={`tel:${contact.phone.replace(/-/g, "")}`}
                  className="text-white hover:text-gold-300 transition-colors"
                >
                  {contact.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="size-4 text-gold-400 shrink-0 mt-0.5" />
                <span className="text-white">{contact.address}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between gap-4 text-xs text-white/40">
          <div>
            © {new Date().getFullYear()} {siteConfig.legalName}. All rights reserved.
          </div>
          <div>3대째 이어온 건축 · 디벨로퍼 출신 시공사</div>
        </div>
      </div>
    </footer>
  );
}
