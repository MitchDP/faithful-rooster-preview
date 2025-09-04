import { CheckCircle, Award, Users, Clock, Shield } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import professionalImage from '@/assets/plumber-professional.jpg';

const About = () => {
  const teamMembers = [
    {
      name: "Patrick",
      role: "Owner & Lead Plumber",
      experience: "5+ Years Experience",
      description: "Specializes in main line stoppages, sink stoppages, tub & shower stoppages, and emergency repairs. Known for his Christian values and caring approach to customer service."
    },
    {
      name: "Professional Team",
      role: "Licensed Technicians",
      experience: "Fully Licensed & Insured",
      description: "Our team of skilled professionals is dedicated to providing honest, reliable plumbing services with the highest standards of workmanship."
    },
    {
      name: "24/7 Support",
      role: "Emergency Response",
      experience: "Always Available",
      description: "Round-the-clock emergency plumbing services to handle urgent situations with fast response times and professional solutions."
    }
  ];

  const stats = [
    { number: "5+", label: "Years Experience" },
    { number: "500+", label: "Projects Completed" },
    { number: "100+", label: "Happy Customers" },
    { number: "24/7", label: "Emergency Service" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-hero text-primary-foreground">
        <div className="container-max">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              About Faithful Rooter
            </h1>
            <p className="text-xl text-primary-light">
              Delivering kindness, care, and professional plumbing solutions to Eugene, Oregon and surrounding areas
            </p>
          </div>
        </div>
      </section>

      {/* Company Story Section */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src={professionalImage}
                alt="Professional plumbing team"
                className="rounded-lg shadow-soft w-full h-auto"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
                Our Story
              </h2>
              <p className="text-lg text-muted-foreground mb-4">
                Faithful Rooter is a fully licensed plumbing and drain cleaning service dedicated to kindness, care, and reliability. Patrick, the owner, specializes in main line stoppages, kitchen & bathroom sink stoppages, tub & shower stoppages, laundry line & toilet stoppages, and more.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                With a 5-star reputation and over 100 glowing reviews, Faithful Rooter proudly serves Eugene and the surrounding community with honesty, professionalism, and compassion. We believe in treating every customer with kindness and delivering exceptional service that reflects our Christian values.
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
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="section-padding bg-accent">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="card-professional">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-heading font-bold mb-4">Our Mission</h3>
                <p className="text-muted-foreground">
                  To provide reliable, honest, and compassionate plumbing services while treating every customer with kindness and respect. We believe in building lasting relationships through quality workmanship and Christian values.
                </p>
              </CardContent>
            </Card>
            <Card className="card-professional">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-heading font-bold mb-4">Our Vision</h3>
                <p className="text-muted-foreground">
                  To be Eugene's most trusted plumbing service, known for our integrity, reliability, and exceptional customer care. We envision a community where every home and business has access to honest, professional plumbing solutions.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Our Track Record
            </h2>
            <p className="text-xl text-primary-light max-w-2xl mx-auto">
              Numbers that reflect our commitment to excellence and customer satisfaction
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-primary-light">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Meet the dedicated professionals who make Faithful Rooter Eugene's trusted plumbing service
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="card-professional text-center">
                <CardContent className="p-6">
                  <div className="w-24 h-24 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-12 h-12 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-2">{member.role}</p>
                  <p className="text-sm text-muted-foreground mb-3">{member.experience}</p>
                  <p className="text-muted-foreground">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding bg-accent">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Why Choose Us?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience the difference of working with a plumbing service that values honesty, reliability, and Christian principles
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Licensed & Insured</h3>
              <p className="text-muted-foreground">Fully licensed (CCB #240420) and insured plumbing contractor with all proper certifications for your protection and peace of mind.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-3">24/7 Emergency Service</h3>
              <p className="text-muted-foreground">Available around the clock for emergency plumbing situations with fast response times throughout Eugene and surrounding areas.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Christian Values</h3>
              <p className="text-muted-foreground">Built on a foundation of honesty, integrity, and compassion. We treat every customer with kindness and deliver service with Christian principles.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-max">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Ready to Work With Us?
            </h2>
            <p className="text-xl text-primary-light mb-8 max-w-2xl mx-auto">
              Experience the Faithful Rooter difference. Contact us today for honest, reliable plumbing services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="btn-secondary bg-primary-foreground text-primary hover:bg-primary-light">
                Get Free Quote
              </Button>
              <Button className="btn-secondary border-primary-light text-primary-light hover:bg-primary-light hover:text-primary">
                Call (458) 210-9703
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;