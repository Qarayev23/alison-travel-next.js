'use client';

import "@/assets/styles/main.scss";
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb'
import NotFoundPage from '@/containers/NotFoundPage/NotFoundPage'
import Navbar from '@/components/Layout/Navbar/Navbar';
import Footer from '@/components/Layout/Footer/Footer';

const NotFound = () => {
  return (
    <html>
      <body>
        <Navbar />
        <Breadcrumb /> 
        <NotFoundPage />
        <Footer />
      </body>
    </html>
  )
}

export default NotFound