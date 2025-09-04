import { Wrench, Shield, Clock, Droplets, Zap, Home, CheckCircle, Phone } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Services = () => {
  const services = [
    {
      icon: <Droplets className="w-12 h-12 text-primary" />,
      title: "Main Line Stoppages",
      description: "Clearing main sewer and drainage blockages quickly and effectively with professional equipment and techniques",
      features: [
        "High-pressure water jetting",
        "Professional snake equipment",
        "Complete blockage removal"
      ]
    },
    {
      icon: <Wrench className="w-12 h-12 text-primary" />,
      title: "Kitchen & Bathroom Sink Stoppages",
      description: "Restoring proper flow to sinks and drains with expert care and attention to detail",
      features: [
        "Grease and debris removal",
        "Pipe inspection and cleaning",
        "Preventive maintenance advice"
      ]
    },
    {
      icon: <Home className="w-12 h-12 text-primary" />,
      title: "Tub & Shower Stoppages",
      description: "Professional removal of hair and debris clogs from tubs and shower drains",
      features: [
        "Hair and soap buildup removal",
        "Drain snake services",
        "Flow restoration guarantee"
      ]
    },
    {
      icon: <Zap className="w-12 h-12 text-primary" />,
      title: "Laundry Line & Toilet Stoppages",
      description: "Unclogging stubborn blockages in laundry lines and toilets with professional care",
      features: [
        "Toilet auger services",
        "Laundry drain cleaning",
        "Complete clog elimination"
      ]
    },
    {
      icon: <Shield className="w-12 h-12 text-primary" />,
      title: "Emergency Plumbing Repairs",
      description: "24/7 emergency plumbing services for urgent situations throughout Eugene and surrounding areas",
      features: [
        "24/7 emergency response",
        "Fast problem diagnosis",
        "Immediate repair solutions"
      ]
    },
    {
      icon: <Clock className="w-12 h-12 text-primary" />,
      title: "Professional Drain Cleaning",
      description: "Comprehensive drain cleaning services to maintain optimal water flow in your plumbing system",
      features: [
        "Video drain inspection",
        "Hydro-jetting services",
        "Preventive maintenance plans"
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
              Faithful Rooter Services
            </h1>
            <p className="text-xl text-primary-light mb-8">
              Professional plumbing and drain cleaning services for Eugene, Oregon and surrounding areas
            </p>
            <Button className="btn-secondary bg-primary-foreground text-primary hover:bg-primary-light">
              <Phone className="w-5 h-5 mr-2" />
              Call (458) 210-9703
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
              From emergency repairs to specialized drain cleaning, we handle all your plumbing needs with care
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
              Plumbing emergencies don't wait for business hours. Faithful Rooter is available 24/7 for urgent repairs throughout Eugene and surrounding areas.
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
              Emergency Call (458) 210-9703
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
              Experience the difference of working with Eugene's trusted plumbing professionals
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
              <p className="font-medium">Eugene</p>
            </div>
            <div className="text-center p-4 bg-accent rounded-lg">
              <p className="font-medium">Springfield</p>
            </div>
            <div className="text-center p-4 bg-accent rounded-lg">
              <p className="font-medium">Junction City</p>
            </div>
            <div className="text-center p-4 bg-accent rounded-lg">
              <p className="font-medium">Coburg</p>
            </div>
            <div className="text-center p-4 bg-accent rounded-lg">
              <p className="font-medium">Creswell</p>
            </div>
            <div className="text-center p-4 bg-accent rounded-lg">
              <p className="font-medium">Cottage Grove</p>
            </div>
            <div className="text-center p-4 bg-accent rounded-lg">
              <p className="font-medium">Veneta</p>
            </div>
            <div className="text-center p-4 bg-accent rounded-lg">
              <p className="font-medium">Surrounding Areas</p>
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
              Don't let plumbing problems disrupt your day. Contact Faithful Rooter now for fast, reliable service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="btn-secondary bg-primary-foreground text-primary hover:bg-primary-light">
                Get Free Quote
              </Button>
              <Button className="btn-secondary border-primary-light text-primary-light hover:bg-primary-light hover:text-primary">
                <Phone className="w-5 h-5 mr-2" />
                Call (458) 210-9703
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;