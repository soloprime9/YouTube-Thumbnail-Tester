'use client';
import React, { useState } from 'react';
import Head from 'next/head';

function TestThumbnail() {
  const [image, setImage] = useState("");
  const [preview, setPreview] = useState(null);
  const [title, setTitle] = useState("");
  const [channel, setChannel] = useState("");

  const ImageUploadPreview = (event) => {
    setImage(event.target.files[0]);
    setPreview(URL.createObjectURL(event.target.files[0]));
  };

  return (
    <>
      <Head>
        <title>YouTube Thumbnail Tester & Previewer</title>
        <meta name="description" content="Test and preview your YouTube thumbnails for better engagement and SEO ranking. Improve click-through rates with our free thumbnail tester tool." />
        <meta name="keywords" content="youtube thumbnail, Free YouTube Thumbnails Tester, thumbnail tester, thumbnail preview, youtube seo, preview thumbnail youtube, youtube video thumbnail preview, youtube thumbnail test and compare, thumbnail checker ai, youtube thumbnail tester free, youtube thumbnail size, thumbnail preview, youtube thumbnail preview online, tubebuddy thumbnail analyzer, youtube thumbnail download, thumbnail checker, youtube analytics, youtube thumbnail tester online, youtube thumbnail tester online free" />
        <meta property="og:title" content="YouTube Thumbnail Tester & Previewer" />
        <meta property="og:description" content="Test and preview your video thumbnails for YouTube. Optimize your click-through rates and attract more viewers!" />
        <meta property="og:image" content="/thumbnail-preview.jpg" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="YouTube Thumbnail Tester & Previewer" />
        <meta name="twitter:description" content="Enhance your online presence with our YouTube thumbnail tester and preview tool. Optimize your thumbnails easily!" />
        <meta name="twitter:image" content="/thumbnail-preview.jpg" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="YourBrandName" />
        <link rel="canonical" href="https://youtubethumbnailtester.vercel.app/" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "YouTube Thumbnail Tester & Previewer",
            "url": "https://youtubethumbnailtester.vercel.app/",
            "image": "/thumbnail-preview.jpg",
            "description": "Test and preview your YouTube thumbnails to improve click-through rates and engagement.",
            "applicationCategory": "Multimedia"
          })}
        </script>
      </Head>
    <div className='m-5'>
      <form className='p-2 border-2 rounded-2 w-auto h-auto text-xl'>
        <div className='flex justify-center'>
        <div className='relative'>
        <input type="file" accept='image/*' alt='thumbnail'  onChange={ImageUploadPreview} className='absolute top-0 bottom-2 left-0 w-60 h-40 opacity-0 border-2 cursor-pointer z-10 rounded-lg' />
       
          {preview ? (
            <img src={preview} alt="preview" className='border-2 rounded-lg mr-4 w-60 h-40' />
          ):
          
          (
            <div className='relative'>
          <div title="hellow" className=" w-60 h-40 bg-white border-2 mr-4 rounded-lg" />
            <p className='text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>select image </p>
            </div>
          )
         

//           <div className="relative">
//   <div title="hellow" className="w-60 h-40 bg-white border-2 mr-4 rounded-lg" />
//   <p className="text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">Select Image</p>
// {/* </div> */}

          
          }
          
          </div>
          <div className='block w-40 mt-2'>
            <label >Title</label>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder='Enter Title of Video' className='border-2 mb-4'/>
            
            <label>Channel Name</label>
            <input type="text" value={channel} onChange={(e) => setChannel(e.target.value)} placeholder='Enter Channel Name....'  className='border-2 mb-4'/>

            <button className='bg-yellow-500 text-black text-xl rounded-md p-2'>Text Thumbnail</button>
          </div>
        </div>

          
        <a href="https://reduceimages-sigma.vercel.app/">Reduce Image</a>
       
      </form>


            <section className="py-16 bg-gray-50 mt-5">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Choose ThumbnailTester?</h2>
    
    <div className="grid md:grid-cols-3 gap-8">
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-xl font-semibold mb-3">Real Device Previews</h3>
        <p>Test thumbnails on 15+ device mockups including smartphones, tablets, and desktop views</p>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-xl font-semibold mb-3">Analytics Integration</h3>
        <p>Get CTR predictions based on historical YouTube performance data</p>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-xl font-semibold mb-3">A/B Testing</h3>
        <p>Compare multiple thumbnail versions side-by-side</p>
      </div>
    </div>
  </div>
</section>

<section className="py-16">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-3xl font-bold text-gray-900 mb-8">How It Works</h2>
    <div className="prose max-w-none">
      <ol className="list-decimal pl-6">
        <li className="mb-4">Upload your thumbnail image (JPG/PNG)</li>
        <li className="mb-4">Choose device mockups for preview</li>
        <li className="mb-4">Analyze visibility at different screen sizes</li>
        <li className="mb-4">Download optimized versions</li>
      </ol>
    </div>
  </div>
</section>
    </div>
            </>
  )



}



export default TestThumbnail;
