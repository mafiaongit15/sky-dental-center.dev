// SKY Dental Center Kuwait - Data & Translations (EN / AR)

import heroImg from '../assets/images/hero_parisian_smile_1790112441886.jpg';
import smileImg from '../assets/images/smile_aesthetic_aligner_1790112454596.jpg';
import implantImg1 from '../assets/images/dental_implant_tech_1790112463509.jpg';
import implantImg2 from '../assets/images/dental_restoration_crown_1790112474567.jpg';
import clinicImg from '../assets/images/clinic_interior_paris_1790112485462.jpg';

// Cases
import case1Before from '../assets/images/case1_before_veneers_1790112800791.jpg';
import case1After from '../assets/images/case1_after_veneers_1790112815511.jpg';
import case2Before from '../assets/images/case2_before_ortho_1790112828174.jpg';
import case2After from '../assets/images/case2_after_ortho_1790112838554.jpg';
import case3Before from '../assets/images/case3_before_diastema_1790112848517.jpg';
import case3After from '../assets/images/case3_after_bonding_1790112859170.jpg';
import case4Before from '../assets/images/case4_before_implant_1790112869895.jpg';
import case4After from '../assets/images/case4_after_implant_1790112881759.jpg';

// Doctors
import doc1 from '../assets/images/doctor_sayada_1790112893109.jpg';
import doc2 from '../assets/images/doctor_balogh_1790112904813.jpg';
import doc3 from '../assets/images/doctor_dardas_1790112915853.jpg';
import doc4 from '../assets/images/doctor_aboaf_1790112926287.jpg';
import doc5 from '../assets/images/doctor_attal_1790112937387.jpg';
import doc6 from '../assets/images/doctor_nurisso_1790112948176.jpg';

// Clinic Suites
import suiteReception from '../assets/images/cabinet_reception_curved_1790113339347.jpg';
import suiteLounge from '../assets/images/cabinet_salon_attente_1790113404827.jpg';
import suiteCosmetic from '../assets/images/cabinet_salle_verte_1790113366502.jpg';
import suiteOrtho from '../assets/images/cabinet_salle_balcon_1790113379055.jpg';
import suiteSurgery from '../assets/images/cabinet_salle_brique_1790113392384.jpg';
import suiteConcierge from '../assets/images/cabinet_reception_desk_1790113352604.jpg';

export type Language = 'en' | 'ar';

export const clinicInfo = {
  nameEn: 'SKY Dental Center',
  nameAr: 'مركز سكاي لطب الأسنان',
  taglineEn: 'Premium Dental Care in Kuwait',
  taglineAr: 'رعاية أسنان فائقة التميز في الكويت',
  addressEn: 'Salem Al Mubarak St, Symphony Style Mall Tower, 14th Floor, Salmiya, Kuwait',
  addressAr: 'شارع سالم المبارك، برج مجمع سيمفوني ستايل، الطابق 14، السالمية، الكويت',
  shortLocationEn: 'Salmiya, Kuwait',
  shortLocationAr: 'السالمية، الكويت',
  phoneDisplay: '+965 2220 7590',
  phoneCall: '+96522207590',
  whatsappDisplay: '+965 9991 7590',
  whatsappNumber: '96599917590',
  instagram: '@skydentalq8',
  instagramUrl: 'https://instagram.com/skydentalq8',
  email: 'care@skydental-kw.com',
  hoursEn: 'Sat – Thu: 9:00 AM – 9:00 PM | Fri: Emergency Care',
  hoursAr: 'السبت – الخميس: 9:00 ص – 9:00 م | الجمعة: للحالات الطارئة',
  coordinates: {
    lat: 29.34426305830699,
    lng: 48.07936383696052
  },
  googleMapsUrl: 'https://www.google.com/maps?q=29.34426305830699,48.07936383696052',
  googleMapsEmbedUrl: 'https://maps.google.com/maps?q=29.34426305830699,48.07936383696052&z=17&hl=en&output=embed',
};

export const trustStats = [
  {
    value: '16,000+',
    labelEn: 'Smiles Restored',
    labelAr: 'ابتسامة تم علاجها',
    subEn: 'Patients in Kuwait & GCC',
    subAr: 'مريض في الكويت والخليج'
  },
  {
    value: '15+',
    labelEn: 'Years of Excellence',
    labelAr: 'عاماً من الخبرة',
    subEn: 'Certified Specialists',
    subAr: 'أطباء استشاريون معتمدون'
  },
  {
    value: '3D AI',
    labelEn: 'Digital Dentistry',
    labelAr: 'تقنيات رقمية ثلاثية الأبعاد',
    subEn: 'iTero & CBCT Precision',
    subAr: 'مسح ضوئي وأشعة مقطعية دقيقة'
  },
  {
    value: '99.4%',
    labelEn: 'Patient Satisfaction',
    labelAr: 'نسبة رضا المرضى',
    subEn: 'Verified Patient Ratings',
    subAr: 'تقييمات موثقة من مراجعينا'
  }
];

export interface ServiceItem {
  id: string;
  titleEn: string;
  titleAr: string;
  badgeEn: string;
  badgeAr: string;
  descEn: string;
  descAr: string;
  highlightsEn: string[];
  highlightsAr: string[];
  image: string;
}

export const servicesData: ServiceItem[] = [
  {
    id: 'invisalign',
    titleEn: 'Invisalign & Clear Aligners',
    titleAr: 'إنفزلاين والتقويم الشفاف',
    badgeEn: 'Diamond Apex Provider',
    badgeAr: 'مركز معتمد دايموند أبيكس',
    descEn: 'Discreet, removable clear aligners crafted with 3D digital ClinCheck planning for precise orthodontic alignment without wires.',
    descAr: 'تقويم شفاف غير مرئي ومتحرك بتقنية التخطيط الرقمي ثلاثي الأبعاد لتحقيق اصطفاف مثالي لأسنانك دون أي أسلاك معدنية.',
    highlightsEn: ['No metallic brackets or wires', '3D outcome preview before starting', 'Comfortable & easily removable'],
    highlightsAr: ['بدون حاصرات أو أسلاك معدنية', 'معاينة النتيجة ثلاثية الأبعاد مسبقاً', 'مريح وسهل النزع أثناء تناول الطعام'],
    image: smileImg
  },
  {
    id: 'implants',
    titleEn: 'Dental Implants & Guided Surgery',
    titleAr: 'زراعة الأسنان والجراحة الموجهة',
    badgeEn: 'Swiss & German Titanium',
    badgeAr: 'زرعات سويسرية وألمانية',
    descEn: 'Computer-guided permanent implant restorations and bone augmentation ensuring lifetime stability and natural aesthetics.',
    descAr: 'زراعة الأسنان الثابتة بالجراحة الموجهة رقمياً واستعاضات الزيركون المتطورة لتعويض الأسنان المفقودة مدى الحياة.',
    highlightsEn: ['Minimally invasive computer guidance', 'Immediate loading available', 'Bio-compatible Grade-4 Titanium'],
    highlightsAr: ['جراحة مجهرية دقيقة بأقل تدخل', 'إمكانية التركيب الفوري للحالات المناسبة', 'تيتانيوم طبي عالي التوافق الحيوي'],
    image: implantImg1
  },
  {
    id: 'veneers',
    titleEn: 'Porcelain Veneers & Hollywood Smile',
    titleAr: 'قشور الفينير وابتسامة هوليوود',
    badgeEn: 'Ultra-thin Ceramic',
    badgeAr: 'خزف فائق الرقة 0.3 ملم',
    descEn: 'Custom handcrafted E.max porcelain veneers designed to create harmonious proportions, natural radiance, and lasting brightness.',
    descAr: 'عدسات خزفية رقيقة تصمم خصيصاً لكل مريض لتمنحك ابتسامة هوليوودية متناسقة وطبيعية المظهر تدوم لسنوات طويلة.',
    highlightsEn: ['Minimal to zero tooth preparation', 'Natural translucency & shade matching', 'Resistant to stains & discoloration'],
    highlightsAr: ['أقل برد ممكن للمينا الطبيعية', 'شفافية وتطابق ألوان تحاكي الأسنان الطبيعية', 'مقاومة تامة للتصبغات والبقع'],
    image: heroImg
  },
  {
    id: 'cosmetic',
    titleEn: 'Cosmetic Dentistry & Smile Makeover',
    titleAr: 'تجميل الأسنان وتصميم الابتسامة',
    badgeEn: 'Digital Smile Design',
    badgeAr: 'التصميم الرقمي للابتسامة',
    descEn: 'Comprehensive facial aesthetic harmony, composite biomimetic bonding, laser gum contouring, and in-clinic Zoom whitening.',
    descAr: 'تصميم شامل لابتسامتك بما يتناسب مع ملامح الوجه، مع حشوات تجميلية مطابقة للطبيعة، وتوريد اللثة بالليزر، وتبييض متقدم.',
    highlightsEn: ['Same-day composite bonding', 'Laser gum line sculpting', 'Philips Zoom Whitespeed in 45 mins'],
    highlightsAr: ['ترميم تجميلي سريع في جلسة واحدة', 'تنسيق خط اللثة بالليزر التجميلي', 'تبييض زووم الاحترافي خلال 45 دقيقة'],
    image: implantImg2
  },
  {
    id: 'orthodontics',
    titleEn: 'Advanced Orthodontics',
    titleAr: 'تقويم الأسنان المتقدم',
    badgeEn: 'Adults & Teens',
    badgeAr: 'للبالغين واليافعين',
    descEn: 'Targeted correction for bite irregularities, deep bites, and crowding using self-ligating ceramic and lingual orthodontic systems.',
    descAr: 'تصحيح إطباق الفكين وتزاحم الأسنان باستخدام أحدث أنظمة التقويم الخزفي الشفاف وتقنيات التقويم الداخلي المتطور.',
    highlightsEn: ['Low-friction ceramic brackets', 'Shorter treatment duration', 'Post-treatment retention warranty'],
    highlightsAr: ['حاصرات خزفية خفيفة الاحتكاك', 'مدة علاجية أسرع مع متابعة مستمرة', 'مثبتات شفافة مريحة بعد انتهاء العلاج'],
    image: case2After
  },
  {
    id: 'root-canal',
    titleEn: 'Root Canal Treatment (Endodontics)',
    titleAr: 'علاج عصب الأسنان المجهري',
    badgeEn: 'Microscopic Precision',
    badgeAr: 'دقة الميكروسكوب الجراحي',
    descEn: 'Painless microscopic endodontics to save natural teeth infected by deep decay, completed comfortably in single-session protocols.',
    descAr: 'إنقاذ الأسنان الطبيعية الملتهبة وعلاج الجذور تحت الميكروسكوب بدقة متناهية وبدون أي ألم في جلسة علاجية واحدة ومريحة.',
    highlightsEn: ['High-magnification surgical microscope', 'Rotary nickel-titanium disinfection', 'Virtually painless computerized anesthesia'],
    highlightsAr: ['ميكروسكوب جراحي عالي التكبير', 'تطهير قنوات العصب بأحدث أنظمة الروتاري', 'تخدير رقمي لطيف وغير محسوس'],
    image: clinicImg
  },
  {
    id: 'pediatric',
    titleEn: 'Pediatric Dentistry',
    titleAr: 'طب أسنان الأطفال',
    badgeEn: 'Gentle & Kid-Friendly',
    badgeAr: 'بيئة مريحة وودودة للطفل',
    descEn: 'Compassionate dental care for young children and teens, focusing on preventative fluoride seals, painless care, and positive habits.',
    descAr: 'عناية فائقة ولطيفة بأسنان الأطفال والناشئين، مع التركيز على الوقاية وتطبيق الفلورايد وبناء تجربة إيجابية تمنحهم الثقة.',
    highlightsEn: ['Playful, anxiety-free atmosphere', 'Preventive fissure sealants', 'Nitrous oxide conscious relaxation'],
    highlightsAr: ['أجواء مرحة تبدد خوف الطفل', 'تطبيق الحشوات الوقائية الفعالة', 'خيارات الاسترخاء الآمن للطفل القلق'],
    image: suiteLounge
  },
  {
    id: 'periodontics',
    titleEn: 'Gum Treatment & Periodontics',
    titleAr: 'علاج وتجميل اللثة',
    badgeEn: 'Laser Biolase Care',
    badgeAr: 'علاج بالليزر المتطور',
    descEn: 'Deep periodontal therapy, ultrasonic calculus removal, tissue regeneration, and cosmetic depigmentation for healthy pink gums.',
    descAr: 'علاج التهابات وجيوب اللثة، تنظيف الجير بتقنية الأمواج فوق الصوتية، وإزالة التصبغات الداكنة بالليزر لاستعادة نضارة اللثة.',
    highlightsEn: ['Non-surgical pocket decontamination', 'Laser aesthetic depigmentation', 'Stem-matrix tissue grafting'],
    highlightsAr: ['تطهير الجيوب بدون شق جراحي', 'توريد اللثة بالليزر لإشراقة وردية', 'علاج تراجع اللثة وحماية جذور الأسنان'],
    image: suiteSurgery
  }
];

export interface Doctor {
  id: string;
  nameEn: string;
  nameAr: string;
  titleEn: string;
  titleAr: string;
  specialtyEn: string;
  specialtyAr: string;
  qualificationEn: string;
  qualificationAr: string;
  experienceEn: string;
  experienceAr: string;
  image: string;
}

export const doctorsData: Doctor[] = [
  {
    id: 'dr-ahmad',
    nameEn: 'Dr. Ahmad Al-Kandari',
    nameAr: 'د. أحمد الكندري',
    titleEn: 'Consultant Orthodontist & Clinical Director',
    titleAr: 'استشاري تقويم الأسنان والمدير الطبي',
    specialtyEn: 'Invisalign Apex Specialist & Complex Orthodontics',
    specialtyAr: 'أخصائي إنفزلاين المعتمد والتقويم المعقد',
    qualificationEn: 'BDS, MSc Orthodontics (UK), Fellow of Royal College of Surgeons (FRCS)',
    qualificationAr: 'بكالوريوس طب الأسنان، ماجستير التقويم (بريطانيا)، زميل الكلية الملكية للجراحين',
    experienceEn: 'Over 16 years leading cosmetic orthodontic transformations across Kuwait and the Gulf.',
    experienceAr: 'أكثر من 16 عاماً في قيادة علاجات تقويم وتجميل الأسنان المتقدمة في الكويت والخليج.',
    image: doc1
  },
  {
    id: 'dr-sarah',
    nameEn: 'Dr. Sarah Al-Sabah',
    nameAr: 'د. سارة الصباح',
    titleEn: 'Specialist Cosmetic & Restorative Dentist',
    titleAr: 'أخصائية تجميل الأسنان والتركيبات',
    specialtyEn: 'Hollywood Smile, E.max Porcelain Veneers, Smile Design',
    specialtyAr: 'ابتسامة هوليوود، فينير الإيماكس، وتصميم الابتسامة',
    qualificationEn: 'DDS, Postgrad Aesthetic Dentistry (France), AACD Accredited Member',
    qualificationAr: 'دكتوراه في جراحة الأسنان، دراسات عليا في التجميل (فرنسا)، عضو الأكاديمية الأمريكية لتجميل الأسنان',
    experienceEn: 'Renowned for handcrafted natural veneers and biomimetic smile rejuvenation.',
    experienceAr: 'معروفة بدقتها الفائقة في تصميم الابتسامات الطبيعية وتناسق الأسنان الجمالي.',
    image: doc2
  },
  {
    id: 'dr-faisal',
    nameEn: 'Dr. Faisal Al-Mutawa',
    nameAr: 'د. فيصل المطوع',
    titleEn: 'Consultant Oral & Maxillofacial Implantologist',
    titleAr: 'استشاري زراعة وجراحة الفم والأسنان',
    specialtyEn: '3D Computer-Guided Implants, Sinus Lifts, Full Arch Rehabilitation',
    specialtyAr: 'زراعة الأسنان الموجهة ثلاثياً، رفع الجيوب، والترميم الكامل للفك',
    qualificationEn: 'BDS, German Board in Oral Implantology (DGZI), ICOI Mastership',
    qualificationAr: 'بكالوريوس طب الأسنان، البورد الألماني في زراعة الأسنان، ماجستير المؤتمر الدولي لزراعة الأسنان',
    experienceEn: 'Pioneer of same-day guided implants with over 4,500 successful implant placements.',
    experienceAr: 'رائد في الزراعة الموجهة بالكمبيوتر في نفس اليوم مع أكثر من 4,500 زرعة ناجحة.',
    image: doc6
  },
  {
    id: 'dr-nour',
    nameEn: 'Dr. Nour Al-Husseini',
    nameAr: 'د. نور الحسيني',
    titleEn: 'Endodontist & Root Canal Specialist',
    titleAr: 'أخصائية علاج عصب وجذور الأسنان المجهري',
    specialtyEn: 'Microscopic Endodontics, Retreatment, Dental Trauma',
    specialtyAr: 'علاج العصب تحت الميكروسكوب وإعادة المعالجة والحوادث',
    qualificationEn: 'BDS, Master of Science in Endodontology (USA), AAE Member',
    qualificationAr: 'بكالوريوس طب الأسنان، ماجستير علاج الجذور (الولايات المتحدة الأمريكية)',
    experienceEn: 'Specializes in saving severely decayed teeth with pain-free microscopic precision.',
    experienceAr: 'متخصصة في الحفاظ على الأسنان الطبيعية وعلاج الجذور المجهري دون أي ألم.',
    image: doc3
  },
  {
    id: 'dr-khalid',
    nameEn: 'Dr. Khalid Al-Ghanim',
    nameAr: 'د. خالد الغانم',
    titleEn: 'Periodontist & Gum Aesthetics Specialist',
    titleAr: 'أخصائي علاج وتجميل اللثة بالليزر',
    specialtyEn: 'Laser Gum Depigmentation, Gummy Smile Correction, Tissue Grafts',
    specialtyAr: 'توريد اللثة بالليزر، علاج الابتسامة اللثوية، وتطعيم الأنسجة',
    qualificationEn: 'DDS, Certificate in Periodontology (UK), EFP Member',
    qualificationAr: 'دكتوراه في طب الأسنان، شهادة تخصص أمراض اللثة (بريطانيا)، عضو الاتحاد الأوروبي للثة',
    experienceEn: 'Expertise in sculpting ideal gum contours and treating persistent periodontal infections.',
    experienceAr: 'خبير في تجميل اللثة بالليزر وعلاج انحسار اللثة والتهاباتها المزمنة.',
    image: doc5
  },
  {
    id: 'dr-mona',
    nameEn: 'Dr. Mona Al-Enezi',
    nameAr: 'د. منى العنزي',
    titleEn: 'Pediatric Dental Specialist',
    titleAr: 'أخصائية طب أسنان الأطفال',
    specialtyEn: 'Preventative Pediatric Care, Space Maintainers, Gentle Restorations',
    specialtyAr: 'العناية الوقائية للأطفال، حافظات المسافة، والترميم اللطيف',
    qualificationEn: 'BDS, Pediatric Dentistry Fellowship (Canada), AAPD Member',
    qualificationAr: 'بكالوريوس طب الأسنان، زمالة طب أسنان الأطفال (كندا)',
    experienceEn: 'Loved by families in Kuwait for making every dental visit a cheerful adventure.',
    experienceAr: 'تحظى بثقة العائلات في الكويت لأسلوبها التربوي اللطيف الذي يمنح الطفل الراحة والأمان.',
    image: doc4
  }
];

export interface BeforeAfterCase {
  id: number;
  titleEn: string;
  titleAr: string;
  categoryEn: string;
  categoryAr: string;
  categoryKey: 'veneers' | 'orthodontics' | 'smile-makeover' | 'implants' | 'whitening';
  durationEn: string;
  durationAr: string;
  doctorEn: string;
  doctorAr: string;
  descEn: string;
  descAr: string;
  protocolEn: string;
  protocolAr: string;
  beforeImage: string;
  afterImage: string;
  tagsEn: string[];
  tagsAr: string[];
}

export const casesData: BeforeAfterCase[] = [
  {
    id: 1,
    titleEn: 'Hollywood Smile Veneers Transformation',
    titleAr: 'تحول ابتسامة هوليوود بقشور الفينير الخزفية',
    categoryEn: 'Veneers',
    categoryAr: 'قشور الفينير',
    categoryKey: 'veneers',
    durationEn: '2 visits · 10 days',
    durationAr: 'جلستان · خلال 10 أيام',
    doctorEn: 'Dr. Sarah Al-Sabah',
    doctorAr: 'د. سارة الصباح',
    descEn: '8 hand-layered E.max porcelain veneers correcting severe enamel discoloration, micro-fractures, and irregular tooth lengths for a natural Kuwaiti smile radiance.',
    descAr: 'تركيب 8 عدسات خزفية إيماكس فوسفاتية رقيقة لتصحيح تلون الأسنان والتشققات وتنسيق أطوال الأسنان بما يمنح إشراقة طبيعية مذهلة.',
    protocolEn: '3D intraoral digital scan, aesthetic mock-up trial, ultra-conservative tooth prep, and dual-cure resin bonding under sterile isolation.',
    protocolAr: 'مسح ضوئي رقمي 3D، تجربة نموذج الابتسامة المسبق، برد سطحي دقيق للمينا، وتثبيت ضوئي محكم.',
    beforeImage: case1Before,
    afterImage: case1After,
    tagsEn: ['E.max Porcelain', 'Custom Shade BL2', 'Minimal Prep'],
    tagsAr: ['خزف إيماكس', 'لون مخصص BL2', 'برد سطحي أدنى']
  },
  {
    id: 2,
    titleEn: 'Invisalign Alignment & Deep Bite Correction',
    titleAr: 'علاج التقويم الشفاف إنفزلاين وتصحيح العضة العميقة',
    categoryEn: 'Orthodontics',
    categoryAr: 'تقويم الأسنان',
    categoryKey: 'orthodontics',
    durationEn: '8 months · 24 aligners',
    durationAr: '8 أشهر · 24 قالباً شفافاً',
    doctorEn: 'Dr. Ahmad Al-Kandari',
    doctorAr: 'د. أحمد الكندري',
    descEn: 'Full correction of anterior dental crowding, lateral incisor crossbite, and midline asymmetry using clear SmartTrack aligners without extracting teeth.',
    descAr: 'تصحيح شامل لتزاحم الأسنان الأمامية وتعديل خط المنتصف دون الحاجة لخلع أي سن بفضل قوالب إنفزلاين الشفافة.',
    protocolEn: 'iTero Element 5D digital scan, ClinCheck 3D dynamic force distribution, weekly aligner changes with bonded lingual retention.',
    protocolAr: 'مسح ضوئي iTero ثلاثي الأبعاد، محاكاة سريرية ClinCheck، تغيير القوالب أسبوعياً ومثبت داخلي شفاف.',
    beforeImage: case2Before,
    afterImage: case2After,
    tagsEn: ['Invisalign Diamond', 'Zero Extractions', 'Vivera Retainers'],
    tagsAr: ['إنفزلاين دايموند', 'بدون خلع أسنان', 'مثبتات فيفيرا']
  },
  {
    id: 3,
    titleEn: 'Biomimetic Diastema Closure & Bonding',
    titleAr: 'إغلاق الفراغات التجميلي بالحشوات النانوية المركبة',
    categoryEn: 'Smile Makeovers',
    categoryAr: 'تجميل الابتسامة',
    categoryKey: 'smile-makeover',
    durationEn: '1 appointment · 75 minutes',
    durationAr: 'جلسة واحدة · 75 دقيقة',
    doctorEn: 'Dr. Sarah Al-Sabah',
    doctorAr: 'د. سارة الصباح',
    descEn: 'Immediate single-visit closure of central gap (diastema) and golden ratio reshaping with zero drilling of sound natural tooth structure.',
    descAr: 'إغلاق فوري لفراغ الأسنان الأمامية وإعادة تشكيل تناسب الأسنان وفق النسبة الذهبية بدون أي حفر للسن الطبيعي السليم.',
    protocolEn: 'Rubber dam isolation, selective enamel etch, multi-layered polychromatic nano-hybrid composite, and high-lustre diamond polishing.',
    protocolAr: 'عزل تام بالحاجز المطاطي، تخريش سطحي انتقائي، تدرج طبقات النانو كومبوزيت، وتلميع مجهري عالي البريق.',
    beforeImage: case3Before,
    afterImage: case3After,
    tagsEn: ['Zero Drilling', 'Same-day Result', 'Natural Anatomy'],
    tagsAr: ['بدون أي حفر', 'نتيجة في نفس اليوم', 'شكل تشريحي طبيعي']
  },
  {
    id: 4,
    titleEn: 'Single Tooth Implant & Zirconia Crown',
    titleAr: 'زراعة سن واحد مع تاج الزيركون التجميلي',
    categoryEn: 'Implants',
    categoryAr: 'زراعة الأسنان',
    categoryKey: 'implants',
    durationEn: '3 months integration',
    durationAr: '3 أشهر للالتئام العظمي',
    doctorEn: 'Dr. Faisal Al-Mutawa',
    doctorAr: 'د. فيصل المطوع',
    descEn: 'Precision replacement of fractured incisor with a premium Swiss Straumann implant and custom anatomical zirconia crown matching adjacent teeth.',
    descAr: 'تعويض سن أمامي مكسور بزرعة سويسرية متميزة مع تاج زيركون تشريحي يطابق لون وشفافية الأسنان المجاورة تماماً.',
    protocolEn: '3D CBCT bone planning, 3D printed surgical guide for flapless placement, and CAD/CAM custom screw-retained crown.',
    protocolAr: 'تخطيط عظمي بالأشعة المقطعية ثلاثية الأبعاد، دليل جراحي مطبوع بتقنية 3D بدون جراحة مفتوحة، وتاج رقمي مخصص.',
    beforeImage: case4Before,
    afterImage: case4After,
    tagsEn: ['Straumann Swiss', 'Computer-Guided', 'Lifetime Warranty'],
    tagsAr: ['زرعة شترومان سويسرية', 'جراحة موجهة', 'ضمان مدى الحياة']
  }
];

export interface Testimonial {
  id: string;
  nameEn: string;
  nameAr: string;
  locationEn: string;
  locationAr: string;
  serviceEn: string;
  serviceAr: string;
  rating: number;
  textEn: string;
  textAr: string;
  dateEn: string;
  dateAr: string;
}

export const testimonialsData: Testimonial[] = [
  {
    id: 't1',
    nameEn: 'Dalal Al-Ghanim',
    nameAr: 'دلال الغانم',
    locationEn: 'Kuwait City',
    locationAr: 'مدينة الكويت',
    serviceEn: 'Hollywood Smile Veneers',
    serviceAr: 'فينير ابتسامة هوليوود',
    rating: 5,
    textEn: 'The attention to detail at SKY Dental Center is on another level. Dr. Sarah designed my veneers to look completely natural, matching my facial features. Everyone compliments my smile without realizing they are veneers!',
    textAr: 'مستوى العناية والاهتمام بأدق التفاصيل في مركز سكاي يفوق التوقعات. دكتورة سارة صممت لي قشور فينير طبيعية للغاية وتناسب ملامحي تماماً. الجميع يعجب بابتسامتي دون أن يدركوا أنها عدسات!',
    dateEn: '2 weeks ago',
    dateAr: 'منذ أسبوعين'
  },
  {
    id: 't2',
    nameEn: 'Mishari Al-Otaibi',
    nameAr: 'مشاري العتيبي',
    locationEn: 'Salmiya, Kuwait',
    locationAr: 'السالمية، الكويت',
    serviceEn: 'Invisalign Clear Aligners',
    serviceAr: 'تقويم إنفزلاين الشفاف',
    rating: 5,
    textEn: 'I finished my Invisalign in 8 months with Dr. Ahmad. The 3D scan at the beginning showed me the exact outcome, and the actual results were identical. Clean clinic, no wait time, and supreme luxury service.',
    textAr: 'أنهيت تقويم إنفزلاين خلال 8 أشهر مع د. أحمد. المسح ثلاثي الأبعاد في الجلسة الأولى أظهر لي النتيجة النهائية مسبقاً وجاء الواقع مطابقاً لها تماماً. عيادة راقية، التزام تام بالمواعيد وخدمة 5 نجوم.',
    dateEn: '1 month ago',
    dateAr: 'منذ شهر'
  },
  {
    id: 't3',
    nameEn: 'Bader Al-Bahar',
    nameAr: 'بدر البحر',
    locationEn: 'Shuwaikh, Kuwait',
    locationAr: 'الشويخ، الكويت',
    serviceEn: 'Guided Dental Implant',
    serviceAr: 'زراعة الأسنان الموجهة',
    rating: 5,
    textEn: 'I was very anxious about dental implants, but Dr. Faisal made it 100% painless. The guided surgery took less than 25 minutes. Today I eat normally and it looks just like my original tooth. Truly Kuwait’s premier center.',
    textAr: 'كنت متخوفاً جداً من فكرة زراعة الأسنان، لكن د. فيصل جعل الإجراء بدون أي ألم على الإطلاق بالجراحة الموجهة بالكمبيوتر في أقل من 25 دقيقة. أتناول طعامي براحة تامة وكأنه سني الأصلي. أفضل عيادة بالكويت بلا شك.',
    dateEn: '2 months ago',
    dateAr: 'منذ شهرين'
  },
  {
    id: 't4',
    nameEn: 'Reem Al-Hajri',
    nameAr: 'ريم الهاجري',
    locationEn: 'Yarmouk, Kuwait',
    locationAr: 'اليرموك، الكويت',
    serviceEn: 'Cosmetic Zoom Whitening',
    serviceAr: 'تبييض زووم وتجميل الأسنان',
    rating: 5,
    textEn: 'From the valet parking to the private consultation suite with Gulf views, SKY Dental feels like a five-star retreat. Professional staff, cutting-edge equipment, and quick WhatsApp appointment booking.',
    textAr: 'من خدمة صف السيارات إلى أجنحة العلاج الخاصة المطلة على الخليج، مركز سكاي يعطيك إحساس الفنادق الفاخرة. طاقم محترف وأجهزة متطورة وسهولة فائقة في حجز المواعيد عبر الواتساب.',
    dateEn: '3 weeks ago',
    dateAr: 'منذ 3 أسابيع'
  }
];

export const clinicSuites = [
  {
    id: 'reception',
    titleEn: 'Executive Sky Lobby & Reception',
    titleAr: 'ردهة الاستقبال الفاخرة',
    subtitleEn: 'Discreet luxury overlooking Salmiya',
    subtitleAr: 'خصوصية وفخامة بإطلالة ساحرة على السالمية',
    categoryEn: 'Reception & Lounge',
    categoryAr: 'الاستقبال والضيافة',
    image: suiteReception,
    descEn: 'Designed with curved Italian marble, soft acoustic textures, and concierge hospitality providing immediate serenity before your consultation.',
    descAr: 'تصميم راقٍ برخام إيطالي فخم وإضاءة هادئة وضيافة خاصة تمنحك الراحة والاسترخاء منذ لحظة دخولك.'
  },
  {
    id: 'lounge',
    titleEn: 'Private VIP Patient Suite',
    titleAr: 'جناح كبار الشخصيات VIP',
    subtitleEn: 'Tranquil pre-treatment lounge',
    subtitleAr: 'استراحة خاصة فائقة الخصوصية',
    categoryEn: 'Patient Comfort',
    categoryAr: 'راحة المريض',
    image: suiteLounge,
    descEn: 'Dedicated lounge spaces with natural daylight, bespoke refreshments, and high-speed privacy for patients and families.',
    descAr: 'أجنحة انتظار عائلية خاصة مع مشروبات منعشة وإطلالة طبيعية تضمن خصوصيتك وراحتك التامة.'
  },
  {
    id: 'cosmetic-suite',
    titleEn: 'Aesthetic & Smile Design Suite',
    titleAr: 'جناح تجميل وتصميم الابتسامة',
    subtitleEn: 'Equipped for Digital Smile Design & 3D Imaging',
    subtitleAr: 'مجهز بأحدث شاشات التصميم الرقمي ثلاثي الأبعاد',
    categoryEn: 'Treatment Suite',
    categoryAr: 'جناح علاجي متقدم',
    image: suiteCosmetic,
    descEn: 'Features 4K diagnostic screens, ergonomic leather dental chairs, and intraoral cameras for direct collaborative smile planning.',
    descAr: 'مزود بشاشات 4K فائقة الدقة وكاميرات تصوير فموي دقيقة لمناقشة خطة تجميل ابتسامتك خطوة بخطوة مع الطبيب.'
  },
  {
    id: 'ortho-suite',
    titleEn: 'Clear Aligner & Orthodontic Studio',
    titleAr: 'أستوديو التقويم الشفاف وإنفزلاين',
    subtitleEn: 'iTero 5D scanning and computerized tracking',
    subtitleAr: 'ماسح آيتيرو الرقمي ومتابعة مسار التقويم',
    categoryEn: 'Orthodontic Studio',
    categoryAr: 'أستوديو تقويم الأسنان',
    image: suiteOrtho,
    descEn: 'State-of-the-art optical impression suite eliminating messy silicone molds for ultra-fast digital aligner fabrication.',
    descAr: 'تقنية المسح الرقمي السريع المريح دون الحاجة للمقاسات التقليدية المزعجة، لبدء تقويمك الشفاف بدقة متناهية.'
  },
  {
    id: 'surgical-suite',
    titleEn: 'Surgical Implant & Periodontal Theater',
    titleAr: 'غرفة العمليات الجراحية وزراعة الأسنان',
    subtitleEn: 'Hospital-grade sterility and surgical guidance',
    subtitleAr: 'تعقيم بمعايير المستشفيات العالمية وجراحة موجهة',
    categoryEn: 'Surgical Theater',
    categoryAr: 'جراحة وزراعة معتمدة',
    image: suiteSurgery,
    descEn: 'Positive pressure air filtration, shadowless surgical lighting, and computer navigation for safe, minimally invasive implantology.',
    descAr: 'نظام تعقيم وتنقية هواء متقدم وإضاءة جراحية لضمان أعلى مستويات الأمان أثناء زراعة الأسنان والجراحة المجهرية.'
  },
  {
    id: 'concierge',
    titleEn: 'Concierge & Care Coordination Desk',
    titleAr: 'مكتب التنسيق الطبي وخدمة المراجعين',
    subtitleEn: 'Seamless scheduling, insurance & VIP follow-up',
    subtitleAr: 'متابعة الخطط العلاجية وتنسيق التأمين والمواعيد',
    categoryEn: 'Concierge Service',
    categoryAr: 'خدمة العملاء والتأمين',
    image: suiteConcierge,
    descEn: 'Our multilingual care coordinators handle Kuwait medical insurance approvals, appointments, and international patient care with utmost dedication.',
    descAr: 'فريق متخصص لمساعدتك في إجراءات التأمين الصحي، وتنسيق مواعيدك ومتابعة حالتك بعد العلاج بكل اهتمام وسرعة.'
  }
];
