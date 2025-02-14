import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: 'YouTube Thumbnail Tester - Preview & Analyze Thumbnails Online',
  description: 'Test and optimize YouTube thumbnails for maximum CTR. Preview on multiple devices, analyze readability, and compare versions instantly. Free online tool for creators.',
  keywords: 'youtube thumbnail tester, thumbnail preview, ctr analyzer, youtube SEO, thumbnail optimizer, video marketing tool,youtube thumbnail, Free YouTube Thumbnails Tester, thumbnail tester, thumbnail preview, youtube seo, preview thumbnail youtube, youtube video thumbnail preview, youtube thumbnail test and compare, thumbnail checker ai, youtube thumbnail tester free, youtube thumbnail size, thumbnail preview, youtube thumbnail preview online, tubebuddy thumbnail analyzer, youtube thumbnail download, thumbnail checker, youtube analytics, youtube thumbnail tester online, youtube thumbnail tester online free',
  openGraph: {
    title: 'Free YouTube Thumbnail Tester Tool',
    description: 'Get real-time previews of your YouTube thumbnails on desktop, mobile and TV screens. Improve click-through rates with professional analysis.',
    images: [{
      url: 'https://youtubethumbnailtester.vercel.app/og-image.jpg',
      width: 1200,
      height: 630
    }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Optimize YouTube Thumbnails Online',
    images: ['https://youtubethumbnailtester.vercel.app/twitter-image.jpg']
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://youtubethumbnailtester.vercel.app/" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "YouTube Thumbnail Tester",
            "operatingSystem": "Web",
            "applicationCategory": "MultimediaApplication",
            "offers": {
              "@type": "Offer",
              "price": "0"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "ratingCount": "1500"
            }
          })}
        </script>
      </head>
      <body className={`${GeistSans.variable} ${GeistMono.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

const Header = () => (
  <header className="bg-white shadow-sm">
    <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between h-16 items-center">
        <div className="flex items-center">
          <a href="/" className="text-2xl font-bold text-red-600">
            ThumbnailTester
          </a>
        </div>
        <div className="hidden md:flex space-x-8">
          <a href="/features" className="text-gray-700 hover:text-red-600">Features</a>
          <a href="/blog" className="text-gray-700 hover:text-red-600">Blog</a>
          <a href="/tools" className="text-gray-700 hover:text-red-600">Tools</a>
          <a href="/contact" className="text-gray-700 hover:text-red-600">Contact</a>
        </div>
      </div>
    </nav>
  </header>
);

const Footer = () => (
  <footer className="bg-gray-50 border-t mt-12">
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-sm font-semibold text-gray-600 uppercase">Thumbnail Tools</h3>
          <ul className="mt-4 space-y-2">
            <li><a href="/tester" className="text-gray-600 hover:text-red-600">Preview Tester</a></li>
            <li><a href="/analyzer" className="text-gray-600 hover:text-red-600">CTR Analyzer</a></li>
            <li><a href="/templates" className="text-gray-600 hover:text-red-600">Templates</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-gray-600 uppercase">Resources</h3>
          <ul className="mt-4 space-y-2">
            <li><a href="/blog" className="text-gray-600 hover:text-red-600">Blog</a></li>
            <li><a href="/case-studies" className="text-gray-600 hover:text-red-600">Case Studies</a></li>
            <li><a href="/docs" className="text-gray-600 hover:text-red-600">Documentation</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-gray-600 uppercase">Legal</h3>
          <ul className="mt-4 space-y-2">
            <li><a href="/privacy" className="text-gray-600 hover:text-red-600">Privacy</a></li>
            <li><a href="/terms" className="text-gray-600 hover:text-red-600">Terms</a></li>
            <li><a href="/license" className="text-gray-600 hover:text-red-600">License</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-gray-600 uppercase">Connect</h3>
          <div className="mt-4 flex space-x-4">
            <a href="#" className="text-gray-600 hover:text-red-600">Twitter</a>
            <a href="#" className="text-gray-600 hover:text-red-600">GitHub</a>
            <a href="#" className="text-gray-600 hover:text-red-600">ProductHunt</a>
          </div>
        </div>
      </div>
      <div className="mt-8 pt-8 border-t border-gray-200 text-center">
        <p className="text-sm text-gray-600">
          © {new Date().getFullYear()} ThumbnailTester. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);
