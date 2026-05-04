import { Analytics } from '@vercel/analytics/next'
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'

import './globals.css'

const _geist = Geist({ subsets: ['latin'] })
const _geistMono = Geist_Mono({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ultralight',
  description: "Don't pack your fears.",
  generator: 'v0.app',
  metadataBase: new URL('https://ultralight.alexgrover.me'),
  keywords: ['ultralight', 'backpacking', 'hiking', 'gear list', 'pack weight', 'lighterpack'],
  authors: [{ name: 'Alex Grover' }],
  openGraph: {
    title: 'Ultralight',
    description: "Don't pack your fears.",
    siteName: 'Ultralight',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ultralight',
    description: "Don't pack your fears.",
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

// Runs in <head> before paint. Default browser scroll restoration paints the
// top of the page, then jumps to the saved position. We take over, keep the
// page hidden, and only reveal once the saved scroll has actually been applied.
const scrollRestoreScript = `(function(){
  var KEY='__sr__'+location.pathname+location.search;
  var root=document.documentElement;
  var saved=null;
  try{saved=sessionStorage.getItem(KEY)}catch(e){}
  var target=saved===null?null:parseInt(saved,10);
  if(Number.isNaN(target)||target===null||target<0){
    target=null;
    try{sessionStorage.removeItem(KEY)}catch(e){}
  }
  if(target!==null){
    if('scrollRestoration' in history)history.scrollRestoration='manual';
    root.style.visibility='hidden';
    var done=false;
    var restoreId=0;
    var onLoad=null;
    var reveal=function(){
      if(done)return;
      done=true;
      root.style.visibility='';
      try{sessionStorage.removeItem(KEY)}catch(e){}
      if(onLoad)removeEventListener('load',onLoad);
      if(restoreId)cancelAnimationFrame(restoreId);
    };
    var restore=function(){
      if(done)return;
      window.scrollTo(0,target);
      var body=document.body;
      var maxScroll=Math.max(
        root.scrollHeight,
        body?body.scrollHeight:0
      )-window.innerHeight;
      if(maxScroll<0)maxScroll=0;
      var atTarget=Math.abs(window.scrollY-target)<=1;
      var atMax=Math.abs(window.scrollY-maxScroll)<=1;
      if(atTarget||(document.readyState==='complete'&&target>maxScroll&&atMax)){
        reveal();
        return;
      }
      restoreId=requestAnimationFrame(restore);
    };
    onLoad=function(){
      if(!restoreId)restoreId=requestAnimationFrame(restore);
    };
    if(document.readyState==='loading'){
      addEventListener('DOMContentLoaded',onLoad,{once:true});
      addEventListener('load',onLoad,{once:true});
    }else{
      onLoad();
    }
  }
  addEventListener('pagehide',function(){
    try{
      if(window.scrollY>0)sessionStorage.setItem(KEY,String(window.scrollY));
      else sessionStorage.removeItem(KEY);
    }catch(e){}
  });
})()`

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <head>
        <script dangerouslySetInnerHTML={{ __html: scrollRestoreScript }} />
      </head>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
