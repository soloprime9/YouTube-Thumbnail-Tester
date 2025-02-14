import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>YouTube Thumbnail Tester & Previewer</title>
        <meta
          name="description"
          content="Test and preview your YouTube thumbnails for better engagement and SEO ranking. Improve click-through rates with our free thumbnail tester tool."
        />
        <meta
          name="keywords"
          content="youtube thumbnail, Free YouTube Thumbnails Tester, thumbnail tester, thumbnail preview, youtube seo, preview thumbnail youtube, youtube video thumbnail preview, youtube thumbnail test and compare, thumbnail checker ai, youtube thumbnail tester free, youtube thumbnail size, thumbnail preview, youtube thumbnail preview online, tubebuddy thumbnail analyzer, youtube thumbnail download, thumbnail checker, youtube analytics, youtube thumbnail tester online, youtube thumbnail tester online free"
        />
        <meta property="og:title" content="YouTube Thumbnail Tester & Previewer" />
        <meta
          property="og:description"
          content="Test and preview your video thumbnails for YouTube. Optimize your click-through rates and attract more viewers!"
        />
        <meta property="og:image" content="/thumbnail-preview.jpg" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="YouTube Thumbnail Tester & Previewer" />
        <meta
          name="twitter:description"
          content="Enhance your online presence with our YouTube thumbnail tester and preview tool. Optimize your thumbnails easily!"
        />
        <meta name="twitter:image" content="/thumbnail-preview.jpg" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="YourBrandName" />
        <link rel="canonical" href="https://youtubethumbnailtester.vercel.app/" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "YouTube Thumbnail Tester & Previewer",
              "url": "https://youtubethumbnailtester.vercel.app/",
              "image": "/thumbnail-preview.jpg",
              "description": "Test and preview your YouTube thumbnails to improve click-through rates and engagement.",
              "applicationCategory": "Multimedia",
            }),
          }}
        />
      </head>

      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <header className="bg-white shadow-sm">
          <nav className="max-w-6xl mx-auto px-4 sm:px-6 border-dashed mt-5 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex-shrink-0 flex items-center">
                <span className="text-2xl font-bold text-green-600 pointer">
                  <a href="https://reduceimages-sigma.vercel.app/">YouTube Thumbnail Tester</a>
                </span>
              </div>
              <div className="hidden md:flex space-x-8">
                <a href="#" className="text-gray-700 hover:text-green-600 transition-colors">Home</a>
                <a href="#" className="text-gray-700 hover:text-green-600 transition-colors">Features</a>
                <a href="#" className="text-gray-700 hover:text-green-600 transition-colors">FAQ</a>
                <a href="#" className="text-gray-700 hover:text-green-600 transition-colors">Tools</a>
              </div>
              <div className="md:hidden flex items-center">
                <button className="text-gray-700 hover:text-green-600">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
          </nav>
        </header>

        <main>{children}</main>

        <footer className="bg-gray-50 mt-16 border-t">
          <div className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-600 uppercase tracking-wider">About</h3>
                <ul className="mt-4 space-y-2">
                  <li><a href="#" className="text-gray-600 hover:text-green-600 transition-colors">Our Story</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-green-600 transition-colors">Features</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-green-600 transition-colors">Careers</a></li>
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-gray-600 uppercase tracking-wider">Tools</h3>
                <ul className="mt-4 space-y-2">
                  <li><a href="#" className="text-gray-600 hover:text-green-600 transition-colors">Image Compressor</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-green-600 transition-colors">PDF Tools</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-green-600 transition-colors">Video Converter</a></li>
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-gray-600 uppercase tracking-wider">Legal</h3>
                <ul className="mt-4 space-y-2">
                  <li><a href="#" className="text-gray-600 hover:text-green-600 transition-colors">Privacy</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-green-600 transition-colors">Terms</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-green-600 transition-colors">Cookie Policy</a></li>
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-gray-600 uppercase tracking-wider">Connect</h3>
                <div className="mt-4 flex space-x-4">
                  <a href="#" className="text-gray-600 hover:text-green-600 transition-colors">
                    <span className="sr-only">Twitter</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92..." />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
