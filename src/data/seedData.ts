import { Category, GameModeInfo, Word, WordDifficulty, Achievement, CommunityWord } from '../types/game';

export const GAME_MODES: GameModeInfo[] = [
  {
    id: 'CLASSIC',
    titleFa: 'کلاسیک',
    descriptionFa: 'پانتومیم سنتی - بازی نوبتی، حدس تیم و محاسبه امتیاز دقیق',
    badge: '⭐ آسان',
    colorHex: '#FFCA28',
    gradient: ['#33FFCA28', '#15FF7043'],
  },
  {
    id: 'SPEED_CHALLENGE',
    titleFa: 'چالش سرعت',
    descriptionFa: 'حداکثر حدس درست در زمان محدود با کامبو و بونوس ویژه!',
    badge: '🔥 شدید',
    colorHex: '#FF7043',
    gradient: ['#33FF7043', '#15E91E63'],
  },
  {
    id: 'TEAM_BATTLE',
    titleFa: 'نبرد تیم‌ها',
    descriptionFa: 'رقابت حماسی ۲ یا چند تیم با کل‌کل پانتومیم و هیجان بالا!',
    badge: '⭐ متوسط',
    colorHex: '#26C6DA',
    gradient: ['#3326C6DA', '#1500ACC1'],
  },
  {
    id: 'AI_CHALLENGE',
    titleFa: 'چالش هوش مصنوعی',
    descriptionFa: 'تولید سناریوهای خلاقانه و حدس‌های هوشمندانه توسط AI Game Master',
    badge: '⭐⭐ سخت',
    colorHex: '#EC407A',
    gradient: ['#33EC407A', '#158E24AA'],
  },
  {
    id: 'FAMILY',
    titleFa: 'خانوادگی',
    descriptionFa: 'مناسب تمامی سنین، کودکان و بزرگسالان در جمع‌های صمیمی',
    badge: '⭐ آسان',
    colorHex: '#66BB6A',
    gradient: ['#3366BB6A', '#15009688'],
  },
  {
    id: 'PARTY_EXTREME',
    titleFa: 'پارتی اکستریم',
    descriptionFa: 'مخصوص جمع‌های دوستانه با سناریوهای فوق خنده‌دار و غیرمنتظره',
    badge: '🔥 شدید',
    colorHex: '#AB47BC',
    gradient: ['#337E57C2', '#153F51B5'],
  },
];

export const CATEGORIES: Category[] = [
  { id: 'cinema', titleFa: 'سینما و تلویزیون', iconName: 'Film', colorHex: '#AB47BC', itemCount: 30 },
  { id: 'proverbs', titleFa: 'ضرب‌المثل‌های فارسی', iconName: 'Quote', colorHex: '#FF9800', itemCount: 25 },
  { id: 'jobs', titleFa: 'مشاغل و حرفه‌ها', iconName: 'Briefcase', colorHex: '#29B6F6', itemCount: 25 },
  { id: 'funny', titleFa: 'موقعیت‌های خنده‌دار', iconName: 'Smile', colorHex: '#EC407A', itemCount: 30 },
  { id: 'animals', titleFa: 'حیوانات و طبیعت', iconName: 'PawPrint', colorHex: '#66BB6A', itemCount: 25 },
  { id: 'objects', titleFa: 'اشیاء و ابزارها', iconName: 'Wrench', colorHex: '#8D6E63', itemCount: 25 },
];

export const SEED_WORDS: Word[] = [
  // Cinema
  { id: 'c1', text: 'پایتخت ۶ و نقی معمولی', category: 'cinema', difficulty: 'MEDIUM', points: 20, hint: 'فدایی داری! سریال معروف نوروزی' },
  { id: 'c2', text: 'درباره الی و شهاب حسینی', category: 'cinema', difficulty: 'HARD', points: 35, hint: 'فیلم اصغر فرهادی در شمال' },
  { id: 'c3', text: 'مرد دو هزار چهره', category: 'cinema', difficulty: 'EASY', points: 10, hint: 'من اشتباهی بودم! مهران مدیری' },
  { id: 'c4', text: 'اخراجی‌ها ۱ و مجید سوزوکی', category: 'cinema', difficulty: 'EASY', points: 10, hint: 'فیلم دفاع مقدس کمدی پرفروش' },
  { id: 'c5', text: 'مارمولک و رضا مارمولک', category: 'cinema', difficulty: 'MEDIUM', points: 20, hint: 'به تعداد آدم‌ها راه است برای رسیدن به خدا' },
  { id: 'c6', text: 'جدایی نادر از سیمین', category: 'cinema', difficulty: 'HARD', points: 35, hint: 'برنده جایزه اسکار اصغر فرهادی' },
  { id: 'c7', text: 'شب‌های برره و پاچه خواری', category: 'cinema', difficulty: 'MEDIUM', points: 20, hint: 'روستای خیالی با پول نوچوفسکی' },
  { id: 'c8', text: 'مهمان مامان', category: 'cinema', difficulty: 'MEDIUM', points: 20, hint: 'داریوش مهرجویی و سفره شام مشترک' },
  { id: 'c9', text: 'شهرزاد و بزرگ‌آقا', category: 'cinema', difficulty: 'HARD', points: 35, hint: 'سریال عاشقانه تاریخی شبکه خانگی' },
  { id: 'c10', text: 'فسیل و خواننده پاپ', category: 'cinema', difficulty: 'EASY', points: 10, hint: 'پرفروش‌ترین کمدی دهه اخیر' },

  // Proverbs
  { id: 'p1', text: 'دیگ به دیگ میگه رویت سیاه', category: 'proverbs', difficulty: 'MEDIUM', points: 20, hint: 'اشاره به عیب‌جویی کسی که خودش هم عیب دارد' },
  { id: 'p2', text: 'شاهنامه‌خوانی آخرش خوش است', category: 'proverbs', difficulty: 'HARD', points: 35, hint: 'پایان کار مهم و تعیین‌کننده است' },
  { id: 'p3', text: 'آب که از سر گذشت چه یک وجب چه صد وجب', category: 'proverbs', difficulty: 'MEDIUM', points: 20, hint: 'بی‌تفاوتی بعد از عبور از حد تحمل یا خطا' },
  { id: 'p4', text: 'مرغ همسایه غازه', category: 'proverbs', difficulty: 'EASY', points: 10, hint: 'ارزش دادن بیش از حد به دارایی دیگران' },
  { id: 'p5', text: 'بادمجان بم آفت ندارد', category: 'proverbs', difficulty: 'EASY', points: 10, hint: 'افراد سرسخت که به این سادگی از پا درنمی‌آیند' },
  { id: 'p6', text: 'شتر دیدی ندیدی', category: 'proverbs', difficulty: 'EASY', points: 10, hint: 'رازداری و ندیده گرفتن ماجرا' },
  { id: 'p7', text: 'آش کشک خالته بخوری پاته نخوری پاته', category: 'proverbs', difficulty: 'MEDIUM', points: 20, hint: 'کاری که در هر صورت باید انجام شود' },
  { id: 'p8', text: 'جوینده یابنده است', category: 'proverbs', difficulty: 'EASY', points: 10, hint: 'تلاش مدام منجر به نتیجه می‌شود' },
  { id: 'p9', text: 'یک دست صدا ندارد', category: 'proverbs', difficulty: 'EASY', points: 10, hint: 'نیاز به همکاری جمعی' },
  { id: 'p10', text: 'از ماست که بر ماست', category: 'proverbs', difficulty: 'HARD', points: 35, hint: 'نتیجه اشتباهات خودمان را می‌بینیم' },

  // Jobs
  { id: 'j1', text: 'جراح مغز و اعصاب در حال عمل', category: 'jobs', difficulty: 'HARD', points: 35, hint: 'پزشکی فوق‌العاده حساس با پنس و چراغ قوه' },
  { id: 'j2', text: 'راننده تاکسی اینترنتی عصبانی در ترافیک', category: 'jobs', difficulty: 'EASY', points: 10, hint: 'چک کردن لوکیشن روی گوشی و بوق زدن' },
  { id: 'j3', text: 'آتش‌نشان در حال نجات گربه از درخت', category: 'jobs', difficulty: 'EASY', points: 10, hint: 'نردبان، شیلنگ آب و نجات' },
  { id: 'j4', text: 'باریستا در حال لاته آرت زدن روی قهوه', category: 'jobs', difficulty: 'MEDIUM', points: 20, hint: 'بخار شیر و کشیدن شکل قلب با ظرافت' },
  { id: 'j5', text: 'مکانیک زیر ماشین روغنی', category: 'jobs', difficulty: 'MEDIUM', points: 20, hint: 'آچار فرانسه و مالیدن دست به پیشانی' },
  { id: 'j6', text: 'خلبان هواپیما هنگام چاله هوایی', category: 'jobs', difficulty: 'HARD', points: 35, hint: 'هدایت دسته پرواز با لرزش شدید' },
  { id: 'j7', text: 'معلم کلاس اول در حال آرام کردن بچه‌ها', category: 'jobs', difficulty: 'MEDIUM', points: 20, hint: 'هیس گفتن و نوشتن الفبای فارسی روی تخته' },
  { id: 'j8', text: 'فضانورد در حال پیاده‌روی فضایی', category: 'jobs', difficulty: 'HARD', points: 35, hint: 'حرکت در جاذبه صفر و کلاه فضایی' },

  // Funny
  { id: 'f1', text: 'کسی که چای داغ قندپهلو خورده و زبانش سوخته', category: 'funny', difficulty: 'EASY', points: 10, hint: 'فوت کردن روی زبان و تکان دادن دست' },
  { id: 'f2', text: 'راه رفتن روی پیاده‌رو یخ‌زده برفی', category: 'funny', difficulty: 'MEDIUM', points: 20, hint: 'تلاش کمدی برای حفظ تعادل و سر نخوردن' },
  { id: 'f3', text: 'گیر افتادن در آسانسور پر از آدم و بوی عطر تند', category: 'funny', difficulty: 'HARD', points: 35, hint: 'تنگ شدن جا و سرفه‌های معذبانه' },
  { id: 'f4', text: 'تلاش برای باز کردن نوشابه گازدار سرریز شده', category: 'funny', difficulty: 'EASY', points: 10, hint: 'ریختن کف روی دست و لباس و لیس زدن انگشت' },
  { id: 'f5', text: 'تست کردن عینک با نمره بسیار بالا', category: 'funny', difficulty: 'MEDIUM', points: 20, hint: 'ریز کردن چشم‌ها و سرگیجه گرفتن' },
  { id: 'f6', text: 'گرفتن عکس سلفی دسته‌جمعی که دستت کوتاه است', category: 'funny', difficulty: 'EASY', points: 10, hint: 'دراز کردن دست به سمت سقف و لبخند مصنوعی' },
  { id: 'f7', text: 'کسی که در مهمانی رسمی جورابش سوراخ است', category: 'funny', difficulty: 'HARD', points: 35, hint: 'پنهان کردن شست پا زیر مبل' },
  { id: 'f8', text: 'شنیدن ویس ۵ دقیقه‌ای تلگرام روی دور تند', category: 'funny', difficulty: 'MEDIUM', points: 20, hint: 'نگه‌داشتن گوشی کنار گوش با چشم‌های گرد' },

  // Animals
  { id: 'a1', text: 'پنگوئن خوشحال و رقاص روی یخ قطبی', category: 'animals', difficulty: 'EASY', points: 10, hint: 'راه رفتن بانمک پنگوئنی با بال‌های کوتاه' },
  { id: 'a2', text: 'کانگورو با بچه‌اش در کیسه شکمی', category: 'animals', difficulty: 'MEDIUM', points: 20, hint: 'پرش‌های بلند با پای کشیده استرالیایی' },
  { id: 'a3', text: 'طاووس در حال خودنمایی و باز کردن پرها', category: 'animals', difficulty: 'MEDIUM', points: 20, hint: 'راه رفتن مغرورانه و پرهای رنگین‌کمانی' },
  { id: 'a4', text: 'میمون باهوش در حال پوست کندن موز', category: 'animals', difficulty: 'EASY', points: 10, hint: 'خاراندن سر و پریدن روی شاخه' },
  { id: 'a5', text: 'فلامینگو ایستاده روی یک پا', category: 'animals', difficulty: 'MEDIUM', points: 20, hint: 'گردن خمیده و حفظ تعادل روی یک لنگه پا' },
  { id: 'a6', text: 'هشت‌پای غول‌پیکر در کف اقیانوس', category: 'animals', difficulty: 'HARD', points: 35, hint: 'تکان دادن ۸ شاخک موجی همزمان' },

  // Objects
  { id: 'o1', text: 'جاروبرقی قدیمی بسیار پر سر و صدا', category: 'objects', difficulty: 'EASY', points: 10, hint: 'عقب جلو کردن لوله خرطومی روی فرش' },
  { id: 'o2', text: 'تلفن همراه در حال زنگ خوردن با ویبره شدید', category: 'objects', difficulty: 'EASY', points: 10, hint: 'لرزش روی میز و نور صفحه' },
  { id: 'o3', text: 'چتر وارونه شده در طوفان و باران شدید', category: 'objects', difficulty: 'MEDIUM', points: 20, hint: 'کشیده شدن به عقب و خیس شدن سر و صورت' },
  { id: 'o4', text: 'ساعت مچی زنگ‌دار هوشمند', category: 'objects', difficulty: 'MEDIUM', points: 20, hint: 'لرزش مچ دست و خاموش کردن با انگشت' },
  { id: 'o5', text: 'ماشین چمن‌زنی موتوری', category: 'objects', difficulty: 'MEDIUM', points: 20, hint: 'هل دادن چرخ‌ها و پرتاب علف‌ها' },
];

export const ACHIEVEMENTS: Achievement[] = [
  { id: 'first_win', titleFa: 'اولین پیروزی 🏆', descriptionFa: 'برنده شدن در اولین بازی پانتومیم', iconName: 'Trophy', isUnlocked: false, rewardXp: 50 },
  { id: 'speed_demon', titleFa: 'سلطان سرعت ⚡', descriptionFa: 'حدس ۳ کلمه در کمتر از ۴۵ ثانیه', iconName: 'Zap', isUnlocked: false, rewardXp: 100 },
  { id: 'master_mime', titleFa: 'استاد حرکات 🎭', descriptionFa: 'کسب مجموع ۱۰۰۰ امتیاز در بازی‌ها', iconName: 'Sparkles', isUnlocked: false, rewardXp: 150 },
  { id: 'party_king', titleFa: 'سلطان دورهمی 🎉', descriptionFa: 'برگزاری ۵ دست بازی کامل پانتومیم', iconName: 'Flame', isUnlocked: false, rewardXp: 200 },
  { id: 'ai_collaborator', titleFa: 'همیار هوش مصنوعی 🤖', descriptionFa: 'تولید کلمات اختصاصی توسط AI Game Master', iconName: 'Brain', isUnlocked: false, rewardXp: 75 },
];

export const INITIAL_COMMUNITY_WORDS: CommunityWord[] = [
  { id: 'cw1', text: 'تلاش برای زدن مگس با مگس‌کش برقی', category: 'funny', creatorName: 'امیرحسین', votes: 24, createdAt: Date.now() - 86400000 * 3 },
  { id: 'cw2', text: 'گوش دادن به ویس ۵ دقیقه‌ای تلگرام روی سرعت ۲', category: 'funny', creatorName: 'سارا', votes: 38, createdAt: Date.now() - 86400000 * 2 },
  { id: 'cw3', text: 'گربه وقتی ظرف شیشه‌ای را از لبه میز هل می‌دهد', category: 'animals', creatorName: 'نیما', votes: 19, createdAt: Date.now() - 86400000 * 1 },
  { id: 'cw4', text: 'راننده تاکسی که با مسافر صندلی جلو بحث سیاسی می‌کند', category: 'jobs', creatorName: 'علیرضا', votes: 45, createdAt: Date.now() - 86400000 * 4 },
  { id: 'cw5', text: 'فیلم قیصر و بهروز وثوقی و دیالوگ معروف', category: 'cinema', creatorName: 'مریم', votes: 31, createdAt: Date.now() - 86400000 * 5 },
];
