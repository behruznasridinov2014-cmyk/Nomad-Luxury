import React, { useState, useEffect } from 'react';
import { Search, Heart, Menu, X, Globe, Compass, ArrowUpRight } from 'lucide-react';
import { Link, useLocation } from '../../router/Router';
import { useLanguage } from '../../i18n/LanguageContext';
import { useFavorites } from '../../context/FavoritesContext';
import { CommandPalette } from '../search/CommandPalette';

export const Navbar: React.FC = () => {
  const { t, language, setLanguage } = useLanguage();
  const { favoritesCount } = useFavorites();
  const { pathname } = useLocation();

  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const isHomePage = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Listen for Ctrl+K or Cmd+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setSearchOpen(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const navLinks = [
    { label: t.nav.destinations, to: '/destinations' },
    { label: t.nav.resorts, to: '/resorts' },
    { label: t.nav.tours, to: '/tours' },
    { label: t.nav.experiences, to: '/experiences' },
    { label: t.nav.planner, to: '/planner' },
    { label: t.nav.journal, to: '/journal' },
    { label: t.nav.about, to: '/about' }
  ];

  const headerBgClass = isHomePage
    ? isScrolled
      ? 'glass-nav-scrolled py-3 text-[#26332F]'
      : 'glass-nav-transparent py-5 text-white'
    : 'glass-nav-scrolled py-3 text-[#26332F]';

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${headerBgClass}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-lg bg-[#173F36] border border-white/20 flex items-center justify-center text-white shadow-sm transition-transform duration-300 group-hover:scale-105">
              <Compass className="w-5 h-5 text-[#9BD8CA]" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif-luxury text-xl font-bold tracking-widest uppercase transition-colors">
                NOMAD LUXURY
              </span>
              <span className="text-[9px] uppercase tracking-widest text-[#337F6A] font-semibold hidden sm:inline -mt-1">
                Hospitality & Retreats
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center space-x-7">
            {navLinks.map((link) => {
              const isActive = pathname === link.to;
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`text-xs uppercase tracking-widest font-medium transition-all hover:text-[#337F6A] relative py-1 ${
                    isActive
                      ? 'text-[#337F6A] font-semibold after:content-[""] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#337F6A]'
                      : ''
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Controls */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            {/* Command search trigger button */}
            <button
              onClick={() => setSearchOpen(true)}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full text-xs transition-colors hover:bg-stone-200/40 border border-current/20 cursor-pointer"
              title="Поиск по сайту (Ctrl+K)"
            >
              <Search className="w-3.5 h-3.5" />
              <span className="hidden md:inline font-mono text-[10px] opacity-75">Ctrl+K</span>
            </button>

            {/* Language Switcher */}
            <button
              onClick={() => setLanguage(language === 'ru' ? 'en' : 'ru')}
              className="flex items-center gap-1 px-2.5 py-1.5 rounded-full text-xs font-semibold tracking-wider transition-colors hover:bg-stone-200/40 border border-current/20 cursor-pointer"
              title="Переключить язык"
            >
              <Globe className="w-3.5 h-3.5 text-[#337F6A]" />
              <span>{language.toUpperCase()}</span>
            </button>

            {/* Favorites Icon Button with Badge */}
            <Link
              to="/favorites"
              className="relative p-2 rounded-full transition-colors hover:bg-stone-200/40 border border-current/20"
              title={t.nav.favorites}
            >
              <Heart className="w-4 h-4 text-rose-500 fill-rose-500/20" />
              {favoritesCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-rose-600 text-white text-[10px] font-bold flex items-center justify-center animate-pulse">
                  {favoritesCount}
                </span>
              )}
            </Link>

            {/* Book Now Button */}
            <Link
              to="/booking"
              className="hidden sm:inline-flex items-center gap-1 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#173F36] text-[#F7F6F0] hover:bg-[#337F6A] transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <span>{t.nav.bookNow}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(prev => !prev)}
              className="xl:hidden p-2 rounded-lg transition-colors hover:bg-stone-200/30"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-[#F7F6F0] text-[#26332F] border-b border-stone-200 px-6 py-6 shadow-2xl animate-fade-in">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-medium py-1.5 border-b border-stone-200/60 hover:text-[#337F6A] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-3 flex flex-col gap-3">
                <Link
                  to="/booking"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full py-3 rounded-xl text-center text-sm font-semibold uppercase tracking-wider bg-[#173F36] text-white"
                >
                  {t.nav.bookNow}
                </Link>
                <div className="flex items-center justify-between pt-2 text-xs text-stone-500">
                  <span>Язык интерфейса:</span>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setLanguage('ru')}
                      className={`px-3 py-1 rounded font-bold ${language === 'ru' ? 'bg-[#173F36] text-white' : 'bg-stone-200'}`}
                    >
                      Русский
                    </button>
                    <button
                      onClick={() => setLanguage('en')}
                      className={`px-3 py-1 rounded font-bold ${language === 'en' ? 'bg-[#173F36] text-white' : 'bg-stone-200'}`}
                    >
                      English
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Command Palette Modal */}
      <CommandPalette isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
};
