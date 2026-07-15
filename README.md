# ElectroAuto Landing Page

React JS + Tailwind CSS v4 + Lucide Icons + Shadcn-style components se bani hui landing page.

## Setup (terminal mein ye commands chalayein)

```bash
npm install
npm run dev
```

Browser mein `http://localhost:5173` khol lein.

## Folder Structure

```
electroauto/
├── src/
│   ├── components/
│   │   ├── ui/
│   │   │   ├── button.jsx
│   │   │   └── card.jsx
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Services.jsx
│   │   ├── Pricing.jsx
│   │   ├── WhyChooseUs.jsx
│   │   ├── OurWork.jsx
│   │   ├── Testimonials.jsx
│   │   ├── BookingForm.jsx
│   │   └── Footer.jsx
│   ├── lib/
│   │   └── utils.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── jsconfig.json
└── vite.config.js
```

## Images

Abhi images `placehold.co` ke placeholder links se aa rahi hain, taake project turant chal jaye. Apni asal images lagane ke liye:

1. Image ko `src/assets/` folder mein rakhein (jaise `hero.png`)
2. Us component mein upar import karein: `import heroImg from "@/assets/hero.png";`
3. `src="..."` ki jagah `src={heroImg}` likhein

## Note

Ye project Tailwind CSS v4 (`@tailwindcss/vite` plugin) use karta hai, is liye `tailwind.config.js` ya `postcss.config.js` ki zaroorat nahi. Saara setup `vite.config.js` aur `src/index.css` (`@import "tailwindcss";`) mein hai.
