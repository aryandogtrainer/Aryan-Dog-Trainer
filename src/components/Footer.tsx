import { Facebook, Instagram, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center mr-3">
                <span className="text-white font-bold text-lg">🐕</span>
              </div>
              <div>
                <h3 className="text-lg font-bold">Aryan Dog Trainer</h3>
                <p className="text-sm opacity-80">Professional Training</p>
              </div>
            </div>
            <p className="text-sm opacity-80 mb-4">
              Professional dog training services with proven methods and caring approach. 
              Transform your dog into a well-behaved companion.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2 text-sm opacity-80">
              <p>📞 +919719588684</p>
              <p>📧 dogtrainerdemo@gmail.com</p>
              <p>🕒 10:00 AM to 07:00 PM</p>
              <p>📍 C-83, Ground Floor, Bhai Bhai Rd, Block E, Qutub Vihar Phase 2, Goyla Village, Delhi, 110043</p>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-primary-hover transition-colors"
              >
                <Facebook className="w-5 h-5 text-white" />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-primary-hover transition-colors"
              >
                <Instagram className="w-5 h-5 text-white" />
              </a>
              <a
                href="mailto:dogtrainerdemo@gmail.com"
                className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-primary-hover transition-colors"
              >
                <Mail className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-6 text-center">
          <p className="text-sm opacity-80">
            © 2024 Aryan Dog Trainer. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;