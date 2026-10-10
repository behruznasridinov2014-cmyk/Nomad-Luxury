import React, { useState } from 'react';
import {
  Compass,
  Sparkles,
  Calendar,
  Users,
  CheckCircle2,
  DollarSign,
  ArrowRight,
  RotateCcw,
  Bookmark,
  Share2,
  Check
} from 'lucide-react';
import { destinationsData } from '../data/destinations';
import { Breadcrumbs } from '../components/ui/Breadcrumbs';
import { Link, useNavigate } from '../router/Router';
import { useLanguage } from '../i18n/LanguageContext';
import { GeneratedItinerary } from '../types';

export const PlannerPage: React.FC = () => {
  const { t, language } = useLanguage();
  const navigate = useNavigate();

  const [step, setStep] = useState<number>(1);
  const [destination, setDestination] = useState<string>('chimgan');
  const [durationDays, setDurationDays] = useState<number>(5);
  const [travelStyle, setTravelStyle] = useState<string>('wellness');
  const [budgetTier, setBudgetTier] = useState<string>('luxury');
  const [travelersCount, setTravelersCount] = useState<number>(2);
  const [generatedPlan, setGeneratedPlan] = useState<GeneratedItinerary | null>(null);
  const [savedLocally, setSavedLocally] = useState<boolean>(false);

  const styleOptions = [
    { id: 'wellness', label: 'Спокойный велнес и спа', desc: 'Инфинити-бассейны, хаммам, горный воздух и тишина' },
    { id: 'culture', label: 'Культурное погружение', desc: 'Шелковый путь, закрытые дворики, музеи и история' },
    { id: 'mountains', label: 'Горы и активный хайкинг', desc: 'Каньоны, вершины, трекинг и чистая дикая природа' },
    { id: 'romance', label: 'Романтика и уединение', desc: 'Пещерные сьюты, закаты, ужины от шефа и приватность' }
  ];

  const handleGenerate = () => {
    const destObj = destinationsData.find(d => d.id === destination) || destinationsData[0];
    const dailyRate = budgetTier === 'ultra' ? 550 : 320;
    const estimatedCostTotal = dailyRate * durationDays * (travelersCount > 2 ? 1.5 : 1);

    const generatedDays = Array.from({ length: durationDays }).map((_, index) => {
      const dayNum = index + 1;
      if (dayNum === 1) {
        return {
          dayNumber: 1,
          title: `Прибытие в ${destObj.name} и размещение в приватном резорте`,
          location: destObj.name,
          morning: 'Индивидуальный VIP-трансфер из аэропорта, приветственный напиток с горными травами.',
          afternoon: 'Заселение в панорамное шале, распаковка и созерцательный отдых на террасе.',
          evening: 'Расслабляющий спа-сеанс в подогреваемом бассейне и ужин от шеф-повара.',
          recommendedStay: 'Amirsoy Alpine Chalets / Samarkand Regency',
          tips: 'Закажите разогрев камина к вечеру для максимального уюта.'
        };
      } else if (dayNum === durationDays) {
        return {
          dayNumber: dayNum,
          title: 'Финальный велнес-завтрак и комфортное возвращение',
          location: destObj.name,
          morning: 'Утренняя медитация на свежем воздухе и неспешный органический завтрак.',
          afternoon: 'Сборы, посещение ремесленного базара за сувенирами ручной работы.',
          evening: 'Премиальный трансфер в аэропорт и вылет.',
          recommendedStay: 'Возвращение домой',
          tips: 'Не забудьте захватить горный мед и сушеные инжиры в дорогу.'
        };
      } else {
        return {
          dayNumber: dayNum,
          title: `День ${dayNum}: Погружение в ландшафты и атмосферу ${destObj.name}`,
          location: destObj.name,
          morning: `Практика йоги или легкая прогулка по живописным тропам ${destObj.region}.`,
          afternoon: 'Индивидуальная экскурсия с приватным гидом по знаковым локациям без очередей.',
          evening: 'Гастрономическая дегустация локальных блюд и вин в закрытом панорамном зале.',
          recommendedStay: 'Бутик-резиденция',
          tips: 'Лучшее время для фотографии — за 40 минут до заката солнца.'
        };
      }
    });

    const newPlan: GeneratedItinerary = {
      id: `itinerary-${Date.now()}`,
      title: `Индивидуальный маршрут: ${destObj.name} (${durationDays} дней)`,
      summary: `Специально составленная программа отдыха в стиле «${styleOptions.find(s => s.id === travelStyle)?.label}» для ${travelersCount} гостей.`,
      estimatedCostTotal,
      currency: 'USD',
      days: generatedDays
    };

    setGeneratedPlan(newPlan);
    setStep(5);
  };

  const handleSaveToStorage = () => {
    if (generatedPlan) {
      try {
        localStorage.setItem('nomad_saved_itinerary', JSON.stringify(generatedPlan));
        setSavedLocally(true);
        setTimeout(() => setSavedLocally(false), 3000);
      } catch {
        // quota
      }
    }
  };

  return (
    <div className="pt-28 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
      <Breadcrumbs items={[{ label: t.nav.planner }]} />

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E2F1EB] text-[#173F36] text-xs font-semibold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5 text-[#337F6A]" />
          <span>Умный конструктор</span>
        </div>
        <h1 className="font-serif-luxury text-4xl sm:text-6xl text-[#173F36] font-medium leading-tight">
          {t.planner.title}
        </h1>
        <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
          {t.planner.subtitle}
        </p>
      </div>

      {/* Multi-Step Wizard Card */}
      {step < 5 ? (
        <div className="max-w-3xl mx-auto bg-white rounded-3xl p-6 sm:p-10 border border-stone-200/80 shadow-lg space-y-8">
          {/* Progress Steps Header */}
          <div className="flex items-center justify-between pb-6 border-b border-stone-100">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#337F6A]">
              Шаг {step} из 4
            </span>
            <div className="flex items-center gap-2">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className={`w-8 h-1.5 rounded-full transition-all duration-300 ${
                    step >= i ? 'bg-[#337F6A]' : 'bg-stone-200'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* STEP 1: Destination */}
          {step === 1 && (
            <div className="space-y-6 animate-fade-in">
              <h2 className="font-serif-luxury text-2xl sm:text-3xl text-[#173F36]">
                {t.planner.step1Title}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {destinationsData.map((d) => {
                  const isSelected = destination === d.id;
                  return (
                    <div
                      key={d.id}
                      onClick={() => setDestination(d.id)}
                      className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-center justify-between ${
                        isSelected
                          ? 'border-[#337F6A] bg-[#E2F1EB]/40 ring-2 ring-[#337F6A]/20 shadow-xs'
                          : 'border-stone-200 hover:border-stone-300 bg-white'
                      }`}
                    >
                      <div>
                        <div className="font-medium text-sm text-[#173F36]">{d.name}</div>
                        <div className="text-xs text-stone-400">{d.region}, {d.country}</div>
                      </div>
                      {isSelected && <CheckCircle2 className="w-5 h-5 text-[#337F6A]" />}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* STEP 2: Duration */}
          {step === 2 && (
            <div className="space-y-6 animate-fade-in">
              <h2 className="font-serif-luxury text-2xl sm:text-3xl text-[#173F36]">
                {t.planner.step2Title}
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {[3, 5, 7, 10].map((days) => (
                  <button
                    key={days}
                    type="button"
                    onClick={() => setDurationDays(days)}
                    className={`p-6 rounded-2xl border text-center transition-all cursor-pointer ${
                      durationDays === days
                        ? 'border-[#337F6A] bg-[#E2F1EB]/40 ring-2 ring-[#337F6A]/20'
                        : 'border-stone-200 bg-white hover:border-stone-300'
                    }`}
                  >
                    <span className="font-serif-luxury text-3xl font-bold text-[#173F36] block">
                      {days}
                    </span>
                    <span className="text-xs text-stone-500 font-medium mt-1 block">
                      дней
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* STEP 3: Travel Style */}
          {step === 3 && (
            <div className="space-y-6 animate-fade-in">
              <h2 className="font-serif-luxury text-2xl sm:text-3xl text-[#173F36]">
                {t.planner.step3Title}
              </h2>
              <div className="space-y-3">
                {styleOptions.map((st) => (
                  <div
                    key={st.id}
                    onClick={() => setTravelStyle(st.id)}
                    className={`p-4 sm:p-5 rounded-2xl border transition-all cursor-pointer flex items-center justify-between ${
                      travelStyle === st.id
                        ? 'border-[#337F6A] bg-[#E2F1EB]/40 ring-2 ring-[#337F6A]/20 shadow-xs'
                        : 'border-stone-200 hover:border-stone-300 bg-white'
                    }`}
                  >
                    <div>
                      <div className="font-medium text-sm sm:text-base text-[#173F36]">{st.label}</div>
                      <div className="text-xs text-stone-500 mt-0.5">{st.desc}</div>
                    </div>
                    {travelStyle === st.id && <CheckCircle2 className="w-5 h-5 text-[#337F6A] shrink-0 ml-3" />}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* STEP 4: Budget & Travelers */}
          {step === 4 && (
            <div className="space-y-6 animate-fade-in">
              <h2 className="font-serif-luxury text-2xl sm:text-3xl text-[#173F36]">
                {t.planner.step4Title}
              </h2>

              <div className="space-y-4">
                <label className="block text-xs uppercase tracking-wider font-bold text-stone-500">
                  Класс путешествия
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div
                    onClick={() => setBudgetTier('luxury')}
                    className={`p-5 rounded-2xl border cursor-pointer ${
                      budgetTier === 'luxury'
                        ? 'border-[#337F6A] bg-[#E2F1EB]/40 ring-2 ring-[#337F6A]/20'
                        : 'border-stone-200 bg-white'
                    }`}
                  >
                    <div className="font-semibold text-sm text-[#173F36]">Премиум (от $320/день)</div>
                    <div className="text-xs text-stone-500 mt-1">Пятизвездочные бутик-отели, индивидуальные гиды</div>
                  </div>

                  <div
                    onClick={() => setBudgetTier('ultra')}
                    className={`p-5 rounded-2xl border cursor-pointer ${
                      budgetTier === 'ultra'
                        ? 'border-[#337F6A] bg-[#E2F1EB]/40 ring-2 ring-[#337F6A]/20'
                        : 'border-stone-200 bg-white'
                    }`}
                  >
                    <div className="font-semibold text-sm text-[#173F36]">Ультра-люкс (от $550/день)</div>
                    <div className="text-xs text-stone-500 mt-1">Президентские шале, вертолеты, шеф-повара</div>
                  </div>
                </div>

                <div className="pt-4">
                  <label className="block text-xs uppercase tracking-wider font-bold text-stone-500 mb-2">
                    Количество гостей
                  </label>
                  <div className="flex items-center gap-3">
                    {[1, 2, 4, 6].map((num) => (
                      <button
                        key={num}
                        type="button"
                        onClick={() => setTravelersCount(num)}
                        className={`px-5 py-2.5 rounded-xl border font-semibold text-xs transition-colors cursor-pointer ${
                          travelersCount === num
                            ? 'bg-[#173F36] text-white border-[#173F36]'
                            : 'bg-stone-50 border-stone-200 text-stone-700 hover:bg-stone-100'
                        }`}
                      >
                        {num} {num === 1 ? 'гость' : 'гостей'}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Navigation Controls */}
          <div className="flex items-center justify-between pt-6 border-t border-stone-100">
            {step > 1 ? (
              <button
                type="button"
                onClick={() => setStep(step - 1)}
                className="px-6 py-2.5 rounded-full border border-stone-300 text-stone-700 text-xs font-semibold hover:bg-stone-50"
              >
                Назад
              </button>
            ) : <div />}

            {step < 4 ? (
              <button
                type="button"
                onClick={() => setStep(step + 1)}
                className="px-7 py-3 rounded-full bg-[#173F36] hover:bg-[#337F6A] text-white text-xs font-semibold uppercase tracking-wider flex items-center gap-2"
              >
                <span>Далее</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                type="button"
                onClick={handleGenerate}
                className="px-8 py-3.5 rounded-full bg-[#337F6A] hover:bg-[#173F36] text-white text-xs font-semibold uppercase tracking-wider flex items-center gap-2 shadow-lg hover:-translate-y-0.5"
              >
                <span>{t.planner.generateBtn}</span>
              </button>
            )}
          </div>
        </div>
      ) : (
        /* STEP 5: Generated Itinerary Result */
        generatedPlan && (
          <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
            {/* Summary Banner */}
            <div className="bg-[#173F36] text-white rounded-3xl p-8 sm:p-10 shadow-2xl relative overflow-hidden">
              <div className="max-w-2xl space-y-4">
                <span className="text-xs uppercase tracking-widest font-semibold text-[#9BD8CA] block">
                  {t.planner.resultTitle}
                </span>
                <h2 className="font-serif-luxury text-3xl sm:text-5xl font-medium leading-tight">
                  {generatedPlan.title}
                </h2>
                <p className="text-sm text-stone-200 leading-relaxed font-light">
                  {generatedPlan.summary}
                </p>
                <div className="pt-2 flex items-baseline gap-2">
                  <span className="text-xs text-stone-300">Ориентировочный бюджет:</span>
                  <span className="font-serif-luxury text-3xl font-bold text-[#9BD8CA]">
                    ${generatedPlan.estimatedCostTotal}
                  </span>
                  <span className="text-xs text-stone-300">({durationDays} дней / {travelersCount} чел.)</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <button
                    onClick={handleSaveToStorage}
                    className="px-5 py-2.5 rounded-full bg-white/15 hover:bg-white/25 text-white text-xs font-semibold flex items-center gap-1.5 backdrop-blur-md"
                  >
                    {savedLocally ? <Check className="w-4 h-4 text-[#9BD8CA]" /> : <Bookmark className="w-4 h-4" />}
                    <span>{savedLocally ? 'Маршрут сохранен!' : 'Сохранить план'}</span>
                  </button>
                  <button
                    onClick={() => setStep(1)}
                    className="px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-semibold flex items-center gap-1.5"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Начать заново</span>
                  </button>
                </div>

                <Link
                  to={`/booking?destination=${destination}`}
                  className="px-7 py-3 rounded-full bg-[#337F6A] hover:bg-[#9BD8CA] hover:text-[#173F36] text-white font-semibold text-xs uppercase tracking-wider shadow-md"
                >
                  Забронировать этот маршрут ↗
                </Link>
              </div>
            </div>

            {/* Day By Day Generated Steps */}
            <div className="space-y-6">
              <h3 className="font-serif-luxury text-2xl text-[#173F36] font-medium">
                Расписание по дням
              </h3>

              <div className="space-y-4">
                {generatedPlan.days.map((d) => (
                  <div
                    key={d.dayNumber}
                    className="p-6 sm:p-8 rounded-2xl bg-white border border-stone-200/80 shadow-xs space-y-4"
                  >
                    <div className="flex items-baseline justify-between border-b border-stone-100 pb-3">
                      <div className="flex items-center gap-3">
                        <span className="w-7 h-7 rounded-full bg-[#337F6A] text-white text-xs font-mono font-bold flex items-center justify-center">
                          {d.dayNumber}
                        </span>
                        <h4 className="font-serif-luxury text-xl font-bold text-[#173F36]">
                          {d.title}
                        </h4>
                      </div>
                      <span className="text-xs font-medium text-stone-400">
                        {d.location}
                      </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-stone-600">
                      <div className="p-3.5 rounded-xl bg-stone-50 space-y-1">
                        <strong className="text-stone-800 font-semibold block">Утро:</strong>
                        <p>{d.morning}</p>
                      </div>
                      <div className="p-3.5 rounded-xl bg-stone-50 space-y-1">
                        <strong className="text-stone-800 font-semibold block">День:</strong>
                        <p>{d.afternoon}</p>
                      </div>
                      <div className="p-3.5 rounded-xl bg-stone-50 space-y-1">
                        <strong className="text-stone-800 font-semibold block">Вечер:</strong>
                        <p>{d.evening}</p>
                      </div>
                    </div>

                    <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between text-xs gap-2 text-stone-500">
                      <div>
                        <strong>Рекомендуемый отель:</strong> {d.recommendedStay}
                      </div>
                      <div className="text-[#337F6A] italic">
                        💡 {d.tips}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
};
