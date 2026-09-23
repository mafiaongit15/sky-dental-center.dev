import React, { useState } from 'react';
import { Language, clinicInfo, servicesData, doctorsData } from '../data/clinicData';
import { SkyMolarEmblem, SkySunEmblem } from './SkyLogo';

interface AppointmentProps {
  lang: Language;
  preselectedService?: string;
  isOpen?: boolean;
  onClose?: () => void;
  isModal?: boolean;
}

export const AppointmentBooking: React.FC<AppointmentProps> = ({
  lang,
  preselectedService,
  isOpen = true,
  onClose,
  isModal = false
}) => {
  const isAr = lang === 'ar';

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState(preselectedService || (isAr ? 'إنفزلاين والتقويم الشفاف' : 'Invisalign & Clear Aligners'));
  const [doctor, setDoctor] = useState(isAr ? 'أي طبيب متاح' : 'First Available Consultant');
  const [preferredSlot, setPreferredSlot] = useState(isAr ? 'صباحاً (9:00 ص - 1:00 م)' : 'Morning (9:00 AM - 1:00 PM)');
  const [date, setDate] = useState('');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;
    setSubmitted(true);
    setTimeout(() => {
      if (onClose) onClose();
      setSubmitted(false);
    }, 2800);
  };

  const handleWhatsAppBooking = () => {
    const textMsg = isAr
      ? `مرحباً مركز سكاي لطب الأسنان، أود حجز موعد استشارة:\n• الاسم: ${name || '—'}\n• الهاتف: ${phone || '—'}\n• العلاج المطلوب: ${service}\n• الطبيب: ${doctor}\n• التاريخ المقترح: ${date || 'في أقرب وقت'}\n• الفترة: ${preferredSlot}\n• ملاحظات: ${notes || 'لا يوجد'}`
      : `Hello SKY Dental Center Kuwait, I would like to book a consultation:\n• Name: ${name || '—'}\n• Phone: ${phone || '—'}\n• Treatment: ${service}\n• Specialist: ${doctor}\n• Date: ${date || 'Earliest available'}\n• Time Slot: ${preferredSlot}\n• Notes: ${notes || 'None'}`;

    const url = `https://wa.me/${clinicInfo.whatsappNumber}?text=${encodeURIComponent(textMsg)}`;
    window.open(url, '_blank');
  };

  const formContent = (
    <div className="w-full">
      {submitted ? (
        <div className="p-8 text-center bg-emerald-50 rounded-2xl border border-emerald-200">
          <div className="w-16 h-16 rounded-full bg-emerald-500 text-white flex items-center justify-center text-3xl mx-auto mb-4 shadow-lg shadow-emerald-500/20">
            ✓
          </div>
          <h3 className="text-xl font-bold text-emerald-950">
            {isAr ? 'تم استلام طلب موعدك بنجاح!' : 'Appointment Request Received!'}
          </h3>
          <p className="text-sm text-emerald-800 mt-2 max-w-md mx-auto leading-relaxed">
            {isAr
              ? 'سيتواصل معك فريق الاستقبال والتنسيق الطبي في مركز سكاي خلال دقائق لتأكيد الموعد المناسب لك.'
              : 'Our care coordination concierge at SKY Dental Center will contact you shortly to confirm your booking.'}
          </p>
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              type="button"
              onClick={handleWhatsAppBooking}
              className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-all shadow-md cursor-pointer flex items-center gap-2"
            >
              <span>{isAr ? 'تأكيد فوري عبر واتساب' : 'Instant WhatsApp Confirmation'}</span>
              <span>→</span>
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-[#0B1B3D] mb-1.5">
                {isAr ? 'الاسم الكامل *' : 'Full Name *'}
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder={isAr ? 'مثال: عبد الله الأحمد' : 'e.g., Sarah Al-Kuwaiti'}
                className="w-full px-4 py-3 bg-white border border-neutral-300 rounded-xl text-sm text-[#0B1B3D] placeholder-neutral-400 focus:outline-none focus:border-sky-600 focus:ring-2 focus:ring-sky-600/10 transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-[#0B1B3D] mb-1.5">
                {isAr ? 'رقم الهاتف (الكويت) *' : 'Phone Number (Kuwait) *'}
              </label>
              <div className="relative flex items-center">
                <span className="absolute left-3 sm:left-4 text-xs font-mono font-bold text-neutral-500 select-none">
                  🇰🇼 +965
                </span>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="9999 0000"
                  className="w-full pl-20 pr-4 py-3 bg-white border border-neutral-300 rounded-xl text-sm text-[#0B1B3D] placeholder-neutral-400 focus:outline-none focus:border-sky-600 focus:ring-2 focus:ring-sky-600/10 transition-all font-mono"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-[#0B1B3D] mb-1.5">
                {isAr ? 'العلاج أو الخدمة المطلوبة' : 'Treatment or Service'}
              </label>
              <select
                value={service}
                onChange={(e) => setService(e.target.value)}
                className="w-full px-4 py-3 bg-white border border-neutral-300 rounded-xl text-sm text-[#0B1B3D] focus:outline-none focus:border-sky-600 focus:ring-2 focus:ring-sky-600/10 transition-all"
              >
                {servicesData.map((s) => (
                  <option key={s.id} value={isAr ? s.titleAr : s.titleEn}>
                    {isAr ? s.titleAr : s.titleEn}
                  </option>
                ))}
                <option value={isAr ? 'فحص واستشارة عامة' : 'Comprehensive Oral Consultation'}>
                  {isAr ? 'فحص واستشارة شاملة' : 'Comprehensive Oral Consultation'}
                </option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-[#0B1B3D] mb-1.5">
                {isAr ? 'الطبيب الاستشاري المفضل' : 'Preferred Consultant'}
              </label>
              <select
                value={doctor}
                onChange={(e) => setDoctor(e.target.value)}
                className="w-full px-4 py-3 bg-white border border-neutral-300 rounded-xl text-sm text-[#0B1B3D] focus:outline-none focus:border-sky-600 focus:ring-2 focus:ring-sky-600/10 transition-all"
              >
                <option value={isAr ? 'أي طبيب استشاري متاح' : 'First Available Consultant'}>
                  {isAr ? 'أي طبيب استشاري متاح' : 'First Available Consultant'}
                </option>
                {doctorsData.map((d) => (
                  <option key={d.id} value={isAr ? d.nameAr : d.nameEn}>
                    {isAr ? `${d.nameAr} (${d.specialtyAr})` : `${d.nameEn} - ${d.specialtyEn}`}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-[#0B1B3D] mb-1.5">
                {isAr ? 'التاريخ المفضل' : 'Preferred Date'}
              </label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full px-4 py-3 bg-white border border-neutral-300 rounded-xl text-sm text-[#0B1B3D] focus:outline-none focus:border-sky-600 focus:ring-2 focus:ring-sky-600/10 transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-[#0B1B3D] mb-1.5">
                {isAr ? 'الوقت المناسب' : 'Preferred Time Slot'}
              </label>
              <select
                value={preferredSlot}
                onChange={(e) => setPreferredSlot(e.target.value)}
                className="w-full px-4 py-3 bg-white border border-neutral-300 rounded-xl text-sm text-[#0B1B3D] focus:outline-none focus:border-sky-600 focus:ring-2 focus:ring-sky-600/10 transition-all"
              >
                <option value={isAr ? 'صباحاً (9:00 ص - 1:00 م)' : 'Morning (9:00 AM - 1:00 PM)'}>
                  {isAr ? 'صباحاً (9:00 ص - 1:00 م)' : 'Morning (9:00 AM - 1:00 PM)'}
                </option>
                <option value={isAr ? 'ظهراً (1:00 م - 5:00 م)' : 'Afternoon (1:00 PM - 5:00 PM)'}>
                  {isAr ? 'ظهراً (1:00 م - 5:00 م)' : 'Afternoon (1:00 PM - 5:00 PM)'}
                </option>
                <option value={isAr ? 'مساءً (5:00 م - 9:00 م)' : 'Evening (5:00 PM - 9:00 PM)'}>
                  {isAr ? 'مساءً (5:00 م - 9:00 م)' : 'Evening (5:00 PM - 9:00 PM)'}
                </option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-[#0B1B3D] mb-1.5">
              {isAr ? 'ملاحظات أو استفسارات إضافية' : 'Additional Message / Notes'}
            </label>
            <textarea
              rows={3}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder={
                isAr
                  ? 'اذكر أي تفاصيل إضافية (ألم حالي، استفسار عن خطة العلاج أو التكلفة، تأمين صحي...)'
                  : 'Let us know if you have specific goals, tooth discomfort, or insurance inquiries...'
              }
              className="w-full px-4 py-3 bg-white border border-neutral-300 rounded-xl text-sm text-[#0B1B3D] placeholder-neutral-400 focus:outline-none focus:border-sky-600 focus:ring-2 focus:ring-sky-600/10 transition-all resize-none"
            />
          </div>

          {/* Action Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
            <button
              type="submit"
              className="w-full sm:flex-1 py-3.5 px-6 rounded-xl bg-[#0B1B3D] hover:bg-[#0284C7] text-white font-bold text-sm transition-all shadow-md shadow-neutral-900/10 active:scale-98 cursor-pointer flex items-center justify-center gap-2"
            >
              <span>{isAr ? 'تأكيد طلب الموعد' : 'Submit Appointment Request'}</span>
              <span>→</span>
            </button>

            <button
              type="button"
              onClick={handleWhatsAppBooking}
              className="w-full sm:w-auto py-3.5 px-5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm transition-all shadow-md shadow-emerald-700/20 active:scale-98 cursor-pointer flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
              </svg>
              <span>{isAr ? 'حجز مباشر بالواتساب' : 'WhatsApp Instant'}</span>
            </button>
          </div>
        </form>
      )}
    </div>
  );

  if (!isModal) {
    return formContent;
  }

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[120] bg-black/75 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative my-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 sm:top-6 sm:right-6 w-9 h-9 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-600 font-bold flex items-center justify-center cursor-pointer text-base"
        >
          ✕
        </button>

        <div className="mb-6 flex items-start justify-between">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 text-sky-800 text-xs font-semibold mb-2 border border-sky-200/60">
              <span className="w-2 h-2 rounded-full bg-sky-500" />
              <span>{isAr ? 'مركز سكاي لطب الأسنان · الكويت' : 'SKY Dental Center · Kuwait'}</span>
            </div>
            <h3 className="text-2xl font-extrabold text-[#1B1F3B]">
              {isAr ? 'حجز موعد استشارة طبية' : 'Book a Medical Consultation'}
            </h3>
            <p className="text-xs sm:text-sm text-neutral-500 mt-1">
              {isAr
                ? 'السالمية، شارع سالم المبارك · هاتف: 22207590 965+ · واتساب: 99917590 965+'
                : 'Salmiya, Salem Al Mubarak St · Tel: +965 2220 7590 · WhatsApp: +965 9991 7590'}
            </p>
          </div>

          <div className="hidden sm:flex items-center gap-2 pr-8">
            <div className="w-10 h-12">
              <SkyMolarEmblem color="#1B1F3B" />
            </div>
          </div>
        </div>

        {formContent}
      </div>
    </div>
  );
};
