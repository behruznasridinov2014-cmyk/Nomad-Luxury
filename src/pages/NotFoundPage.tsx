import React from 'react';
import { Compass, Home, MapPin, ArrowLeft } from 'lucide-react';
import { Link } from '../router/Router';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="pt-32 pb-24 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
      <div className="w-20 h-20 rounded-full bg-[#E2F1EB] text-[#173F36] flex items-center justify-center mx-auto shadow-md">
        <Compass className="w-10 h-10 text-[#337F6A] animate-spin" style={{ animationDuration: '10s' }} />
      </div>

      <span className="font-mono text-sm tracking-widest text-[#337F6A] uppercase font-bold">
        Ошибка 404
      </span>

      <h1 className="font-serif-luxury text-4xl sm:text-6xl text-[#173F36] font-medium leading-tight">
        Этот путь еще не исследован
      </h1>

      <p className="text-stone-600 text-sm sm:text-base max-w-md mx-auto leading-relaxed">
        Страница, которую вы ищете, изменила свой маршрут или еще не нанесена на карту NOMAD LUXURY.
      </p>

      <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[#173F36] hover:bg-[#337F6A] text-white text-xs font-semibold uppercase tracking-wider transition-all shadow-md"
        >
          <Home className="w-4 h-4" />
          <span>Вернуться на главную</span>
        </Link>
        <Link
          to="/destinations"
          className="inline-flex items-center gap-2 px-7 py-3 rounded-full border border-stone-300 text-stone-700 text-xs font-semibold uppercase tracking-wider hover:bg-stone-50"
        >
          <MapPin className="w-4 h-4" />
          <span>Каталог направлений</span>
        </Link>
      </div>
    </div>
  );
};
