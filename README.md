# Dev Portfolio 2025

A professional full-stack developer portfolio showcasing projects built with **React**, **Vite**, and **modern web technologies**. Includes a contact form powered by **EmailJS**.

---

## 🌐 Live

[Click here](https://dev-portfolio-2025-pearl.vercel.app/)

---

## 🔧 Tech Stack

- **Frontend:** React, Vite, TailwindCSS / Bootstrap  
- **Email Integration:** EmailJS  
- **Version Control:** Git & GitHub  
- **Deployment:** Vercel  

---

## ⚡ Features

- Clean, responsive, and modern UI  
- Multi-page navigation with smooth transitions  
- Contact form with live email sending  
- Environment variable support for API keys  
- Mobile-friendly design  

---

## 🚀 Getting Started (Local Development)

1. **Clone the repository**
```bash
git clone https://github.com/PraveenS-dev/dev-portfolio-2025.git

cd dev-portfolio-2025
```

2. **Install dependencies**
```bash
npm install
```

3. **Create a `.env` file** in the root directory:
```env
VITE_EMAILJS_SERVICE_ID=your_service_id

VITE_EMAILJS_TEMPLATE_ID=your_template_id

VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

4. **Run the development server**
```bash
npm run dev
```

5. **Build for production**
```bash
npm run build
```

---

## 📂 Project Structure

```
dev-portfolio-2025/
├── public/          # Static assets
├── src/             # React components and pages
├── .env             # Environment variables (not committed)
├── package.json     # Dependencies & scripts
└── vite.config.js   # Vite configuration
```

---

## 🔧 Deployment on Vercel

- **Install Command:** `npm install`  
- **Build Command:** `npm run build`  
- **Output Directory:** `dist`

---

## 📧 Contact

You can reach me via the contact form on the portfolio or at:

**Email:** praveen200317@gmail.com  
**LinkedIn:** [Praveen Kumar S](https://www.linkedin.com/in/praveen-kumar-b445192ab)

---

## ⚠ Notes

- Do **not commit `.env`** to GitHub; it contains sensitive keys.  
- Make sure EmailJS keys are configured in `.env` before building for production.

