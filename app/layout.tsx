import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Outfit } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0A2540",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Back to Nature (Spinal Clinic) | Dr Shahvez Iqbal",
  description:
    "Back to Nature (Spinal Clinic), led by Dr Shahvez Iqbal (Chiropractor • Osteopath • Physiotherapist), provides professional care for spinal and musculoskeletal concerns in New Care Medical Center 5C4.",
  keywords: [
    "spinal clinic",
    "Back to Nature Spinal Clinic",
    "Dr Shahvez Iqbal",
    "chiropractor",
    "osteopath",
    "physiotherapist",
    "back pain treatment",
    "joint pain",
    "neck pain",
    "sports injury",
    "scoliosis",
    "disc injury",
    "shoulder pain",
    "pinched nerve",
    "ankylosing spondylitis",
    "spinal care"
  ],
  authors: [{ name: "Dr Shahvez Iqbal" }],
  creator: "Back to Nature (Spinal Clinic)",
  openGraph: {
    title: "Back to Nature (Spinal Clinic) | Dr Shahvez Iqbal",
    description:
      "Move Better. Live Better. Professional spinal and musculoskeletal care focused on helping you move with greater comfort and confidence.",
    type: "website",
    locale: "en_US",
    siteName: "Back to Nature (Spinal Clinic)",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} ${outfit.variable} h-full scroll-smooth antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalClinic",
              name: "Back to Nature (Spinal Clinic)",
              description:
                "Specialized spinal, joint, neck, and musculoskeletal care clinic.",
              medicalSpecialty: [
                "Chiropractic",
                "Osteopathy",
                "Physiotherapy"
              ],
              address: {
                "@type": "PostalAddress",
                streetAddress: "New Care Medical Center 5C4",
              },
              telephone: ["+923183130220", "+923142779877"],
              physician: {
                "@type": "Physician",
                name: "Dr Shahvez Iqbal",
                jobTitle: "Chiropractor • Osteopath • Physiotherapist",
              },
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans bg-slate-50/50 text-slate-900 selection:bg-teal-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
