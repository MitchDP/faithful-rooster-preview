import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-max section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary-light rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold">L</span>
              </div>
              <span className="text-lg font-heading font-bold">[[company_name]]</span>
            </div>
            <p className="text-primary-light mb-4">
              [[tagline]]
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 hover:text-primary-light cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 hover:text-primary-light cursor-pointer transition-colors" />
              <Instagram className="w-5 h-5 hover:text-primary-light cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-primary-light hover:text-primary-foreground transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-primary-light hover:text-primary-foreground transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-primary-light hover:text-primary-foreground transition-colors">Services</Link></li>
              <li><Link to="/contact" className="text-primary-light hover:text-primary-foreground transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-primary-light">
              <li>[[service_1]]</li>
              <li>[[service_2]]</li>
              <li>[[service_3]]</li>
              <li>[[service_4]]</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-primary-light">
                <Phone className="w-4 h-4" />
                <span>[[phone_number]]</span>
              </div>
              <div className="flex items-center space-x-2 text-primary-light">
                <Mail className="w-4 h-4" />
                <span>[[email]]</span>
              </div>
              <div className="flex items-start space-x-2 text-primary-light">
                <MapPin className="w-4 h-4 mt-1" />
                <span>[[address]]</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-light mt-8 pt-8 text-center text-primary-light">
          <p>&copy; {new Date().getFullYear()} [[company_name]]. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;