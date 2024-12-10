'use client';

import React, { useState, useEffect } from 'react';
import { Home, List, Info, ShieldAlert, DollarSign, Search, Target, Heart } from 'lucide-react';
import { boycottProducts } from './boycottProducts';
import supportProducts from './supportProducts';
import { FaFacebook, FaTwitter, FaWhatsapp, FaInstagram, FaEnvelope } from 'react-icons/fa';

import Image from 'next/image';





export default function BoycottApp() {

  interface Product {
    id: number;
    name: string;
    country: string;
    reason: string;
    alternatives: string[];
    image: string;
    category: (string | undefined)[];
  }

  const [isDarkMode, setIsDarkMode] = useState(false);

  const [activeMenu, setActiveMenu] = useState('home');
    // Correctly type `selectedProduct` state
  
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredBoycottProducts = boycottProducts.filter(product => 
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (selectedCategory === 'All' || product.category.includes(selectedCategory))
  );

  const categories = ['All', 'Agriculture', 'Aviation', 'Banking', 'Construction', 'Food and Beverage', 'Energy and Resources', 'Education', 'Real Estate', 'Recreational Facility', 'Healthcare','Logistics', 'Media', 'Miscellaneous', 'Stocks & Trading'];

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    const newTheme = isDarkMode ? 'light' : 'dark';
    setIsDarkMode(!isDarkMode);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark');
  };

  
  const images = [
    "/assets/BANNER-1.jpg",
    "/assets/BANNER-2.jpg",
    "/assets/BANNER-3.jpg",
    "/assets/BANNER-4.jpg",
    "/assets/BANNER-5.jpg",
  ];
  
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);
  
  const filteredHomeProducts = boycottProducts.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  
  const renderContent = () => {
    switch(activeMenu) {
      case 'home':

        return (
          <div className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-50 transition-colors duration-300">
            {/* Hero Section */}
            <div className="bg-red-600 text-white text-center py-8 space-y-4">
              <h1 className="text-4xl font-bold">Boycott Faujeet</h1>
              <p className="text-2xl font-bold">گولی کیوں چلائی </p>
              <button
                onClick={() => setActiveMenu('boycott')}
                className="bg-white text-red-600 py-2 px-6 rounded-lg hover:bg-gray-200 transition"
              >
                View Boycott List
              </button>
            </div>
      
            {/* Main Content */}
            <div className="p-6 space-y-8 max-w-4xl mx-auto">
              {/* Search Section */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search Products"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full p-3 pl-12 border rounded-lg shadow-sm bg-white dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300"
                />
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400" size={24} />
              </div>

                {/* Conditional Product Display */}
                {searchTerm ? (
                  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {filteredHomeProducts.length > 0 ? (
                      filteredHomeProducts.map((product) => (
                        <div
                          key={product.id}
                          className="relative bg-white dark:bg-gray-800 rounded-lg shadow-lg group cursor-pointer hover:shadow-xl transition"
                          onClick={() => setSelectedProduct(product)} // Open popup on click

                        >
                          {/* Product Image */}
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-40 object-cover rounded-t-lg group-hover:scale-105 transition-transform duration-300"
                          />
                          {/* Product Details */}
                          <div className="p-4">
                            <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200">{product.name}</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">{product.country}</p>
                          </div>
                        </div>
                      ))
                    ) : (
                      <p className="text-center text-gray-600 dark:text-gray-400">No products found. Try a different search term.</p>
                    )}
                  </div>
                ) : (
                  <p className="text-center text-gray-600 dark:text-gray-400">
                    Enter a search term to find products to boycott.
                  </p>
                )}
        


              {/* Informative Cards */}
              <div className="grid sm:grid-cols-2 gap-6">
                {/* Card 1 */}
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center space-y-3">
                  <Target className="text-red-600 mx-auto" size={48} />
                  <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">Boycott Campaign</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Join the movement to boycott unethical businesses and support justice.
                  </p>
                </div>
      
                {/* Card 2 */}
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center space-y-3">
                  <Heart className="text-red-600 mx-auto" size={48} />
                  <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">Community Support</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Empower ethical choices by supporting local and fair businesses.
                  </p>
                </div>
              </div>
      
              {/* Call-to-Action Section */}
              <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center space-y-4">
                <h2 className="text-2xl font-bold text-red-600">Make an Impact</h2>
                <p className="text-gray-600 dark:text-gray-300">
                  Your choices can shape a better future. Stand with us in boycotting exploitation.
                </p>
                <button
                  onClick={() => setActiveMenu('support')}
                  className="bg-red-600 text-white py-2 px-6 rounded-lg hover:bg-red-700 transition"
                >
                  Support Now
                </button>
              </div>
      
              {/* Auto-Slider Section */}
              <div className="relative rounded-lg overflow-hidden shadow-lg">
                <img
                  src={images[currentImageIndex]}
                  alt={`Slide ${currentImageIndex + 1}`}
                  className="w-full h-48 object-cover transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                  <h3 className="text-white text-xl font-bold">Together, We Can Make a Change</h3>
                </div>
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {images.map((_, index) => (
                    <div
                      key={index}
                      className={`h-3 w-3 rounded-full transition ${
                        currentImageIndex === index
                          ? 'bg-red-600'
                          : 'bg-gray-300 dark:bg-gray-600'
                      }`}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      
      
      case 'boycott':
        return renderBoycottPage();
      
        case 'alternatives':
          const filteredSupportProducts = supportProducts.filter(
            (product) =>
              product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
              product.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
          );
          
          
          return (
            <div className="p-4 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-50 transition-colors duration-300">
              <div className="space-y-6 max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold mb-4 text-red-600 text-center">Support Ethical Alternatives</h2>
        
                {/* Search Bar */}
                <div className="relative mb-6">
                  <input
                    type="text"
                    placeholder="Search Alternatives"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full p-3 pl-12 border rounded-lg shadow-sm bg-white dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300"
                  />
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400" size={24} />
                </div>
                {/* Search Instructions */}
                  <p className="text-gray-600 dark:text-gray-400 text-center mb-4">
                    Search for products by name or keyword (e.g., &quot;olive oil&quot;, &quot;crafts&quot;, &quot;ethical&quot;).
                  </p>
                {/* Product Cards */}
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {filteredSupportProducts.length > 0 ? (
                    filteredSupportProducts.map((product) => (
                      <div
                        key={product.id}
                        className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden group cursor-pointer hover:shadow-xl transition"
                      >
                        {/* Product Image */}
                        <div className="relative">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                          <span className="absolute top-2 right-2 bg-green-600 text-white text-xs px-3 py-1 rounded-full shadow-md">
                            Ethical
                          </span>
                        </div>

                        {/* Content */}
                        <div className="p-4 space-y-3">
                          <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">{product.name}</h3>
                          <p className="text-sm text-gray-600 dark:text-gray-300">{product.description}</p>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            <strong>Impact:</strong> {product.impact}
                          </p>
                          <div className="flex flex-wrap gap-2 mt-2">
                            {product.tags.map((tag, index) => (
                              <span
                                key={index}
                                className="text-xs bg-gray-200 dark:bg-gray-700 dark:text-gray-300 px-2 py-1 rounded-full"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                          <div className="flex justify-between items-center mt-4">
                            <a
                              href={product.website}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition"
                            >
                              Visit Website
                            </a>
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <p className="text-center text-gray-600 dark:text-gray-400">No alternatives found. Try a different search term.</p>
                  )}
                </div>

              </div>
            </div>
          );
        
          case 'about':
            return (
              <div className="p-4 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-50 transition-colors duration-300">
                <div className="space-y-8 max-w-4xl mx-auto">
                  <h2 className="text-3xl font-bold mb-4 text-red-600 text-center">About Boycott Faujeet</h2>
                  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 space-y-4">
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200">Why This App Exists</h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      The military in Pakistan has overstepped its constitutional role of protecting the people.
                      By interfering in political processes, manipulating elections, and selecting governments
                      against the will of the public, they have undermined democracy and justice. Despite
                      their mandate being the defense of the nation, they have ventured into businesses ranging
                      from real estate to consumer goods, monopolizing key industries while suppressing dissent
                      with brutal force.
                    </p>
                    <p className="text-gray-700 dark:text-gray-300">
                      Peaceful protestors, fighting for their rights and freedoms, have faced unimaginable
                      violence, including being fired upon with live ammunition. This app empowers the people
                      to boycott products and services linked to the military, redirecting their spending toward
                      ethical and local alternatives.
                    </p>
                  </div>
                  <div className="bg-gray-100 dark:bg-gray-700 rounded-lg shadow-lg p-6 space-y-4">
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200">Our Vision</h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      We envision a Pakistan where:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                      <li>The public&apos;s mandate is respected, and democracy thrives.</li>
                      <li>Institutions operate within their constitutional boundaries.</li>
                      <li>Businesses are free from monopolistic practices of non-civilian entities.</li>
                      <li>The people’s voices can be raised without fear of violence or suppression.</li>
                    </ul>
                  </div>
                  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 space-y-4">
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200">What You Can Do</h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      Change starts with awareness and action. By boycotting military-owned businesses, you can
                      redirect your support to ethical alternatives and send a strong message against oppression.
                      Share this app with your friends and family and take a stand for justice and democracy.
                    </p>
                    <button className="bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition">
                      Start Boycotting Now
                    </button>
                  </div>
          
                  {/* Contact Information Section */}
                  <div className="bg-gray-100 dark:bg-gray-700 rounded-lg shadow-lg p-6 space-y-4 text-center">
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200">Connect with Us</h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      Stay updated and support the cause by following us on social media or reaching out via email.
                    </p>
                    <div className="flex justify-center space-x-6">
                      <a
                        href="https://x.com/Boycott_Faujeet"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:text-blue-400"
                      >
                        <FaTwitter size={30} />
                      </a>
                      <a
                        href="https://instagram.com//boycott.faujeet"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-pink-500 hover:text-pink-400"
                      >
                        <FaInstagram size={30} />
                      </a>
                      <a
                        href="mailto:boycott.faujeet@gmail.com"
                        className="text-red-500 hover:text-red-400"
                      >
                        <FaEnvelope size={30} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          
        
        
          case 'support':
            return (
              <div className="p-4 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-50 transition-colors duration-300">
                <div className="space-y-8 max-w-4xl mx-auto">
                  <h2 className="text-3xl font-bold mb-4 text-red-600 text-center">Support the Movement</h2>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 space-y-4">
                      <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">Donate to the Cause</h3>
                      <p className="text-gray-700 dark:text-gray-300">
                        Your contributions help us raise awareness, develop tools like this app, and support
                        initiatives that promote justice and democracy.
                      </p>
                      <p className="text-gray-700 dark:text-gray-300">
                        <strong>USDT(Tron):</strong> TMUYuZf2Puims8KV7qSqU1bwukrShb9p2M
                      </p>
                    </div>
                    <div className="bg-gray-100 dark:bg-gray-700 rounded-lg shadow-lg p-6 space-y-4">
            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">Donate via Trust Wallet</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Use the Trust Wallet app to send USDT directly to our wallet address.
            </p>
            <a
              href="https://link.trustwallet.com/send?address=TMUYuZf2Puims8KV7qSqU1bwukrShb9p2M&asset=c195_tTR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-600 dark:text-red-400 hover:underline"
            >
              Donate via Trust Wallet
            </a>
          </div>
          {/* QR Code Section */}
        <div className="text-center mt-8 space-y-4">
          <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200">Scan to Donate</h3>
          <Image
            src="/assets/trc20.jpeg" // Replace with the path to your QR code image
            alt="USDT QR Code"
            width={200}
            height={200}
            className="mx-auto"
          />
        </div>
          

                    <div className="bg-gray-100 dark:bg-gray-700 rounded-lg shadow-lg p-6 space-y-4">
                      <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">Why Your Support Matters</h3>
                      <p className="text-gray-700 dark:text-gray-300">
                        Every contribution strengthens our ability to challenge unjust practices and empower
                        the people. Your support ensures that the voices of the oppressed are heard and
                        amplified.
                      </p>
                    </div>
                  </div>
                  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 text-center space-y-4">
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
                      Spread the Message
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      Share this app with others to amplify the movement. Together, we can make a change.
                    </p>
                  {/* Share Buttons */}
                  <div className="flex justify-center space-x-4">
                    <button
                      onClick={() => {
                        const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                          'https://boycott-faujeet.vercel.app/'
                        )}&quote=${encodeURIComponent('Check out Boycott Faujeet, an app that raises awareness about ethical consumerism and military-backed products.')}`;
                        window.open(facebookUrl, '_blank');
                      }}
                      className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition flex items-center space-x-2"
                    >
                      <FaFacebook size={20} />
                      <span>Facebook</span>
                    </button>
                    <button
                      onClick={() => {
                        const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
                          'Check out Boycott Faujeet, an app that raises awareness about ethical consumerism and military-backed products.'
                        )}&url=${encodeURIComponent('https://boycott-faujeet.vercel.app/')}`;
                        window.open(twitterUrl, '_blank');
                      }}
                      className="bg-blue-400 text-white p-3 rounded-full hover:bg-blue-500 transition flex items-center space-x-2"
                    >
                      <FaTwitter size={20} />
                      <span>X</span>
                    </button>
                    <button
                      onClick={() => {
                        const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(
                          'Check out Boycott Faujeet, an app that raises awareness about ethical consumerism and military-backed products. https://boycott-faujeet.vercel.app'
                        )}`;
                        window.open(whatsappUrl, '_blank');
                      }}
                      className="bg-green-500 text-white p-3 rounded-full hover:bg-green-600 transition flex items-center space-x-2"
                    >
                      <FaWhatsapp size={20} />
                      <span>WhatsApp</span>
                      
                    </button>
                    
                  </div>


                    {/* Buy Me a Coffee Button */}
                  {/* <div className="text-center mt-8">
                    <a href="https://www.buymeacoffee.com/boycott_faujeet" target="_blank" rel="noopener noreferrer">
                      <img
                        src="https://img.buymeacoffee.com/button-api/?text=Buy me a Rooh Afza&emoji=&slug=boycott_faujeet&button_colour=ff0000&font_colour=ffffff&font_family=Cookie&outline_colour=ffffff&coffee_colour=FFDD00"
                        alt="Buy Me a Coffee"
                        className="mx-auto"
                      />
                    </a>
                  </div> */}

                  </div>
                </div>
              </div>
            );
          
        
      default:
        return null;
    }
  };

  const renderBoycottPage = () => (
    <div className="p-4 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-50 transition-colors duration-300">
      {/* Search Bar */}
      <div className="relative mb-6 max-w-lg mx-auto">
        <input
          type="text"
          placeholder="Search Boycott Products"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-3 pl-12 border rounded-lg shadow-sm bg-white dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300"
        />
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400" size={20} />
      </div>
  
      {/* Categories */}
      <div className="flex overflow-x-auto space-x-3 pb-4 mb-4">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full text-sm whitespace-nowrap shadow-md transition ${
              selectedCategory === category
                ? 'bg-red-600 text-white'
                : 'bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-300'
            }`}
          >
            {category}
          </button>
        ))}
      </div>
  
      {/* Products Section */}
      <h2 className="text-2xl font-bold mb-4 text-red-600 text-center">Boycott List</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredBoycottProducts.length > 0 ? (
          filteredBoycottProducts.map((product) => (
            <div
              key={product.id}
              className="relative bg-white dark:bg-gray-800 rounded-lg shadow-lg group cursor-pointer hover:shadow-xl transition"
              onClick={() => setSelectedProduct(product)}
            >
              {/* Product Image */}
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-40 object-cover rounded-t-lg group-hover:scale-105 transition-transform duration-300"
              />
  
              {/* Product Details */}
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200">{product.name}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{product.country}</p>
                <div className="flex flex-wrap mt-2 gap-2">
                  {product.category
                    .filter((cat) => cat !== 'All')
                    .map((cat) => (
                      <span
                        key={cat}
                        className="text-xs bg-gray-200 dark:bg-gray-700 dark:text-gray-300 px-2 py-1 rounded-full"
                      >
                        {cat}
                      </span>
                    ))}
                </div>
              </div>
  
              {/* Hover Popup */}
              <div className="absolute top-2 right-2 bg-red-600 text-white text-xs rounded-full px-3 py-1 opacity-0 group-hover:opacity-100 transition">
                View Details
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-600 dark:text-gray-400">
            No products found. Try a different search or category.
          </p>
        )}
      </div>
    </div>
  );
  

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-50 flex flex-col transition-colors duration-300">
      {/* Main Content */}
      <main className="flex-grow mb-16"> {/* Added margin-bottom */}
        {renderContent()}
      </main>
  
      {/* Selected Product Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-md w-full shadow-xl">
            <img
              src={selectedProduct.image}
              alt={selectedProduct.name}
              className="w-32 h-32 mx-auto rounded-full object-cover mb-4 border-4 border-red-600"
            />
            <h2 className="text-xl font-bold text-center mb-2 text-red-600">{selectedProduct.name}</h2>
            <p><strong>Country:</strong> {selectedProduct.country}</p>
            <p><strong>Reason:</strong> {selectedProduct.reason}</p>
            {selectedProduct.alternatives?.length > 0 && (
              <>
                <h3 className="font-bold mt-2">Alternatives:</h3>
                <ul className="list-disc pl-5">
                  {selectedProduct.alternatives.map((alt, index) => (
                    <li key={index} className="text-gray-700 dark:text-gray-300">{alt}</li>
                  ))}
                </ul>
              </>
            )}
            <button
              onClick={() => setSelectedProduct(null)}
              className="mt-4 w-full bg-red-600 text-white py-2 rounded hover:bg-red-700 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
  
      {/* Bottom Navigation Menu */}
      <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-800 shadow-lg flex justify-around p-3 border-t">
        <button
          onClick={() => setActiveMenu('home')}
          className={`flex flex-col items-center ${activeMenu === 'home' ? 'text-red-600' : 'text-gray-500 dark:text-gray-400'}`}
        >
          <Home size={24} />
          <span className="text-xs">Home</span>
        </button>
        <button
          onClick={() => setActiveMenu('boycott')}
          className={`flex flex-col items-center ${activeMenu === 'boycott' ? 'text-red-600' : 'text-gray-500 dark:text-gray-400'}`}
        >
          <List size={24} />
          <span className="text-xs">Boycott</span>
        </button>
        <button
          onClick={() => setActiveMenu('alternatives')}
          className={`flex flex-col items-center ${activeMenu === 'alternatives' ? 'text-red-600' : 'text-gray-500 dark:text-gray-400'}`}
        >
          <DollarSign size={24} />
          <span className="text-xs">Alternatives</span>
        </button>
        <button
          onClick={() => setActiveMenu('about')}
          className={`flex flex-col items-center ${activeMenu === 'about' ? 'text-red-600' : 'text-gray-500 dark:text-gray-400'}`}
        >
          <Info size={24} />
          <span className="text-xs">About</span>
        </button>
        <button
          onClick={() => setActiveMenu('support')}
          className={`flex flex-col items-center ${activeMenu === 'support' ? 'text-red-600' : 'text-gray-500 dark:text-gray-400'}`}
        >
          <ShieldAlert size={24} />
          <span className="text-xs">Support</span>
        </button>
  
        {/* Dark Mode Toggle */}
        <div className="flex items-center">
          <label className="flex items-center cursor-pointer" aria-label="Toggle Dark Mode">
            <input
              type="checkbox"
              checked={isDarkMode}
              onChange={toggleDarkMode}
              className="hidden"
            />
            <div className="w-10 h-5 flex items-center bg-gray-300 rounded-full p-1 dark:bg-gray-600">
              <div
                className={`h-4 w-4 bg-white rounded-full shadow-md transform transition-transform ${
                  isDarkMode ? 'translate-x-5' : 'translate-x-0'
                }`}
              ></div>
            </div>
          </label>
        </div>
      </div>
    </div>
  );
  
  
}