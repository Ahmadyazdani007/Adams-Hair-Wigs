import React from 'react';
import { ShopProvider } from './context/ShopContext';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Collections } from './components/Collections';
import { WhyChooseUs } from './components/WhyChooseUs';
import { FeaturedProducts } from './components/FeaturedProducts';
import { AboutUs } from './components/AboutUs';
import { CustomerReviews } from './components/CustomerReviews';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

// Interactive Drawers, Modals & Concierge
import { ProductModal } from './components/ProductModal';
import { CartDrawer } from './components/CartDrawer';
import { WishlistDrawer } from './components/WishlistDrawer';
import { WigFinderModal } from './components/WigFinderModal';
import { SizeGuideModal } from './components/SizeGuideModal';
import { PolicyModal } from './components/PolicyModal';
import { WhatsAppButton } from './components/WhatsAppButton';
import { Toast } from './components/Toast';

import './App.css';

function MainLayout() {
  return (
    <div className="min-h-screen bg-[#080808] text-[#FDFBF7] selection:bg-[#D4AF37] selection:text-black font-sans antialiased">
      {/* Top Header & Sticky Navigation */}
      <Header />

      {/* Main Content Sections */}
      <main>
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Shop Our Collection */}
        <Collections />

        {/* 3. Why Choose Adams Hair Wigs */}
        <WhyChooseUs />

        {/* 4. Featured Products */}
        <FeaturedProducts />

        {/* 5. About Us */}
        <AboutUs />

        {/* 6. Customer Reviews */}
        <CustomerReviews />

        {/* 7. FAQ Section */}
        <FaqSection />

        {/* 8. Contact Section */}
        <ContactSection />
      </main>

      {/* 9. Footer */}
      <Footer />

      {/* Global Modals & Interactive Drawers */}
      <ProductModal />
      <CartDrawer />
      <WishlistDrawer />
      <WigFinderModal />
      <SizeGuideModal />
      <PolicyModal />
      
      {/* Floating Concierge Chat & Notification Toasts */}
      <WhatsAppButton />
      <Toast />
    </div>
  );
}

function App() {
  return (
    <ShopProvider>
      <MainLayout />
    </ShopProvider>
  );
}

export default App;
