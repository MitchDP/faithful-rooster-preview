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
              <img 
                src="/lovable-uploads/ae37d345-b63a-4d9f-a999-54583f0fa3bc.png" 
                alt="Faithful Rooter Logo" 
                className="w-8 h-8"
              />
              <span className="text-lg font-heading font-bold">Faithful Rooter</span>
            </div>
            <p className="text-primary-light mb-4">
              Delivering kindness and care to you and your home.
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
              <li>Main Line Stoppages</li>
              <li>Kitchen & Bathroom Sink Stoppages</li>
              <li>Tub & Shower Stoppages</li>
              <li>Emergency Plumbing Repairs</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-primary-light">
                <Phone className="w-4 h-4" />
                <span>(458) 210-9703</span>
              </div>
              <div className="flex items-center space-x-2 text-primary-light">
                <Mail className="w-4 h-4" />
                <span>faithfulrooter@gmail.com</span>
              </div>
              <div className="flex items-start space-x-2 text-primary-light">
                <MapPin className="w-4 h-4 mt-1" />
                <span>Eugene, Oregon<br />CCB #240420</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-light mt-8 pt-8 text-center text-primary-light">
          <p>&copy; {new Date().getFullYear()} Faithful Rooter. All rights reserved. | CCB #240420 | Serving Eugene, Oregon with kindness and care — Open 24 hours.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;