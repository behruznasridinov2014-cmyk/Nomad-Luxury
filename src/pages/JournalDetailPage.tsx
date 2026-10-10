import React, { useState } from 'react';
import { Clock, Share2, Check, ArrowLeft, Bookmark } from 'lucide-react';
import { useParams, Link } from '../router/Router';
import { articlesData } from '../data/articles';
import { Breadcrumbs } from '../components/ui/Breadcrumbs';
import { ImageWithFallback } from '../components/ui/ImageWithFallback';
import { ArticleCard } from '../components/cards/ArticleCard';
import { useLanguage } from '../i18n/LanguageContext';

export const JournalDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { language, t } = useLanguage();
  const [copied, setCopied] = useState(false);

  const article = articlesData.find((a) => a.slug === slug) || articlesData[0];
  const relatedArticles = articlesData.filter((a) => a.id !== article.id).slice(0, 3);

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="pt-28 pb-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
      <Breadcrumbs
        items={[
          { label: t.nav.journal, to: '/journal' },
          { label: language === 'ru' ? article.title : article.titleEn }
        ]}
      />

      {/* Header */}
      <div className="space-y-4 text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E2F1EB] text-[#173F36] text-xs font-semibold uppercase tracking-wider">
          <span>{language === 'ru' ? article.category : article.categoryEn}</span>
        </div>

        <h1 className="font-serif-luxury text-3xl sm:text-5xl lg:text-6xl text-[#173F36] font-medium leading-[1.15]">
          {language === 'ru' ? article.title : article.titleEn}
        </h1>

        <p className="text-base sm:text-lg text-stone-600 font-light leading-relaxed max-w-2xl mx-auto">
          {language === 'ru' ? article.excerpt : article.excerptEn}
        </p>

        {/* Author & Metas */}
        <div className="pt-4 flex items-center justify-center gap-6 text-xs text-stone-500 border-t border-b border-stone-200 py-3">
          <div className="flex items-center gap-2">
            <img
              src={article.author.avatar}
              alt={article.author.name}
              className="w-7 h-7 rounded-full object-cover border border-stone-300"
            />
            <span className="font-semibold text-stone-800">{article.author.name}</span>
            <span className="text-stone-400">({article.author.role})</span>
          </div>
          <span className="text-stone-300">•</span>
          <div className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            <span>{article.readTime} чтения</span>
          </div>
          <span className="text-stone-300">•</span>
          <span>{article.publishedAt}</span>

          <button
            onClick={handleShare}
            className="flex items-center gap-1 text-[#337F6A] hover:text-[#173F36] font-semibold transition-colors cursor-pointer ml-2"
          >
            {copied ? <Check className="w-3.5 h-3.5" /> : <Share2 className="w-3.5 h-3.5" />}
            <span>{copied ? 'Скопировано!' : 'Поделиться'}</span>
          </button>
        </div>
      </div>

      {/* Featured Cover Image */}
      <div className="rounded-3xl overflow-hidden aspect-[16/9] shadow-xl border border-stone-200">
        <ImageWithFallback
          src={article.coverImage}
          alt={article.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Article Content Blocks */}
      <div className="prose prose-stone max-w-none space-y-6 pt-4 text-stone-800 font-light text-base sm:text-lg leading-relaxed">
        {article.blocks.map((block, index) => {
          if (block.type === 'heading') {
            return (
              <h2 key={index} className="font-serif-luxury text-2xl sm:text-3xl text-[#173F36] font-medium pt-4">
                {language === 'ru' ? block.text : block.textEn}
              </h2>
            );
          }
          if (block.type === 'quote') {
            return (
              <blockquote key={index} className="p-6 rounded-2xl bg-[#E2F1EB]/50 border-l-4 border-[#337F6A] my-6 font-serif-luxury text-xl sm:text-2xl text-[#173F36] italic">
                <p>«{language === 'ru' ? block.text : block.textEn}»</p>
                {block.author && (
                  <cite className="block text-xs uppercase tracking-wider text-[#337F6A] font-sans font-semibold not-italic mt-2">
                    — {block.author}
                  </cite>
                )}
              </blockquote>
            );
          }
          return (
            <p key={index} className="leading-relaxed">
              {language === 'ru' ? block.text : block.textEn}
            </p>
          );
        })}
      </div>

      {/* Related Stories */}
      <div className="pt-16 border-t border-stone-200 space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="font-serif-luxury text-2xl sm:text-3xl text-[#173F36] font-medium">
            Другие истории из журнала
          </h3>
          <Link to="/journal" className="text-xs font-semibold uppercase tracking-wider text-[#337F6A] hover:underline">
            Все статьи ↗
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {relatedArticles.map((art) => (
            <ArticleCard key={art.id} article={art} />
          ))}
        </div>
      </div>
    </div>
  );
};
