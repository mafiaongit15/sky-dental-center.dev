import React from 'react';
import { Language, clinicInfo } from '../data/clinicData';
import { AppointmentBooking } from './AppointmentBooking';

interface LocationSectionProps {
  lang: Language;
}

export const LocationSection: React.FC<LocationSectionProps> = ({ lang }) => {
  const isAr = lang === 'ar';

  return (
    <section id="contact" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-200/60 text-sky-700 text-xs font-semibold mb-3">
            <span className="w-2 h-2 rounded-full bg-sky-500" />
            <span>{isAr ? 'موقعنا في السالمية، الكويت' : 'Prime Location in Salmiya, Kuwait'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1B3D] tracking-tight">
            {isAr ? 'تواصل معنا وحجز موعدك' : 'Contact & Appointment Booking'}
          </h2>
          <p className="mt-4 text-sm sm:text-base text-neutral-600 leading-relaxed">
            {isAr
              ? 'موقع استراتيجي وسهل الوصول في قلب السالمية، مع خدمة صف السيارات المجانية (فاليه) وأجنحة علاج خاصة بإطلالة بانورامية.'
              : 'Conveniently situated on Salem Al Mubarak Street with dedicated complimentary valet parking and panoramic treatment suites.'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Contact & Location Info */}
          <div className="lg:col-span-5 space-y-6">
            {/* Contact Details Card */}
            <div className="p-6 sm:p-8 rounded-3xl bg-[#0B1B3D] text-white shadow-xl">
              <span className="text-sky-400 text-xs font-bold uppercase tracking-widest block mb-1">
                {isAr ? 'معلومات التواصل المباشر' : 'Direct Contact Information'}
              </span>
              <h3 className="text-2xl font-black mb-6">
                {isAr ? 'مركز سكاي لطب الأسنان' : 'SKY Dental Center'}
              </h3>

              <div className="space-y-5 text-sm">
                {/* Address */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-sky-900/60 border border-sky-700/50 flex items-center justify-center text-sky-300 text-base shrink-0">
                    📍
                  </div>
                  <div>
                    <span className="text-xs text-sky-300 font-semibold block">
                      {isAr ? 'العنوان' : 'Location'}
                    </span>
                    <p className="font-medium text-slate-100 text-xs sm:text-sm mt-0.5 leading-snug">
                      {isAr ? clinicInfo.addressAr : clinicInfo.addressEn}
                    </p>
                    <span className="inline-block mt-1 text-[11px] text-sky-400 font-medium">
                      {isAr ? '✓ تتوفر خدمة صف السيارات المجانية (Valet)' : '✓ Complimentary Valet Parking Available'}
                    </span>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-sky-900/60 border border-sky-700/50 flex items-center justify-center text-sky-300 text-base shrink-0">
                    📞
                  </div>
                  <div>
                    <span className="text-xs text-sky-300 font-semibold block">
                      {isAr ? 'الهاتف الرئيسي' : 'Direct Telephone'}
                    </span>
                    <a
                      href={`tel:${clinicInfo.phoneCall}`}
                      className="text-lg font-mono font-bold text-white hover:text-sky-300 transition-colors block mt-0.5"
                    >
                      {clinicInfo.phoneDisplay}
                    </a>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-emerald-900/60 border border-emerald-700/50 flex items-center justify-center text-emerald-400 text-base shrink-0">
                    💬
                  </div>
                  <div>
                    <span className="text-xs text-emerald-300 font-semibold block">
                      {isAr ? 'واتساب المواعيد' : 'WhatsApp Concierge'}
                    </span>
                    <a
                      href={`https://wa.me/${clinicInfo.whatsappNumber}?text=${encodeURIComponent(isAr ? 'مرحباً، أود حجز موعد في مركز سكاي لطب الأسنان' : 'Hello, I would like to book an appointment at SKY Dental Center')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base font-mono font-bold text-emerald-400 hover:underline block mt-0.5"
                    >
                      {clinicInfo.whatsappDisplay}
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-sky-900/60 border border-sky-700/50 flex items-center justify-center text-sky-300 text-base shrink-0">
                    🕒
                  </div>
                  <div>
                    <span className="text-xs text-sky-300 font-semibold block">
                      {isAr ? 'ساعات العمل' : 'Working Hours'}
                    </span>
                    <p className="text-xs sm:text-sm text-slate-200 mt-0.5">
                      {isAr ? clinicInfo.hoursAr : clinicInfo.hoursEn}
                    </p>
                  </div>
                </div>

                {/* Instagram */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-pink-900/40 border border-pink-700/50 flex items-center justify-center text-pink-300 text-base shrink-0">
                    📷
                  </div>
                  <div>
                    <span className="text-xs text-pink-300 font-semibold block">
                      Instagram
                    </span>
                    <a
                      href={clinicInfo.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-bold text-white hover:text-pink-300 transition-colors block mt-0.5"
                    >
                      {clinicInfo.instagram}
                    </a>
                  </div>
                </div>
              </div>

              {/* Quick Action Links */}
              <div className="mt-8 pt-6 border-t border-sky-800/80 flex items-center gap-3">
                <a
                  href={`https://wa.me/${clinicInfo.whatsappNumber}?text=${encodeURIComponent(isAr ? 'مرحباً، أود حجز موعد' : 'Hello, I would like to book an appointment')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs text-center transition-all shadow-md"
                >
                  {isAr ? 'محادثة واتساب' : 'Chat on WhatsApp'}
                </a>

                <a
                  href={`tel:${clinicInfo.phoneCall}`}
                  className="flex-1 py-3 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs text-center transition-all shadow-md"
                >
                  {isAr ? 'اتصال هاتفي' : 'Call Now'}
                </a>
              </div>
            </div>

            {/* Kuwait / Salmiya Map Card */}
            <div className="rounded-3xl overflow-hidden border border-neutral-200 shadow-sm bg-neutral-100">
              <div className="p-4 bg-white border-b border-neutral-200 flex items-center justify-between text-xs">
                <div>
                  <span className="font-bold text-[#0B1B3D] block">
                    {isAr ? 'خريطة الوصول · السالمية' : 'Google Maps · Salmiya Location'}
                  </span>
                  <span className="text-[10px] font-mono text-neutral-400">
                    29.3443° N, 48.0794° E
                  </span>
                </div>
                <a
                  href={clinicInfo.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-sky-50 text-sky-700 hover:bg-sky-100 font-bold transition-colors flex items-center gap-1.5"
                >
                  <span>{isAr ? 'فتح في خرائط جوجل' : 'Open in Maps'}</span>
                  <span>↗</span>
                </a>
              </div>
              <div className="aspect-[16/10] w-full bg-slate-200 relative overflow-hidden">
                {/* Styled Map Graphic with Pin pointing to 29.34426305830699, 48.07936383696052 */}
                <iframe
                  title="SKY Dental Center Salmiya Kuwait Map"
                  src={clinicInfo.googleMapsEmbedUrl}
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Inline Appointment Form */}
          <div className="lg:col-span-7 bg-slate-50/80 p-6 sm:p-10 rounded-3xl border border-neutral-200/80 shadow-xs">
            <div className="mb-8">
              <span className="text-xs font-bold text-sky-600 uppercase tracking-widest block mb-1">
                {isAr ? 'حجز فوري ومباشر' : 'Online Appointment Request'}
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0B1B3D]">
                {isAr ? 'طلب موعد استشارة جديدة' : 'Book Your Smile Consultation'}
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 mt-2">
                {isAr
                  ? 'املأ النموذج أدناه وسيقوم فريق التنسيق الطبي بالتواصل معك لتأكيد الموعد المناسب لجدولك.'
                  : 'Submit your preferred time and treatment, and our concierge will coordinate your visit seamlessly.'}
              </p>
            </div>

            <AppointmentBooking lang={lang} isModal={false} />
          </div>
        </div>
      </div>
    </section>
  );
};
