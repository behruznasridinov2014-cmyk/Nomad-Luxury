import React from 'react';
import { Compass, ShieldCheck, TreePine, Sparkles, HeartHandshake, Eye } from 'lucide-react';
import { Breadcrumbs } from '../components/ui/Breadcrumbs';
import { useLanguage } from '../i18n/LanguageContext';
import { Link } from '../router/Router';

export const AboutPage: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="pt-28 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      <Breadcrumbs items={[{ label: t.nav.about }]} />

      {/* Hero Brand Statement */}
      <div className="space-y-6 max-w-3xl">
        <span className="text-xs uppercase tracking-widest font-semibold text-[#337F6A] block">
          О бренде и философии
        </span>
        <h1 className="font-serif-luxury text-4xl sm:text-6xl text-[#173F36] font-medium leading-[1.12]">
          «Место, где начинается ваш отдых»
        </h1>
        <p className="text-stone-600 text-base sm:text-lg font-light leading-relaxed">
          NOMAD LUXURY родился из простой, но редкой идеи: современная роскошь измеряется не показным блеском, а тишиной, первозданной природой и глубоким внутренним покоем.
        </p>
      </div>

      {/* Editorial Image Banner */}
      <div className="rounded-3xl overflow-hidden aspect-[21/9] shadow-xl border border-stone-200 relative">
        <img
          src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=2560&q=85"
          alt="Nomad Luxury Retreats"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#173F36]/80 via-transparent to-transparent flex items-end p-8 sm:p-12 text-white">
          <p className="font-serif-luxury text-2xl sm:text-3xl max-w-xl font-medium">
            Мы отбираем только те места, где природа и архитектура ведут гармоничный диалог.
          </p>
        </div>
      </div>

      {/* The 4 Pillars of Nomad Luxury */}
      <div className="space-y-8">
        <h2 className="font-serif-luxury text-3xl sm:text-4xl text-[#173F36] text-center font-medium">
          Четыре столпа нашей селекции
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 rounded-3xl bg-white border border-stone-200/80 shadow-xs space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-[#E2F1EB] text-[#173F36] flex items-center justify-center">
              <Eye className="w-6 h-6" />
            </div>
            <h3 className="font-serif-luxury text-2xl font-bold text-[#173F36]">
              1. Бескомпромиссная курация
            </h3>
            <p className="text-sm text-stone-600 leading-relaxed font-light">
              Мы не агрегатор тысяч безымянных гостиниц. В коллекцию NOMAD попадают только единичные резорты, проверенные по 120 параметрам приватности, сервиса, эстетики и комфорта.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-stone-200/80 shadow-xs space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-[#E2F1EB] text-[#173F36] flex items-center justify-center">
              <TreePine className="w-6 h-6" />
            </div>
            <h3 className="font-serif-luxury text-2xl font-bold text-[#173F36]">
              2. Природный велнес и экология
            </h3>
            <p className="text-sm text-stone-600 leading-relaxed font-light">
              От хвойных лесов Чимгана до термальных источников онсэн — все наши локации способствуют естественному снижению уровня стресса и возвращению жизненных сил.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-stone-200/80 shadow-xs space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-[#E2F1EB] text-[#173F36] flex items-center justify-center">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="font-serif-luxury text-2xl font-bold text-[#173F36]">
              3. Сохранение наследия
            </h3>
            <p className="text-sm text-stone-600 leading-relaxed font-light">
              Мы поддерживаем ремесленные мастерские Самарканда, Бухары и Риштана. Путешествуя с нами, вы соприкасаетесь с живой историей и сохраняете ее для потомков.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-stone-200/80 shadow-xs space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-[#E2F1EB] text-[#173F36] flex items-center justify-center">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <h3 className="font-serif-luxury text-2xl font-bold text-[#173F36]">
              4. Персональный консьерж-сервис
            </h3>
            <p className="text-sm text-stone-600 leading-relaxed font-light">
              От посадки на борт вертолета до сервировки ужина при свечах на закрытой террасе — каждый момент вашей поездки курируется персональным ассистентом.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Box */}
      <div className="p-10 rounded-3xl bg-[#173F36] text-white text-center space-y-5">
        <h2 className="font-serif-luxury text-3xl sm:text-4xl font-medium">
          Готовы открыть мир NOMAD LUXURY?
        </h2>
        <p className="text-sm text-stone-300 max-w-xl mx-auto leading-relaxed">
          Исследуйте наши направления или свяжитесь с консьержем для создания индивидуального маршрута.
        </p>
        <div className="pt-2 flex justify-center gap-4">
          <Link
            to="/destinations"
            className="px-7 py-3 rounded-full bg-[#337F6A] hover:bg-[#9BD8CA] hover:text-[#173F36] text-white font-semibold text-xs uppercase tracking-wider transition-all"
          >
            Направления ↗
          </Link>
          <Link
            to="/contact"
            className="px-7 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-xs uppercase tracking-wider transition-all"
          >
            Связаться с нами
          </Link>
        </div>
      </div>
    </div>
  );
};
