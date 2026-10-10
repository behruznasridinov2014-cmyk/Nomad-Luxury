import React from 'react';
import { ShieldAlert, Check } from 'lucide-react';
import { Breadcrumbs } from '../components/ui/Breadcrumbs';

export const TermsPage: React.FC = () => {
  return (
    <div className="pt-28 pb-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      <Breadcrumbs items={[{ label: 'Условия использования' }]} />

      <div className="space-y-4">
        <span className="text-xs uppercase tracking-widest font-semibold text-[#337F6A] block">
          Правовая информация
        </span>
        <h1 className="font-serif-luxury text-4xl sm:text-5xl text-[#173F36] font-medium leading-tight">
          Условия и демонстрационный регламент
        </h1>
      </div>

      <div className="p-8 rounded-3xl bg-white border border-stone-200 shadow-xs space-y-6 text-sm text-stone-700 leading-relaxed font-light">
        <div className="p-5 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-xs sm:text-sm text-amber-950 flex items-start gap-3">
          <ShieldAlert className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          <div>
            <strong>Статус проекта:</strong> NOMAD LUXURY — это соревновательный проект фронтенд-разработки, созданный для демонстрации передового UI/UX, анимаций, адаптивности и сложного клиентского взаимодействия.
          </div>
        </div>

        <h2 className="font-serif-luxury text-2xl font-bold text-[#173F36] pt-2">
          1. Иллюстративный характер данных
        </h2>
        <p>
          Все цены на проживание, списки номеров, экскурсионные маршруты и отзывы гостей носят исключительно демонстрационный и концептуальный характер. Сайт не является публичной офертой в юридическом смысле и не осуществляет коммерческую продажу путевок.
        </p>

        <h2 className="font-serif-luxury text-2xl font-bold text-[#173F36] pt-2">
          2. Отсутствие обработки финансовых транзакций
        </h2>
        <p>
          Платформа принципиально не собирает данные банковских карт, CVC-коды или пароли интернет-банкинга. Процесс бронирования моделирует пользовательский путь (User Journey) в рамках чистой клиентской SPA-архитектуры.
        </p>

        <h2 className="font-serif-luxury text-2xl font-bold text-[#173F36] pt-2">
          3. Фотографические материалы и авторские права
        </h2>
        <p>
          Все фотоматериалы, использованные на сайте, получены из открытых публичных коллекций Unsplash с указанием контекста и оптимизированы для быстрой загрузки и адаптивности.
        </p>
      </div>
    </div>
  );
};
