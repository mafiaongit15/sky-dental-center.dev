import React, { useState } from 'react';
import { BeforeAfterCase, Language } from '../data/clinicData';

interface BeforeAfterSliderProps {
  cases: BeforeAfterCase[];
  lang: Language;
  onSelectCase?: (caseItem: BeforeAfterCase) => void;
}

export const BeforeAfterSection: React.FC<BeforeAfterSliderProps> = ({ cases, lang }) => {
  const isAr = lang === 'ar';

  const filterCategories = [
    { key: 'all', labelEn: 'All Cases', labelAr: 'جميع الحالات' },
    { key: 'veneers', labelEn: 'Veneers & Hollywood Smile', labelAr: 'الفينير وابتسامة هوليوود' },
    { key: 'orthodontics', labelEn: 'Invisalign & Ortho', labelAr: 'التقويم الشفاف' },
    { key: 'smile-makeover', labelEn: 'Smile Makeovers', labelAr: 'تجميل الابتسامة' },
    { key: 'implants', labelEn: 'Dental Implants', labelAr: 'زراعة الأسنان' }
  ];

  const [activeFilter, setActiveFilter] = useState('all');
  const [sliderPositions, setSliderPositions] = useState<Record<number, number>>({
    1: 50,
    2: 50,
    3: 50,
    4: 50
  });
  const [activeModalCase, setActiveModalCase] = useState<BeforeAfterCase | null>(null);
  const [modalPos, setModalPos] = useState(50);

  const filteredCases = cases.filter(
    (c) => activeFilter === 'all' || c.categoryKey === activeFilter
  );

  const handleDrag = (id: number, clientX: number, containerRect: DOMRect) => {
    const offsetX = clientX - containerRect.left;
    const pct = Math.max(0, Math.min(100, (offsetX / containerRect.width) * 100));
    setSliderPositions((prev) => ({ ...prev, [id]: pct }));
  };

  const handleModalDrag = (clientX: number, containerRect: DOMRect) => {
    const offsetX = clientX - containerRect.left;
    const pct = Math.max(0, Math.min(100, (offsetX / containerRect.width) * 100));
    setModalPos(pct);
  };

  return (
    <section id="before-after" className="py-20 sm:py-28 bg-white border-y border-neutral-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-200/60 text-sky-700 text-xs font-semibold mb-3">
              <span className="w-2 h-2 rounded-full bg-sky-500 animate-pulse" />
              <span>{isAr ? 'نتائج سريرية حقيقية' : 'Verified Clinical Results'}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1B3D] tracking-tight">
              {isAr ? 'معرض قبل وبعد' : 'Before & After Gallery'}
            </h2>
            <p className="mt-3 text-sm sm:text-base text-neutral-600 max-w-2xl leading-relaxed">
              {isAr
                ? 'شاهد نتائج دقيقة وتحولات حقيقية لابتسامات مراجعينا في الكويت بأيدي أطبائنا الاستشاريين، باستخدام أحدث تقنيات الفينير، التقويم الشفاف، والزراعة.'
                : 'Explore authentic clinical transformations crafted by our consultant specialists in Kuwait, featuring micro-thin porcelain veneers, Invisalign, and computer-guided implants.'}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs font-semibold text-neutral-500">
              {isAr ? 'اسحب المقبض لمشاهدة الفرق' : 'Drag divider to compare'}
            </span>
            <div className="w-8 h-8 rounded-full bg-sky-100 flex items-center justify-center text-sky-600 text-sm font-bold shadow-xs">
              ↔
            </div>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {filterCategories.map((cat) => {
            const isActive = activeFilter === cat.key;
            return (
              <button
                key={cat.key}
                onClick={() => setActiveFilter(cat.key)}
                className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#0B1B3D] text-white shadow-md shadow-neutral-900/10'
                    : 'bg-neutral-100/90 text-neutral-600 hover:bg-neutral-200/80'
                }`}
              >
                {isAr ? cat.labelAr : cat.labelEn}
              </button>
            );
          })}
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredCases.map((item) => {
            const pos = sliderPositions[item.id] ?? 50;

            return (
              <div
                key={item.id}
                className="bg-white rounded-2xl sm:rounded-3xl border border-neutral-200/90 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col group"
              >
                {/* Image Comparison Container */}
                <div
                  className="relative aspect-[16/10] sm:aspect-[16/10] w-full bg-neutral-900 overflow-hidden select-none cursor-ew-resize touch-none"
                  onMouseMove={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    handleDrag(item.id, e.clientX, rect);
                  }}
                  onTouchStart={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    if (e.touches && e.touches[0]) {
                      handleDrag(item.id, e.touches[0].clientX, rect);
                    }
                  }}
                  onTouchMove={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    if (e.touches && e.touches[0]) {
                      handleDrag(item.id, e.touches[0].clientX, rect);
                    }
                  }}
                >
                  {/* After Image (Full background) */}
                  <img
                    src={item.afterImage}
                    alt={isAr ? item.titleAr : item.titleEn}
                    className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                  />
                  <div className="absolute top-4 right-4 z-10 px-3 py-1 rounded-full bg-black/75 backdrop-blur-md text-[11px] font-bold text-white uppercase tracking-wider shadow-sm">
                    {isAr ? 'بعد' : 'After'}
                  </div>

                  {/* Before Image (Clipped via clipPath) */}
                  <div
                    className="absolute inset-0 overflow-hidden pointer-events-none"
                    style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
                  >
                    <img
                      src={item.beforeImage}
                      alt={isAr ? `${item.titleAr} قبل` : `${item.titleEn} Before`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full bg-black/75 backdrop-blur-md text-[11px] font-bold text-white uppercase tracking-wider shadow-sm">
                      {isAr ? 'قبل' : 'Before'}
                    </div>
                  </div>

                  {/* Center Divider Handle */}
                  <div
                    className="absolute inset-y-0 w-0.5 bg-white shadow-2xl pointer-events-none"
                    style={{ left: `${pos}%` }}
                  >
                    <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-white text-[#0B1B3D] shadow-2xl flex items-center justify-center text-xs font-black ring-2 ring-sky-500/30">
                      ↔
                    </div>
                  </div>
                </div>

                {/* Quick Switch Bar */}
                <div className="px-5 py-2.5 bg-neutral-50/90 border-b border-neutral-100 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-1.5">
                    <button
                      type="button"
                      onClick={() => setSliderPositions((p) => ({ ...p, [item.id]: 100 }))}
                      className={`px-2.5 py-1 rounded-md transition-colors cursor-pointer text-[11px] font-semibold ${
                        pos >= 90 ? 'bg-[#0B1B3D] text-white' : 'text-neutral-600 hover:bg-neutral-200'
                      }`}
                    >
                      {isAr ? 'قبل (100%)' : 'Before'}
                    </button>
                    <button
                      type="button"
                      onClick={() => setSliderPositions((p) => ({ ...p, [item.id]: 50 }))}
                      className={`px-2.5 py-1 rounded-md transition-colors cursor-pointer text-[11px] font-semibold ${
                        pos > 40 && pos < 60 ? 'bg-[#0B1B3D] text-white' : 'text-neutral-600 hover:bg-neutral-200'
                      }`}
                    >
                      50 / 50
                    </button>
                    <button
                      type="button"
                      onClick={() => setSliderPositions((p) => ({ ...p, [item.id]: 0 }))}
                      className={`px-2.5 py-1 rounded-md transition-colors cursor-pointer text-[11px] font-semibold ${
                        pos <= 10 ? 'bg-[#0B1B3D] text-white' : 'text-neutral-600 hover:bg-neutral-200'
                      }`}
                    >
                      {isAr ? 'بعد (100%)' : 'After'}
                    </button>
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      setActiveModalCase(item);
                      setModalPos(pos);
                    }}
                    className="inline-flex items-center gap-1 text-sky-700 hover:text-sky-900 font-bold transition-colors cursor-pointer"
                  >
                    <span>⤢</span>
                    <span>{isAr ? 'تكبير' : 'Full Preview'}</span>
                  </button>
                </div>

                {/* Content Details */}
                <div className="p-6 flex flex-col justify-between flex-1">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2 text-xs font-semibold text-neutral-500">
                      <span className="px-2.5 py-0.5 rounded-full bg-sky-50 text-sky-700 border border-sky-200/60">
                        {isAr ? item.categoryAr : item.categoryEn}
                      </span>
                      <span className="font-mono text-neutral-400">
                        {isAr ? item.durationAr : item.durationEn}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-[#0B1B3D] tracking-tight mb-2">
                      {isAr ? item.titleAr : item.titleEn}
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed mb-4">
                      {isAr ? item.descAr : item.descEn}
                    </p>

                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/60 mb-4 text-xs text-neutral-700">
                      <span className="font-bold text-[#0B1B3D] block mb-1">
                        {isAr ? 'البروتوكول العلاجي:' : 'Clinical Protocol:'}
                      </span>
                      <p className="leading-relaxed">
                        {isAr ? item.protocolAr : item.protocolEn}
                      </p>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-neutral-100 flex items-center justify-between">
                    <div className="text-xs font-medium text-neutral-600">
                      <span className="text-neutral-400">{isAr ? 'إشراف: ' : 'Specialist: '}</span>
                      <span className="font-bold text-[#0B1B3D]">
                        {isAr ? item.doctorAr : item.doctorEn}
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5 flex-wrap justify-end">
                      {(isAr ? item.tagsAr : item.tagsEn).map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 rounded-md bg-neutral-100 text-neutral-600 text-[10px] font-medium"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeModalCase && (
        <div
          className="fixed inset-0 z-[110] bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={() => setActiveModalCase(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-5 sm:p-6 border-b border-neutral-200 flex items-center justify-between bg-white">
              <div>
                <span className="text-xs font-bold text-sky-600 uppercase tracking-widest block">
                  {isAr ? activeModalCase.categoryAr : activeModalCase.categoryEn}
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-[#0B1B3D]">
                  {isAr ? activeModalCase.titleAr : activeModalCase.titleEn}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setActiveModalCase(null)}
                className="w-10 h-10 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-700 font-bold flex items-center justify-center cursor-pointer text-lg"
              >
                ✕
              </button>
            </div>

            {/* Modal Slider Body */}
            <div className="p-5 sm:p-6 overflow-y-auto space-y-4">
              <div
                className="relative h-72 sm:h-96 w-full rounded-2xl overflow-hidden bg-neutral-950 cursor-ew-resize select-none touch-none"
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  handleModalDrag(e.clientX, rect);
                }}
                onTouchMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  handleModalDrag(e.touches[0].clientX, rect);
                }}
              >
                <img
                  src={activeModalCase.afterImage}
                  alt="After"
                  className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none"
                />
                <div className="absolute top-4 right-4 z-10 px-3 py-1 rounded-full bg-black/75 backdrop-blur-md text-xs font-bold text-white uppercase tracking-wider">
                  {isAr ? 'بعد العلاج' : 'After Treatment'}
                </div>

                <div
                  className="absolute inset-0 overflow-hidden pointer-events-none"
                  style={{ clipPath: `inset(0 ${100 - modalPos}% 0 0)` }}
                >
                  <img
                    src={activeModalCase.beforeImage}
                    alt="Before"
                    className="w-full h-full object-cover select-none"
                  />
                  <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full bg-black/75 backdrop-blur-md text-xs font-bold text-white uppercase tracking-wider">
                    {isAr ? 'قبل العلاج' : 'Before Treatment'}
                  </div>
                </div>

                <div
                  className="absolute inset-y-0 w-0.5 bg-white shadow-2xl pointer-events-none"
                  style={{ left: `${modalPos}%` }}
                >
                  <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-white text-[#0B1B3D] shadow-2xl flex items-center justify-center text-xs font-black ring-2 ring-sky-500/40">
                    ↔
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between text-xs text-neutral-500 pt-2">
                <span>{isAr ? 'اسحب لمقارنة أدق التفاصيل' : 'Drag to compare clinical nuances'}</span>
                <span className="font-mono font-bold text-[#0B1B3D]">
                  {Math.round(modalPos)}% / {100 - Math.round(modalPos)}%
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
