import React, { useState } from 'react';
import { Language, clinicSuites } from '../data/clinicData';

interface ClinicTourProps {
  lang: Language;
}

export const ClinicTourSection: React.FC<ClinicTourProps> = ({ lang }) => {
  const isAr = lang === 'ar';
  const [selectedSuiteId, setSelectedSuiteId] = useState(clinicSuites[0].id);
  const [lightboxSuite, setLightboxSuite] = useState<(typeof clinicSuites)[0] | null>(null);

  const currentSuite = clinicSuites.find((s) => s.id === selectedSuiteId) || clinicSuites[0];
  const currentIndex = clinicSuites.findIndex((s) => s.id === currentSuite.id);

  const handlePrev = () => {
    const prevIdx = (currentIndex - 1 + clinicSuites.length) % clinicSuites.length;
    setSelectedSuiteId(clinicSuites[prevIdx].id);
  };

  const handleNext = () => {
    const nextIdx = (currentIndex + 1) % clinicSuites.length;
    setSelectedSuiteId(clinicSuites[nextIdx].id);
  };

  return (
    <section id="about" className="py-20 sm:py-28 bg-slate-50/70 border-t border-neutral-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-200/60 text-sky-700 text-xs font-semibold mb-3">
              <span className="w-2 h-2 rounded-full bg-sky-500" />
              <span>{isAr ? 'بيئة علاجية 5 نجوم' : 'Five-Star Clinical Sanctuary'}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1B3D] tracking-tight">
              {isAr ? 'عن مركز سكاي وأجنحتنا الطبية' : 'The Center & Private Suites'}
            </h2>
            <p className="mt-3 text-sm sm:text-base text-neutral-600 max-w-2xl leading-relaxed">
              {isAr
                ? 'صُمم مركز سكاي في السالمية ليجمع بين أحدث تقنيات طب الأسنان العالمية والفخامة والخصوصية المطلقة التي تليق بمراجعينا في الكويت.'
                : 'Engineered to transcend traditional clinical settings, SKY Dental Center merges architectural elegance with hospital-grade sterility and cutting-edge 3D diagnostic suites.'}
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handlePrev}
              className="w-11 h-11 rounded-full bg-white border border-neutral-200 text-[#0B1B3D] hover:bg-neutral-100 flex items-center justify-center font-bold shadow-xs transition-colors cursor-pointer"
            >
              {isAr ? '→' : '←'}
            </button>
            <button
              type="button"
              onClick={handleNext}
              className="w-11 h-11 rounded-full bg-[#0B1B3D] text-white hover:bg-sky-600 flex items-center justify-center font-bold shadow-xs transition-colors cursor-pointer"
            >
              {isAr ? '←' : '→'}
            </button>
          </div>
        </div>

        {/* Big Showcase Card */}
        <div className="bg-white rounded-3xl border border-neutral-200 shadow-sm overflow-hidden mb-8 grid grid-cols-1 lg:grid-cols-12">
          {/* Photo Viewport */}
          <div className="lg:col-span-7 relative aspect-[4/3] lg:aspect-auto lg:min-h-[460px] bg-neutral-950 overflow-hidden group">
            <img
              src={currentSuite.image}
              alt={isAr ? currentSuite.titleAr : currentSuite.titleEn}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute top-4 left-4 flex items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-black/75 backdrop-blur-md text-white text-xs font-semibold">
                {isAr ? currentSuite.categoryAr : currentSuite.categoryEn}
              </span>
            </div>

            <button
              type="button"
              onClick={() => setLightboxSuite(currentSuite)}
              className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-black/70 hover:bg-black/85 backdrop-blur-md text-white text-xs font-medium flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <span>⤢</span>
              <span>{isAr ? 'ملء الشاشة' : 'Full Screen'}</span>
            </button>

            <div className="absolute bottom-4 left-4 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-white text-xs font-mono">
              {currentIndex + 1} / {clinicSuites.length}
            </div>
          </div>

          {/* Details */}
          <div className="lg:col-span-5 p-6 sm:p-10 flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono font-bold text-sky-600 uppercase tracking-widest block mb-2">
                {isAr ? currentSuite.subtitleAr : currentSuite.subtitleEn}
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0B1B3D] tracking-tight mb-4">
                {isAr ? currentSuite.titleAr : currentSuite.titleEn}
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                {isAr ? currentSuite.descAr : currentSuite.descEn}
              </p>

              <div className="mt-6 pt-6 border-t border-neutral-100 grid grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/60">
                  <span className="text-[10px] uppercase font-bold text-neutral-400 block">
                    {isAr ? 'التعقيم والسلامة' : 'Sterility Standard'}
                  </span>
                  <span className="font-bold text-[#0B1B3D] mt-0.5 block">
                    {isAr ? 'معايير المستشفيات Class-B' : 'Class-B Autoclave'}
                  </span>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/60">
                  <span className="text-[10px] uppercase font-bold text-neutral-400 block">
                    {isAr ? 'الخصوصية' : 'Privacy'}
                  </span>
                  <span className="font-bold text-[#0B1B3D] mt-0.5 block">
                    {isAr ? 'أجنحة مستقلة VIP' : '100% Private Suites'}
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-neutral-100 flex items-center justify-between">
              <span className="text-xs text-neutral-500">
                {isAr ? 'السالمية، الكويت' : 'Salmiya, Kuwait'}
              </span>
              <button
                type="button"
                onClick={() => setLightboxSuite(currentSuite)}
                className="text-xs font-bold text-sky-700 hover:text-sky-900 cursor-pointer"
              >
                {isAr ? 'عرض الصورة كاملة ↗' : 'View High-Res Photo ↗'}
              </button>
            </div>
          </div>
        </div>

        {/* Thumbnail Selector Filmstrip */}
        <div className="flex lg:grid lg:grid-cols-6 gap-3 overflow-x-auto pb-2 scrollbar-none">
          {clinicSuites.map((suite) => {
            const isSelected = suite.id === currentSuite.id;
            return (
              <button
                key={suite.id}
                type="button"
                onClick={() => setSelectedSuiteId(suite.id)}
                className={`w-[160px] sm:w-[200px] lg:w-auto shrink-0 text-left rounded-2xl overflow-hidden border transition-all cursor-pointer flex flex-col bg-white ${
                  isSelected
                    ? 'border-[#0B1B3D] shadow-md ring-2 ring-[#0B1B3D]/20'
                    : 'border-neutral-200/80 hover:border-neutral-400 opacity-80 hover:opacity-100'
                }`}
              >
                <div className="aspect-[4/3] w-full overflow-hidden bg-neutral-900">
                  <img
                    src={suite.image}
                    alt={isAr ? suite.titleAr : suite.titleEn}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-2.5">
                  <h4 className="text-[11px] font-bold text-[#0B1B3D] truncate">
                    {isAr ? suite.titleAr : suite.titleEn}
                  </h4>
                  <p className="text-[10px] text-neutral-500 truncate">
                    {isAr ? suite.categoryAr : suite.categoryEn}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxSuite && (
        <div
          className="fixed inset-0 z-[120] bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setLightboxSuite(null)}
        >
          <div
            className="relative max-w-5xl w-full max-h-[90vh] bg-neutral-950 rounded-3xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setLightboxSuite(null)}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/70 hover:bg-black/90 text-white font-bold flex items-center justify-center cursor-pointer"
            >
              ✕
            </button>
            <img
              src={lightboxSuite.image}
              alt={isAr ? lightboxSuite.titleAr : lightboxSuite.titleEn}
              className="w-full h-full max-h-[80vh] object-contain"
            />
            <div className="p-4 bg-neutral-900 text-white flex items-center justify-between text-xs">
              <div>
                <span className="font-bold block">
                  {isAr ? lightboxSuite.titleAr : lightboxSuite.titleEn}
                </span>
                <span className="text-neutral-400 text-[11px]">
                  {isAr ? lightboxSuite.subtitleAr : lightboxSuite.subtitleEn}
                </span>
              </div>
              <span className="text-neutral-400 font-mono">
                {isAr ? 'مركز سكاي لطب الأسنان' : 'SKY Dental Center'}
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
