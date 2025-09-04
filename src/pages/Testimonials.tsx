import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Testimonials = () => {
  const testimonials = [
    {
      name: "James Thomas",
      rating: 5,
      text: "Patrick came on a Sunday to clear our washing machine drain. Not only did he fix it, but he was engaging in great conversation. It's wonderful to find a TRUE Christian-based gentleman who works with honesty and care.",
      service: "Drain Cleaning"
    },
    {
      name: "Bre Freier", 
      rating: 5,
      text: "Patrick was great. After 5 pm on a Thursday, he came to the rescue. Fast, efficient, and honest. My mom had a new refrigerator delivered and discovered a leaky line, and he solved it right away. Couldn't recommend him more.",
      service: "Emergency Repair"
    },
    {
      name: "Dante Buccieri",
      rating: 5,
      text: "We had an emergency with a shattered sewer pipe. Faithful Rooter gave us a stopgap solution overnight and came the next day for a permanent repair. Fast, reliable, and truly caring service.",
      service: "Sewer Line Repair"
    },
    {
      name: "Sarah Mitchell",
      rating: 5,
      text: "Called Faithful Rooter for a kitchen sink blockage. Patrick arrived quickly, diagnosed the problem, and had it fixed in no time. Professional, courteous, and reasonably priced. Will definitely use again!",
      service: "Kitchen Sink Stoppage"
    },
    {
      name: "Mike Rodriguez",
      rating: 5,
      text: "Our toilet was completely blocked and we were in a panic. Patrick from Faithful Rooter came out the same day and resolved the issue quickly. Honest pricing and excellent workmanship. Highly recommended!",
      service: "Toilet Stoppage"
    }
  ];

  const stats = [
    { number: "100+", label: "5-Star Reviews" },
    { number: "500+", label: "Happy Customers" },
    { number: "24/7", label: "Emergency Service" },
    { number: "5★", label: "Average Rating" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-hero text-primary-foreground">
        <div className="container-max">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Customer Reviews & Testimonials
            </h1>
            <p className="text-xl text-primary-light mb-8">
              See what our satisfied customers have to say about Faithful Rooter's professional plumbing services
            </p>
            <div className="flex items-center justify-center space-x-2 mb-8">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-8 h-8 text-yellow-400 fill-current" />
              ))}
              <span className="text-2xl font-bold ml-4">5.0 Rating</span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-accent">
        <div className="container-max">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              What Our Customers Say
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Real reviews from real customers who have experienced our professional plumbing services
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="card-professional">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Quote className="w-8 h-8 text-primary mr-3" />
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
                  <div className="border-t border-border pt-4">
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-primary font-medium">{testimonial.service}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Review Platform Links */}
      <section className="section-padding bg-accent">
        <div className="container-max">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Find Us Online
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Check out our reviews on popular platforms and see why customers trust Faithful Rooter
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="btn-secondary">
                View on Google Reviews
              </Button>
              <Button className="btn-secondary">
                View on Yelp
              </Button>
              <Button className="btn-secondary">
                View on Facebook
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-max">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Ready to Experience Our Service?
            </h2>
            <p className="text-xl text-primary-light mb-8 max-w-2xl mx-auto">
              Join hundreds of satisfied customers who trust Faithful Rooter for their plumbing needs
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

export default Testimonials;