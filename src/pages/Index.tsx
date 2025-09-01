import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, Award, Users } from 'lucide-react';
import heroImage from '@/assets/hero-image.jpg';

const Index = () => {
  const features = [
    {
      icon: <CheckCircle className="w-8 h-8 text-primary" />,
      title: "Certified",
      description: "Professional certified trainer with years of experience"
    },
    {
      icon: <Award className="w-8 h-8 text-primary" />,
      title: "Customized Training",
      description: "Tailored training programs for every dog's unique needs"
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Proven Success",
      description: "Hundreds of happy dogs and satisfied pet owners"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="hero-gradient text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Transform Your Dog with Professional Training
              </h1>
              <p className="text-xl mb-8 opacity-90">
                Expert dog training services in Delhi. From basic obedience to advanced guard training, 
                we help you build a stronger bond with your furry friend.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" variant="secondary" className="text-lg px-8">
                  <Link to="/services">Our Services</Link>
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 border-white text-white hover:bg-white hover:text-primary">
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
            <div>
              <img 
                src={heroImage} 
                alt="Professional dog trainer with dogs" 
                className="rounded-lg shadow-soft w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
              Why Choose Aryan Dog Trainer?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Professional dog training with proven methods and caring approach
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center shadow-card hover:shadow-soft transition-shadow">
                <CardContent className="p-8">
                  <div className="flex justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-secondary">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-secondary text-secondary-foreground">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Training Your Dog?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join hundreds of satisfied customers who have transformed their dogs with our professional training programs.
          </p>
          <Link to="/about">
            <Button size="lg" className="text-lg px-8">
              Learn More About Us
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Index;
