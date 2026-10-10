import React, { useState } from 'react';
import { Compass, ArrowUp, Send, CheckCircle2 } from 'lucide-react';
import { Link } from '../../router/Router';
import { useLanguage } from '../../i18n/LanguageContext';

export const Footer: React.FC = () => {
  const { t } = useLanguage();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && email.includes('@')) {
      setSubscribed(true);
      setEmail('');
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#173F36] text-[#F7F6F0] pt-16 pb-12 border-t border-[#337F6A]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-14 border-b border-white/10">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-lg bg-[#337F6A] flex items-center justify-center text-white">
                <Compass className="w-5 h-5 text-[#9BD8CA]" />
              </div>
              <span className="font-serif-luxury text-2xl font-bold tracking-widest uppercase">
                NOMAD LUXURY
              </span>
            </Link>
            <p className="text-sm text-stone-300 max-w-sm leading-relaxed">
              {t.footer.aboutText}
            </p>
            <div className="pt-2 text-xs text-[#9BD8CA] tracking-wider uppercase font-semibold">
              «{t.brand.tagline}»
            </div>
          </div>

          {/* Column 1: Explore */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-widest font-semibold text-[#9BD8CA]">
              {t.footer.explore}
            </h4>
            <ul className="space-y-2 text-sm text-stone-300">
              <li>
                <Link to="/destinations" className="hover:text-white transition-colors">
                  {t.footer.destinations}
                </Link>
              </li>
              <li>
                <Link to="/resorts" className="hover:text-white transition-colors">
                  {t.footer.resorts}
                </Link>
              </li>
              <li>
                <Link to="/tours" className="hover:text-white transition-colors">
                  {t.footer.tours}
                </Link>
              </li>
              <li>
                <Link to="/planner" className="hover:text-white transition-colors">
                  {t.footer.planner}
                </Link>
              </li>
              <li>
                <Link to="/journal" className="hover:text-white transition-colors">
                  {t.footer.journal}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Company */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-widest font-semibold text-[#9BD8CA]">
              {t.footer.company}
            </h4>
            <ul className="space-y-2 text-sm text-stone-300">
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  {t.footer.aboutUs}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  {t.footer.contactUs}
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-white transition-colors">
                  {t.footer.faq}
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-white transition-colors">
                  {t.footer.privacy}
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-white transition-colors">
                  {t.footer.terms}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Newsletter */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-widest font-semibold text-[#9BD8CA]">
              {t.footer.newsletterTitle}
            </h4>
            <p className="text-xs text-stone-300 leading-relaxed">
              {t.footer.newsletterSub}
            </p>
            {subscribed ? (
              <div className="flex items-center gap-2 p-3 rounded-xl bg-[#337F6A]/30 border border-[#9BD8CA]/40 text-xs text-[#9BD8CA]">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>{t.footer.subscribedSuccess}</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="relative">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={t.footer.emailPlaceholder}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/10 border border-white/20 text-xs text-white placeholder-stone-400 focus:outline-none focus:border-[#9BD8CA]"
                  />
                  <button
                    type="submit"
                    className="absolute right-1.5 top-1.5 p-1.5 rounded-lg bg-[#337F6A] hover:bg-[#9BD8CA] hover:text-[#173F36] transition-colors text-white"
                  >
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* Disclaimer Box */}
        <div className="my-8 p-4 rounded-xl bg-black/20 border border-white/10 text-xs text-stone-400 leading-relaxed">
          <strong className="text-stone-300 font-semibold block mb-1">Демонстрационный режим:</strong>
          {t.footer.demoWarning}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-stone-400 pt-4 gap-4">
          <div>
            © {new Date().getFullYear()} NOMAD LUXURY. {t.footer.allRights}
          </div>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-stone-300 hover:text-white transition-colors cursor-pointer group"
          >
            <span>Наверх</span>
            <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-[#337F6A] transition-colors">
              <ArrowUp className="w-3.5 h-3.5" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
};
