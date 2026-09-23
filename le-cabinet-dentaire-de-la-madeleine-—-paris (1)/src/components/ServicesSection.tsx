import React, { useState } from 'react';
import { Language, ServiceItem, servicesData } from '../data/clinicData';

interface ServicesSectionProps {
  lang: Language;
  onBookService?: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ lang, onBookService }) => {
  const isAr = lang === 'ar';
  const [activeModalService, setActiveModalService] = useState<ServiceItem | null>(null);

  return (
    <section id="services" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-200/60 text-sky-700 text-xs font-semibold mb-3">
              <span className="w-2 h-2 rounded-full bg-sky-500" />
              <span>{isAr ? 'علاجات تخصصية متكاملة' : 'Comprehensive Clinical Disciplines'}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1B3D] tracking-tight">
              {isAr ? 'خدماتنا وتخصصاتنا الطبية' : 'Our Specialized Services'}
            </h2>
            <p className="mt-3 text-sm sm:text-base text-neutral-600 max-w-2xl leading-relaxed">
              {isAr
                ? 'نقدم رعاية متكاملة تشمل أحدث علاجات تجميل الأسنان، التقويم غير المرئي، زراعة الأسنان الرقمية، وطب الأسنان المجهري بأعلى معايير الجودة العالمية.'
                : 'From custom porcelain veneers and Invisalign clear aligners to computer-guided dental implants and microscopic endodontics, we deliver advanced cosmetic and restorative excellence.'}
            </p>
          </div>

          <div className="hidden sm:block">
            <span className="text-xs font-mono font-bold text-sky-600 uppercase tracking-widest bg-sky-50 px-3 py-1.5 rounded-lg border border-sky-200/50">
              8 {isAr ? 'تخصصات طبية معتمدة' : 'Specialized Clinical Disciplines'}
            </span>
          </div>
        </div>

        {/* Services Grid (8 Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesData.map((srv) => (
            <div
              key={srv.id}
              className="bg-white rounded-2xl sm:rounded-3xl border border-neutral-200/90 shadow-xs hover:shadow-xl hover:border-sky-300 transition-all duration-300 flex flex-col overflow-hidden group"
            >
              {/* Image Preview */}
              <div className="relative aspect-[16/10] w-full bg-neutral-900 overflow-hidden">
                <img
                  src={srv.image}
                  alt={isAr ? srv.titleAr : srv.titleEn}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 select-none"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                  <span className="px-2.5 py-0.5 rounded-full bg-black/75 backdrop-blur-md text-sky-300 text-[10px] font-bold tracking-wider uppercase border border-sky-400/20">
                    {isAr ? srv.badgeAr : srv.badgeEn}
                  </span>
                </div>
              </div>

              {/* Body */}
              <div className="p-5 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="text-lg font-bold text-[#0B1B3D] tracking-tight group-hover:text-sky-600 transition-colors">
                    {isAr ? srv.titleAr : srv.titleEn}
                  </h3>
                  <p className="text-xs text-neutral-600 mt-2 line-clamp-3 leading-relaxed">
                    {isAr ? srv.descAr : srv.descEn}
                  </p>

                  <ul className="mt-4 space-y-1.5 border-t border-neutral-100 pt-3">
                    {(isAr ? srv.highlightsAr : srv.highlightsEn).slice(0, 2).map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-[11px] text-neutral-700">
                        <span className="text-sky-600 font-bold">✓</span>
                        <span className="leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 mt-3 border-t border-neutral-100 flex items-center justify-between gap-2">
                  <button
                    type="button"
                    onClick={() => setActiveModalService(srv)}
                    className="text-xs font-bold text-sky-700 hover:text-sky-900 transition-colors cursor-pointer flex items-center gap-1"
                  >
                    <span>{isAr ? 'تفاصيل العلاج' : 'Learn More'}</span>
                    <span>→</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      if (onBookService) {
                        onBookService(isAr ? srv.titleAr : srv.titleEn);
                      }
                    }}
                    className="px-3 py-1.5 rounded-lg bg-[#0B1B3D] hover:bg-sky-600 text-white text-[11px] font-bold transition-all shadow-xs cursor-pointer"
                  >
                    {isAr ? 'حجز' : 'Book'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Service Detail Modal */}
      {activeModalService && (
        <div
          className="fixed inset-0 z-[120] bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
          onClick={() => setActiveModalService(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative my-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActiveModalService(null)}
              className="absolute top-5 right-5 sm:top-6 sm:right-6 w-9 h-9 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-600 font-bold flex items-center justify-center cursor-pointer text-base"
            >
              ✕
            </button>

            <div className="relative aspect-video w-full rounded-2xl overflow-hidden mb-6 bg-neutral-900">
              <img
                src={activeModalService.image}
                alt={isAr ? activeModalService.titleAr : activeModalService.titleEn}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="px-3 py-1 rounded-full bg-sky-500/90 text-white text-[11px] font-bold uppercase tracking-wider inline-block mb-1">
                  {isAr ? activeModalService.badgeAr : activeModalService.badgeEn}
                </span>
                <h3 className="text-2xl font-extrabold">
                  {isAr ? activeModalService.titleAr : activeModalService.titleEn}
                </h3>
              </div>
            </div>

            <p className="text-sm text-neutral-600 leading-relaxed mb-6">
              {isAr ? activeModalService.descAr : activeModalService.descEn}
            </p>

            <div className="p-4 rounded-2xl bg-sky-50/50 border border-sky-100 mb-6">
              <h4 className="text-xs font-bold text-sky-900 uppercase tracking-wider mb-3">
                {isAr ? 'أبرز مميزات العلاج في مركز سكاي' : 'Key Clinical Advantages at SKY Dental'}
              </h4>
              <ul className="space-y-2">
                {(isAr ? activeModalService.highlightsAr : activeModalService.highlightsEn).map((h, i) => (
                  <li key={i} className="flex items-center gap-2 text-xs text-neutral-800">
                    <span className="w-5 h-5 rounded-full bg-sky-600 text-white flex items-center justify-center text-[10px] font-bold shrink-0">
                      ✓
                    </span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                type="button"
                onClick={() => setActiveModalService(null)}
                className="px-4 py-2.5 rounded-xl border border-neutral-200 text-neutral-600 text-xs font-semibold hover:bg-neutral-100 cursor-pointer"
              >
                {isAr ? 'إغلاق' : 'Close'}
              </button>

              <button
                type="button"
                onClick={() => {
                  const srvName = isAr ? activeModalService.titleAr : activeModalService.titleEn;
                  setActiveModalService(null);
                  if (onBookService) onBookService(srvName);
                }}
                className="px-6 py-2.5 rounded-xl bg-[#0B1B3D] hover:bg-sky-600 text-white text-xs font-bold transition-all shadow-md cursor-pointer flex items-center gap-2"
              >
                <span>{isAr ? 'حجز موعد لهذا العلاج' : 'Book for this Service'}</span>
                <span>→</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
