import { Link, useLocation } from "wouter";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const links = [
    { href: "/", label: "Accueil" },
    { href: "/atelier", label: "L'Atelier" },
    { href: "/projets", label: "Projets" },
    { href: "/expertise", label: "Expertise" },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-primary selection:text-primary-foreground">
      {/* Navigation */}
      <header className="fixed top-0 w-full z-50 bg-background/90 backdrop-blur-sm architect-line-bottom">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
          <Link href="/" className="font-display font-bold text-2xl tracking-widest uppercase">
              RESPIRO<span className="text-muted-foreground text-sm ml-2 font-normal tracking-normal hidden sm:inline-block">Architecture</span>
          </Link>
          
          <nav className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link key={link.href} href={link.href} className={`text-sm uppercase tracking-wider font-medium transition-colors hover:text-primary relative py-2 ${location === link.href ? 'text-primary' : 'text-muted-foreground'}`}>
                  {link.label}
                  {location === link.href && (
                    <motion.div 
                      layoutId="nav-indicator"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary"
                    />
                  )}
              </Link>
            ))}
          </nav>

          <button 
            className="md:hidden p-2 -mr-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden absolute top-20 left-0 w-full bg-background border-b architect-line-bottom px-6 py-8 flex flex-col gap-6"
          >
            {links.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setIsMobileMenuOpen(false)} className={`text-lg uppercase tracking-wider font-medium ${location === link.href ? 'text-primary' : 'text-muted-foreground'}`}>
                  {link.label}
              </Link>
            ))}
          </motion.div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1 pt-20">
        {children}
      </main>

      {/* Footer */}
      <footer className="border-t architect-line-bottom mt-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <h2 className="font-display font-bold text-3xl mb-4 tracking-tight">RESPIRO</h2>
            <p className="text-muted-foreground max-w-sm">
              Atelier d'architecture concevant des solutions sur mesure, alliant fonctionnalité et esthétique.
            </p>
          </div>
          <div>
            <h3 className="font-bold mb-4 uppercase tracking-wider text-sm text-muted-foreground">Menu</h3>
            <ul className="flex flex-col gap-3">
              {links.map(link => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4 uppercase tracking-wider text-sm text-muted-foreground">Contact</h3>
            <address className="not-italic flex flex-col gap-3 text-muted-foreground">
              <p>12 Rue de l'Architecture</p>
              <p>75000 Paris, France</p>
              <p>contact@respiro-architecture.fr</p>
            </address>
          </div>
        </div>
        <div className="border-t border-border/50 py-6 text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} RESPIRO Architecture. Tous droits réservés.
        </div>
      </footer>
    </div>
  );
}