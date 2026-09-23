/**
 * SKY Dental Center — Salmiya, Kuwait
 * Premium Dental Care Website (English & Arabic)
 */

import React, { useState, useEffect } from 'react';
import {
  clinicInfo,
  trustStats,
  Language,
  servicesData,
  casesData
} from './data/clinicData';
import { SkyDentalBrand, SkyDentalEmblem } from './components/SkyLogo';
import { ServicesSection } from './components/ServicesSection';
import { DoctorsSection } from './components/DoctorsSection';
import { BeforeAfterSection } from './components/BeforeAfterSlider';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ClinicTourSection } from './components/ClinicTourSection';
import { LocationSection } from './components/LocationSection';
import { AppointmentBooking } from './components/AppointmentBooking';

// Hero photography assets
import heroSmile from './assets/images/hero_parisian_smile_1790112441886.jpg';
import heroAligner from './assets/images/smile_aesthetic_aligner_1790112454596.jpg';
import heroClinic from './assets/images/cabinet_reception_curved_1790113339347.jpg';

export default function App() {
  // Language State: 'en' or 'ar'
  const [lang, setLang] = useState<Language>('en');
  const isAr = lang === 'ar';

  // Mobile Navigation Drawer
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Appointment Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalPreselectedService, setModalPreselectedService] = useState<string>('');

  // Lock body overflow when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Update document html dir and lang attribute
  useEffect(() => {
    document.documentElement.dir = isAr ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [lang, isAr]);

  const handleOpenAppointment = (serviceName?: string) => {
    if (serviceName) setModalPreselectedService(serviceName);
    setIsModalOpen(true);
    setMobileMenuOpen(false);
  };

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleLanguage = () => {
    setLang((prev) => (prev === 'en' ? 'ar' : 'en'));
  };

  return (
    <div
      dir={isAr ? 'rtl' : 'ltr'}
      className="min-h-screen bg-[#F8FAFC] text-slate-900 selection:bg-[#0284C7] selection:text-white pb-20 md:pb-0"
    >
      {/* ========================================== */}
      {/* TOP ANNOUNCEMENT & CONTACT BAR             */}
      {/* ========================================== */}
      <div className="bg-[#0B1B3D] text-slate-200 text-xs py-2 px-4 sm:px-6 lg:px-8 border-b border-sky-950/60 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-sky-300">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>
                {isAr
                  ? 'السالمية، شارع سالم المبارك · مجمع سيمفوني'
                  : 'Salmiya, Salem Al Mubarak St · Symphony Style Mall'}
              </span>
            </span>
            <span className="text-slate-400">|</span>
            <span className="text-slate-300 text-[11px]">
              {isAr ? clinicInfo.hoursAr : clinicInfo.hoursEn}
            </span>
          </div>

          <div className="flex items-center gap-5">
            <a
              href={`tel:${clinicInfo.phoneCall}`}
              className="hover:text-sky-300 font-mono transition-colors flex items-center gap-1"
            >
              <span>📞</span>
              <span>{clinicInfo.phoneDisplay}</span>
            </a>
            <a
              href={`https://wa.me/${clinicInfo.whatsappNumber}?text=${encodeURIComponent(isAr ? 'مرحباً، أود حجز موعد في مركز سكاي' : 'Hello, I would like to book an appointment at SKY Dental')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-400 hover:text-emerald-300 font-semibold transition-colors flex items-center gap-1"
            >
              <span>💬</span>
              <span>{isAr ? 'واتساب' : 'WhatsApp'}</span>
            </a>
            <a
              href={clinicInfo.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-300 transition-colors text-[11px] font-medium"
            >
              {clinicInfo.instagram}
            </a>
          </div>
        </div>
      </div>

      {/* ========================================== */}
      {/* NAVIGATION BAR (Fixed)                     */}
      {/* ========================================== */}
      <header className="sticky top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 sm:h-20 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="group cursor-pointer"
          >
            <SkyDentalBrand lang={lang} theme="light" />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold text-slate-700">
            <button
              onClick={() => scrollToSection('services')}
              className="hover:text-[#0284C7] transition-colors cursor-pointer"
            >
              {isAr ? 'الخدمات والعلاجات' : 'Services'}
            </button>
            <button
              onClick={() => scrollToSection('doctors')}
              className="hover:text-[#0284C7] transition-colors cursor-pointer"
            >
              {isAr ? 'أطباؤنا' : 'Doctors'}
            </button>
            <button
              onClick={() => scrollToSection('before-after')}
              className="hover:text-[#0284C7] transition-colors cursor-pointer"
            >
              {isAr ? 'قبل وبعد' : 'Before & After'}
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="hover:text-[#0284C7] transition-colors cursor-pointer"
            >
              {isAr ? 'عن المركز' : 'About Center'}
            </button>
            <button
              onClick={() => scrollToSection('testimonials')}
              className="hover:text-[#0284C7] transition-colors cursor-pointer"
            >
              {isAr ? 'آراء المرضى' : 'Testimonials'}
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="hover:text-[#0284C7] transition-colors cursor-pointer"
            >
              {isAr ? 'تواصل معنا' : 'Contact'}
            </button>
          </nav>

          {/* Header Action Controls */}
          <div className="flex items-center gap-3">
            {/* Language Switcher Button */}
            <button
              type="button"
              onClick={toggleLanguage}
              aria-label={isAr ? 'Switch to English' : 'التبديل إلى العربية'}
              className="px-3 py-1.5 rounded-full border border-slate-300 hover:border-sky-500 bg-slate-50 hover:bg-sky-50 text-xs font-bold text-[#0B1B3D] transition-all cursor-pointer flex items-center gap-1.5 shadow-xs"
            >
              <span className="text-sky-600">🌐</span>
              <span>{isAr ? 'EN' : 'عربي'}</span>
            </button>

            {/* Book Appointment CTA (Desktop) */}
            <button
              type="button"
              onClick={() => handleOpenAppointment()}
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#0B1B3D] hover:bg-[#0284C7] text-white text-xs font-bold transition-all duration-200 shadow-md shadow-neutral-900/10 active:scale-98 cursor-pointer"
            >
              <span>{isAr ? 'احجز موعدك' : 'Book Appointment'}</span>
              <span>→</span>
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden w-11 h-11 rounded-xl bg-slate-100 hover:bg-slate-200 active:scale-95 text-slate-900 flex items-center justify-center cursor-pointer transition-all border border-slate-200"
              aria-label="Open Navigation Menu"
            >
              <span className="text-2xl leading-none">☰</span>
            </button>
          </div>
        </div>
      </header>

      {/* ========================================== */}
      {/* MOBILE NAVIGATION DRAWER (Full-screen Sheet) */}
      {/* ========================================== */}
      {mobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 z-[200] bg-slate-950/70 backdrop-blur-md flex flex-col justify-end transition-opacity duration-200"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="w-full h-full max-h-[100dvh] bg-white flex flex-col justify-between overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Bar inside Drawer */}
            <div className="sticky top-0 z-20 px-4 py-3.5 bg-white border-b border-slate-100 flex items-center justify-between shadow-xs">
              <SkyDentalBrand lang={lang} theme="light" />
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="w-10 h-10 rounded-full bg-slate-100 active:bg-slate-200 text-slate-800 flex items-center justify-center text-lg font-bold cursor-pointer transition-colors"
                aria-label="Close menu"
              >
                ✕
              </button>
            </div>

            {/* Menu Links */}
            <div className="p-5 space-y-4 flex-1">
              {/* Language Switcher inside Mobile Menu */}
              <div className="p-3 rounded-2xl bg-sky-50 border border-sky-100 flex items-center justify-between">
                <span className="text-xs font-bold text-sky-900">
                  {isAr ? 'لغة الموقع' : 'Language'}
                </span>
                <button
                  type="button"
                  onClick={() => {
                    toggleLanguage();
                  }}
                  className="px-3 py-1.5 rounded-xl bg-white text-[#0B1B3D] text-xs font-bold shadow-xs border border-sky-200 flex items-center gap-1.5 cursor-pointer active:scale-95"
                >
                  <span>🌐</span>
                  <span>{isAr ? 'English' : 'العربية'}</span>
                </button>
              </div>

              {/* Navigation Items List */}
              <nav className="space-y-1">
                {[
                  {
                    id: 'services',
                    titleEn: 'Services & Treatments',
                    titleAr: 'الخدمات والعلاجات',
                    icon: '🦷'
                  },
                  {
                    id: 'doctors',
                    titleEn: 'Doctors & Specialists',
                    titleAr: 'الأطباء الاستشاريون',
                    icon: '👨‍⚕️'
                  },
                  {
                    id: 'before-after',
                    titleEn: 'Before & After Gallery',
                    titleAr: 'معرض قبل وبعد',
                    icon: '✨'
                  },
                  {
                    id: 'about',
                    titleEn: 'About Center & VIP Suites',
                    titleAr: 'عن المركز وأجنحتنا',
                    icon: '🏥'
                  },
                  {
                    id: 'testimonials',
                    titleEn: 'Patient Reviews',
                    titleAr: 'آراء وتجارب المرضى',
                    icon: '⭐'
                  },
                  {
                    id: 'contact',
                    titleEn: 'Location & Contact',
                    titleAr: 'الموقع والتواصل',
                    icon: '📍'
                  }
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => scrollToSection(item.id)}
                    className="w-full p-3.5 rounded-2xl hover:bg-slate-50 active:bg-sky-50/50 text-[#0B1B3D] font-bold text-sm flex items-center justify-between transition-colors cursor-pointer border border-transparent hover:border-slate-100"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-base">{item.icon}</span>
                      <span>{isAr ? item.titleAr : item.titleEn}</span>
                    </div>
                    <span className="text-slate-400 font-normal">›</span>
                  </button>
                ))}
              </nav>
            </div>

            {/* Bottom Actions inside Drawer */}
            <div className="p-5 border-t border-slate-100 bg-slate-50/80 space-y-3 pb-8">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  handleOpenAppointment();
                }}
                className="w-full py-4 rounded-2xl bg-[#0B1B3D] text-white font-bold text-sm shadow-lg text-center cursor-pointer active:scale-98 transition-all flex items-center justify-center gap-2"
              >
                <span>{isAr ? 'احجز موعد استشارة' : 'Book a Consultation'}</span>
                <span>→</span>
              </button>

              <div className="grid grid-cols-2 gap-2 text-xs">
                <a
                  href={`tel:${clinicInfo.phoneCall}`}
                  className="py-3 px-3 rounded-xl bg-white border border-slate-200 font-bold text-center text-[#0B1B3D] flex items-center justify-center gap-1.5 shadow-xs active:bg-slate-100"
                >
                  <span>📞</span>
                  <span>{clinicInfo.phoneDisplay}</span>
                </a>
                <a
                  href={`https://wa.me/${clinicInfo.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-3 rounded-xl bg-emerald-600 text-white font-bold text-center flex items-center justify-center gap-1.5 shadow-xs active:bg-emerald-700"
                >
                  <span>💬</span>
                  <span>{isAr ? 'واتساب' : 'WhatsApp'}</span>
                </a>
              </div>

              <p className="text-[10px] text-center text-slate-400 pt-1">
                {isAr
                  ? 'السالمية · شارع سالم المبارك · مواقف سيارات خاصة'
                  : 'Salmiya · Salem Al Mubarak St · Free Valet Parking'}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* ========================================== */}
      {/* HERO SECTION                               */}
      {/* ========================================== */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white via-sky-50/25 to-[#F8FAFC] pt-8 pb-16 sm:pt-16 sm:pb-24 border-b border-slate-200/80">
        {/* Subtle Decorative Background Elements */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-sky-200/25 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-80 h-80 bg-blue-100/30 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Left Column: Headlines and CTAs */}
            <div className="lg:col-span-7 space-y-5 text-center lg:text-left">
              {/* Trust Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-sky-200 shadow-xs">
                <div className="w-2 h-2 rounded-full bg-[#0284C7] animate-pulse" />
                <span className="text-[11px] sm:text-xs font-bold text-[#0B1B3D] tracking-wide">
                  {isAr
                    ? 'مركز سكاي لطب الأسنان · رعاية استشارية متميزة في الكويت'
                    : 'SKY Dental Center — Premium Dental Care in Kuwait'}
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#0B1B3D] tracking-tight leading-[1.18] sm:leading-[1.12]">
                {isAr ? (
                  <>
                    ابتسامة ساحرة تليق بك،{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0284C7] to-sky-500">
                      بأعلى معايير الدقة
                    </span>{' '}
                    والفخامة
                  </>
                ) : (
                  <>
                    Transforming Smiles with{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0284C7] to-sky-500">
                      World-Class Artistry
                    </span>{' '}
                    & Clinical Precision
                  </>
                )}
              </h1>

              {/* Supporting Text */}
              <p className="text-sm sm:text-base lg:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
                {isAr
                  ? 'وجهتك الأولى لطب الأسنان التجميلي، تقويم إنفزلاين الشفاف، وزراعة الأسنان الرقمية في السالمية. أحدث تقنيات التصوير ثلاثي الأبعاد بأيدي نخبة من استشاريي الكويت في أجواء فندقية فاخرة.'
                  : 'Salmiya’s premier destination for custom Hollywood smile veneers, Invisalign clear aligners, and computer-guided dental implants. Powered by 3D digital precision in an atmosphere of refined luxury.'}
              </p>

              {/* Ergonomic Mobile & Desktop CTAs */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3">
                <button
                  type="button"
                  onClick={() => handleOpenAppointment()}
                  className="flex-1 sm:flex-none px-7 py-3.5 sm:py-4 rounded-xl bg-[#0B1B3D] hover:bg-[#0284C7] active:scale-98 text-white font-bold text-sm transition-all shadow-lg shadow-neutral-900/15 cursor-pointer flex items-center justify-center gap-2"
                >
                  <span>{isAr ? 'احجز موعدك الآن' : 'Book an Appointment'}</span>
                  <span>→</span>
                </button>

                <a
                  href={`https://wa.me/${clinicInfo.whatsappNumber}?text=${encodeURIComponent(isAr ? 'مرحباً، أود حجز موعد في مركز سكاي' : 'Hello, I would like to book an appointment at SKY Dental')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3.5 sm:py-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 active:scale-98 text-white font-bold text-xs sm:text-sm transition-colors flex items-center justify-center gap-2 shadow-md shadow-emerald-900/10"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                  </svg>
                  <span>{isAr ? 'محادثة واتساب' : 'WhatsApp'}</span>
                </a>

                <button
                  type="button"
                  onClick={() => scrollToSection('services')}
                  className="px-4 py-3 sm:py-4 rounded-xl bg-white hover:bg-slate-50 active:bg-slate-100 border border-slate-300 text-[#0B1B3D] font-bold text-xs sm:text-sm transition-colors shadow-xs cursor-pointer flex items-center justify-center gap-1.5"
                >
                  <span>{isAr ? 'الخدمات' : 'Services'}</span>
                  <span className="text-sky-600">↓</span>
                </button>
              </div>

              {/* Highlights Micro Badges */}
              <div className="pt-4 grid grid-cols-3 gap-2 sm:gap-4 border-t border-slate-200/80 max-w-md mx-auto lg:mx-0">
                <div className="flex flex-col bg-white sm:bg-transparent p-2 sm:p-0 rounded-xl border sm:border-0 border-slate-100 shadow-2xs sm:shadow-none">
                  <span className="text-xs sm:text-sm font-black text-[#0B1B3D]">16,000+</span>
                  <span className="text-[10px] text-slate-500 font-medium">
                    {isAr ? 'مريض راضٍ' : 'Happy Patients'}
                  </span>
                </div>
                <div className="flex flex-col bg-white sm:bg-transparent p-2 sm:p-0 rounded-xl border sm:border-0 border-slate-100 shadow-2xs sm:shadow-none">
                  <span className="text-xs sm:text-sm font-black text-[#0B1B3D]">100%</span>
                  <span className="text-[10px] text-slate-500 font-medium">
                    {isAr ? 'أطباء استشاريون' : 'Consultants'}
                  </span>
                </div>
                <div className="flex flex-col bg-white sm:bg-transparent p-2 sm:p-0 rounded-xl border sm:border-0 border-slate-100 shadow-2xs sm:shadow-none">
                  <span className="text-xs sm:text-sm font-black text-[#0B1B3D]">Salmiya</span>
                  <span className="text-[10px] text-slate-500 font-medium">
                    {isAr ? 'مواقف فاليه مجانية' : 'Free Valet'}
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Premium Imagery Mosaic */}
            <div className="lg:col-span-5 relative mt-4 lg:mt-0">
              <div className="relative rounded-3xl overflow-hidden shadow-xl sm:shadow-2xl border-2 sm:border-4 border-white bg-neutral-900 aspect-[16/11] sm:aspect-[4/5] max-w-md mx-auto">
                <img
                  src={heroSmile}
                  alt="SKY Dental Center Kuwait Patient Smile"
                  className="w-full h-full object-cover select-none"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1B3D]/85 via-[#0B1B3D]/20 to-transparent" />

                {/* Floating Top Inset Badge */}
                <div className="absolute top-3 left-3 right-3 sm:top-4 sm:left-4 sm:right-4 flex items-center justify-between">
                  <div className="px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-white/95 backdrop-blur-md text-[#0B1B3D] text-[11px] sm:text-xs font-bold shadow-lg flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span>{isAr ? 'استشارات متاحة اليوم' : 'Consultations Available Today'}</span>
                  </div>
                </div>

                {/* Floating Bottom Card */}
                <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 p-3 sm:p-4 rounded-2xl bg-white/95 backdrop-blur-md shadow-xl text-[#0B1B3D] border border-white/60">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-bold text-sky-600 uppercase tracking-widest block">
                        {isAr ? 'السالمية · الكويت' : 'Salmiya · Kuwait'}
                      </span>
                      <h4 className="text-xs sm:text-sm font-extrabold">
                        {isAr ? 'مركز سكاي لطب الأسنان' : 'SKY Dental Center'}
                      </h4>
                    </div>
                    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center font-black shrink-0 text-xs sm:text-sm">
                      ★ 4.9
                    </div>
                  </div>
                  <p className="text-[10px] sm:text-[11px] text-slate-500 mt-1">
                    {isAr
                      ? 'شارع سالم المبارك، برج مجمع سيمفوني · هاتف: 22207590'
                      : 'Salem Al Mubarak St, Symphony Tower · +965 2220 7590'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================== */}
      {/* TRUST & CREDIBILITY STATS SECTION          */}
      {/* ========================================== */}
      <section className="py-14 bg-[#0B1B3D] text-white border-y border-sky-900/60 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {trustStats.map((stat, idx) => (
              <div
                key={idx}
                className="text-center p-4 sm:p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xs hover:border-sky-400/30 transition-colors"
              >
                <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-sky-300 font-mono tracking-tight">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm font-bold text-white mt-1.5">
                  {isAr ? stat.labelAr : stat.labelEn}
                </div>
                <div className="text-[11px] text-slate-400 mt-0.5">
                  {isAr ? stat.subAr : stat.subEn}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================== */}
      {/* SERVICES SECTION                           */}
      {/* ========================================== */}
      <ServicesSection
        lang={lang}
        onBookService={(srv) => handleOpenAppointment(srv)}
      />

      {/* ========================================== */}
      {/* BEFORE & AFTER GALLERY                     */}
      {/* ========================================== */}
      <BeforeAfterSection
        cases={casesData}
        lang={lang}
      />

      {/* ========================================== */}
      {/* DOCTORS & MEDICAL SPECIALISTS              */}
      {/* ========================================== */}
      <DoctorsSection
        lang={lang}
        onBookWithDoctor={(doc) => handleOpenAppointment(doc)}
      />

      {/* ========================================== */}
      {/* ABOUT CENTER & PRIVATE SUITES TOUR         */}
      {/* ========================================== */}
      <ClinicTourSection lang={lang} />

      {/* ========================================== */}
      {/* PATIENT TESTIMONIALS                       */}
      {/* ========================================== */}
      <TestimonialsSection lang={lang} />

      {/* ========================================== */}
      {/* LOCATION & CONTACT                         */}
      {/* ========================================== */}
      <LocationSection lang={lang} />

      {/* ========================================== */}
      {/* FOOTER                                     */}
      {/* ========================================== */}
      <footer className="bg-[#0A1428] text-slate-300 border-t border-sky-950/80 pt-16 pb-24 md:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/80">
            {/* Brand column */}
            <div className="lg:col-span-2 space-y-4">
              <SkyDentalBrand lang={lang} theme="dark" />
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
                {isAr
                  ? 'مركز سكاي لطب الأسنان في السالمية، الكويت. رواد الابتسامة التجميلية، قشور الفينير الخزفية، تقويم إنفزلاين وزراعة الأسنان الموجهة.'
                  : 'SKY Dental Center in Salmiya, Kuwait. Leading specialists in cosmetic smile design, porcelain veneers, Invisalign clear aligners, and computer-guided implants.'}
              </p>
              <div className="pt-2 flex items-center gap-3">
                <a
                  href={clinicInfo.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-pink-600/40 text-xs text-white transition-colors"
                >
                  Instagram: {clinicInfo.instagram}
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
                {isAr ? 'التخصصات والعلاجات' : 'Key Treatments'}
              </h4>
              <ul className="space-y-2 text-xs text-slate-400">
                <li>
                  <button onClick={() => scrollToSection('services')} className="hover:text-sky-300 transition-colors">
                    {isAr ? 'إنفزلاين والتقويم الشفاف' : 'Invisalign Aligners'}
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('services')} className="hover:text-sky-300 transition-colors">
                    {isAr ? 'ابتسامة هوليوود وفينير' : 'Hollywood Smile Veneers'}
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('services')} className="hover:text-sky-300 transition-colors">
                    {isAr ? 'زراعة الأسنان الرقمية' : '3D Dental Implants'}
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('services')} className="hover:text-sky-300 transition-colors">
                    {isAr ? 'علاج العصب المجهري' : 'Microscopic Endodontics'}
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('services')} className="hover:text-sky-300 transition-colors">
                    {isAr ? 'طب أسنان الأطفال' : 'Pediatric Dentistry'}
                  </button>
                </li>
              </ul>
            </div>

            {/* Navigation */}
            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
                {isAr ? 'روابط سريعة' : 'Quick Navigation'}
              </h4>
              <ul className="space-y-2 text-xs text-slate-400">
                <li>
                  <button onClick={() => scrollToSection('doctors')} className="hover:text-sky-300 transition-colors">
                    {isAr ? 'الأطباء الاستشاريون' : 'Consultant Doctors'}
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('before-after')} className="hover:text-sky-300 transition-colors">
                    {isAr ? 'معرض الحالات والنتائج' : 'Clinical Transformations'}
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('about')} className="hover:text-sky-300 transition-colors">
                    {isAr ? 'عن المركز والعيادات' : 'Clinic Suites & Tech'}
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('testimonials')} className="hover:text-sky-300 transition-colors">
                    {isAr ? 'تقييمات مراجعينا' : 'Patient Reviews'}
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('contact')} className="hover:text-sky-300 transition-colors">
                    {isAr ? 'الموقع وخريطة الوصول' : 'Location & Valet'}
                  </button>
                </li>
              </ul>
            </div>

            {/* Hours & Contact */}
            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
                {isAr ? 'ساعات العمل والتواصل' : 'Opening Hours'}
              </h4>
              <div className="space-y-2 text-xs text-slate-400">
                <p>{isAr ? clinicInfo.hoursAr : clinicInfo.hoursEn}</p>
                <p className="font-mono text-white pt-1">{clinicInfo.phoneDisplay}</p>
                <p className="text-emerald-400 font-mono">{clinicInfo.whatsappDisplay}</p>
                <p className="text-[11px] text-slate-500 pt-1">
                  {isAr ? 'ترخيص وزارة الصحة الكويتية' : 'Licensed by Kuwait Ministry of Health'}
                </p>
              </div>
            </div>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
            <p>
              © {new Date().getFullYear()} SKY Dental Center Kuwait. {isAr ? 'جميع الحقوق محفوظة.' : 'All rights reserved.'}
            </p>
            <div className="flex items-center gap-4">
              <button onClick={toggleLanguage} className="text-sky-400 hover:underline">
                {isAr ? 'English Version' : 'النسخة العربية'}
              </button>
              <span>·</span>
              <span>{isAr ? 'السالمية، دولة الكويت' : 'Salmiya, State of Kuwait'}</span>
            </div>
          </div>
        </div>
      </footer>

      {/* ========================================== */}
      {/* APPOINTMENT MODAL                          */}
      {/* ========================================== */}
      <AppointmentBooking
        lang={lang}
        preselectedService={modalPreselectedService}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        isModal={true}
      />

      {/* ========================================== */}
      {/* MOBILE FLOATING QUICK ACTION DOCK          */}
      {/* ========================================== */}
      <nav
        aria-label="Mobile Quick Actions"
        className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-white/95 backdrop-blur-lg border-t border-slate-200 px-3 py-2.5 shadow-[0_-8px_30px_rgba(0,0,0,0.12)] flex items-center justify-between gap-2"
      >
        <a
          href={`tel:${clinicInfo.phoneCall}`}
          className="py-3 px-3 rounded-xl bg-slate-100 active:bg-slate-200 text-[#0B1B3D] font-bold text-xs flex items-center justify-center gap-1.5 border border-slate-200 shrink-0"
        >
          <span>📞</span>
          <span>{isAr ? 'اتصال' : 'Call'}</span>
        </a>

        <a
          href={`https://wa.me/${clinicInfo.whatsappNumber}?text=${encodeURIComponent(isAr ? 'مرحباً، أود حجز موعد في مركز سكاي لطب الأسنان' : 'Hello, I would like to book an appointment at SKY Dental')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="py-3 px-3 rounded-xl bg-emerald-600 active:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-1.5 shrink-0 shadow-xs"
        >
          <span>💬</span>
          <span>{isAr ? 'واتساب' : 'WhatsApp'}</span>
        </a>

        <button
          type="button"
          onClick={() => handleOpenAppointment()}
          className="flex-1 py-3 px-3 rounded-xl bg-[#0B1B3D] active:bg-sky-700 text-white font-bold text-xs flex items-center justify-center gap-1 shadow-md cursor-pointer"
        >
          <span>{isAr ? 'احجز موعدك' : 'Book Appointment'}</span>
          <span>→</span>
        </button>
      </nav>
    </div>
  );
}
