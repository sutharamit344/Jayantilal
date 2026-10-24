import { Locale } from "@/config/languages";

export interface FaqItem {
  id: string;
  category: "term" | "general" | "tax" | "claims";
  question: Record<Locale, string>;
  answer: Record<Locale, string>;
}

export const faqsData: FaqItem[] = [
  {
    id: "faq-1",
    category: "term",
    question: {
      en: "What is the difference between a pure term plan and traditional endowment plans?",
      gu: "પ્યોર ટર્મ પ્લાન અને પરંપરાગત એન્ડોવમેન્ટ પ્લાન વચ્ચે શું તફાવત છે?",
      hi: "प्योर टर्म प्लान और पारंपरिक एंडोमेंट प्लान में क्या अंतर है?",
    },
    answer: {
      en: "A pure term plan provides 100% financial protection with no investment component, allowing you to secure a very large coverage (e.g. ₹1 Crore+) for a minimal annual premium. Traditional endowment plans combine a small life cover with conservative guaranteed savings and bonuses, requiring significantly higher premiums for equivalent coverage.",
      gu: "પ્યોર ટર્મ પ્લાનમાં કોઈ રોકાણ ઘટક હોતું નથી, જેથી ખૂબ સામાન્ય પ્રીમિયમમાં ₹૧ કરોડ કે તેથી વધુ મોટો જીવન વીમો મળે છે. જ્યારે પરંપરાગત એન્ડોવમેન્ટ પ્લાનમાં વીમાની સાથે બચત પણ જોડાયેલી હોવાથી સમાન રકમના કવર માટે ઘણું વધારે પ્રીમિયમ ચૂકવવું પડે છે.",
      hi: "प्योर टर्म प्लान में निवेश का घटक नहीं होता, जिससे बहुत कम प्रीमियम में ₹1 करोड़ या अधिक का बड़ा जीवन बीमा प्राप्त होता है। पारंपरिक पॉलिसियों में सुरक्षा के साथ बचत भी जुड़ी होती है, इसलिए समान कवर के लिए काफी अधिक प्रीमियम देना पड़ता है।",
    },
  },
  {
    id: "faq-2",
    category: "general",
    question: {
      en: "At what age should I buy a life insurance policy?",
      gu: "મારે કઈ ઉંમરે જીવન વીમા પોલિસી લેવી જોઈએ?",
      hi: "मुझे किस उम्र में जीवन बीमा पॉलिसी खरीदनी चाहिए?",
    },
    answer: {
      en: "The best time to buy life insurance is as soon as you have financial dependents or loans, ideally in your 20s or early 30s. At younger ages, premiums are at their lowest and remain locked for the entire tenure, while medical checkups are minimal and approvals are faster.",
      gu: "જેવી તમારા પર પરિવારની જવાબદારી આવે અથવા કમાણી શરૂ થાય ત્યારે ૨૦ થી ૩૦ વર્ષની વયમાં વીમો લેવો સૌથી ઉત્તમ છે. નાની ઉંમરે પ્રીમિયમ સૌથી ઓછું હોય છે અને આખી મુદત સુધી તે બદલાતું નથી.",
      hi: "जैसे ही आप पर पारिवारिक जिम्मेदारियां आएं या कमाई शुरू हो, 20 से 30 वर्ष की आयु में बीमा लेना सर्वश्रेष्ठ है। कम उम्र में प्रीमियम न्यूनतम होता है और पूरी अवधि तक स्थिर रहता है।",
    },
  },
  {
    id: "faq-3",
    category: "term",
    question: {
      en: "What happens if I survive the term insurance policy period?",
      gu: "જો હું ટર્મ ઇન્શ્યોરન્સ પોલિસીની મુદત પૂર્ણ થાય ત્યાં સુધી જીવિત રહું તો શું થાય?",
      hi: "यदि मैं टर्म इंश्योरेंस की पूरी अवधि तक जीवित रहता हूँ तो क्या होगा?",
    },
    answer: {
      en: "Under a standard pure term plan, there is no survival or maturity benefit at the end of the term; its primary purpose is pure risk protection during your earning years. However, if you choose a 'Return of Premium' (TROP) variant, all basic premiums paid over the policy term are refunded back to you at maturity, subject to applicable terms.",
      gu: "સામાન્ય પ્યોર ટર્મ પ્લાનમાં મુદત પૂરી થવા પર કોઈ રકમ પાછી મળતી નથી, કારણ કે સમગ્ર રકમ માત્ર રક્ષણ માટે વપરાય છે. પરંતુ જો તમે 'રિટર્ન ઓફ પ્રીમિયમ' વિકલ્પ પસંદ કરો છો, તો ચૂકવેલ પ્રીમિયમ મુદતના અંતે પરત મળે છે.",
      hi: "मानक टर्म प्लान में अवधि पूरी होने पर कोई मैच्योरिटी राशि नहीं मिलती, क्योंकि यह विशुद्ध रूप से जोखिम सुरक्षा है। हालांकि, 'रिटर्न ऑफ प्रीमियम' विकल्प में पॉलिसी समाप्त होने पर चुकाया गया मूल प्रीमियम वापस मिल जाता है।",
    },
  },
  {
    id: "faq-4",
    category: "tax",
    question: {
      en: "Are life insurance payouts in India completely tax-free?",
      gu: "શું ભારતમાં જીવન વીમા ક્લેમ અને પરિપક્વતાની રકમ સંપૂર્ણ કરમુક્ત છે?",
      hi: "क्या भारत में जीवन बीमा का क्लेम और मैच्योरिटी पूर्णतः टैक्स-फ्री होती है?",
    },
    answer: {
      en: "Yes, death claim proceeds received by nominees are 100% tax-free under Section 10(10D) of the Income Tax Act without any monetary cap. Maturity proceeds are also generally tax-free, provided the annual premium paid does not exceed 10% of the sum assured, and within the latest ₹5 Lakh annual aggregate premium guidelines for traditional plans issued after April 1, 2023.",
      gu: "હા, નોમિનીને મળતી ડેથ ક્લેમની રકમ કલમ 10(10D) હેઠળ કોઈપણ મર્યાદા વિના સંપૂર્ણપણે કરમુક્ત છે. મેચ્યોરિટી રકમ પણ નિર્ધારિત આવકવેરા નિયમો અને વાર્ષિક પ્રીમિયમ મર્યાદા અનુસાર કરમુક્ત રહે છે.",
      hi: "हाँ, नॉमिनी को मिलने वाली डेथ क्लेम राशि धारा 10(10D) के तहत शत-प्रतिशत करमुक्त होती है। मैच्योरिटी राशि भी निर्धारित नियमों और ₹5 लाख वार्षिक प्रीमियम सीमा के अंतर्गत टैक्स-फ्री होती है।",
    },
  },
  {
    id: "faq-5",
    category: "claims",
    question: {
      en: "What should my nominee do first in case of a claim?",
      gu: "ક્લેમની સ્થિતિમાં મારા નોમિનીએ સૌપ્રથમ શું કરવું જોઈએ?",
      hi: "क्लेम की स्थिति में मेरे नॉमिनी को सबसे पहले क्या करना चाहिए?",
    },
    answer: {
      en: "Your nominee should immediately contact me (Jayantilal Suthar, Life Mitra) or notify the nearest SBI Life branch. The primary documents needed are the original death certificate, original policy bond, nominee KYC (Aadhaar & PAN), and a cancelled cheque for direct bank transfer. I personally assist with every step of the paperwork.",
      gu: "તમારા નોમિનીએ સૌપ્રથમ મને (જયંતિલાલ સુથાર) અથવા નજીકની એસબીઆઈ લાઈફ શાખાનો સંપર્ક કરવો. મૂળ મરણ પ્રમાણપત્ર, પોલિસી દસ્તાવેજ, નોમિનીના આઈડી પ્રૂફ અને બેંક ચેકની જરૂર પડે છે. હું પોતે આખી પ્રક્રિયામાં હાજર રહીને સહાય કરું છું.",
      hi: "आपके नॉमिनी को तुरंत मुझसे (जयंतीलाल सुथार) या नजदीकी एसबीआई लाइफ शाखा से संपर्क करना चाहिए। मृत्यु प्रमाण पत्र, पॉलिसी बॉन्ड, नॉमिनी के आईडी प्रूफ और कैंसिल्ड चेक की आवश्यकता होती है। मैं पूरी प्रक्रिया में व्यक्तिगत सहयोग प्रदान करता हूँ।",
    },
  },
  {
    id: "faq-6",
    category: "general",
    question: {
      en: "Why should I consult a certified Life Mitra rather than buying directly online?",
      gu: "ઓનલાઇન સીધું ખરીદવાને બદલે પ્રમાણિત લાઈફ મિત્રની સલાહ કેમ લેવી જોઈએ?",
      hi: "ऑनलाइन सीधे खरीदने के बजाय एक प्रमाणित लाइफ मित्र से सलाह क्यों लेनी चाहिए?",
    },
    answer: {
      en: "While portals show price tags, they don't assess your family's exact liability structure or help you navigate medical underwriting disclosures. More importantly, when an unfortunate event occurs, online portals leave your grieving family to navigate complex paperwork alone. A dedicated Life Mitra provides personal accountability and stands with your family during claim settlement.",
      gu: "ઓનલાઇન વેબસાઇટ્સ માત્ર પ્રીમિયમ દર્શાવે છે પરંતુ તમારા પરિવારની વાસ્તવિક જવાબદારીઓનું વિશ્લેષણ કરતી નથી. સૌથી મહત્વની વાત એ છે કે દુઃખદ પરિસ્થિતિમાં ઓનલાઇન પોર્ટલ પર નોમિનીને એકલા કાગળો કરવા પડે છે, જ્યારે એક સમર્પિત લાઈફ મિત્ર પરિવારની સાથે ઊભો રહીને ક્લેમ અપાવે છે.",
      hi: "ऑनलाइन पोर्टल केवल मूल्य दिखाते हैं, परंतु वे आपकी देनदारियों का सही आकलन नहीं करते। सबसे महत्वपूर्ण बात, क्लेम के समय ऑनलाइन पोर्टल में परिवार को अकेले भटकना पड़ता है, जबकि एक लाइफ मित्र हमेशा परिवार के साथ खड़ा होकर क्लेम में मदद करता है।",
    },
  },
];
