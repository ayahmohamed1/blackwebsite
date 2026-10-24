/**
 * =====================================================================
 * ملف بيانات وتعديل نصوص وصور وموسيقى الموقع بكل سهولة
 * Website Data & Easy Customization File
 * =====================================================================
 * يمكنك تعديل أي نص أو تاريخ أو مسار صورة أو أغنية هنا بسهولة!
 * - الصور موجودة في: public/images/
 * - الأغنية موجودة في: public/music.mp3
 */

export const websiteData = {
  // بيانات عامة
  meta: {
    recipientName: "Adham",
    senderName: "Domi",
    age: 25,
    birthDate: "25 OCT 2001",
    dateText: "25 OCTOBER",
    levelText: "LEVEL 25",

    // مسار ملف الأغنية داخل مجلد public
    // استبدل ملف public/music.mp3 بأي أغنية MP3 تعجبك!
    musicPath: "/music.mp3",
  },

  // الصفحة 1: البداية (Hero / Intro)
  hero: {
    pageNumber: "01 / 08",
    headerLeftTop: "To Adham,",
    headerLeftSub: "on 25",
    headerRightDate: "25 OCTOBER",
    headerRightLevel: "LEVEL 25",
    backgroundImage: "/images/hero-car.jpg",
    quoteLine1: "Before you turn 25,",
    quoteLine2: "there's something I wanted",
    quoteLine3: "you to see...",
    signature: "— Domi ♡",
    buttonText: "OPEN YOUR SURPRISE →",
    audioLabel: "IT'S YOUR DAY",
  },

  // الصفحة 2: إحصائيات ونوت (Adham.exe turns 25)
  statsPage: {
    pageNumber: "02 / 08",
    topRightNote: "مش أي حد يبقي 25  :) ♡",
    title: "Adham.exe",
    subtitle: "turns 25",
    stickyNote: {
      text: "بطلنا الشغلانة دي\nخلاص",
      signature: "دومي —",
      smile: ":)",
    },
    stats: [
      { id: 1, label: "مستوى الشقاوة", value: 99, display: "99%", type: "bar" },
      { id: 2, label: "مستوى العند", value: 87, display: "87%", type: "bar" },
      { id: 3, label: "الضحكة اللي بتضحكني", value: 100, display: "100%", type: "bar" },
      { id: 4, label: "مستوى الرومانسية", value: 50, display: "مش معروف ؟", type: "bar" },
      { id: 5, label: "السن", value: 25, display: "25", type: "text" },
      { id: 6, label: "التصرفات", value: 100, display: "تحت المراجعة 🔄", type: "status" },
    ],
  },

  // الصفحة 3: الذكريات (3 صور فقط)
  memoriesPage: {
    pageNumber: "03 / 08",
    topRightLine1: "~ Same chaos ~",
    topRightLine2: "- Different day ♡",
    title: "Little Things,",
    subtitle: "Big Memories",
    description: "Some moments we'll never stop\nreplaying in our heads...",
    memories: [
      {
        id: 1,
        image: "/images/memory-1.jpg",
        caption: "سينما + فشار + مشروب واحد و مشير",
        year: "٢٠٢٤",
        rotation: -2,
      },
      {
        id: 2,
        image: "/images/memory-2.jpg",
        caption: "خروجات عشوائية\nوضحك طول اليوم",
        year: "٢٠٢٤",
        rotation: 1.5,
      },
      {
        id: 3,
        image: "/images/memory-3.jpg",
        caption: "مغامرات صغيرة\nو ذكريات كبيرة",
        year: "٢٠٢٤",
        rotation: -1.5,
      },
    ],
  },

  // الصفحة 4: أشياء أقدرها فيك (شرائط الورق بدون صور)
  appreciationPage: {
    pageNumber: "04 / 08",
    title: "Things I Appreciate",
    subtitle: "About You",
    footerQuote: "Thank you for being you ♡",
    items: [
      { id: 1, icon: "smile", text: "طريقتك في الهزار، حتى في أصعب الأيام." },
      { id: 2, icon: "target", text: "عندك طموح ومفيش حاجة بتقف قدامك بسهولة." },
      { id: 3, icon: "heart", text: "اهتمامك بالتفاصيل، حتى لو متبينش." },
      { id: 4, icon: "crown", text: "رخامتك المعتادة، اللي بتخليني أضحك حتى وأنا زعلانة." },
      { id: 5, icon: "shield", text: "إنك دايماً بتخاف عليا، حتى وإنت مش مبين." },
      { id: 6, icon: "star", text: "إنك بتخلي كل حاجة أبسط وأحلى، حتى من غير قصد." },
    ],
  },

  // الصفحة 5: And we've got a lot more... (بدون صور)
  lotMorePage: {
    pageNumber: "05 / 08",
    titleLine1: "And we've got",
    titleLine2: "a lot more...",
    arabicMessage: [
      "فيه حاجات كتير لسه محتاجين نعيشها،",
      "سوا ، وفي كل الأحوال...",
      "أنا متحمسة لكل اللي جاي.",
    ],
    wishesList: [
      "More trips ✨",
      "More laughter ✨",
      "More late night talks",
      "More stupid jokes",
      "More you...",
    ],
    heartSign: "♡",
  },

  // الصفحة 6: رسالة الدفتر One Last Thing... (بدون صور)
  letterPage: {
    pageNumber: "06 / 08",
    title: "One Last Thing...",
    subDoodle: "Same person... bigger dreams ♡",
    notebookLetter: {
      salutation: "Happy 25th Birthday, Adham.",
      paragraphs: [
        "مش عارفة أبدأ منين بصراحة، بس عارفة إني كنت عايزة أعملك حاجة مختلفة عن كل سنة.",
        "يمكن مش كل حاجة بتتقال بسهولة، ويمكن ساعات الهزار بيبقى أسهل من الكلام الجد. بس ده مبيمنعش إن في ناس ليها مكانة خاصة، وإن في تفاصيل صغيرة بتفضل فاكرها حتى بعد ما اليوم بيخلص.",
        "أنا مبسوطة إن عندي ذكريات كتير معاك، ومواقف لسه بتضحكني كل ما أفتكرها، وحاجات فيك بتخليني أتمنى لك كل حاجة حلوة بجد.",
        "في سنتك الجديدة، أتمنى تضحك كتير، وتحقق الحاجات اللي نفسك فيها، وتكون مرتاح ومبسوط، وتلاقي دايماً أسباب تخليك فخور بنفسك.",
        "وخليك فاكر إنك كبرت سنة، بس ده مش معناه إنك كبرت على الرخامة طبعاً.",
      ],
      closingEn: "Happy birthday, ya Adham.\nI hope 25 is good to you.",
      signature: "— Domi ♡",
    },
  },

  // الصفحة 7: That's all... (البيدج قبل الأخيرة)
  outroPage: {
    pageNumber: "07 / 08",
    title: "That’s all...",
    messageLines: [
      "Thank you for being a part of my story, and for being here with me through everything that has happened.",
      "You make everything a little bit brighter, and I’m truly lucky for that.",
    ],
    pinkWish: "Happy birthday, Domi.",
    dateBadge: {
      day: "25",
      month: "OCT",
      year: "2001",
    },
    buttonText: "Keep being you →",
    footerRightText: "THE BEST\nIS YET TO COME",
  },

  // الصفحة 8: صفحة مشغل الأغنية (For Adham)
  songPlayerPage: {
    pageNumber: "08 / 08",
    cardTitle: "For Adham",
    cardSubtitle: "Always a good playlist, just like you.",
    defaultDuration: "3:25",
    bottomQuote: "“...with you will always have a special place in my heart. Happy 25th birthday, Domi.”",
  },
};
