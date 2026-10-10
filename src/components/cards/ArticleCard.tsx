import React from 'react';
import { Clock, ArrowUpRight } from 'lucide-react';
import { Article } from '../../types';
import { ImageWithFallback } from '../ui/ImageWithFallback';
import { Link } from '../../router/Router';
import { useLanguage } from '../../i18n/LanguageContext';

interface ArticleCardProps {
  article: Article;
  className?: string;
}

export const ArticleCard: React.FC<ArticleCardProps> = ({ article, className = '' }) => {
  const { language } = useLanguage();

  return (
    <div
      className={`group flex flex-col rounded-2xl bg-white border border-stone-200/80 overflow-hidden luxury-card shadow-sm ${className}`}
      style={{ scrollSnapAlign: 'start' }}
    >
      {/* Cover Image */}
      <div className="relative aspect-[16/10] w-full overflow-hidden image-zoom-container">
        <ImageWithFallback
          src={article.coverImage}
          alt={article.title}
          className="w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

        {/* Category Pill */}
        <div className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full bg-white/85 backdrop-blur-md border border-white/40 text-[10px] font-semibold tracking-wider uppercase text-[#173F36]">
          {language === 'ru' ? article.category : article.categoryEn}
        </div>

        {/* Read Time */}
        <div className="absolute bottom-3 left-3 flex items-center gap-1.5 text-white text-xs drop-shadow">
          <Clock className="w-3.5 h-3.5" />
          <span>{article.readTime}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div>
          <span className="text-[11px] text-stone-400 font-medium block mb-1">
            {article.publishedAt}
          </span>
          <h3 className="font-serif-luxury text-xl font-medium text-[#173F36] group-hover:text-[#337F6A] transition-colors line-clamp-2 leading-snug">
            {language === 'ru' ? article.title : article.titleEn}
          </h3>
          <p className="text-xs text-stone-500 line-clamp-2 mt-2 leading-relaxed">
            {language === 'ru' ? article.excerpt : article.excerptEn}
          </p>
        </div>

        {/* Author & Read More */}
        <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img
              src={article.author.avatar}
              alt={article.author.name}
              className="w-6 h-6 rounded-full object-cover border border-stone-200"
            />
            <span className="text-xs text-stone-700 font-medium truncate max-w-[120px]">
              {article.author.name}
            </span>
          </div>

          <Link
            to={`/journal/${article.slug}`}
            className="inline-flex items-center gap-1 text-xs font-semibold text-[#173F36] group-hover:text-[#337F6A] transition-colors"
          >
            <span>Читать ↗</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
