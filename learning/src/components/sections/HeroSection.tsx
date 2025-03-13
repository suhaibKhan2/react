import { useEffect, useRef } from 'react';
import { BookOpen, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100');
          entry.target.classList.remove('translate-y-10');
        }
      },
      { 
        threshold: 0.1,
        rootMargin: '0px'
      }
    );
    
    const heroElement = heroRef.current;
    if (heroElement) {
      observer.observe(heroElement);
    }
    
    return () => {
      if (heroElement) {
        observer.unobserve(heroElement);
      }
    };
  }, []);
  
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-16">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/50 to-background z-0" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(var(--primary-rgb),0.15),transparent_50%)]" />

      <div 
        ref={heroRef}
        className="max-w-7xl mx-auto px-6 md:px-10 relative z-10 text-center transition-all duration-700 ease-out opacity-0 translate-y-10"
      >
        <div className="inline-flex items-center justify-center px-4 py-1.5 mb-6 rounded-full bg-primary/10 text-primary text-sm font-medium">
          <BookOpen className="h-4 w-4 mr-2" />
          Transforming online education
        </div>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight mb-6">
          Unlock Your Potential with <br className="hidden md:block" />
          <span className="text-primary">Expert-Led Courses</span>
        </h1>
        
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-10">
          Discover a world of knowledge with our comprehensive learning platform.
          Gain skills that will transform your career and open new opportunities.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" className="px-8 py-6 text-base rounded-xl">
            Get Started
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Link to="/courses">
            <Button variant="outline" size="lg" className="px-8 py-6 text-base rounded-xl">
              Browse Courses
            </Button>
          </Link>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 max-w-4xl mx-auto">
          {[
            { label: 'Active Students', value: '12,000+' },
            { label: 'Expert Instructors', value: '120+' },
            { label: 'Courses Available', value: '450+' },
            { label: 'Success Rate', value: '94%' }
          ].map((stat, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center transition-all duration-500 hover:scale-105"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <span className="text-3xl md:text-4xl font-bold text-foreground mb-2">{stat.value}</span>
              <span className="text-sm text-muted-foreground">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
      
      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
