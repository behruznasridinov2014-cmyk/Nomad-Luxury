import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Clock, ShieldCheck } from 'lucide-react';
import { Breadcrumbs } from '../components/ui/Breadcrumbs';
import { useLanguage } from '../i18n/LanguageContext';

export const ContactPage: React.FC = () => {
  const { t } = useLanguage();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      setError('Пожалуйста, заполните все обязательные поля');
      return;
    }
    setError('');
    setSubmitted(true);
  };

  return (
    <div className="pt-28 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      <Breadcrumbs items={[{ label: t.nav.contact }]} />

      {/* Header */}
      <div className="space-y-4 max-w-3xl">
        <span className="text-xs uppercase tracking-widest font-semibold text-[#337F6A] block">
          Персональный консьерж
        </span>
        <h1 className="font-serif-luxury text-4xl sm:text-6xl text-[#173F36] font-medium leading-tight">
          Связаться с NOMAD LUXURY
        </h1>
        <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
          Наша команда консьержей готова помочь вам подобрать идеальное шале, составить маршрут по Шелковому пути или организовать приватный трансфер.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Contact Form (7 cols) */}
        <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-stone-200/80 shadow-lg space-y-6">
          <h2 className="font-serif-luxury text-2xl sm:text-3xl text-[#173F36] font-medium">
            Оставить персональный запрос
          </h2>

          {submitted ? (
            <div className="p-8 rounded-2xl bg-[#E2F1EB] border border-[#337F6A]/30 text-center space-y-4 animate-fade-in">
              <CheckCircle2 className="w-12 h-12 text-[#337F6A] mx-auto" />
              <h3 className="font-serif-luxury text-2xl text-[#173F36] font-bold">
                Запрос успешно отправлен!
              </h3>
              <p className="text-xs sm:text-sm text-stone-700 max-w-md mx-auto leading-relaxed">
                Спасибо, {name}! Ваше обращение зафиксировано в демонстрационном режиме. В реальной версии наш старший консьерж свяжется с вами в течение 30 минут.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSubmitted(false);
                  setName('');
                  setEmail('');
                  setMessage('');
                }}
                className="px-6 py-2.5 rounded-full bg-[#173F36] text-white text-xs font-semibold"
              >
                Отправить еще сообщение
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {error && (
                <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-xs text-rose-700 font-medium">
                  {error}
                </div>
              )}

              <div>
                <label className="block text-xs font-semibold text-stone-600 mb-1">
                  Ваше имя *
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Как к вам обращаться"
                  className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-200 text-sm text-stone-800 focus:outline-none focus:border-[#337F6A]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-stone-600 mb-1">
                    Электронная почта *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="concierge@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-200 text-sm text-stone-800 focus:outline-none focus:border-[#337F6A]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-600 mb-1">
                    Телефон
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+998 90 000 00 00"
                    className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-200 text-sm text-stone-800 focus:outline-none focus:border-[#337F6A]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-600 mb-1">
                  Ваше пожелание или вопрос *
                </label>
                <textarea
                  rows={4}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Расскажите о датах поездки, количестве гостей и желаемых впечатлениях..."
                  className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-200 text-sm text-stone-800 focus:outline-none focus:border-[#337F6A]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-[#173F36] hover:bg-[#337F6A] text-white text-xs font-semibold uppercase tracking-wider transition-all duration-300 shadow-lg cursor-pointer"
              >
                Отправить запрос консьержу ↗
              </button>
            </form>
          )}
        </div>

        {/* Concierge Offices & Channels (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="p-8 rounded-3xl bg-white border border-stone-200/80 shadow-xs space-y-6">
            <h3 className="font-serif-luxury text-2xl font-bold text-[#173F36]">
              Офисы и служба заботы
            </h3>

            <div className="space-y-5 text-sm text-stone-600">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#337F6A] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-stone-900 block">Флагманский офис — Ташкент:</strong>
                  <span>Проспект Амира Темура, 107B, Silk Road Executive Center</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#337F6A] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-stone-900 block">Консьерж-деск — Самарканд:</strong>
                  <span>Университетский бульвар, 14, Silk Road Samarkand Lounge</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#337F6A] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-stone-900 block">VIP Линия бронирования:</strong>
                  <span className="font-mono text-stone-800">+998 (71) 200-88-99</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#337F6A] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-stone-900 block">Электронная почта:</strong>
                  <span className="font-mono text-stone-800">concierge@nomadluxury.uz</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-[#337F6A] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-stone-900 block">Часы работы:</strong>
                  <span>Круглосуточный консьерж 24/7 для проживающих гостей</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
