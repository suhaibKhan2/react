import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import HeroSection from '@/components/sections/HeroSection';
import FeaturedCourses from '@/components/sections/FeaturedCourses';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { ArrowRight, Book, Users, Award, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';

const Index = () => {
  const { isAuthenticated } = useAuth();
  
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <HeroSection />
        
        {/* Featured Courses Section */}
        <FeaturedCourses />
        
        {/* Why Choose Us Section */}
        <section className="py-24 px-6 md:px-10 bg-secondary/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose EduSync</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our platform is designed to provide the best learning experience with features that help you succeed.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
              {[
                {
                  icon: Book,
                  title: 'Expert Instructors',
                  description: 'Learn from industry professionals with years of experience and expertise.'
                },
                {
                  icon: Award,
                  title: 'Recognized Certificates',
                  description: 'Earn certificates that are recognized by leading companies worldwide.'
                },
                {
                  icon: Users,
                  title: 'Community Support',
                  description: 'Join a community of learners and instructors who support each other.'
                },
                {
                  icon: Globe,
                  title: 'Accessible Learning',
                  description: 'Access your courses anytime, anywhere, on any device with our platform.'
                }
              ].map((feature, index) => (
                <div 
                  key={index} 
                  className="bg-background rounded-xl p-6 border border-border/40 hover:shadow-md transition-all duration-300 hover:translate-y-[-5px]"
                >
                  <div className="rounded-full w-12 h-12 bg-primary/10 flex items-center justify-center mb-5">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-24 px-6 md:px-10 bg-background relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(var(--primary-rgb),0.1),transparent_70%)]" />
          
          <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between">
            <div className="lg:w-1/2 mb-10 lg:mb-0">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Learning Journey?</h2>
              <p className="text-muted-foreground max-w-xl mb-8">
                Join thousands of learners who have transformed their careers with our courses. 
                Get started today and take the first step towards your goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                {isAuthenticated ? (
                  <Link to="/dashboard">
                    <Button size="lg" className="px-8 rounded-xl">
                      Go to Dashboard
                    </Button>
                  </Link>
                ) : (
                  <Link to="/signup">
                    <Button size="lg" className="px-8 rounded-xl">
                      Sign Up Now
                    </Button>
                  </Link>
                )}
                <Link to="/courses">
                  <Button variant="outline" size="lg" className="px-8 rounded-xl group">
                    Explore Courses
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="lg:w-2/5">
              <div className="relative bg-gradient-to-br from-secondary to-secondary/30 p-1 rounded-xl shadow-xl overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(var(--primary-rgb),0.1),transparent_70%)]" />
                <div className="bg-background rounded-lg p-8 relative">
                  <div className="flex items-center mb-6">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Users className="h-5 w-5 text-primary" />
                    </div>
                    <div className="ml-4">
                      <h3 className="font-semibold">Join Our Community</h3>
                      <p className="text-sm text-muted-foreground">Connect with other learners</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    {[
                      'Get help with challenging concepts',
                      'Share your learning progress',
                      'Network with professionals',
                      'Participate in live events and webinars'
                    ].map((item, index) => (
                      <div key={index} className="flex items-center">
                        <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mr-3 flex-shrink-0">
                          <svg className="w-3 h-3 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
