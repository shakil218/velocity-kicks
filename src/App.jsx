import React from 'react';
import { PRODUCTS } from './data/products';
import { useProductFilter } from './hooks/useProductFilter';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import FeaturesBar from './components/sections/FeaturesBar';
import CategoryFilter from './components/product/CategoryFilter';
import ProductGrid from './components/product/ProductGrid';
import ProductQuickViewModal from './components/product/ProductQuickViewModal';
import PromoBanner from './components/sections/PromoBanner';
import ReviewsSection from './components/sections/ReviewsSection';
import NewsletterSection from './components/sections/NewsletterSection';
import Footer from './components/layout/Footer';

export default function App() {
  const {
    selectedCategory,
    setSelectedCategory,
    searchQuery,
    setSearchQuery,
    sortBy,
    setSortBy,
    filteredProducts,
    totalProductsCount,
    filteredCount,
    resetFilters,
    selectedProduct,
    setSelectedProduct,
    wishlist,
    toggleWishlist,
  } = useProductFilter(PRODUCTS);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-orange-500 selection:text-white">
      
      {/* Header Navigation */}
      <Navbar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        wishlistCount={wishlist.length}
      />

      {/* Main Home Page Sections */}
      <main className="flex-grow">
        
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Retail Features Bar */}
        <FeaturesBar />

        {/* 3. Product Showcase Grid Section */}
        <section id="products-section" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <span className="text-xs font-mono font-semibold uppercase tracking-widest text-orange-400">
              OUR STORE COLLECTION
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight">
              FEATURED SNEAKER DROPS
            </h2>
            <p className="text-sm sm:text-base text-slate-400">
              Explore 10+ premium running, basketball, and casual lifestyle footwear. Filter by category or search by name.
            </p>
          </div>

          {/* Interactive Filters (Category Pills, Search, Sort) */}
          <CategoryFilter
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
            sortBy={sortBy}
            onSortChange={setSortBy}
            filteredCount={filteredCount}
            totalCount={totalProductsCount}
            searchQuery={searchQuery}
            onReset={resetFilters}
          />

          {/* Responsive Product Cards Grid */}
          <ProductGrid
            products={filteredProducts}
            onQuickView={setSelectedProduct}
            wishlist={wishlist}
            onToggleFavorite={toggleWishlist}
            onResetFilters={resetFilters}
          />
        </section>

        {/* 4. Promotional Flash Drop Banner */}
        <PromoBanner />

        {/* 5. Customer Testimonials / Reviews */}
        <ReviewsSection />

        {/* 6. Newsletter Subscription */}
        <NewsletterSection />

      </main>

      {/* Footer Section */}
      <Footer />

      {/* Interactive Quick View Product Modal */}
      {selectedProduct && (
        <ProductQuickViewModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          isFavorite={wishlist.includes(selectedProduct.id)}
          onToggleFavorite={toggleWishlist}
        />
      )}

    </div>
  );
}
