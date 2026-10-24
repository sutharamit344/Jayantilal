export interface SiteConfig {
  name: string;
  fullName: string;
  designation: string;
  club: string;
  company: string;
  irdaiRegNo: string;
  tagline: string;
  contact: {
    phone: string;
    displayPhone: string;
    whatsapp: string;
    displayWhatsapp: string;
    email: string;
    address: {
      line1: string;
      line2: string;
      landmark: string;
      city: string;
      state: string;
      pincode: string;
      country: string;
    };
  };
  social: {
    whatsappUrl: string;
    telUrl: string;
    emailUrl: string;
  };
  disclaimers: {
    insurance: string;
    tax: string;
    general: string;
  };
  domain: string;
}

export const siteConfig: SiteConfig = {
  name: "Jayantilal Suthar",
  fullName: "Jayanti Lal Suthar",
  designation: "Life Insurance Advisor (Life Mitra)",
  club: "Club: Life Mitra",
  company: "SBI Life Insurance Company Ltd.",
  irdaiRegNo: "111", // Official IRDAI Registration number for SBI Life
  tagline: "Empowering families with financial security and lifelong protection",
  domain: process.env.NEXT_PUBLIC_SITE_URL || "https://jayantilalsuthar.com",
  contact: {
    phone: "+917976119365",
    displayPhone: "+91 79761 19365",
    whatsapp: "+917976119365",
    displayWhatsapp: "+91 79761 19365",
    email: "jayanti992424381@sbilife.co.in",
    address: {
      line1: "Paxall Complex, Second Floor",
      line2: "M.I.G. Colony",
      landmark: "Opp. Jalore Club",
      city: "Jalore",
      state: "Rajasthan",
      pincode: "343001",
      country: "India",
    },
  },
  social: {
    whatsappUrl: "https://wa.me/917976119365?text=" + encodeURIComponent("Hello Jayantilal, I would like to learn more about life insurance options. Please guide me."),
    telUrl: "tel:+917976119365",
    emailUrl: "mailto:jayanti992424381@sbilife.co.in",
  },
  disclaimers: {
    insurance: "Insurance is the subject matter of solicitation. Policy details, premium amounts, and benefit terms are governed by the specific terms and conditions of the insurer. Please read the policy brochure and sales literature carefully before concluding a sale.",
    tax: "Tax benefits and exemptions are subject to the applicable provisions of the Indian Income Tax Act, 1961, and are subject to changes in tax laws. Please consult your chartered accountant or qualified tax advisor for personalised tax guidance.",
    general: "This website is an independent educational and consultation portal managed by Jayantilal Suthar, authorised Life Mitra with SBI Life Insurance Co. Ltd. Content provided herein is strictly for informational and educational purposes and does not constitute legally binding advice or guaranteed policy underwriting.",
  },
};
