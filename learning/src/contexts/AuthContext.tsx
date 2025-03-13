import React, { createContext, useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';

// Define types for user and auth context
type User = {
  id: number;
  email: string;
  username: string;
} | null;

type AuthContextType = {
  user: User;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  signup: (email: string, username: string, password: string) => Promise<void>;
  logout: () => void;
};

// Create the auth context
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Create a provider component
export const AuthProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const [user, setUser] = useState<User>(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    // Check if user is already logged in (from localStorage)
    const storedUser = localStorage.getItem('eduSync_user');
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
        console.error('Failed to parse stored user', error);
        localStorage.removeItem('eduSync_user');
      }
    }
    setIsLoading(false);
  }, []);

  // Mock login function (replace with real API calls in a production app)
  const login = async (email: string, password: string) => {
    try {
      setIsLoading(true);
      // This would be a real API call in production
      // For demo purposes, we'll use a timeout to simulate an API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock user authentication - in a real app, this would be a server call
      if (email === 'user@example.com' && password === 'password') {
        const userData = {
          id: 1,
          email,
          username: 'Demo User',
        };
        setUser(userData);
        localStorage.setItem('eduSync_user', JSON.stringify(userData));
        toast({
          title: "Login successful",
          description: "Welcome back to EduSync!",
        });
        navigate('/dashboard');
        return;
      }
      
      // Get users from local storage
      const users = JSON.parse(localStorage.getItem('eduSync_users') || '[]');
      const foundUser = users.find((u: any) => u.email === email && u.password === password);
      
      if (foundUser) {
        const userData = {
          id: foundUser.id,
          email: foundUser.email,
          username: foundUser.username,
        };
        setUser(userData);
        localStorage.setItem('eduSync_user', JSON.stringify(userData));
        toast({
          title: "Login successful",
          description: "Welcome back to EduSync!",
        });
        navigate('/dashboard');
      } else {
        toast({
          title: "Login failed",
          description: "Invalid email or password",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error('Login error:', error);
      toast({
        title: "Login error",
        description: "An unexpected error occurred",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  // Mock signup function (replace with real API calls in a production app)
  const signup = async (email: string, username: string, password: string) => {
    try {
      setIsLoading(true);
      // This would be a real API call in production
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Get existing users
      const users = JSON.parse(localStorage.getItem('eduSync_users') || '[]');
      
      // Check if user already exists
      if (users.some((u: any) => u.email === email)) {
        toast({
          title: "Signup failed",
          description: "Email already in use",
          variant: "destructive",
        });
        return;
      }
      
      // Create new user
      const newUser = {
        id: users.length + 1,
        email,
        username,
        password, // In a real app, this should be hashed!
      };
      
      // Save to "database" (localStorage)
      users.push(newUser);
      localStorage.setItem('eduSync_users', JSON.stringify(users));
      
      // Log the user in
      const userData = {
        id: newUser.id,
        email: newUser.email,
        username: newUser.username,
      };
      setUser(userData);
      localStorage.setItem('eduSync_user', JSON.stringify(userData));
      
      toast({
        title: "Account created",
        description: "Welcome to EduSync!",
      });
      navigate('/dashboard');
    } catch (error) {
      console.error('Signup error:', error);
      toast({
        title: "Signup error",
        description: "An unexpected error occurred",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('eduSync_user');
    toast({
      title: "Logged out",
      description: "You have been logged out successfully",
    });
    navigate('/');
  };

  return (
    <AuthContext.Provider value={{ 
      user, 
      isAuthenticated: !!user, 
      isLoading, 
      login, 
      signup, 
      logout 
    }}>
      {children}
    </AuthContext.Provider>
  );
};

// Create a hook to use the auth context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
