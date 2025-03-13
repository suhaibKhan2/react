import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, BookOpen, User, Search } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { cn } from '@/lib/utils';
import { useAuth } from '@/contexts/AuthContext';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { user, isAuthenticated, logout } = useAuth();

  // Navigation links
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Courses', path: '/courses' },
    ...(isAuthenticated ? [{ name: 'Dashboard', path: '/dashboard' }] : []),
  ];

  // Track scrolling for navbar styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out px-6 py-4 md:px-10',
        isScrolled ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link 
          to="/" 
          className="flex items-center gap-2 text-primary transition-opacity duration-200 hover:opacity-80"
        >
          <BookOpen className="h-6 w-6" />
          <span className="font-bold text-xl">EduSync</span>
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                'text-sm font-medium transition-colors hover:text-primary',
                location.pathname === link.path 
                  ? 'text-primary' 
                  : 'text-foreground/80'
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop action buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <Button variant="ghost" size="icon">
            <Search className="h-5 w-5" />
          </Button>
          
          {isAuthenticated ? (
            <div className="flex items-center gap-4">
              <span className="text-sm font-medium">{user?.username}</span>
              <Button variant="outline" size="sm" onClick={logout}>Log out</Button>
            </div>
          ) : (
            <>
              <Link to="/login">
                <Button variant="outline" size="sm">Log in</Button>
              </Link>
              <Link to="/signup">
                <Button size="sm">Sign up</Button>
              </Link>
            </>
          )}
        </div>

        {/* Mobile menu button */}
        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {/* Mobile menu */}
      <div 
        className={cn(
          'md:hidden absolute left-0 right-0 top-full p-6 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-md transition-all duration-300 ease-in-out',
          isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
        )}
      >
        <nav className="flex flex-col space-y-5 mb-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                'text-base font-medium transition-colors hover:text-primary',
                location.pathname === link.path 
                  ? 'text-primary' 
                  : 'text-foreground/80'
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>
        <div className="flex flex-col space-y-3">
          {isAuthenticated ? (
            <>
              <div className="flex items-center gap-2 mb-2">
                <User className="h-5 w-5 text-primary" />
                <span className="font-medium">{user?.username}</span>
              </div>
              <Button onClick={logout} className="w-full">Log out</Button>
            </>
          ) : (
            <>
              <Link to="/login">
                <Button variant="outline" className="w-full justify-start">
                  <User className="mr-2 h-4 w-4" />
                  Log in
                </Button>
              </Link>
              <Link to="/signup">
                <Button className="w-full">Sign up</Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
