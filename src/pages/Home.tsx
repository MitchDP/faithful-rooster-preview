import { useState } from 'react';
import { Phone, Mail, CheckCircle, Star, Wrench, Shield, Clock, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import heroImage from '@/assets/hero-plumbing.jpg';
import professionalImage from '@/assets/plumber-professional.jpg';

const Home = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const services = [
    {
      icon: <Wrench className="w-8 h-8 text-primary" />,
      title: "Main Line Stoppages",
      description: "Clearing main sewer and drainage blockages quickly and effectively"
    },
    {
      icon: <Shield className="w-8 h-8 text-primary" />,
      title: "Kitchen & Bathroom Sink Stoppages", 
      description: "Restoring proper flow to sinks and drains with professional care"
    },
    {
      icon: <Clock className="w-8 h-8 text-primary" />,
      title: "Emergency Plumbing Repairs",
      description: "24/7 service for urgent plumbing issues when you need us most"
    }
  ];

  const testimonials = [
    {
      name: "James Thomas",
      text: "Patrick came on a Sunday to clear our washing machine drain. Not only did he fix it, but he was engaging in great conversation. It's wonderful to find a TRUE Christian-based gentleman who works with honesty and care.",
      rating: 5
    },
    {
      name: "Bre Freier",
      text: "Patrick was great. After 5 pm on a Thursday, he came to the rescue. Fast, efficient, and honest. My mom had a new refrigerator delivered and discovered a leaky line, and he solved it right away. Couldn't recommend him more.",
      rating: 5
    },
    {
      name: "Dante Buccieri",
      text: "We had an emergency with a shattered sewer pipe. Faithful Rooter gave us a stopgap solution overnight and came the next day for a permanent repair. Fast, reliable, and truly caring service.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-hero section-padding overflow-hidden">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground mb-6">
                Delivering kindness and care to you and your home
              </h1>
              <p className="text-xl text-primary-light mb-8">
                Faithful Rooter is a fully licensed plumbing and drain cleaning service dedicated to kindness, care, and reliability. Serving Eugene, Oregon with professional plumbing solutions 24/7.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="btn-hero">
                  <Phone className="w-5 h-5 mr-2" />
                  Call (458) 210-9703
                </Button>
                <Button className="btn-secondary bg-primary-foreground text-primary hover:bg-primary-light">
                  <Mail className="w-5 h-5 mr-2" />
                  Request Service
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src={heroImage}
                alt="Professional plumbing services"
                className="rounded-lg shadow-soft w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding bg-accent">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Why Choose Faithful Rooter?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience the difference of working with a Christian-based plumbing service that values honesty, care, and professional excellence
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Licensed & Insured</h3>
              <p className="text-muted-foreground">Fully licensed and insured for your peace of mind</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">24/7 Emergency Service</h3>
              <p className="text-muted-foreground">Available around the clock for emergency repairs</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality Guarantee</h3>
              <p className="text-muted-foreground">100% satisfaction guarantee on all our work</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Experienced Team</h3>
              <p className="text-muted-foreground">Years of experience serving our community</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Our Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Professional plumbing services for residential and commercial properties
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="card-professional text-center">
                <CardContent className="p-6">
                  <div className="mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="section-padding bg-accent">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src={professionalImage}
                alt="Professional plumber at work"
                className="rounded-lg shadow-soft w-full h-auto"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
                Your Trusted Local Plumbing Experts
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Patrick, the owner of Faithful Rooter, specializes in main line stoppages, kitchen & bathroom sink stoppages, tub & shower stoppages, laundry line & toilet stoppages, and more. With a 5-star reputation and over 100 glowing reviews.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-primary mr-3" />
                  <span>Licensed & Insured (CCB #240420)</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-primary mr-3" />
                  <span>5-Star Rating with 100+ Reviews</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-primary mr-3" />
                  <span>Christian-Based Business Values</span>
                </li>
              </ul>
              <Button className="btn-hero">
                Learn More About Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              What Our Customers Say
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              See what our satisfied customers have to say about our services
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="card-professional">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
                  <p className="font-semibold">- {testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                Get Your Free Quote Today
              </h2>
              <p className="text-xl text-primary-light mb-8">
                Ready to solve your plumbing problems? Contact us for a free, no-obligation quote.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="w-6 h-6 text-primary-light mr-4" />
                  <div>
                    <p className="font-semibold">Call Us Now</p>
                    <p className="text-primary-light">(458) 210-9703</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Mail className="w-6 h-6 text-primary-light mr-4" />
                  <div>
                    <p className="font-semibold">Email Us</p>
                    <p className="text-primary-light">faithfulrooter@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <Card className="bg-primary-foreground text-card-foreground">
                <CardContent className="p-6">
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Input
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        required
                      />
                      <Input
                        type="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        required
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Input
                        type="tel"
                        placeholder="Your Phone"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        required
                      />
                      <Input
                        placeholder="Service Needed"
                        value={formData.service}
                        onChange={(e) => setFormData({...formData, service: e.target.value})}
                        required
                      />
                    </div>
                    <Textarea
                      placeholder="Describe your plumbing issue..."
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      required
                    />
                    <Button type="submit" className="btn-hero w-full">
                      Get Free Quote
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;