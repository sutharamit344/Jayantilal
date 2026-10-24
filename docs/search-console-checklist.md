# Google Search Console & Launch Readiness Checklist

Follow these verified steps upon pointing the production domain to ensure rapid, error-free indexation:

---

## 1. Domain Verification in Google Search Console (GSC)

1. Open [Google Search Console](https://search.google.com/search-console).
2. Choose **Domain property** and enter `jayantilalsuthar.com`.
3. Add the TXT record provided by Google to your DNS settings at your domain registrar.
4. Click **Verify**.

---

## 2. Submit XML Sitemap

1. In GSC, navigate to **Indexing > Sitemaps**.
2. Enter the sitemap path: `sitemap.xml` (Full URL: `https://jayantilalsuthar.com/sitemap.xml`).
3. Click **Submit**.
4. Confirm status changes to **Success**.

---

## 3. Verify Robots.txt

1. Inspect `https://jayantilalsuthar.com/robots.txt` in a browser.
2. Confirm:
   - `User-agent: *`
   - `Allow: /`
   - `Disallow: /api/`
   - `Sitemap: https://jayantilalsuthar.com/sitemap.xml`

---

## 4. Rich Results & Schema Testing

1. Test the homepage with [Google Rich Results Test](https://search.google.com/test/rich-results).
2. Verify detected schema items:
   - **Person** (Jayanti Lal Suthar, Job Title, SBI Life affiliation)
   - **FinancialService** (Address, phone, hours)
   - **WebSite**
   - **BreadcrumbList**
   - **FAQPage** (on `/life-insurance/faqs` and homepage)
   - **Article** (on `/guides/[slug]`)

---

## 5. Google Business Profile (Optional Local Presence)

Once local branch presence is confirmed:
1. Claim or verify the Google Business Profile under &quot;Jayantilal Suthar - SBI Life Insurance Advisor&quot;.
2. Ensure Phone (`+91 79761 19365`) and Address match this website exactly for consistent local NAP (Name, Address, Phone) signals.
