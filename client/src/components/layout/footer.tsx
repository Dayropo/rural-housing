import { Link } from "wouter";
import { FOOTER_LINKS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-neutral-500 text-white py-10 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-xl mb-4">RuralHomes</h3>
            <p className="text-neutral-300 mb-4">
              Connecting people with their perfect rural property.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-secondary">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-white hover:text-secondary">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-white hover:text-secondary">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-white hover:text-secondary">
                <i className="fab fa-pinterest"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Home Buying & Selling</h4>
            <ul className="space-y-2">
              {FOOTER_LINKS.buyingAndSelling.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-neutral-300 hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Rentals</h4>
            <ul className="space-y-2">
              {FOOTER_LINKS.rentals.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-neutral-300 hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-2">
              {FOOTER_LINKS.company.map((link, index) => (
                <li key={index}>
                  <Link href={link.href}>
                    <a className="text-neutral-300 hover:text-white">{link.label}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-neutral-400 mt-8 pt-8 text-center text-neutral-300">
          <p>&copy; {new Date().getFullYear()} RuralHomes. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
