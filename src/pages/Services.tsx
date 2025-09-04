import { Wrench, Shield, Clock, Droplets, Zap, Home, CheckCircle, Phone } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Services = () => {
  const services = [
    {
      icon: <Droplets className="w-12 h-12 text-primary" />,
      title: "Emergency Plumbing",
      description: "24/7 emergency plumbing repairs for urgent situations including burst pipes, leaks, and blockages",
      features: [
        "24/7 emergency response",
        "Licensed plumbers",
        "Fast problem resolution"
      ]
    },
    {
      icon: <Wrench className="w-12 h-12 text-primary" />,
      title: "Pipe Repair & Installation",
      description: "Complete pipe repair and installation services for residential and commercial properties",
      features: [
        "Pipe leak detection",
        "Full pipe replacement",
        "Preventive maintenance"
      ]
    },
    {
      icon: <Home className="w-12 h-12 text-primary" />,
      title: "Drain Cleaning",
      description: "Professional drain cleaning services to keep your drainage system flowing smoothly",
      features: [
        "High-pressure water jetting",
        "Snake and auger services",
        "Video drain inspection"
      ]
    },
    {
      icon: <Zap className="w-12 h-12 text-primary" />,
      title: "Water Heater Service",
      description: "Complete water heater installation, repair, and maintenance for all types and models",
      features: [
        "Tank and tankless units",
        "Energy-efficient upgrades",
        "Regular maintenance plans"
      ]
    },
    {
      icon: <Shield className="w-12 h-12 text-primary" />,
      title: "Fixture Installation",
      description: "Professional installation of bathroom and kitchen fixtures including faucets, toilets, and sinks",
      features: [
        "Bathroom renovations",
        "Kitchen upgrades",
        "Quality fixture installation"
      ]
    },
    {
      icon: <Clock className="w-12 h-12 text-primary" />,
      title: "Preventive Maintenance",
      description: "Regular maintenance services to prevent costly plumbing problems before they occur",
      features: [
        "Annual inspections",
        "System optimization",
        "Cost-saving maintenance plans"
      ]
    }
  ];

  const whyChooseFeatures = [
    {
      title: "Licensed & Insured",
      description: "All our plumbers are fully licensed and insured for your protection and peace of mind"
    },
    {
      title: "Quality Workmanship",
      description: "We use only the best materials and latest techniques to ensure lasting results"
    },
    {
      title: "Transparent Pricing",
      description: "Upfront pricing with no hidden fees - you'll know the cost before we start"
    },
    {
      title: "Customer Satisfaction",
      description: "100% satisfaction guarantee on all our work with exceptional customer service"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-hero text-primary-foreground">
        <div className="container-max">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Our Plumbing Services
            </h1>
            <p className="text-xl text-primary-light mb-8">
              Comprehensive plumbing solutions for residential and commercial properties
            </p>
            <Button className="btn-secondary bg-primary-foreground text-primary hover:bg-primary-light">
              <Phone className="w-5 h-5 mr-2" />
              Call [[phone_number]]
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Professional Plumbing Solutions
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From emergency repairs to routine maintenance, we handle all your plumbing needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="card-professional group hover:scale-105">
                <CardContent className="p-6">
                  <div className="mb-6">{service.icon}</div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Services Section */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-max">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              24/7 Emergency Services
            </h2>
            <p className="text-xl text-primary-light mb-8 max-w-2xl mx-auto">
              Plumbing emergencies don't wait for business hours. We're available 24/7 for urgent repairs.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <Clock className="w-16 h-16 text-primary-light mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Available 24/7</h3>
                <p className="text-primary-light">Round-the-clock emergency service when you need it most</p>
              </div>
              <div className="text-center">
                <Zap className="w-16 h-16 text-primary-light mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Rapid Response</h3>
                <p className="text-primary-light">Fast response times to minimize damage and disruption</p>
              </div>
              <div className="text-center">
                <Shield className="w-16 h-16 text-primary-light mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Licensed & Insured</h3>
                <p className="text-primary-light">Fully licensed and insured professionals you can trust</p>
              </div>
            </div>
            <Button className="btn-secondary bg-primary-foreground text-primary hover:bg-primary-light text-lg px-8 py-4">
              <Phone className="w-6 h-6 mr-2" />
              Emergency Call [[phone_number]]
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="section-padding bg-accent">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Why Choose Our Services?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience the difference of working with true plumbing professionals
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whyChooseFeatures.map((feature, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Service Areas
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We proudly serve the following areas with professional plumbing services
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-accent rounded-lg">
              <p className="font-medium">[[service_area_1]]</p>
            </div>
            <div className="text-center p-4 bg-accent rounded-lg">
              <p className="font-medium">[[service_area_2]]</p>
            </div>
            <div className="text-center p-4 bg-accent rounded-lg">
              <p className="font-medium">[[service_area_3]]</p>
            </div>
            <div className="text-center p-4 bg-accent rounded-lg">
              <p className="font-medium">[[service_area_4]]</p>
            </div>
            <div className="text-center p-4 bg-accent rounded-lg">
              <p className="font-medium">[[service_area_5]]</p>
            </div>
            <div className="text-center p-4 bg-accent rounded-lg">
              <p className="font-medium">[[service_area_6]]</p>
            </div>
            <div className="text-center p-4 bg-accent rounded-lg">
              <p className="font-medium">[[service_area_7]]</p>
            </div>
            <div className="text-center p-4 bg-accent rounded-lg">
              <p className="font-medium">[[service_area_8]]</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-max">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Need Professional Plumbing Services?
            </h2>
            <p className="text-xl text-primary-light mb-8 max-w-2xl mx-auto">
              Don't let plumbing problems disrupt your day. Contact us now for fast, reliable service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="btn-secondary bg-primary-foreground text-primary hover:bg-primary-light">
                Get Free Quote
              </Button>
              <Button className="btn-secondary border-primary-light text-primary-light hover:bg-primary-light hover:text-primary">
                <Phone className="w-5 h-5 mr-2" />
                Call [[phone_number]]
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;