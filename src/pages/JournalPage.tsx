import React, { useState, useMemo } from 'react';
import { Search, RotateCcw, BookOpen } from 'lucide-react';
import { articlesData } from '../data/articles';
import { ArticleCard } from '../components/cards/ArticleCard';
import { Breadcrumbs } from '../components/ui/Breadcrumbs';
import { useLanguage } from '../i18n/LanguageContext';

export const JournalPage: React.FC = () => {
  const { t, language } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { id: 'all', label: 'Все статьи', labelEn: 'All Stories' },
    { id: 'История и культура', label: 'История и культура', labelEn: 'History & Culture' },
    { id: 'Архитектура', label: 'Архитектура', labelEn: 'Architecture' },
    { id: 'Вдохновение', label: 'Вдохновение', labelEn: 'Inspiration' },
    { id: 'Гастрономия', label: 'Гастрономия', labelEn: 'Gastronomy' },
    { id: 'Горы и природа', label: 'Горы и природа', labelEn: 'Mountains & Nature' },
    { id: 'Wellness', label: 'Wellness', labelEn: 'Wellness' },
    { id: 'Эко-туризм', label: 'Эко-туризм', labelEn: 'Eco-Tourism' },
    { id: 'Советы', label: 'Советы', labelEn: 'Tips' }
  ];

  const filteredArticles = useMemo(() => {
    return articlesData.filter((art) => {
      const matchesQuery =
        art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        art.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        art.category.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory =
        selectedCategory === 'all' || art.category === selectedCategory;

      return matchesQuery && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="pt-28 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
      <Breadcrumbs items={[{ label: t.nav.journal }]} />

      {/* Header */}
      <div className="py-6 space-y-3">
        <span className="text-xs uppercase tracking-widest font-semibold text-[#337F6A] block">
          Эдиториал и путевые заметки
        </span>
        <h1 className="font-serif-luxury text-4xl sm:text-6xl text-[#173F36] font-medium leading-tight">
          {t.sections.journalTitle}
        </h1>
        <p className="text-stone-600 text-sm sm:text-base max-w-2xl leading-relaxed">
          {t.sections.journalSubtitle}. Истории об архитектуре, тайных восточных двориках, традициях дастархана и науке перезагрузки в горах.
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white rounded-2xl p-5 border border-stone-200/80 shadow-xs space-y-4">
        <div className="flex flex-col sm:flex-row gap-3 items-center justify-between">
          <div className="relative flex-1 w-full sm:w-auto">
            <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Поиск по статьям журнала..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-stone-50 border border-stone-200 text-xs sm:text-sm text-stone-800 placeholder-stone-400 focus:outline-none focus:border-[#337F6A]"
            />
          </div>

          {(searchQuery || selectedCategory !== 'all') && (
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-stone-500 hover:text-stone-800 hover:bg-stone-100 text-xs transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Сбросить</span>
            </button>
          )}
        </div>

        {/* Categories */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pt-1 border-t border-stone-100">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium tracking-wide whitespace-nowrap transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-[#173F36] text-white shadow-xs'
                  : 'bg-stone-100 text-stone-600 hover:bg-stone-200/70'
              }`}
            >
              {language === 'ru' ? cat.label : cat.labelEn}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      {filteredArticles.length === 0 ? (
        <div className="py-20 text-center bg-white rounded-2xl border border-stone-200/80 p-8 space-y-4">
          <BookOpen className="w-10 h-10 text-stone-300 mx-auto" />
          <h3 className="font-serif-luxury text-2xl text-stone-700">Статьи не найдены</h3>
          <p className="text-xs text-stone-500 max-w-sm mx-auto">
            По вашему запросу публикаций не найдено. Попробуйте сбросить фильтры.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredArticles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      )}
    </div>
  );
};
