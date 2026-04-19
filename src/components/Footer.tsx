import { Mail, Phone, MapPin, Instagram, Twitter, Dribbble, Globe, ArrowUpRight } from 'lucide-react'
import { TextHoverEffect, FooterBackgroundGradient } from './ui/hover-footer'

const footerLinks = [
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '#' },
      { label: 'Our Work', href: '#' },
      { label: 'Process', href: '#' },
      { label: 'Careers', href: '#' },
    ],
  },
  {
    title: 'Services',
    links: [
      { label: 'AI Web Design', href: '#' },
      { label: 'Development', href: '#' },
      { label: 'Branding', href: '#' },
      { label: 'Support', href: '#', pulse: true },
    ],
  },
]

const contactInfo = [
  { icon: <Mail size={16} className="text-red-500" />, text: 'hello@studio.com', href: 'mailto:hello@studio.com' },
  { icon: <Phone size={16} className="text-red-500" />, text: '+1 (555) 000-0000', href: 'tel:+15550000000' },
  { icon: <MapPin size={16} className="text-red-500" />, text: 'New York, NY' },
]

const socialLinks = [
  { icon: <Instagram size={18} />, label: 'Instagram', href: '#' },
  { icon: <Twitter size={18} />, label: 'Twitter', href: '#' },
  { icon: <Dribbble size={18} />, label: 'Dribbble', href: '#' },
  { icon: <Globe size={18} />, label: 'Website', href: '#' },
]

export default function Footer() {
  return (
    <footer className="bg-black px-6 lg:px-8 pb-8">
      <div
        className="relative rounded-3xl overflow-hidden"
        style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}
      >
        <div className="relative z-10 max-w-7xl mx-auto px-10 md:px-14 pt-14">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8 lg:gap-16 pb-12">

            {/* Brand */}
            <div className="flex flex-col space-y-4">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center">
                  <span className="text-white font-heading italic text-base">S</span>
                </div>
                <span className="text-white font-heading italic text-xl">Studio</span>
              </div>
              <p className="text-white/40 font-body text-sm leading-relaxed max-w-[200px]">
                AI-powered web design for brands that want to stand out.
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-1.5 text-white font-body text-sm font-medium hover:text-white/70 transition-colors mt-2"
              >
                Get Started
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Link columns */}
            {footerLinks.map((section) => (
              <div key={section.title}>
                <h4 className="text-white font-body text-sm font-semibold tracking-widest uppercase mb-6">
                  {section.title}
                </h4>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.label} className="relative">
                      <a
                        href={link.href}
                        className="text-white/40 font-body text-sm hover:text-white transition-colors"
                      >
                        {link.label}
                      </a>
                      {link.pulse && (
                        <span className="absolute top-0.5 -right-3 w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Contact */}
            <div>
              <h4 className="text-white font-body text-sm font-semibold tracking-widest uppercase mb-6">
                Contact
              </h4>
              <ul className="space-y-4">
                {contactInfo.map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    {item.icon}
                    {item.href ? (
                      <a href={item.href} className="text-white/40 font-body text-sm hover:text-white transition-colors">
                        {item.text}
                      </a>
                    ) : (
                      <span className="text-white/40 font-body text-sm">{item.text}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <hr className="border-white/10" />

          <div className="flex flex-col md:flex-row justify-between items-center py-6 gap-4">
            <div className="flex gap-5 text-white/40">
              {socialLinks.map(({ icon, label, href }) => (
                <a key={label} href={href} aria-label={label} className="hover:text-white transition-colors">
                  {icon}
                </a>
              ))}
            </div>
            <p className="text-white/30 font-body text-xs">
              &copy; {new Date().getFullYear()} Studio. All rights reserved.
            </p>
          </div>
        </div>

        {/* Text hover effect */}
        <div className="lg:flex hidden h-[28rem] -mt-48 -mb-32 relative z-10">
          <TextHoverEffect text="Studio" />
        </div>

        <FooterBackgroundGradient />
      </div>
    </footer>
  )
}
