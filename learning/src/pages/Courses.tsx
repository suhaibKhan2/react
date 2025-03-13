import { useState, useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CourseCard from '@/components/ui/CourseCard';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, Filter, X } from 'lucide-react';
import { courses, Course } from '@/data/courses';

const Courses = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [selectedLevel, setSelectedLevel] = useState<string>('');
  const [filteredCourses, setFilteredCourses] = useState<Course[]>(courses);
  
  // Get unique categories and levels for filter options
  const categories = Array.from(new Set(courses.map(course => course.category)));
  const levels = Array.from(new Set(courses.map(course => course.level)));
  
  // Filter courses when search term or filters change
  useEffect(() => {
    let result = courses;
    
    if (searchTerm) {
      result = result.filter(course => 
        course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.instructor.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    if (selectedCategory) {
      result = result.filter(course => course.category === selectedCategory);
    }
    
    if (selectedLevel) {
      result = result.filter(course => course.level === selectedLevel);
    }
    
    setFilteredCourses(result);
  }, [searchTerm, selectedCategory, selectedLevel]);
  
  // Reset all filters
  const resetFilters = () => {
    setSearchTerm('');
    setSelectedCategory('');
    setSelectedLevel('');
  };
  
  // Check if filters are applied
  const hasFilters = searchTerm || selectedCategory || selectedLevel;
  
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16 px-6 md:px-10 bg-secondary/20">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 pt-10">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Explore Our Courses</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Browse our comprehensive collection of courses designed to help you achieve your learning goals.
            </p>
          </div>
          
          {/* Search and Filters */}
          <div className="bg-background border border-border/40 rounded-xl p-6 mb-10 shadow-sm">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-grow">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search courses..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger className="w-full sm:w-[180px]">
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map(category => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                
                <Select value={selectedLevel} onValueChange={setSelectedLevel}>
                  <SelectTrigger className="w-full sm:w-[180px]">
                    <SelectValue placeholder="Level" />
                  </SelectTrigger>
                  <SelectContent>
                    {levels.map(level => (
                      <SelectItem key={level} value={level}>
                        {level}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            {/* Applied filters */}
            {hasFilters && (
              <div className="mt-4 flex items-center">
                <div className="flex items-center gap-2 mr-3">
                  <Filter className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">Filters:</span>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {searchTerm && (
                    <div className="inline-flex items-center px-3 py-1 text-xs rounded-full bg-secondary text-foreground">
                      Search: {searchTerm}
                      <button
                        onClick={() => setSearchTerm('')}
                        className="ml-1.5 text-muted-foreground hover:text-foreground"
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </div>
                  )}
                  
                  {selectedCategory && (
                    <div className="inline-flex items-center px-3 py-1 text-xs rounded-full bg-secondary text-foreground">
                      Category: {selectedCategory}
                      <button
                        onClick={() => setSelectedCategory('')}
                        className="ml-1.5 text-muted-foreground hover:text-foreground"
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </div>
                  )}
                  
                  {selectedLevel && (
                    <div className="inline-flex items-center px-3 py-1 text-xs rounded-full bg-secondary text-foreground">
                      Level: {selectedLevel}
                      <button
                        onClick={() => setSelectedLevel('')}
                        className="ml-1.5 text-muted-foreground hover:text-foreground"
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </div>
                  )}
                  
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-xs h-6 px-2 ml-auto"
                    onClick={resetFilters}
                  >
                    Clear all
                  </Button>
                </div>
              </div>
            )}
          </div>
          
          {/* Courses Grid */}
          {filteredCourses.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
              {filteredCourses.map((course) => (
                <div key={course.id} className="h-full">
                  <CourseCard course={course} />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-background border border-border/40 rounded-xl">
              <p className="text-xl font-medium">No courses match your search criteria</p>
              <p className="text-muted-foreground mt-2">Try adjusting your filters or search term</p>
              <Button 
                variant="outline" 
                className="mt-6" 
                onClick={resetFilters}
              >
                Reset Filters
              </Button>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Courses;
