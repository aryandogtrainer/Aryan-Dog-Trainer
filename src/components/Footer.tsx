import { Facebook, Instagram, Mail } from 'lucide-react';

const Footer = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hello Aryan, I am interested in your dog training services please contact me.");
    const whatsappUrl = `https://wa.me/919719588684?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div>
      {/* Call to Action Section */}
      <section className="bg-gray-800 text-white py-16 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Training Your Dog?</h2>
          <p className="text-lg mb-8 opacity-90">
            Contact me today to discuss your dog's specific needs and choose the perfect 
            training program. Every dog deserves to be well-behaved and happy!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+919719588684"
              className="inline-flex items-center justify-center px-8 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors font-medium"
            >
              Call Now: +91 9719588684
            </a>
            <button
              onClick={handleWhatsAppClick}
              className="inline-flex items-center justify-center px-8 py-3 bg-white text-gray-800 rounded-lg hover:bg-gray-100 transition-colors font-medium"
            >
              WhatsApp Consultation
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Company Info */}
            <div>
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-lg">🐕</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold">Aryan Dog Trainer</h3>
                  <p className="text-sm text-gray-400">Professional Training</p>
                </div>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed">
                Professional dog training services with years of experience and a passion for canine behavior. We help create well-behaved and happy companions.
              </p>
              <div className="flex space-x-4 mt-6">
                <a
                  href="https://www.instagram.com/aryan_pandit_239236/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://www.facebook.com/aryan.sharma.809557"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="mailto:kanhavairagi042@gmail.com"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                <li><a href="/" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
                <li><a href="/about" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
                <li><a href="/services" className="text-gray-400 hover:text-white transition-colors">Services</a></li>
                <li><a href="/gallery" className="text-gray-400 hover:text-white transition-colors">Gallery</a></li>
                <li><a href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
              <div className="space-y-3 text-sm">
                <div className="flex items-center">
                  <span className="text-orange-500 mr-3">📞</span>
                  <span className="text-gray-400">9719588684</span>
                </div>
                <div className="flex items-start">
                  <span className="text-orange-500 mr-3">📧</span>
                  <span className="text-gray-400">kanhavairagi042@gmail.com</span>
                </div>
                <div className="flex items-start">
                  <span className="text-orange-500 mr-3">📍</span>
                  <span className="text-gray-400">C-83, Ground Floor, Bhai Bhai Rd, Block E, Qutub Vihar Phase 2, Goyla Village, Delhi, 110043</span>
                </div>
                <div className="flex items-center">
                  <span className="text-orange-500 mr-3">🕒</span>
                  <div className="text-gray-400">
                    <div>10:00 AM to 07:00 PM</div>
                    <div className="text-xs">Monday - Sunday</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-6 text-center">
            <p className="text-sm text-gray-400">
              © 2025 Aryan Dog Trainer. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
