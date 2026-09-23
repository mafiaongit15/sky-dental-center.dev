import React, { useState } from 'react';
import { Doctor, Language, doctorsData } from '../data/clinicData';

interface DoctorsSectionProps {
  lang: Language;
  onBookWithDoctor?: (doctorName: string) => void;
}

export const DoctorsSection: React.FC<DoctorsSectionProps> = ({ lang, onBookWithDoctor }) => {
  const isAr = lang === 'ar';
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);

  return (
    <section id="doctors" className="py-20 sm:py-28 bg-slate-50/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-200/60 text-sky-700 text-xs font-semibold mb-3">
            <span className="w-2 h-2 rounded-full bg-sky-500" />
            <span>{isAr ? 'نخبة أطباء واستشاريي الكويت' : 'World-Class Clinical Faculty'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1B3D] tracking-tight">
            {isAr ? 'الفريق الطبي الاستشاري' : 'Consultant Medical Team'}
          </h2>
          <p className="mt-4 text-sm sm:text-base text-neutral-600 leading-relaxed">
            {isAr
              ? 'يضم مركز سكاي نخبة من كبار أطباء الأسنان الاستشاريين الحاصلين على الزمالات الملكية البريطانية والبورد الألماني والكندي، ملتزمون بتقديم أدق النتائج وأعلى معايير الأمان.'
              : 'Our clinical specialists hold prestigious fellowships from the Royal College of Surgeons (UK), German Board certifications, and North American Masterships, delivering world-class dental care.'}
          </p>
        </div>

        {/* Doctors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctorsData.map((doc) => (
            <div
              key={doc.id}
              className="bg-white rounded-2xl sm:rounded-3xl border border-neutral-200/80 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              {/* Photo Viewport */}
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-neutral-950">
                <img
                  src={doc.image}
                  alt={isAr ? doc.nameAr : doc.nameEn}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-neutral-950/20 to-transparent" />

                {/* Floating Tags */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                  <span className="px-3 py-1 rounded-full bg-[#0B1B3D]/85 backdrop-blur-md text-sky-300 text-[11px] font-semibold tracking-wide border border-sky-400/20">
                    {isAr ? doc.specialtyAr : doc.specialtyEn}
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="text-xl font-extrabold tracking-tight">
                    {isAr ? doc.nameAr : doc.nameEn}
                  </h3>
                  <p className="text-xs text-sky-300 font-medium mt-0.5">
                    {isAr ? doc.titleAr : doc.titleEn}
                  </p>
                </div>
              </div>

              {/* Bio & Details */}
              <div className="p-6 flex flex-col justify-between flex-1 space-y-4">
                <div>
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/60 mb-3">
                    <span className="text-[10px] font-bold text-sky-800 uppercase tracking-widest block mb-1">
                      {isAr ? 'المؤهلات والشهادات' : 'Qualifications & Credentials'}
                    </span>
                    <p className="text-xs font-medium text-neutral-800 leading-snug">
                      {isAr ? doc.qualificationAr : doc.qualificationEn}
                    </p>
                  </div>

                  <p className="text-xs text-neutral-600 leading-relaxed">
                    {isAr ? doc.experienceAr : doc.experienceEn}
                  </p>
                </div>

                <div className="pt-4 border-t border-neutral-100 flex items-center gap-2.5">
                  <button
                    type="button"
                    onClick={() => setSelectedDoctor(doc)}
                    className="flex-1 py-2.5 px-3 rounded-xl bg-neutral-100 hover:bg-neutral-200 text-[#0B1B3D] text-xs font-bold transition-colors cursor-pointer text-center"
                  >
                    {isAr ? 'عرض الملف الطبي' : 'View Profile'}
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      if (onBookWithDoctor) {
                        onBookWithDoctor(isAr ? doc.nameAr : doc.nameEn);
                      }
                    }}
                    className="py-2.5 px-4 rounded-xl bg-[#0B1B3D] hover:bg-[#0284C7] text-white text-xs font-bold transition-all shadow-xs cursor-pointer text-center"
                  >
                    {isAr ? 'حجز موعد' : 'Book'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Doctor Profile Modal */}
      {selectedDoctor && (
        <div
          className="fixed inset-0 z-[120] bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
          onClick={() => setSelectedDoctor(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative my-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedDoctor(null)}
              className="absolute top-5 right-5 sm:top-6 sm:right-6 w-9 h-9 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-600 font-bold flex items-center justify-center cursor-pointer text-base"
            >
              ✕
            </button>

            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-6">
              <img
                src={selectedDoctor.image}
                alt={isAr ? selectedDoctor.nameAr : selectedDoctor.nameEn}
                className="w-28 h-28 sm:w-36 sm:h-36 rounded-2xl object-cover object-top shadow-md border-2 border-sky-100 shrink-0"
              />
              <div className="text-center sm:text-left">
                <span className="px-3 py-1 rounded-full bg-sky-50 text-sky-700 text-xs font-bold inline-block mb-2">
                  {isAr ? selectedDoctor.specialtyAr : selectedDoctor.specialtyEn}
                </span>
                <h3 className="text-2xl font-extrabold text-[#0B1B3D]">
                  {isAr ? selectedDoctor.nameAr : selectedDoctor.nameEn}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-500 font-medium mt-1">
                  {isAr ? selectedDoctor.titleAr : selectedDoctor.titleEn}
                </p>
              </div>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-neutral-700">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                <h4 className="font-bold text-[#0B1B3D] mb-1">
                  {isAr ? 'المؤهلات العلمية والزمالات' : 'Credentials & Fellowships'}
                </h4>
                <p className="text-neutral-600 leading-relaxed">
                  {isAr ? selectedDoctor.qualificationAr : selectedDoctor.qualificationEn}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-sky-50/50 border border-sky-100">
                <h4 className="font-bold text-sky-900 mb-1">
                  {isAr ? 'نبذة عن الخبرة السريرية' : 'Clinical Background & Specialization'}
                </h4>
                <p className="text-neutral-700 leading-relaxed">
                  {isAr ? selectedDoctor.experienceAr : selectedDoctor.experienceEn}
                </p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={() => setSelectedDoctor(null)}
                className="px-4 py-2.5 rounded-xl border border-neutral-200 text-neutral-600 text-xs font-semibold hover:bg-neutral-100 cursor-pointer"
              >
                {isAr ? 'إغلاق' : 'Close'}
              </button>
              <button
                type="button"
                onClick={() => {
                  const docName = isAr ? selectedDoctor.nameAr : selectedDoctor.nameEn;
                  setSelectedDoctor(null);
                  if (onBookWithDoctor) onBookWithDoctor(docName);
                }}
                className="px-5 py-2.5 rounded-xl bg-[#0B1B3D] hover:bg-[#0284C7] text-white text-xs font-bold transition-all shadow-md cursor-pointer"
              >
                {isAr ? `حجز موعد مع ${selectedDoctor.nameAr}` : `Book with ${selectedDoctor.nameEn}`}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
