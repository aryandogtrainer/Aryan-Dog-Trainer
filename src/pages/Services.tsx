import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Clock, Users, Shield, Trophy } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Basic Training",
      price: "₹4,000",
      duration: "2-3 weeks",
      icon: <CheckCircle className="w-8 h-8 text-blue-500" />,
      color: "blue",
      features: [
        "Sit, Stay, Come, Down commands",
        "Leash training and walking etiquette",
        "Socialization with other dogs",
        "House training basics"
      ],
      idealFor: "Puppies and new dog owners who want a strong foundation"
    },
    {
      id: 2,
      title: "Obedience Training",
      price: "₹5,000",
      duration: "3-4 weeks",
      icon: <Users className="w-8 h-8 text-green-500" />,
      color: "green",
      features: [
        "Advanced command training (heel, off, leave it)",
        "Response to verbal and hand signals",
        "Discouraging undesirable behaviors",
        "Reinforcement of leash manners"
      ],
      idealFor: "Dogs that already know basic commands but need more discipline"
    },
    {
      id: 3,
      title: "Guard Training",
      price: "₹6,000",
      duration: "4-5 weeks",
      icon: <Shield className="w-8 h-8 text-red-500" />,
      color: "red",
      features: [
        "Alerting and warning behaviors",
        "Controlled guarding techniques",
        "Responding to intruders safely",
        "Controlled protection exercises"
      ],
      idealFor: "Homeowners and businesses seeking added security with their dog"
    },
    {
      id: 4,
      title: "Advanced Training",
      price: "₹7,000",
      duration: "5-6 weeks",
      icon: <Trophy className="w-8 h-8 text-purple-500" />,
      color: "purple",
      features: [
        "Combination of obedience + guard + agility",
        "Problem behavior correction",
        "Specialized tasks or tricks",
        "Enhanced socialization and focus training"
      ],
      idealFor: "Owners wanting a fully trained dog for personal, security, or competitive purposes"
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'blue':
        return 'border-blue-500 hover:bg-blue-50 bg-blue-500 hover:bg-blue-600';
      case 'green':
        return 'border-green-500 hover:bg-green-50 bg-green-500 hover:bg-green-600';
      case 'red':
        return 'border-red-500 hover:bg-red-50 bg-red-500 hover:bg-red-600';
      case 'purple':
        return 'border-purple-500 hover:bg-purple-50 bg-purple-500 hover:bg-purple-600';
      default:
        return 'border-primary hover:bg-light-orange bg-primary hover:bg-primary-hover';
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="hero-gradient text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Dog Training Services</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Choose from our comprehensive training programs designed to meet your dog's specific needs
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => {
              const colorClasses = getColorClasses(service.color);
              const [borderColor, hoverBg, buttonBg, buttonHover] = colorClasses.split(' ');
              
              return (
                <Card key={service.id} className={`${borderColor} border-2 hover:shadow-lg transition-all`}>
                  <CardHeader className="text-center pb-4">
                    <div className="flex justify-center mb-4">
                      {service.icon}
                    </div>
                    <CardTitle className="text-2xl font-bold text-secondary">
                      {service.title}
                    </CardTitle>
                    <div className="text-3xl font-bold text-primary">{service.price}</div>
                    <div className="flex items-center justify-center text-muted-foreground">
                      <Clock className="w-4 h-4 mr-2" />
                      {service.duration}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-6">
                      <h4 className="font-semibold text-secondary mb-3">Key Features:</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, index) => (
                          <li key={index} className="flex items-start">
                            <CheckCircle className="w-4 h-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-muted-foreground text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-secondary mb-2">Ideal For:</h4>
                      <p className="text-muted-foreground text-sm">{service.idealFor}</p>
                    </div>

                    <Button 
                      className={`w-full text-white ${buttonBg} ${buttonHover} transition-colors`}
                      size="lg"
                    >
                      <Link to="/contact">Get Started</Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-muted">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-secondary mb-6">
            Why Choose Our Training Programs?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <CheckCircle className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-secondary mb-2">Proven Methods</h3>
              <p className="text-muted-foreground text-sm">
                Time-tested training techniques with high success rates
              </p>
            </div>
            <div>
              <Users className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-secondary mb-2">Experienced Trainer</h3>
              <p className="text-muted-foreground text-sm">
                5+ years of professional dog training experience
              </p>
            </div>
            <div>
              <Shield className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-secondary mb-2">Guaranteed Results</h3>
              <p className="text-muted-foreground text-sm">
                We stand behind our training with satisfaction guarantee
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-secondary text-secondary-foreground">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Transform Your Dog?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Contact us today to discuss which training program is right for your dog
          </p>
          <Link to="/contact">
            <Button size="lg" className="text-lg px-8">
              Contact Us Now
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;