import { CheckCircle, Award, Users, Clock, Shield } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import professionalImage from '@/assets/plumber-professional.jpg';

const About = () => {
  const teamMembers = [
    {
      name: "[[team_member_1_name]]",
      role: "[[team_member_1_role]]",
      experience: "[[team_member_1_experience]]",
      description: "[[team_member_1_description]]"
    },
    {
      name: "[[team_member_2_name]]",
      role: "[[team_member_2_role]]",
      experience: "[[team_member_2_experience]]",
      description: "[[team_member_2_description]]"
    },
    {
      name: "[[team_member_3_name]]",
      role: "[[team_member_3_role]]",
      experience: "[[team_member_3_experience]]",
      description: "[[team_member_3_description]]"
    }
  ];

  const stats = [
    { number: "[[years_experience]]", label: "Years Experience" },
    { number: "[[projects_completed]]", label: "Projects Completed" },
    { number: "[[happy_customers]]", label: "Happy Customers" },
    { number: "[[team_members]]", label: "Team Members" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-hero text-primary-foreground">
        <div className="container-max">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              About [[company_name]]
            </h1>
            <p className="text-xl text-primary-light">
              [[about_hero_description]]
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
                [[company_story_paragraph_1]]
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                [[company_story_paragraph_2]]
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-primary mr-3" />
                  <span>[[company_value_1]]</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-primary mr-3" />
                  <span>[[company_value_2]]</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-primary mr-3" />
                  <span>[[company_value_3]]</span>
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
                  [[company_mission]]
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
                  [[company_vision]]
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
              [[stats_description]]
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
              [[team_description]]
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
              [[why_choose_detailed_description]]
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-3">[[reason_1_title]]</h3>
              <p className="text-muted-foreground">[[reason_1_description]]</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-3">[[reason_2_title]]</h3>
              <p className="text-muted-foreground">[[reason_2_description]]</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-3">[[reason_3_title]]</h3>
              <p className="text-muted-foreground">[[reason_3_description]]</p>
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
              [[about_cta_description]]
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="btn-secondary bg-primary-foreground text-primary hover:bg-primary-light">
                Get Free Quote
              </Button>
              <Button className="btn-secondary border-primary-light text-primary-light hover:bg-primary-light hover:text-primary">
                Call [[phone_number]]
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;