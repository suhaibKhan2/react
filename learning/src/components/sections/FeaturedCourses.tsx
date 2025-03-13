import { useState, useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import CourseCard from '@/components/ui/CourseCard';
import { Link } from 'react-router-dom';
import { courses } from '@/data/courses';

const FeaturedCourses = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  const featuredCourses = courses.slice(0, 3);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { 
        threshold: 0.1, 
        rootMargin: '0px 0px -100px 0px'
      }
    );
    
    const section = sectionRef.current;
    if (section) {
      observer.observe(section);
    }
    
    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);
  
  return (
    <section 
      ref={sectionRef}
      className="py-24 px-6 md:px-10 bg-background"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
              Featured Courses
            </h2>
            <p className={`text-muted-foreground max-w-2xl transition-all duration-700 delay-100 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
              Explore our most popular courses selected by our educators and the learning community.
            </p>
          </div>
          <Link 
            to="/courses"
            className={`mt-6 md:mt-0 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}
          >
            <Button variant="ghost" className="group">
              View all courses
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
        
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-20'}`}>
          {featuredCourses.map((course, index) => (
            <div 
              key={course.id}
              className="transition-all"
              style={{ 
                transitionDelay: `${(index + 1) * 100}ms`, 
                transitionDuration: '700ms',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
              }}
            >
              <CourseCard course={course} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCourses;
