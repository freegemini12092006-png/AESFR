import { Language } from '../types';

export const translations = {
  ur: {
    appName: 'زرعی توسیع شہید فاضل راہو (AESFR)',
    appShortName: 'AESFR زرعی رہنما',
    subTitle: 'محکمہ زراعت توسیع سندھ — تعلقہ گولارچی، ضلع بدین',
    creatorCredit: 'This app made by Sagar Saleem Chang',
    tagline: 'سندھ کے کاشتکاروں اور فیلڈ آفیسرز کے لیے جدید ترین ڈیجیٹل رہنمائی',
    
    // Nav items
    navHome: 'ڈیش بورڈ',
    navAiGuide: 'کسان گائیڈ AI',
    navDisease: 'فصل کی بیماری',
    navWeather: 'موسم',
    navSchemes: 'سرکاری اسکیمیں',
    navNotices: 'محکمے کے نوٹس',
    navCrops: 'فصلوں کی معلومات',
    navCalendar: 'زرعی کیلنڈر',
    navCircles: 'زرعی سرکلز',
    navContact: 'رابطہ',
    navAdmin: 'انتظامی لاگ ان',

    // Dashboard Cards
    cardAiGuideTitle: 'کسان گائیڈ AI',
    cardAiGuideDesc: 'اردو، سندھی یا انگریزی میں زرعی سوالات پوچھیں اور فوری سندھ کے مطابق رہنمائی حاصل کریں۔',
    
    cardDiseaseTitle: 'فصل کی بیماری شناخت کریں',
    cardDiseaseDesc: 'موبائل سے پتے یا پودے کی تصویر لیں؛ AI فوری علامات، احتیاط اور تدابیر بتائے گا۔',
    
    cardWeatherTitle: 'براہِ راست موسم (اوپن میٹیو)',
    cardWeatherDesc: 'گولارچی و گردونواح کا درجہ حرارت، بارش کا امکان، ہوا کی رفتار اور 7 روزہ پیش گوئی۔',
    
    cardSchemesTitle: 'سرکاری اسکیمیں و سبسڈی',
    cardSchemesDesc: 'سندھ ہاری کارڈ، گندم امدادی قیمت، لیزر لینڈ لیولنگ و تصدیق شدہ اسکیمیں۔',
    
    cardNoticesTitle: 'محکمے کے نوٹس و الرٹس',
    cardNoticesDesc: 'گلابی سنڈی، کیڑوں کے حملے اور نہری پانی کی باریوں کے سرکاری اعلانات۔',
    
    cardCropsTitle: 'فصلوں کی جامع معلومات',
    cardCropsDesc: 'کپاس، گندم، چاول، کماد، مرچ، سورج مکھی اور سبزیوں کی بوائی تا برداشت رہنمائی۔',
    
    cardCirclesTitle: 'زرعی سرکلز و فیلڈ افسران',
    cardCirclesDesc: 'ترائی، راہوکی، کھورواہ، کڑیو اور گولارچی کے تعینات زرعی افسران کی فہرست۔',
    
    cardContactTitle: 'محکمہ زراعت سے رابطہ',
    cardContactDesc: 'واٹس ایپ اور دفتر کا پتہ (کوئی کال بٹن نہیں، صرف تحریری رابطہ و لوکیشن)۔',

    // Quick Stats / Info banner
    officialBadge: 'تصدیق شدہ سرکاری ڈیٹا',
    lowBandwidth: 'کم انٹرنیٹ موڈ',
    lowBandwidthActive: 'کم انٹرنیٹ موڈ فعال ہے (تصاویر محدود ہیں)',
    offlineMode: 'آف لائن موڈ — محفوظ شدہ معلومات دکھائی جا رہی ہیں',
    liveData: 'براہِ راست اپڈیٹ شدہ',
    
    // Disease Scanner
    takePhoto: 'تصویر کھینچیں یا اپ لوڈ کریں',
    capturePhotoPrompt: 'متاثرہ پتے، تنے یا پھل کی واضح تصویر چنیں',
    cropNameOptional: 'فصل کا نام (اختیاری): جیسے کپاس، مرچ، دھان',
    growthStageOptional: 'پودے کا مرحلہ: بوائی، پھول، ٹینڈے/بالیاں یا پختگی',
    symptomsObserved: 'آپ نے کیا علامات دیکھیں؟ (جیسے پتے پیلے ہو رہے ہیں، سوراخ ہیں)',
    analyzeButton: 'بیماری کی AI تشخیص کریں',
    analyzingText: 'تصویر اور علامات کا تجزیہ کیا جا رہا ہے...',
    diagnosisTitle: 'تشخیص کا نتیجہ',
    confidenceLevel: 'یقینی حد / اعتماد کا درجہ',
    visibleSigns: 'نمایاں علامات:',
    safeImmediateSteps: 'فوری اور محفوظ ثقافتی اقدامات:',
    chemicalNotice: 'کیڑے مار ادویات کے متعلق احتیاط:',
    contactOfficerUrgent: 'زرعی توسیع کے فیلڈ افسر سے تصدیق:',
    photoUnclearWarning: 'تصویر واضح نہیں ہے؛ صرف تصویر کی بنیاد پر سو فیصد حتمی دعویٰ نہیں کیا جا سکتا۔ براہِ کرم واضح تصویر لیں۔',
    
    // Weather
    currentTemp: 'موجودہ درجہ حرارت',
    feelsLike: 'محسوس ہوتا ہے',
    humidity: 'نمی کا تناسب',
    wind: 'ہوا کی رفتار',
    rainChance: 'بارش کا امکان',
    lastUpdated: 'ڈیٹا حاصل کرنے کا وقت',
    weatherSource: 'ڈیٹا کا ماخذ: Open-Meteo Weather API',
    selectLocation: 'سندھ کا مقام منتخب کریں',
    
    // Chat
    askQuestionPlaceholder: 'اپنا زرعی سوال اردو، سندھی یا انگریزی میں لکھیے...',
    send: 'بھیجیں',
    aiDisclaimer: 'یہ AI زرعی مشورہ عمومی رہنمائی کے لیے ہے؛ ادویات کے اسپرے سے قبل اپنے حلقے کے زرعی افسر سے تصدیق ضرور کریں۔',
    suggestedQuestions: 'عام سوالات:',
    sampleQ1: 'گولارچی میں کپاس پر سفید مکھی کے حملے کی فوری روک تھام کیسے کریں؟',
    sampleQ2: 'بدین کے نمکین پانی میں دھان کی کون سی قسم بہتر پیداوار دیتی ہے؟',
    sampleQ3: 'سندھ ہاری کارڈ کے لیے کون سے کاغذات درکار ہیں؟',
    
    // Contact
    contactHeading: 'دفتر محکمہ زراعت توسیع تعلقہ گولارچی (SF Rahu)',
    officeAddress: 'نزد نادرا آفس، تعلقہ گولارچی (شہید فاضل راہو)، ضلع بدین، سندھ، پاکستان',
    whatsappOnlyNotice: 'براہِ کرم صرف واٹس ایپ میسج کریں (فون کال کی سہولت نہیں ہے):',
    openWhatsapp: 'واٹس ایپ پر رابطہ کریں',
    openDirections: 'گوگل میپس پر دفتر کا راستہ دیکھیں',
    
    // Admin
    adminPortal: 'انتظامی پینل (محکمہ زراعت عملہ)',
    adminPasscode: 'انتظامی پاس کوڈ درج کریں',
    login: 'لاگ ان کریں',
    logout: 'لاگ آؤٹ',
    addNewRecord: 'نیا ریکارڈ شامل کریں',
    verifiedOnlyNotice: 'صرف سرکاری و مصدقہ ذرائع سے معلومات اپ ڈیٹ کی جائیں۔',
    
    // Actions
    retry: 'دوبارہ کوشش کریں',
    clearChat: 'چیٹ صاف کریں',
    installApp: 'ایپ ڈاؤن لوڈ / انسٹال کریں',
    backToHome: 'مین پیج پر واپس جائیں',
  },

  sd: {
    appName: 'زرعي توسيع شهيد فاضل راهو (AESFR)',
    appShortName: 'AESFR زرعي رهبر',
    subTitle: 'زراعت کاتو سنڌ — تعلقو گولارچي، ضلعو بدين',
    creatorCredit: 'This app made by Sagar Saleem Chang',
    tagline: 'سنڌ جي آبادگارن ۽ زرعي عملدارن لاءِ نئون ڊجيٽل رهبر',

    navHome: 'مکيه صفحو',
    navAiGuide: 'هاري گائيڊ AI',
    navDisease: 'فصل جي بيماري',
    navWeather: 'موسم جو حال',
    navSchemes: 'سرڪاري اسڪيمون',
    navNotices: 'کاتي جا نوٽس',
    navCrops: 'فصلن جي ڄاڻ',
    navCalendar: 'زرعي ڪئلينڊر',
    navCircles: 'زرعي سرڪل',
    navContact: 'رابطو',
    navAdmin: 'انتظامي لاگ ان',

    cardAiGuideTitle: 'هاري گائيڊ AI',
    cardAiGuideDesc: 'سنڌي، اردو يا انگريزي ۾ پنهنجا زرعي سوال پڇو ۽ فوري رهنمائي حاصل ڪريو.',

    cardDiseaseTitle: 'فصل جي بيماري سڃاڻپ',
    cardDiseaseDesc: 'پن، ٻوٽي يا ميوي جو فوٽو ڪڍو، AI علامات ۽ بچاءَ جا اپاءَ ٻڌائيندو.',

    cardWeatherTitle: 'تازو موسم (Open-Meteo)',
    cardWeatherDesc: 'گولارچي ۽ بدين جو درجو، برسات جو امڪان ۽ 7 ڏينهن جي اڳڪٿي.',

    cardSchemesTitle: 'سرڪاري اسڪيمون ۽ رعايتون',
    cardSchemesDesc: 'سنڌ هاري ڪارڊ، ڪڻڪ جي سرڪاري اگهه ۽ ٻيون زرعي سهولتون.',

    cardNoticesTitle: 'کاتي جا نوٽس ۽ خبرداري',
    cardNoticesDesc: 'گلابي سنڊي، ماڪوڙين ۽ واهن جي بندش جا سرڪاري نوٽيفڪيشن.',

    cardCropsTitle: 'فصلن جي تفصيلي رهنمائي',
    cardCropsDesc: 'ڦٽين، ڪڻڪ، سارين، ڪمند، مرچ ۽ ٻين فصلن جي پوک ۽ حفاظت.',

    cardCirclesTitle: 'زرعي سرڪل ۽ آفيسر',
    cardCirclesDesc: 'ٽرائي، راهوڪي، ڪڙيو، خورواهه ۽ گولارچي جي فيلڊ آفيسرن جي فهرست.',

    cardContactTitle: 'زراعت کاتي سان رابطو',
    cardContactDesc: 'واٽس ايپ ۽ آفيس جو پتو (فون ڪال بدران رڳو واٽس ايپ پيغام).',

    officialBadge: 'تصديق ٿيل سرڪاري رڪارڊ',
    lowBandwidth: 'گهٽ انٽرنيٽ موڊ',
    lowBandwidthActive: 'گهٽ بينڊوڊٿ موڊ چالو آهي',
    offlineMode: 'آف لائن موڊ — محفوظ ٿيل ڊيٽا ڏيکاري پئي وڃي',
    liveData: 'تازي ڄاڻ',

    takePhoto: 'تصوير ڪڍو يا چونڊيو',
    capturePhotoPrompt: 'بيمار پن يا ٻوٽي جي چٽي تصوير اپلوڊ ڪريو',
    cropNameOptional: 'فصل جو نالو (جيئن: ڦٽيون، ڪڻڪ، مرچ، ساريون)',
    growthStageOptional: 'ٻوٽي جو مرحلو: گل، پلڙا يا پچڻ',
    symptomsObserved: 'توهان ٻوٽي ۾ ڪهڙا اهڃاڻ ڏٺا آهن؟',
    analyzeButton: 'بيماري جي AI چڪاس ڪريو',
    analyzingText: 'تصوير ۽ علامات جو تجزيو ٿي رهيو آهي...',
    diagnosisTitle: 'تشخيص جو نتيجو',
    confidenceLevel: 'اعتماد جي شرح',
    visibleSigns: 'نمايان علامتون:',
    safeImmediateSteps: 'محفوظ ۽ فوري قدم:',
    chemicalNotice: 'زهرن ۽ دوائن بابت احتياط:',
    contactOfficerUrgent: 'زرعي آفيسر سان فوري رابطو:',
    photoUnclearWarning: 'تصوير پوري واضح ناهي؛ رڳو تصوير مان پڪ سان دعويٰ نٿي ڪري سگهجي.',

    currentTemp: 'موجوده گرمي پد',
    feelsLike: 'محسوس ٿئي ٿو',
    humidity: 'آبهوا ۾ گهم',
    wind: 'وارو واءُ',
    rainChance: 'مينهن جو امڪان',
    lastUpdated: 'ڊيٽا حاصل ٿيڻ جو وقت',
    weatherSource: 'ماخذ: Open-Meteo Weather API',
    selectLocation: 'سنڌ جو علائقو چونڊيو',

    askQuestionPlaceholder: 'پنهنجو سوال سنڌي يا اردو ۾ لکو...',
    send: 'موڪليو',
    aiDisclaimer: 'هي مشورو زرعي رهنمائي لاءِ آهي؛ ڪابه دوا اسپري ڪرڻ کان اڳ پنهنجي علائقي جي زراعت آفيسر سان صلاح ضرور ڪريو.',
    suggestedQuestions: 'عام سوال:',
    sampleQ1: 'گولارچي ۾ سارين جي پوک لاءِ ڪهڙو ٻج بهتر رهندو؟',
    sampleQ2: 'مرچن جي پنن ۾ گهنج پئجي رهيا آهن، ان جو ڇا علاج آهي؟',
    sampleQ3: 'بينظير هاري ڪارڊ لاءِ ڪٿي درخواست جمع ڪرائجي؟',

    contactHeading: 'دفتر زراعت کاتو توسيع تعلقو گولارچي (شهيد فاضل راهو)',
    officeAddress: 'نزد نادرا آفيس، تعلقو گولارچي، ضلعو بدين، سنڌ، پاڪستان',
    whatsappOnlyNotice: 'مهرباني ڪري صرف واٽس ايپ پيغام موڪليو:',
    openWhatsapp: 'واٽس ايپ تي ڳالهايو',
    openDirections: 'گوگل ميپس تي رستو ڏسو',

    adminPortal: 'انتظامي پورٽل (زراعت کاتو عملو)',
    adminPasscode: 'پاس ڪوڊ لکو',
    login: 'لاگ ان',
    logout: 'لاگ آئوٽ',
    addNewRecord: 'نئون نوٽيفڪيشن / اسڪيم شامل ڪريو',
    verifiedOnlyNotice: 'رڳو سرڪاري منظور ٿيل مواد داخل ڪريو.',

    retry: 'ٻيهر ڪوشش ڪريو',
    clearChat: 'چيٽ صاف ڪريو',
    installApp: 'ايپ انسٽال ڪريو',
    backToHome: 'مکيه صفحي ڏانهن',
  },

  en: {
    appName: 'Agriculture Extension SF Rahu (AESFR)',
    appShortName: 'AESFR Agro Guide',
    subTitle: 'Agriculture Extension Department Sindh — Taluka Golarchi, District Badin',
    creatorCredit: 'This app made by Sagar Saleem Chang',
    tagline: 'Digital Advisory Platform for Farmers and Field Officers in Lower Sindh',

    navHome: 'Dashboard',
    navAiGuide: 'Kisan Guide AI',
    navDisease: 'Disease Diagnosis',
    navWeather: 'Live Weather',
    navSchemes: 'Govt Schemes',
    navNotices: 'Dept Notices',
    navCrops: 'Crop Guides',
    navCalendar: 'Farming Calendar',
    navCircles: 'Extension Circles',
    navContact: 'Contact Office',
    navAdmin: 'Admin Portal',

    cardAiGuideTitle: 'Kisan Guide AI',
    cardAiGuideDesc: 'Ask farming questions in Urdu, Sindhi or English for instant Sindh-grounded agronomy advice.',

    cardDiseaseTitle: 'Crop Disease Detection',
    cardDiseaseDesc: 'Upload plant or leaf photo to receive diagnostic clues, safe cultural steps and officer referral.',

    cardWeatherTitle: 'Live Weather (Open-Meteo)',
    cardWeatherDesc: 'Real-time temperature, precipitation probability, humidity and 7-day forecast for Golarchi.',

    cardSchemesTitle: 'Government Schemes & Subsidies',
    cardSchemesDesc: 'Verified Sindh Hari Card, Wheat support price, laser levelers and relief notifications.',

    cardNoticesTitle: 'Department Notices & Alerts',
    cardNoticesDesc: 'Official pest alerts, locust advisories and canal rotation schedules from verified sources.',

    cardCropsTitle: 'Sindh Crop Knowledge Base',
    cardCropsDesc: 'Full agronomic guides for Cotton, Wheat, Rice, Sugarcane, Chilli, Sunflower and Vegetables.',

    cardCirclesTitle: 'SF Rahu Extension Circles',
    cardCirclesDesc: 'Official Agriculture Officers for Trai, Rahuki, Khorwah, Kario and Golarchi circles.',

    cardContactTitle: 'Contact Agriculture Extension',
    cardContactDesc: 'WhatsApp messaging and Google Maps location for Taluka Golarchi office (No phone calls).',

    officialBadge: 'Verified Official Government Data',
    lowBandwidth: 'Low Bandwidth Mode',
    lowBandwidthActive: 'Low bandwidth mode active (images suppressed)',
    offlineMode: 'Offline Mode — Showing cached data',
    liveData: 'Live Data',

    takePhoto: 'Take Photo or Upload Image',
    capturePhotoPrompt: 'Upload a clear photo of the infected crop leaf or stem',
    cropNameOptional: 'Crop Name (optional: e.g. Cotton, Chilli, Rice, Wheat)',
    growthStageOptional: 'Growth Stage (e.g. Sowing, Flowering, Boll/Grain formation)',
    symptomsObserved: 'What symptoms did you observe on the plant?',
    analyzeButton: 'Analyze Crop Health with AI',
    analyzingText: 'Analyzing crop photo and symptoms...',
    diagnosisTitle: 'Diagnostic Assessment',
    confidenceLevel: 'Confidence Level',
    visibleSigns: 'Visible Symptoms Detected:',
    safeImmediateSteps: 'Safe Immediate Cultural Actions:',
    chemicalNotice: 'Chemical & Pesticide Advisory Notice:',
    contactOfficerUrgent: 'Local Extension Officer Verification:',
    photoUnclearWarning: 'Image may be unclear. Never rely on a photograph alone for diagnosis without field inspection.',

    currentTemp: 'Current Temperature',
    feelsLike: 'Feels Like',
    humidity: 'Relative Humidity',
    wind: 'Wind Speed',
    rainChance: 'Rain Probability',
    lastUpdated: 'Data Retrieval Time',
    weatherSource: 'Provider: Open-Meteo Weather API',
    selectLocation: 'Select Sindh Agricultural Area',

    askQuestionPlaceholder: 'Type your agricultural query in Urdu, Sindhi or English...',
    send: 'Send',
    aiDisclaimer: 'AI advice is intended for general agronomic guidance. Consult your local Circle Agriculture Officer before applying regulated chemicals.',
    suggestedQuestions: 'Frequently Asked Questions:',
    sampleQ1: 'How to manage whitefly infestation on cotton in Golarchi under high humidity?',
    sampleQ2: 'Which rice variety performs best in saline soils of Badin district?',
    sampleQ3: 'What are the required documents for the Sindh Hari Card scheme?',

    contactHeading: 'Agriculture Extension Office Taluka Golarchi (SF Rahu)',
    officeAddress: 'Near NADRA Office, Taluka Golarchi (Shaheed Fazil Rahu), District Badin, Sindh, Pakistan',
    whatsappOnlyNotice: 'Please send WhatsApp messages only (No voice calls):',
    openWhatsapp: 'Message on WhatsApp',
    openDirections: 'Open in Google Maps',

    adminPortal: 'Agriculture Extension Admin Portal',
    adminPasscode: 'Enter Admin Passcode',
    login: 'Log In',
    logout: 'Log Out',
    addNewRecord: 'Publish Verified Notice / Scheme',
    verifiedOnlyNotice: 'Only publish items with verified official government sources.',

    retry: 'Retry',
    clearChat: 'Clear History',
    installApp: 'Install App (PWA)',
    backToHome: 'Back to Dashboard',
  },
};
