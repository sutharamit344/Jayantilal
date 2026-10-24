import { Locale } from "@/config/languages";

export interface GuideArticle {
  slug: string;
  category: string;
  readTime: string;
  publishDate: string;
  title: Record<Locale, string>;
  excerpt: Record<Locale, string>;
  content: Record<Locale, {
    intro: string;
    sections: {
      heading: string;
      paragraphs: string[];
      listItems?: string[];
    }[];
    conclusion: string;
  }>;
}

export const guidesData: GuideArticle[] = [
  {
    slug: "life-insurance-basics",
    category: "Basics",
    readTime: "5 min read",
    publishDate: "2026-09-25",
    title: {
      en: "Life Insurance Basics: How It Works & Why Your Family Needs It",
      gu: "જીવન વીમાના મૂળભૂત સિદ્ધાંતો: તે કેવી રીતે કાર્ય કરે છે અને તમારા પરિવાર માટે શા માટે જરૂરી છે",
      hi: "जीवन बीमा के मूल सिद्धांत: यह कैसे काम करता है और आपके परिवार के लिए क्यों जरूरी है",
    },
    excerpt: {
      en: "A clear, jargon-free guide explaining what life insurance truly is, the fundamental terms you should know, and how it protects your family's future.",
      gu: "જીવન વીમો વાસ્તવમાં શું છે, તમારે કયા મુખ્ય શબ્દો જાણવા જોઈએ અને તે તમારા પરિવારના ભવિષ્યનું કેવી રીતે રક્ષણ કરે છે તેની સરળ સમજ.",
      hi: "जीवन बीमा वास्तव में क्या है, आपको किन प्रमुख शब्दों को जानना चाहिए और यह आपके परिवार के भविष्य की रक्षा कैसे करता है, इसकी सीधी जानकारी।",
    },
    content: {
      en: {
        intro: "Life insurance is not merely an investment product or a tax-saving instrument; at its core, it is a legally binding contract between you and an insurance company. In exchange for regular premium payments, the insurer guarantees a designated sum of money (sum assured) to your nominated beneficiaries upon an unfortunate demise or upon policy maturity.",
        sections: [
          {
            heading: "1. The Three Pillars of a Life Policy",
            paragraphs: [
              "Every life insurance policy revolves around three fundamental participants and mechanisms:",
            ],
            listItems: [
              "The Policyholder & Life Assured: The individual whose life is covered and who typically pays the premium.",
              "The Nominee: The person (spouse, children, or parents) legally entitled to receive claim benefits.",
              "The Sum Assured: The predetermined guaranteed financial payout provided under the terms of the contract.",
            ],
          },
          {
            heading: "2. The Key Types of Life Insurance in India",
            paragraphs: [
              "Depending on whether your goal is pure protection or disciplined savings, plans in India fall into three primary categories:",
              "Pure Term Plans provide the highest coverage for the lowest premium. If the insured passes away during the policy term, the nominee receives the full sum assured. If they survive, usually no maturity benefit is paid unless a return-of-premium option was opted for.",
              "Guaranteed Savings Plans combine life protection with guaranteed payouts and bonuses over a long horizon, ideal for non-negotiable family milestones like higher education.",
              "Unit Linked Insurance Plans (ULIPs) invest a portion of your premium into debt and equity funds, giving market-linked growth opportunities with insurance protection.",
            ],
          },
          {
            heading: "3. Common Mistakes to Avoid",
            paragraphs: [
              "Avoid treating insurance purely as an income tax deduction tool at the end of the financial year. Always ensure the death benefit is adequate to replace at least 10 to 15 times your annual income.",
              "Never hide preexisting health conditions, tobacco habits, or family medical histories during policy application. Transparent disclosure guarantees seamless claim settlement when your family needs it most.",
            ],
          },
        ],
        conclusion: "A well-structured life insurance plan provides peace of mind that cannot be measured in monetary percentages. If you would like to evaluate whether your current cover is adequate, feel free to schedule a zero-obligation consultation.",
      },
      gu: {
        intro: "જીવન વીમો એ માત્ર કર બચાવવાનું સાધન કે રોકાણ નથી; તે તમારા અને વીમા કંપની વચ્ચેનો એક કાનૂની કરાર છે. તમારા દ્વારા ચૂકવવામાં આવતા નિયમિત પ્રીમિયમના બદલામાં, વીમા કંપની કોઈપણ અણધારી આફતના સમયે તમારા પરિવાર (નોમિની) ને પૂર્વનિર્ધારિત રકમ ચૂકવવાની ગેરંટી આપે છે.",
        sections: [
          {
            heading: "૧. પોલિસીના મુખ્ય સ્તંભો",
            paragraphs: [
              "દરેક જીવન વીમા પોલિસીમાં ત્રણ મૂળભૂત પાસાંઓ સૌથી મહત્વપૂર્ણ હોય છે:",
            ],
            listItems: [
              "પોલિસીધારક અને વિમિત વ્યક્તિ: જેમનું જીવન કવર કરવામાં આવ્યું છે.",
              "નોમિની (વારસદાર): પરિવારના સભ્ય જે ક્લેમની રકમ મેળવવા માટે કાયદેસર હકદાર છે.",
              "સમ એશ્યોર્ડ (વીમા રકમ): કરાર મુજબ મળવાપાત્ર નિશ્ચિત ગેરંટીડ રકમ.",
            ],
          },
          {
            heading: "૨. ભારતમાં જીવન વીમાના મુખ્ય પ્રકારો",
            paragraphs: [
              "ટર્મ ઇન્શ્યોરન્સ: ઓછા પ્રીમિયમમાં સૌથી મોટો કવરેજ આપે છે. પરિવારના કમાતા સભ્ય માટે આ સૌથી પ્રથમ જરૂરી વીમો છે.",
              "બચત યોજનાઓ: જીવન સુરક્ષાની સાથે મૂડીની સુરક્ષા અને નિશ્ચિત વળતર આપે છે.",
              "યૂલિપ (ULIP): વીમા કવચની સાથે બજાર સંલગ્ન સારું વળતર મેળવવાની તક પૂરી પાડે છે.",
            ],
          },
          {
            heading: "૩. સામાન્ય ભૂલોથી બચો",
            paragraphs: [
              "માત્ર ટેક્સ બચાવવા માટે નાની રકમનો વીમો ન લો. હંમેશા તમારી વાર્ષિક આવકના ઓછામાં ઓછા ૧૦ થી ૧૫ ગણો વીમો હોવો જરૂરી છે.",
              "ફોર્મ ભરતી વખતે આરોગ્ય સંબંધિત કોઈ માહિતી ક્યારેય છુપાવશો નહીં, જેથી ક્લેમ સમયે પરિવારને કોઈ અડચણ ન આવે.",
            ],
          },
        ],
        conclusion: "સાચો જીવન વીમો પરિવારને એવું મનોબળ આપે છે જેનું મૂલ્ય અમૂલ્ય છે. તમારી યોગ્ય જરૂરિયાત સમજવા માટે આપ ગમે ત્યારે નિઃશુલ્ક ચર્ચા કરી શકો છો.",
      },
      hi: {
        intro: "जीवन बीमा केवल टैक्स बचाने का माध्यम या साधारण निवेश नहीं है; यह आपके और बीमा कंपनी के बीच का एक कानूनी अनुबंध है। नियमित प्रीमियम के बदले, बीमा कंपनी किसी आकस्मिक अनहोनी की स्थिति में आपके परिवार (नॉमिनी) को एक निश्चित गारंटीड राशि देने का वचन देती है।",
        sections: [
          {
            heading: "1. पॉलिसी के तीन मुख्य आधार",
            paragraphs: [
              "प्रत्येक जीवन बीमा अनुबंध इन तीन अहम बिंदुओं पर आधारित होता है:",
            ],
            listItems: [
              "बीमाधारक (Life Assured): जिसका जीवन कवर किया गया है।",
              "नॉमिनी (वारिस): परिवार का वह सदस्य जिसे क्लेम राशि प्राप्त करने का कानूनी अधिकार है।",
              "सम एश्योर्ड (बीमा राशि): पॉलिसी के अंतर्गत गारंटीड देय राशि।",
            ],
          },
          {
            heading: "2. भारत में प्रमुख जीवन बीमा योजनाएं",
            paragraphs: [
              "प्योर टर्म प्लान: न्यूनतम प्रीमियम में सबसे बड़ा सुरक्षा कवच। परिवार के मुख्य कमाने वाले के लिए यह पहला कदम है।",
              "गारंटीड सेविंग्स प्लान: सुरक्षा के साथ-साथ सुरक्षित पूंजी और निश्चित रिटर्न।",
              "यूलिप (ULIP): सुरक्षा के साथ शेयर बाजार से जुड़ी पूंजी वृद्धि का अवसर।",
            ],
          },
          {
            heading: "3. ध्यान रखने योग्य बातें",
            paragraphs: [
              "केवल टैक्स बचाने के लिए अपर्याप्त बीमा न लें। बीमा कवर आपकी वार्षिक आय का कम से कम 10 से 15 गुना होना चाहिए।",
              "प्रस्ताव पत्र (फॉर्म) में अपनी स्वास्थ्य संबंधी जानकारी पूरी तरह सत्य बताएं ताकि क्लेम के समय परिवार को कोई परेशानी न हो।",
            ],
          },
        ],
        conclusion: "सही जीवन बीमा परिवार को वह मानसिक शांति देता है जिसकी तुलना किसी अन्य चीज से नहीं की जा सकती। अपनी जरूरत के सटीक विश्लेषण के लिए आज ही संपर्क करें।",
      },
    },
  },
  {
    slug: "term-insurance-guide",
    category: "Term Insurance",
    readTime: "7 min read",
    publishDate: "2026-09-23",
    title: {
      en: "The Definitive Term Insurance Guide: Sum Assured, Tenures & Riders",
      gu: "ટર્મ ઇન્શ્યોરન્સ માર્ગદર્શિકા: સમ એશ્યોર્ડ, સમયગાળો અને રાઇડર્સ",
      hi: "टर्म इंश्योरेंस संपूर्ण गाइड: सम एश्योर्ड, अवधि और महत्वपूर्ण राइडर्स",
    },
    excerpt: {
      en: "Why pure term insurance is the single most important financial product for any income earner, and how to select the right sum assured and policy duration.",
      gu: "દરેક કમાતા વ્યક્તિ માટે પ્યોર ટર્મ ઇન્શ્યોરન્સ કેમ સૌથી મહત્વનો નાણાકીય આધાર છે અને યોગ્ય કવરેજ કેવી રીતે પસંદ કરવું.",
      hi: "हर कमाने वाले व्यक्ति के लिए प्योर टर्म इंश्योरेंस सबसे महत्वपूर्ण वित्तीय कदम क्यों है और सही कवर कैसे चुनें।",
    },
    content: {
      en: {
        intro: "Term insurance is pure protection. Unlike traditional endowment policies where a major chunk of your premium is diverted into low-yielding debt investments, 100% of a term plan's premium pays strictly for financial risk cover. This allows a 30-year-old non-smoker to secure a ₹1 Crore to ₹2 Crore cover for less than ₹1,000 to ₹1,500 per month.",
        sections: [
          {
            heading: "1. Calculating the Right Sum Assured",
            paragraphs: [
              "The most reliable benchmark is the Human Life Value (HLV) approach:",
              "Sum Assured = (15 × Annual Income) + Outstanding Debts (Home/Personal Loans) + Future Inflation-Adjusted Milestones (Children's College & Wedding) - Existing Liquid Savings.",
              "If your household expenses are ₹60,000/month (₹7.2 Lakhs annually) and you hold a ₹35 Lakh home loan, an ideal safety net is at least ₹1.5 Crore.",
            ],
          },
          {
            heading: "2. Selecting the Policy Tenure",
            paragraphs: [
              "A common misconception is buying coverage until age 85 or 100. Remember: term insurance is meant to replace your income. Once you retire (e.g., at age 60 or 65), your children are financially independent and home loans are settled, your need for income replacement diminishes.",
              "Opting for coverage up to retirement age (60–65 years) keeps your premium significantly lower while covering your most vulnerable earning years.",
            ],
          },
          {
            heading: "3. Essential Riders to Consider",
            paragraphs: [
              "Critical Illness Rider: Provides a lump-sum payout upon diagnosis of listed critical conditions (cancer, heart attack, kidney failure), helping replace lost active income during medical recovery.",
              "Accidental Total and Permanent Disability Rider: Waives future premiums or provides monthly stipends if an accident leads to permanent loss of earning capacity.",
            ],
          },
        ],
        conclusion: "A term plan should be purchased as early in your working life as possible, locking in lower annual premiums that remain fixed throughout the entire policy term.",
      },
      gu: {
        intro: "ટર્મ ઇન્શ્યોરન્સ એ શુદ્ધ જીવન સુરક્ષા છે. પરંપરાગત પોલિસીની સરખામણીમાં આમાં સમગ્ર પ્રીમિયમ માત્ર સુરક્ષા પાછળ વપરાય છે, જેથી ખૂબ જ સામાન્ય પ્રીમિયમમાં ₹૧ કરોડ કે તેથી વધુ રકમનું વિશાળ કવચ મળી શકે છે.",
        sections: [
          {
            heading: "૧. વીમા રકમ (સમ એશ્યોર્ડ) કેવી રીતે નક્કી કરવી?",
            paragraphs: [
              "નિયમ અનુસાર: વીમા રકમ = (વાર્ષિક આવક × ૧૫) + હાલની લોનની જવાબદારી + બાળકોના શિક્ષણનો ખર્ચ - હાલની બચત.",
              "જો તમારી વાર્ષિક આવક ₹૬ થી ૮ લાખ હોય, તો ઓછામાં ઓછો ₹૧ થી ૧.૫ કરોડનો ટર્મ પ્લાન હોવો જરૂરી છે.",
            ],
          },
          {
            heading: "૨. યોગ્ય સમયગાળો (ટેન્યોર)",
            paragraphs: [
              "ટર્મ પ્લાન તમારી નિવૃત્તિ વય (૬૦ થી ૬૫ વર્ષ) સુધીનો લેવો સૌથી ફાયદાકારક રહે છે, જેથી પ્રીમિયમ પણ વ્યાજબી રહે અને કમાણીના મહત્વના વર્ષો સંપૂર્ણ સુરક્ષિત રહે.",
            ],
          },
          {
            heading: "૩. મહત્વપૂર્ણ રાઇડર્સ",
            paragraphs: [
              "ગંભીર બીમારી (Critical Illness) રાઇડર: કેન્સર કે હાર્ટ એટેક જેવી બીમારીના કિસ્સામાં તાત્કાલિક એકમુરકમ નાણાકીય સહાય.",
              "અકસ્માત અપંગતા રાઇડર: અકસ્માતથી અપંગતા આવે ત્યારે વધારાનું આર્થિક રક્ષણ.",
            ],
          },
        ],
        conclusion: "ટર્મ પ્લાન શક્ય તેટલી નાની ઉંમરે લેવાથી આજીવન ઓછું અને નિશ્ચિત પ્રીમિયમ રહે છે.",
      },
      hi: {
        intro: "टर्म इंश्योरेंस शुद्ध वित्तीय सुरक्षा है। इसमें आपका संपूर्ण प्रीमियम केवल और केवल जोखिम कवर के लिए उपयोग होता है, जिससे बहुत कम खर्च में ₹1 करोड़ या अधिक का बड़ा सुरक्षा कवर उपलब्ध हो जाता है।",
        sections: [
          {
            heading: "1. सही सम एश्योर्ड का निर्धारण",
            paragraphs: [
              "मानक सूत्र: सम एश्योर्ड = (वार्षिक आय × 15) + वर्तमान ऋण (होम लोन आदि) + बच्चों की भविष्य की शिक्षा - वर्तमान बचत।",
              "यदि आपकी वार्षिक आय ₹6 से ₹8 लाख है, तो परिवार के लिए कम से कम ₹1 से ₹1.5 करोड़ का कवर आवश्यक है।",
            ],
          },
          {
            heading: "2. पॉलिसी की सही अवधि",
            paragraphs: [
              "टर्म प्लान आपकी कार्यशील आयु (60-65 वर्ष) तक का लेना सबसे समझदारी भरा निर्णय होता है, जिससे प्रीमियम भी किफायती रहता है और जिम्मेदारियों के सारे वर्ष सुरक्षित हो जाते हैं।",
            ],
          },
          {
            heading: "3. उपयोगी राइडर्स",
            paragraphs: [
              "क्रिटिकल इलनेस राइडर: गंभीर बीमारी के निदान पर तुरंत एकमुश्त आर्थिक सहायता।",
              "एक्सीडेंटल डिसेबिलिटी राइडर: दुर्घटना में स्थाई विकलांगता की दशा में अतिरिक्त वित्तीय संबल।",
            ],
          },
        ],
        conclusion: "जितनी कम उम्र में टर्म प्लान लिया जाए, प्रीमियम उतना ही कम और जीवनभर स्थिर रहता है।",
      },
    },
  },
  {
    slug: "how-much-coverage-needed",
    category: "Planning",
    readTime: "4 min read",
    publishDate: "2026-09-20",
    title: {
      en: "How Much Life Insurance Do You Really Need? Human Life Value Explained",
      gu: "તમારે વાસ્તવમાં કેટલા જીવન વીમાની જરૂર છે? હ્યુમન લાઈફ વેલ્યુ (HLV) સમજૂતી",
      hi: "आपको वास्तव में कितने जीवन बीमा की आवश्यकता है? ह्यूमन लाइफ वैल्यू की सरल समझ",
    },
    excerpt: {
      en: "Discover the standard financial formulas used by certified advisors to calculate an exact, adequate sum assured for your dependents.",
      gu: "પ્રમાણિત સલાહકારો દ્વારા વપરાતી નાણાકીય પદ્ધતિઓ દ્વારા તમારા પરિવાર માટે યોગ્ય વીમા રકમની ગણતરી કરો.",
      hi: "सर्टिफाइड सलाहकारों द्वारा अपनाई जाने वाली सटीक गणना विधियों से जानें अपने परिवार के लिए उचित बीमा कवर।",
    },
    content: {
      en: {
        intro: "Underinsurance is one of the biggest risks facing Indian households. Many breadwinners assume a ₹5 Lakh or ₹10 Lakh traditional policy is sufficient. In reality, with current living expenses and healthcare inflation, such an amount would barely sustain a family for two to three years.",
        sections: [
          {
            heading: "1. The Four-Step D.I.M.E. Calculation Method",
            paragraphs: [
              "Certified financial advisors use the D.I.M.E. formula to assess real protection gaps:",
            ],
            listItems: [
              "D - Debt: Total outstanding home loans, car loans, and business liabilities that your family would have to settle.",
              "I - Income: Your annual take-home salary multiplied by the number of years until your youngest child reaches financial independence (typically 15 to 20 years).",
              "M - Mortality & Milestones: Non-negotiable future expenditures such as college tuition and higher education costs.",
              "E - Existing Assets: Subtract your existing liquid investments (mutual funds, EPF, fixed deposits) from the sum.",
            ],
          },
          {
            heading: "2. The Impact of Inflation",
            paragraphs: [
              "A college degree costing ₹15 Lakhs today will likely cost ₹35 to ₹40 Lakhs fifteen years from now at a 6-7% education inflation rate. Your life insurance cover must be designed to withstand this purchasing power erosion.",
            ],
          },
        ],
        conclusion: "Evaluating your coverage takes less than 15 minutes and ensures your loved ones are never left financially vulnerable.",
      },
      gu: {
        intro: "મોટાભાગના લોકો ₹૫ થી ૧૦ લાખની જૂની પોલિસીને પૂરતી માને છે. પરંતુ વર્તમાન મોંઘવારીમાં આ રકમ પરિવારના માત્ર ૨-૩ વર્ષના ખર્ચમાં સમાપ્ત થઈ જાય છે. તેથી સાચી ગણતરી કરવી અનિવાર્ય છે.",
        sections: [
          {
            heading: "૧. D.I.M.E. પદ્ધતિ દ્વારા સાચી ગણતરી",
            paragraphs: [
              "સલાહકારો દ્વારા વપરાતી સાચી ગણતરીની રીત:",
            ],
            listItems: [
              "D (Debt - દેવું): હોમ લોન કે અન્ય તમામ લોનની બાકી રકમ.",
              "I (Income - આવક): પરિવારના માસિક ખર્ચ માટે વાર્ષિક આવકના ૧૫ ગણી રકમ.",
              "M (Milestones - મહત્વના લક્ષ્યો): બાળકોના ઉચ્ચ શિક્ષણ અને લગ્નનો અંદાજિત ખર્ચ.",
              "E (Existing Assets - હાલની બચત): ઉપરોક્ત કુલ રકમમાંથી તમારી હાલની બચત બાદ કરવી.",
            ],
          },
        ],
        conclusion: "તમારા પરિવાર માટે જરૂરી સાચી વીમા રકમ જાણવા માટે આપ જયંતિલાલ સુથાર સાથે પરામર્શ કરી શકો છો.",
      },
      hi: {
        intro: "अधिकांश लोग ₹5 से ₹10 लाख की पुरानी पॉलिसी को पर्याप्त मान लेते हैं। परंतु वर्तमान महंगाई के दौर में यह राशि परिवार के 2-3 वर्षों के खर्च में ही समाप्त हो जाती है।",
        sections: [
          {
            heading: "1. D.I.M.E. पद्धति द्वारा सटीक गणना",
            paragraphs: [
              "प्रमाणित सलाहकारों द्वारा प्रयुक्त गणना विधि:",
            ],
            listItems: [
              "D (ऋण): होम लोन और व्यक्तिगत कर्जों की कुल बकाया राशि।",
              "I (आय): परिवार के भरण-पोषण हेतु वार्षिक आय का कम से कम 15 गुना।",
              "M (लक्ष्य): बच्चों की उच्च शिक्षा एवं विवाह का भविष्यगत खर्च।",
              "E (मौजूदा बचत): कुल योग में से वर्तमान संचित धन को घटाना।",
            ],
          },
        ],
        conclusion: "अपने परिवार के लिए सटीक कवर की गणना हेतु आज ही निःशुल्क संपर्क करें।",
      },
    },
  },
  {
    slug: "life-insurance-tax-benefits-india",
    category: "Tax Benefits",
    readTime: "5 min read",
    publishDate: "2026-09-18",
    title: {
      en: "Life Insurance Tax Benefits in India: Section 80C & Section 10(10D)",
      gu: "ભારતમાં જીવન વીમા પર કર લાભો: કલમ 80C અને કલમ 10(10D) ની સમજૂતી",
      hi: "भारत में जीवन बीमा पर टैक्स लाभ: धारा 80C एवं धारा 10(10D) की पूरी जानकारी",
    },
    excerpt: {
      en: "Learn how premium deductions under Section 80C and tax-free payouts under Section 10(10D) work under the Indian Income Tax Act.",
      gu: "ભારતીય આવકવેરા કાયદા હેઠળ કલમ 80C હેઠળ પ્રીમિયમ કપાત અને કલમ 10(10D) હેઠળ કરમુક્ત લાભો કેવી રીતે મળે છે તે સમજો.",
      hi: "आयकर अधिनियम के अंतर्गत धारा 80C में प्रीमियम छूट और धारा 10(10D) में करमुक्त भुगतान के नियमों को समझें।",
    },
    content: {
      en: {
        intro: "Life insurance offers attractive tax-saving advantages in India under both the old and updated tax regimes. However, it is vital to know the statutory conditions to ensure your policies qualify for tax exemptions without unexpected tax surprises.",
        sections: [
          {
            heading: "1. Section 80C: Deductions on Premium Paid",
            paragraphs: [
              "Premiums paid towards life insurance policies covering yourself, your spouse, or your dependent children qualify for tax deductions up to ₹1,50,000 per financial year under Section 80C of the Income Tax Act, 1961 (under the Old Tax Regime).",
              "Condition: For policies issued after April 1, 2012, the annual premium must not exceed 10% of the minimum sum assured to claim the full deduction.",
            ],
          },
          {
            heading: "2. Section 10(10D): Tax-Free Payouts",
            paragraphs: [
              "Maturity proceeds and death claim payouts received under eligible life insurance contracts are completely exempt from income tax under Section 10(10D).",
              "Death claims are 100% tax-exempt across all types of life insurance policies without any monetary ceiling.",
              "Budget 2023 update: For non-ULIP traditional policies issued on or after April 1, 2023, where aggregate annual premiums exceed ₹5 Lakhs, maturity proceeds on the excess amount are taxable as per applicable slab rates.",
            ],
          },
        ],
        conclusion: "While tax benefits are a valuable advantage, insurance should always be structured first for family security and second for tax optimization.",
      },
      gu: {
        intro: "જીવન વીમો સુરક્ષા સાથે આવકવેરા બચતનો મહત્વનો લાભ આપે છે. કલમ 80C અને કલમ 10(10D) ના નિયમોને સ્પષ્ટપણે સમજવા જરૂરી છે.",
        sections: [
          {
            heading: "૧. કલમ 80C હેઠળ પ્રીમિયમ કપાત",
            paragraphs: [
              "પોતાના, જીવનસાથી અથવા બાળકોના જીવન વીમા માટે ચૂકવેલ પ્રીમિયમ પર જૂની કર વ્યવસ્થા હેઠળ વાર્ષિક ₹૧,૫૦,૦૦૦ સુધીની કપાત મળે છે.",
            ],
          },
          {
            heading: "૨. કલમ 10(10D) હેઠળ કરમુક્ત રકમ",
            paragraphs: [
              "ડેથ ક્લેમ (અવસાનના કિસ્સામાં મળતી રકમ) પર કોઈપણ પ્રકારનો આવકવેરો લાગતો નથી અને તે સંપૂર્ણ કરમુક્ત છે.",
              "પરિપક્વતા (મેચ્યોરિટી) લાભો પણ નિર્ધારિત શરતોને આધીન સંપૂર્ણ કરમુક્ત રહે છે.",
            ],
          },
        ],
        conclusion: "ટેક્સ લાભો ઉપરાંત પરિવારની સુરક્ષાને પ્રાથમિકતા આપવી એ સાચી નાણાકીય સમજ છે.",
      },
      hi: {
        intro: "जीवन बीमा सुरक्षा के साथ-साथ आयकर बचत का एक बेहतरीन जरिया है। धारा 80C और 10(10D) के नियमों की जानकारी होना आवश्यक है।",
        sections: [
          {
            heading: "1. धारा 80C के तहत प्रीमियम छूट",
            paragraphs: [
              "अपने, जीवनसाथी अथवा बच्चों के जीवन बीमा हेतु चुकाए गए प्रीमियम पर पुरानी कर प्रणाली के अंतर्गत ₹1.5 लाख तक की छूट प्राप्त होती है।",
            ],
          },
          {
            heading: "2. धारा 10(10D) के तहत करमुक्त भुगतान",
            paragraphs: [
              "डेथ क्लेम की संपूर्ण राशि पर कोई आयकर नहीं लगता, यह पूर्णतः टैक्स-फ्री होती है।",
              "पॉलिसी की परिपक्वता (मैच्योरिटी) पर प्राप्त राशि भी निर्धारित शर्तों के अनुसार पूर्णतः करमुक्त होती है।",
            ],
          },
        ],
        conclusion: "टैक्स लाभ महत्वपूर्ण हैं, परंतु जीवन बीमा का मूल उद्देश्य परिवार की सुरक्षा होना चाहिए।",
      },
    },
  },
  {
    slug: "claim-settlement-process-guide",
    category: "Claims Support",
    readTime: "6 min read",
    publishDate: "2026-09-15",
    title: {
      en: "Demystifying the Claim Settlement Process: Documents & Timelines",
      gu: "ક્લેમ સેટલમેન્ટ પ્રક્રિયા: જરૂરી દસ્તાવેજો અને સમયમર્યાદાની સંપૂર્ણ માહિતી",
      hi: "क्लेम सेटलमेंट प्रक्रिया: आवश्यक दस्तावेज और समय-सीमा की पूरी जानकारी",
    },
    excerpt: {
      en: "A step-by-step walkthrough on how family nominees file life insurance claims with ease, and the role of an advisor during the process.",
      gu: "પરિવારના વારસદારો સરળતાથી વીમા ક્લેમ કેવી રીતે ફાઇલ કરી શકે અને સલાહકારની ભૂમિકા શું હોય છે તેની સમજૂતી.",
      hi: "नॉमिनी आसानी से बीमा क्लेम कैसे दर्ज कर सकते हैं और इस प्रक्रिया में एक समर्पित सलाहकार की क्या भूमिका होती है।",
    },
    content: {
      en: {
        intro: "The true measure of any insurance policy is not how easily it is bought, but how smoothly and honourably the claim is settled when a family faces distress. IRDAI regulations strictly mandate clear settlement timelines, and having an experienced local advisor ensures your family is supported at every step.",
        sections: [
          {
            heading: "1. Standard Documents Required for a Death Claim",
            paragraphs: [
              "Nominees must furnish the following core paperwork to the insurer branch:",
            ],
            listItems: [
              "Original Policy Bond document.",
              "Original Death Certificate issued by the local municipal corporation or authority.",
              "Claimant Statement / Form filled and signed by the registered nominee.",
              "KYC documents of the nominee (Aadhaar Card, PAN Card).",
              "Cancelled bank cheque or bank passbook copy with nominee's name for direct NEFT payout.",
            ],
          },
          {
            heading: "2. IRDAI Settlement Timelines",
            paragraphs: [
              "Under IRDAI Protection of Policyholders' Interests regulations, insurers must settle death claims within 30 days of receiving all complete documentation.",
              "If the claim involves investigations (typically for policies that have been active for less than three years), the investigation must be concluded within 90 days, and the decision communicated immediately.",
            ],
          },
          {
            heading: "3. My Personal Commitment to Your Family",
            paragraphs: [
              "As your Life Mitra, I provide hands-on assistance directly to your nominee: collecting forms, validating paperwork, coordinating with the branch officials, and tracking the NEFT disbursement until the funds reach the family's bank account safely.",
            ],
          },
        ],
        conclusion: "A smooth claim experience begins with complete disclosure at the time of policy inception. Contact me anytime for policy reviews or claim assistance.",
      },
      gu: {
        intro: "કોઈપણ વીમા પૉલિસીની ખરીદી કરતા પણ વધુ મહત્વનું છે કે જ્યારે પરિવાર પર આપત્તિ આવે ત્યારે ક્લેમ કેટલી સરળતાથી અને ઝડપથી ચૂકવાય છે. આ પ્રક્રિયામાં એક પ્રમાણિત સલાહકારનો સાથ ખૂબ મહત્વનો છે.",
        sections: [
          {
            heading: "૧. ક્લેમ માટે જરૂરી દસ્તાવેજો",
            paragraphs: [
              "નોમિની દ્વારા રજૂ કરવાના મુખ્ય કાગળો:",
            ],
            listItems: [
              "મૂળ પોલિસી બોન્ડ (દસ્તાવેજ).",
              "મ્યુનિસિપાલિટી અથવા સ્થાનિક સત્તામંડળ દ્વારા જારી કરાયેલ મૂળ મરણ પ્રમાણપત્ર.",
              "નોમિનીનું આધાર કાર્ડ અને પાન કાર્ડ (KYC).",
              "નોમિનીના બેંક ખાતાનો રદ કરેલ ચેક (NEFT પેમેન્ટ માટે).",
            ],
          },
          {
            heading: "૨. જયંતિલાલ સુથારનો વ્યક્તિગત સપોર્ટ",
            paragraphs: [
              "ક્લેમ ફોર્મ ભરવાથી લઈને શાખા કચેરી સાથે સંકલન સાધીને નાણાં બેંક ખાતામાં જમા થાય ત્યાં સુધી હું પરિવારની સાથે ઊભો રહું છું.",
            ],
          },
        ],
        conclusion: "ક્લેમ સંબંધિત કોઈપણ માર્ગદર્શન કે સહાય માટે આપ ક્યારેય પણ સંપર્ક કરી શકો છો.",
      },
      hi: {
        intro: "किसी भी बीमा पॉलिसी की वास्तविक परीक्षा तब होती है जब दुख की घड़ी में परिवार को बिना किसी बाधा के समय पर क्लेम की राशि प्राप्त हो।",
        sections: [
          {
            heading: "1. क्लेम हेतु आवश्यक मुख्य दस्तावेज",
            paragraphs: [
              "नॉमिनी द्वारा प्रस्तुत किए जाने वाले दस्तावेज:",
            ],
            listItems: [
              "मूल पॉलिसी बॉन्ड।",
              "नगर निगम अथवा सक्षम प्राधिकारी द्वारा जारी मृत्यु प्रमाण पत्र।",
              "नॉमिनी के पहचान पत्र (आधार एवं पैन कार्ड)।",
              "सीधे बैंक खाते में भुगतान हेतु कैंसिल्ड चेक या पासबुक की प्रति।",
            ],
          },
          {
            heading: "2. मेरा व्यक्तिगत सहयोग",
            paragraphs: [
              "फॉर्म भरने से लेकर शाखा कार्यालय में कागजात जमा कराने और बैंक खाते में भुगतान आने तक मैं परिवार को पूरा सहयोग देता हूं।",
            ],
          },
        ],
        conclusion: "क्लेम सहायता अथवा पॉलिसी से संबंधित किसी भी मार्गदर्शन के लिए सदैव उपलब्ध।",
      },
    },
  },
];
