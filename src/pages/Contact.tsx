import { Phone, MapPin, Mail, Clock, Facebook, Instagram } from 'lucide-react';

const Contact = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hello Aryan, I am interested in your dog training services please contact me.");
    const whatsappUrl = `https://wa.me/919719588684?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Contact Us</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ready to start your dog's training journey? Get in touch with us today! We're here to answer 
            your questions and help you choose the perfect training program.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Get In Touch */}
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-800 mb-8">Get In Touch</h2>
              <div className="space-y-6">
                
                {/* Phone Number */}
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Phone Number</h3>
                    <p className="text-gray-600">+91 97195 88684</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Email Address</h3>
                    <p className="text-gray-600">dogtrainerdemo@gmail.com</p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Address</h3>
                    <p className="text-gray-600">C-83, Ground Floor, Bhai Bhai Rd, Block E, Qutub Vihar Phase 2, Goyla Village, Delhi, 110043</p>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Business Hours</h3>
                    <p className="text-gray-600">10:00 AM to 07:00 PM</p>
                    <p className="text-gray-500 text-sm">Monday - Sunday</p>
                  </div>
                </div>
              </div>

              {/* Follow Us */}
              <div className="mt-8">
                <h3 className="font-semibold text-gray-800 mb-4">Follow Us</h3>
                <div className="flex space-x-3">
                  <a
                    href="https://www.instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors"
                  >
                    <Instagram className="w-5 h-5 text-white" />
                  </a>
                  <a
                    href="https://www.facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
                  >
                    <Facebook className="w-5 h-5 text-white" />
                  </a>
                  <a
                    href="mailto:dogtrainerdemo@gmail.com"
                    className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
                  >
                    <Mail className="w-5 h-5 text-white" />
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Quick Actions</h2>
                
                {/* Call Now */}
                <div className="mb-6">
                  <h3 className="font-semibold text-gray-800 mb-2">Call Now</h3>
                  <p className="text-gray-600 text-sm mb-4">Speak directly with Ryan for immediate assistance and consultation.</p>
                  <a
                    href="tel:+919719588684"
                    className="w-full inline-flex items-center justify-center px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors font-medium"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Call +91 97195 88684
                  </a>
                </div>

                {/* WhatsApp Chat */}
                <div className="mb-6 p-4 bg-green-50 rounded-lg border border-green-200">
                  <h3 className="font-semibold text-gray-800 mb-2">WhatsApp Chat</h3>
                  <p className="text-gray-600 text-sm mb-4">Send a quick message on WhatsApp for instant communication.</p>
                  <button
                    onClick={handleWhatsAppClick}
                    className="w-full inline-flex items-center justify-center px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors font-medium"
                  >
                    💬 Chat on WhatsApp
                  </button>
                </div>

                {/* Send Email */}
                <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <h3 className="font-semibold text-gray-800 mb-2">Send Email</h3>
                  <p className="text-gray-600 text-sm mb-4">Send us a detailed email about your dog's training needs.</p>
                  <a
                    href="mailto:dogtrainerdemo@gmail.com"
                    className="w-full inline-flex items-center justify-center px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors font-medium"
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    Send Email
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;