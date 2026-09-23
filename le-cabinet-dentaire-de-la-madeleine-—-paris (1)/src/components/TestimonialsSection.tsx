import React from 'react';
import { Language, testimonialsData } from '../data/clinicData';

interface TestimonialsSectionProps {
  lang: Language;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ lang }) => {
  const isAr = lang === 'ar';

  return (
    <section id="testimonials" className="py-20 sm:py-28 bg-slate-50/70 border-t border-neutral-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-200/60 text-sky-700 text-xs font-semibold mb-3">
            <span className="w-2 h-2 rounded-full bg-sky-500" />
            <span>{isAr ? 'ثقة وتجارب مراجعينا في الكويت' : 'Verified Patient Experiences'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1B3D] tracking-tight">
            {isAr ? 'ماذا يقول مراجعونا عن مركز سكاي؟' : 'Patient Stories & Reviews'}
          </h2>
          <p className="mt-4 text-sm sm:text-base text-neutral-600 leading-relaxed">
            {isAr
              ? 'نفخر بثقة أكثر من 16,000 مراجع من مختلف مناطق الكويت والخليج، يشاركون تجاربهم مع الرعاية الطبية الفائقة والنتائج الملموسة.'
              : 'Discover authentic feedback from over 16,000 patients across Kuwait who trusted our specialists with their smile transformations.'}
          </p>

          <div className="mt-6 inline-flex items-center gap-3 px-4 py-2 rounded-2xl bg-white border border-neutral-200/80 shadow-xs">
            <div className="flex text-amber-400 text-sm">
              {'★★★★★'}
            </div>
            <span className="text-xs font-bold text-[#0B1B3D]">
              4.9 / 5.0
            </span>
            <span className="text-xs text-neutral-400">·</span>
            <span className="text-xs text-neutral-600">
              {isAr ? 'تقييمات مراجعي جوجل الموثقة في الكويت' : 'Verified Google Reviews in Kuwait'}
            </span>
          </div>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonialsData.map((t) => (
            <div
              key={t.id}
              className="bg-white rounded-2xl sm:rounded-3xl p-6 border border-neutral-200/80 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-amber-400 text-xs tracking-wider">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>
                  <span className="text-[10px] font-mono text-neutral-400">
                    {isAr ? t.dateAr : t.dateEn}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed italic mb-6">
                  "{isAr ? t.textAr : t.textEn}"
                </p>
              </div>

              <div className="pt-4 border-t border-neutral-100 flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-bold text-[#0B1B3D]">
                    {isAr ? t.nameAr : t.nameEn}
                  </h4>
                  <p className="text-[11px] text-neutral-500">
                    {isAr ? t.locationAr : t.locationEn}
                  </p>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-sky-50 text-sky-700 text-[10px] font-semibold border border-sky-100">
                  {isAr ? t.serviceAr : t.serviceEn}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
