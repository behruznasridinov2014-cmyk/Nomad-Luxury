import React from 'react';
import {
  Compass,
  ArrowUpRight,
  ShieldCheck,
  Sparkles,
  TreePine,
  HeartHandshake,
  CheckCircle2,
  Calendar,
  Layers,
  ChevronRight
} from 'lucide-react';
import { HeroSlider } from '../components/carousels/HeroSlider';
import { HorizontalSlider } from '../components/carousels/HorizontalSlider';
import { DestinationCard } from '../components/cards/DestinationCard';
import { ResortCard } from '../components/cards/ResortCard';
import { TourCard } from '../components/cards/TourCard';
import { ArticleCard } from '../components/cards/ArticleCard';
import { destinationsData } from '../data/destinations';
import { resortsData } from '../data/resorts';
import { toursData } from '../data/tours';
import { articlesData } from '../data/articles';
import { Link } from '../router/Router';
import { useLanguage } from '../i18n/LanguageContext';
import { useScrollReveal } from '../hooks/useScrollReveal';

export const HomePage: React.FC = () => {
  const { t, language } = useLanguage();
  useScrollReveal();

  return (
    <div className="w-full overflow-hidden bg-[#F7F6F0]">
      {/* SECTION A: SIGNATURE HERO */}
      <HeroSlider />

      {/* SECTION B: CURATED DESTINATIONS (Editorial Asymmetrical Layout) */}
      <section className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-widest font-semibold text-[#337F6A] block mb-2">
              {t.sections.destinationsSubtitle}
            </span>
            <h2 className="font-serif-luxury text-3xl sm:text-5xl text-[#173F36] font-medium leading-tight">
              {t.sections.destinationsTitle}
            </h2>
          </div>
          <Link
            to="/destinations"
            className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-[#173F36] hover:text-[#337F6A] transition-colors border-b border-[#173F36]/30 pb-0.5"
          >
            <span>{t.sections.viewAllDestinations}</span>
          </Link>
        </div>

        {/* Asymmetrical Grid of 4 Key Destinations */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8">
          {/* Large Featured Card: Samarkand (7 columns) */}
          <div className="md:col-span-7 reveal-item">
            <DestinationCard destination={destinationsData[0]} className="h-full" />
          </div>

          {/* Vertical Stack: Chimgan & Charvak (5 columns) */}
          <div className="md:col-span-5 flex flex-col gap-6 sm:gap-8 reveal-item">
            <DestinationCard destination={destinationsData[1]} />
            <DestinationCard destination={destinationsData[2]} />
          </div>
        </div>

        {/* Horizontal Row with remaining destinations */}
        <div className="mt-8 pt-8">
          <HorizontalSlider
            title="Международная коллекция ретритов"
            subtitle="Альпийские пики, скальные пещеры и дзен-сады"
          >
            {destinationsData.slice(8).map((dest) => (
              <div key={dest.id} className="w-[300px] sm:w-[360px] shrink-0">
                <DestinationCard destination={dest} />
              </div>
            ))}
          </HorizontalSlider>
        </div>
      </section>

      {/* SECTION C: FEATURED RESORTS */}
      <section className="py-20 sm:py-28 bg-[#E2F1EB]/40 border-y border-[#337F6A]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <HorizontalSlider
            title={t.sections.resortsTitle}
            subtitle={t.sections.resortsSubtitle}
            action={
              <Link
                to="/resorts"
                className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#173F36] hover:text-[#337F6A] transition-colors mr-4"
              >
                <span>{t.sections.viewAllResorts}</span>
              </Link>
            }
          >
            {resortsData.map((resort) => (
              <div key={resort.id} className="w-[310px] sm:w-[380px] shrink-0">
                <ResortCard resort={resort} />
              </div>
            ))}
          </HorizontalSlider>
        </div>
      </section>

      {/* SECTION D: SIGNATURE EXPERIENCES & TOURS */}
      <section className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-widest font-semibold text-[#337F6A] block mb-2">
              {t.sections.experiencesSubtitle}
            </span>
            <h2 className="font-serif-luxury text-3xl sm:text-5xl text-[#173F36] font-medium leading-tight">
              {t.sections.experiencesTitle}
            </h2>
          </div>
          <Link
            to="/tours"
            className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-[#173F36] hover:text-[#337F6A] transition-colors border-b border-[#173F36]/30 pb-0.5"
          >
            <span>Все туры ↗</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {toursData.slice(0, 6).map((tour) => (
            <div key={tour.id} className="reveal-item">
              <TourCard tour={tour} />
            </div>
          ))}
        </div>
      </section>

      {/* SECTION E: PLAN YOUR JOURNEY (Interactive Trip Planner Teaser) */}
      <section className="py-20 sm:py-28 bg-[#173F36] text-[#F7F6F0] relative overflow-hidden">
        {/* Subtle background photography overlay */}
        <div
          className="absolute inset-0 opacity-15 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1920&q=80')`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#173F36] via-[#173F36]/90 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#9BD8CA] text-xs font-semibold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Индивидуальный маршрут</span>
              </div>

              <h2 className="font-serif-luxury text-3xl sm:text-5xl text-white font-medium leading-tight">
                {t.sections.plannerTitle}
              </h2>

              <p className="text-base sm:text-lg text-stone-300 font-light leading-relaxed max-w-xl">
                {t.sections.plannerSubtitle}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <div className="text-2xl font-serif-luxury text-[#9BD8CA] font-bold">1 мин</div>
                  <div className="text-xs text-stone-400 mt-1">Быстрый опрос по вашим вкусам</div>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <div className="text-2xl font-serif-luxury text-[#9BD8CA] font-bold">100%</div>
                  <div className="text-xs text-stone-400 mt-1">Персонализированная программа</div>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <div className="text-2xl font-serif-luxury text-[#9BD8CA] font-bold">$0</div>
                  <div className="text-xs text-stone-400 mt-1">Бесплатный расчет в браузере</div>
                </div>
              </div>

              <div className="pt-4">
                <Link
                  to="/planner"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#337F6A] hover:bg-[#9BD8CA] hover:text-[#173F36] text-white font-semibold text-sm sm:text-base transition-all duration-300 shadow-xl hover:-translate-y-0.5"
                >
                  <span>{t.sections.plannerCta}</span>
                </Link>
              </div>
            </div>

            {/* Visual Glass Preview of Step Form */}
            <div className="lg:col-span-5">
              <div className="glass-panel-dark rounded-3xl p-6 sm:p-8 space-y-5 border border-white/20">
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <span className="text-xs font-semibold tracking-wider uppercase text-[#9BD8CA]">
                    Конструктор поездки
                  </span>
                  <span className="text-xs font-mono text-stone-300">Шаг 1 из 4</span>
                </div>

                <div className="space-y-4">
                  <label className="block text-sm font-medium text-white">
                    Какое направление вас манит?
                  </label>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="p-3 rounded-xl bg-white/10 border border-[#9BD8CA] text-white font-medium flex items-center justify-between">
                      <span>Чимган & Горы</span>
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#9BD8CA]" />
                    </div>
                    <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-stone-300">
                      <span>Самарканд & Шелковый путь</span>
                    </div>
                    <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-stone-300">
                      <span>Чарвак & Озеро</span>
                    </div>
                    <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-stone-300">
                      <span>Доломиты & Альпы</span>
                    </div>
                  </div>

                  <Link
                    to="/planner"
                    className="w-full py-3 rounded-xl bg-[#337F6A] text-white text-center text-xs font-semibold uppercase tracking-wider block hover:bg-[#9BD8CA] hover:text-[#173F36] transition-colors"
                  >
                    Перейти к генератору маршрута ↗
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION F: TRAVEL JOURNAL */}
      <section className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-widest font-semibold text-[#337F6A] block mb-2">
              {t.sections.journalSubtitle}
            </span>
            <h2 className="font-serif-luxury text-3xl sm:text-5xl text-[#173F36] font-medium leading-tight">
              {t.sections.journalTitle}
            </h2>
          </div>
          <Link
            to="/journal"
            className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-[#173F36] hover:text-[#337F6A] transition-colors border-b border-[#173F36]/30 pb-0.5"
          >
            <span>{t.sections.readAllArticles}</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {articlesData.slice(0, 3).map((art) => (
            <div key={art.id} className="reveal-item">
              <ArticleCard article={art} />
            </div>
          ))}
        </div>
      </section>

      {/* SECTION G: WHY NOMAD LUXURY */}
      <section className="py-20 sm:py-28 bg-[#F7F6F0] border-t border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
            <span className="text-xs uppercase tracking-widest font-semibold text-[#337F6A] block mb-2">
              Философия бренда
            </span>
            <h2 className="font-serif-luxury text-3xl sm:text-5xl text-[#173F36] font-medium leading-tight">
              {t.sections.whyTitle}
            </h2>
            <p className="text-stone-600 text-sm sm:text-base mt-4 leading-relaxed">
              {t.sections.whySubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="p-8 rounded-2xl bg-white border border-stone-200/80 shadow-xs space-y-4 reveal-item">
              <div className="w-12 h-12 rounded-xl bg-[#E2F1EB] text-[#173F36] flex items-center justify-center">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-serif-luxury text-xl font-medium text-[#173F36]">
                {t.whyUs.card1Title}
              </h3>
              <p className="text-xs text-stone-500 leading-relaxed">
                {t.whyUs.card1Text}
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-stone-200/80 shadow-xs space-y-4 reveal-item">
              <div className="w-12 h-12 rounded-xl bg-[#E2F1EB] text-[#173F36] flex items-center justify-center">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="font-serif-luxury text-xl font-medium text-[#173F36]">
                {t.whyUs.card2Title}
              </h3>
              <p className="text-xs text-stone-500 leading-relaxed">
                {t.whyUs.card2Text}
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-stone-200/80 shadow-xs space-y-4 reveal-item">
              <div className="w-12 h-12 rounded-xl bg-[#E2F1EB] text-[#173F36] flex items-center justify-center">
                <TreePine className="w-6 h-6" />
              </div>
              <h3 className="font-serif-luxury text-xl font-medium text-[#173F36]">
                {t.whyUs.card3Title}
              </h3>
              <p className="text-xs text-stone-500 leading-relaxed">
                {t.whyUs.card3Text}
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-stone-200/80 shadow-xs space-y-4 reveal-item">
              <div className="w-12 h-12 rounded-xl bg-[#E2F1EB] text-[#173F36] flex items-center justify-center">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <h3 className="font-serif-luxury text-xl font-medium text-[#173F36]">
                {t.whyUs.card4Title}
              </h3>
              <p className="text-xs text-stone-500 leading-relaxed">
                {t.whyUs.card4Text}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION H: FINAL LUXURY CTA */}
      <section className="relative py-24 sm:py-32 overflow-hidden text-center text-white">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=2560&q=80')`
          }}
        />
        <div className="absolute inset-0 bg-[#173F36]/80 backdrop-blur-xs" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8">
          <span className="text-xs uppercase tracking-widest font-semibold text-[#9BD8CA] block">
            Ваше идеальное путешествие
          </span>

          <h2 className="font-serif-luxury text-3xl sm:text-5xl lg:text-6xl font-medium leading-tight">
            {t.sections.finalCtaHeadline}
          </h2>

          <p className="text-base sm:text-lg text-stone-200 font-light max-w-2xl mx-auto leading-relaxed">
            {t.sections.finalCtaSubtitle}
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/booking"
              className="px-8 py-4 rounded-full bg-[#337F6A] hover:bg-[#9BD8CA] hover:text-[#173F36] text-white font-semibold text-sm sm:text-base transition-all duration-300 shadow-xl hover:-translate-y-0.5"
            >
              <span>{t.sections.finalCtaButton}</span>
            </Link>

            <Link
              to="/resorts"
              className="px-8 py-4 rounded-full bg-white/15 hover:bg-white/25 text-white backdrop-blur-md border border-white/30 font-semibold text-sm sm:text-base transition-all duration-300 hover:-translate-y-0.5"
            >
              <span>Исследовать резорты</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
