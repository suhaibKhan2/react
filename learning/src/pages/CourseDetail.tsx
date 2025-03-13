import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import LessonItem from '@/components/ui/LessonItem';
import ProgressBar from '@/components/ui/ProgressBar';
import { Button } from '@/components/ui/button';
import { courses, Course } from '@/data/courses';
import { Clock, BarChart, Users, Play, ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

const CourseDetail = () => {
  const { courseId } = useParams<{ courseId: string }>();
  const [course, setCourse] = useState<Course | undefined>();
  const [currentLessonIndex, setCurrentLessonIndex] = useState(0);
  
  // Find the course by ID
  useEffect(() => {
    const foundCourse = courses.find(c => c.id === courseId);
    if (foundCourse) {
      setCourse(foundCourse);
      // Find the first incomplete lesson, or use the first lesson
      const firstIncompleteIndex = foundCourse.lessons.findIndex(lesson => !lesson.completed);
      setCurrentLessonIndex(firstIncompleteIndex >= 0 ? firstIncompleteIndex : 0);
    }
  }, [courseId]);
  
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  // Handle case where course is not found
  if (!course) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow flex items-center justify-center pt-20">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Course Not Found</h1>
            <p className="text-muted-foreground mb-6">The course you're looking for doesn't seem to exist.</p>
            <Link to="/courses">
              <Button>
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Courses
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  const currentLesson = course.lessons[currentLessonIndex];
  
  // Calculate progress
  const completedLessons = course.lessons.filter(lesson => lesson.completed).length;
  const progress = Math.round((completedLessons / course.lessons.length) * 100);
  
  // Handle lesson navigation
  const goToNextLesson = () => {
    if (currentLessonIndex < course.lessons.length - 1) {
      setCurrentLessonIndex(currentLessonIndex + 1);
    }
  };
  
  const goToPreviousLesson = () => {
    if (currentLessonIndex > 0) {
      setCurrentLessonIndex(currentLessonIndex - 1);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16">
        {/* Course Header */}
        <div className="bg-secondary/20 py-12 px-6 md:px-10">
          <div className="max-w-7xl mx-auto">
            <Link to="/courses" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-6 transition-colors">
              <ChevronLeft className="h-4 w-4 mr-1" />
              Back to Courses
            </Link>
            
            <div className="flex flex-col md:flex-row gap-8">
              {/* Course image */}
              <div className="md:w-1/3 lg:w-1/4">
                <div className="relative overflow-hidden rounded-xl shadow-md border border-border/40">
                  <img 
                    src={course.thumbnail} 
                    alt={course.title} 
                    className="w-full h-auto aspect-video object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                    <div className="p-4 w-full">
                      <Badge className="mb-2">
                        {course.category}
                      </Badge>
                      <div className="flex items-center justify-between text-white">
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1.5" />
                          <span className="text-sm">{course.duration}</span>
                        </div>
                        <div className="flex items-center">
                          <BarChart className="h-4 w-4 mr-1.5" />
                          <span className="text-sm">{course.level}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Progress (displayed only on mobile) */}
                <div className="md:hidden mt-6 p-4 bg-background border border-border/40 rounded-xl">
                  <h3 className="font-medium mb-2">Your Progress</h3>
                  <ProgressBar progress={progress} />
                  <p className="text-sm text-muted-foreground mt-2">
                    {completedLessons} of {course.lessons.length} lessons completed
                  </p>
                </div>
              </div>
              
              {/* Course info */}
              <div className="md:w-2/3 lg:w-3/4">
                <h1 className="text-2xl md:text-3xl font-bold mb-3">{course.title}</h1>
                
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-medium">
                    {course.instructor.split(' ')[0][0]}{course.instructor.split(' ')[1][0]}
                  </div>
                  <span className="ml-2 text-muted-foreground">{course.instructor}</span>
                </div>
                
                <p className="text-muted-foreground mb-6">{course.description}</p>
                
                {/* Progress (for desktop) */}
                <div className="hidden md:block mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-medium">Your Progress</h3>
                    <span className="text-sm text-muted-foreground">
                      {completedLessons} of {course.lessons.length} lessons completed
                    </span>
                  </div>
                  <ProgressBar progress={progress} />
                </div>
                
                {/* Action buttons */}
                <div className="flex flex-wrap gap-3">
                  <Button className="gap-2">
                    <Play className="h-4 w-4" />
                    Continue Learning
                  </Button>
                  <Button variant="outline">Add to Favorites</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Course Content */}
        <div className="px-6 md:px-10 py-12">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Lesson list */}
              <div className="lg:col-span-1 order-2 lg:order-1">
                <div className="sticky top-24">
                  <h2 className="text-xl font-bold mb-4">Course Content</h2>
                  <div className="text-sm text-muted-foreground mb-6 flex items-center justify-between">
                    <span>{course.lessons.length} Lessons</span>
                    <span>{course.duration} total</span>
                  </div>
                  
                  <div className="space-y-3 max-h-[calc(100vh-250px)] overflow-y-auto pr-2">
                    {course.lessons.map((lesson, index) => (
                      <LessonItem
                        key={lesson.id}
                        lesson={lesson}
                        index={index}
                        isCurrent={index === currentLessonIndex}
                        onClick={() => setCurrentLessonIndex(index)}
                      />
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Lesson content */}
              <div className="lg:col-span-2 order-1 lg:order-2">
                <div className="bg-background border border-border/40 rounded-xl p-6 shadow-sm">
                  <h2 className="text-xl font-bold mb-6">{currentLesson.title}</h2>
                  
                  {/* Video placeholder */}
                  <div className="aspect-video bg-secondary/50 rounded-lg mb-6 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-primary/90 rounded-full flex items-center justify-center mx-auto mb-4 cursor-pointer hover:bg-primary transition-colors">
                        <Play className="h-6 w-6 text-white" />
                      </div>
                      <p className="text-muted-foreground">Click to play video</p>
                    </div>
                  </div>
                  
                  {/* Lesson description */}
                  <div className="mb-8">
                    <h3 className="font-semibold mb-3">About this lesson</h3>
                    <p className="text-muted-foreground">
                      {currentLesson.description || 
                        `This lesson covers essential concepts and practical examples to help you master ${currentLesson.title.toLowerCase()}.`}
                    </p>
                  </div>
                  
                  {/* Navigation buttons */}
                  <div className="flex justify-between pt-4 border-t border-border/40">
                    <Button
                      variant="outline"
                      onClick={goToPreviousLesson}
                      disabled={currentLessonIndex === 0}
                      className={cn(
                        "gap-2",
                        currentLessonIndex === 0 && "opacity-50 cursor-not-allowed"
                      )}
                    >
                      <ChevronLeft className="h-4 w-4" />
                      Previous Lesson
                    </Button>
                    
                    <Button
                      onClick={goToNextLesson}
                      disabled={currentLessonIndex === course.lessons.length - 1}
                      className={cn(
                        "gap-2",
                        currentLessonIndex === course.lessons.length - 1 && "opacity-50 cursor-not-allowed"
                      )}
                    >
                      Next Lesson
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CourseDetail;
