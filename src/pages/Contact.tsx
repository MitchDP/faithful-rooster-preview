import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Contact form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: <Phone className="w-8 h-8 text-primary" />,
      title: "Call Us",
      info: "[[phone_number]]",
      description: "Available 24/7 for emergencies"
    },
    {
      icon: <Mail className="w-8 h-8 text-primary" />,
      title: "Email Us",
      info: "[[email]]",
      description: "We'll respond within 24 hours"
    },
    {
      icon: <MapPin className="w-8 h-8 text-primary" />,
      title: "Visit Us",
      info: "[[address]]",
      description: "Our main office location"
    },
    {
      icon: <Clock className="w-8 h-8 text-primary" />,
      title: "Business Hours",
      info: "Mon-Fri: 8AM-6PM",
      description: "Emergency service available 24/7"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-hero text-primary-foreground">
        <div className="container-max">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Contact [[company_name]]
            </h1>
            <p className="text-xl text-primary-light mb-8">
              Get in touch with our professional plumbing team for all your plumbing needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="btn-secondary bg-primary-foreground text-primary hover:bg-primary-light">
                <Phone className="w-5 h-5 mr-2" />
                Call [[phone_number]]
              </Button>
              <Button className="btn-secondary border-primary-light text-primary-light hover:bg-primary-light hover:text-primary">
                <Mail className="w-5 h-5 mr-2" />
                Email Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Get In Touch
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Multiple ways to reach us for all your plumbing service needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <Card key={index} className="card-professional text-center">
                <CardContent className="p-6">
                  <div className="mb-4">{info.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{info.title}</h3>
                  <p className="font-medium text-primary mb-2">{info.info}</p>
                  <p className="text-sm text-muted-foreground">{info.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="section-padding bg-accent">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
                Send Us a Message
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Fill out the form below and we'll get back to you as soon as possible
              </p>
              <Card className="card-professional">
                <CardContent className="p-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                          Full Name *
                        </label>
                        <Input
                          id="name"
                          placeholder="Your Name"
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                          Email Address *
                        </label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="your@email.com"
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          required
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                          Phone Number *
                        </label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="Your Phone Number"
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                          Subject *
                        </label>
                        <Input
                          id="subject"
                          placeholder="Subject"
                          value={formData.subject}
                          onChange={(e) => setFormData({...formData, subject: e.target.value})}
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        placeholder="Tell us about your plumbing needs..."
                        rows={6}
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        required
                      />
                    </div>
                    <Button type="submit" className="btn-hero w-full">
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Map & Additional Info */}
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
                Find Us
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Visit our office or use the contact information below to reach us
              </p>
              
              {/* Google Maps Embed Placeholder */}
              <div className="bg-card border border-border rounded-lg overflow-hidden shadow-card mb-8">
                <div className="aspect-video bg-muted flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
                    <p className="text-muted-foreground">
                      Google Maps will be embedded here
                    </p>
                    <p className="text-sm text-muted-foreground mt-2">
                      Replace this with actual Google Maps embed code:<br />
                      [[google_maps_embed_code]]
                    </p>
                  </div>
                </div>
              </div>

              {/* Service Area Info */}
              <Card className="card-professional">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Service Areas</h3>
                  <p className="text-muted-foreground mb-4">
                    We proudly serve the following areas with professional plumbing services
                  </p>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div>• [[service_area_1]]</div>
                    <div>• [[service_area_2]]</div>
                    <div>• [[service_area_3]]</div>
                    <div>• [[service_area_4]]</div>
                    <div>• [[service_area_5]]</div>
                    <div>• [[service_area_6]]</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact Section */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-max">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Emergency Plumbing Services
            </h2>
            <p className="text-xl text-primary-light mb-8 max-w-2xl mx-auto">
              Plumbing emergencies can happen any time. We're here to help 24/7.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <Clock className="w-16 h-16 text-primary-light mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">24/7 Availability</h3>
                <p className="text-primary-light">Available every day of the year</p>
              </div>
              <div className="text-center">
                <Phone className="w-16 h-16 text-primary-light mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Emergency Hotline</h3>
                <p className="text-primary-light">[[phone_number]]</p>
              </div>
              <div className="text-center">
                <MapPin className="w-16 h-16 text-primary-light mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Rapid Response</h3>
                <p className="text-primary-light">Fast response times in your area</p>
              </div>
            </div>
            <Button className="btn-secondary bg-primary-foreground text-primary hover:bg-primary-light text-lg px-8 py-4">
              <Phone className="w-6 h-6 mr-2" />
              Emergency Call [[phone_number]]
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;