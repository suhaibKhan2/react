import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const Dashboard = () => {
  const { isAuthenticated, user } = useAuth();
  const navigate = useNavigate();

  // Redirect if not authenticated
  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [isAuthenticated, navigate]);

  if (!isAuthenticated) {
    return null; // Don't render anything while redirecting
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 px-6 md:px-10">
        <div className="max-w-7xl mx-auto py-10">
          <h1 className="text-3xl font-bold mb-6">Welcome, {user?.username}!</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Dashboard content here */}
            <div className="col-span-2 space-y-6">
              <div className="bg-background rounded-xl border border-border p-6">
                <h2 className="text-xl font-semibold mb-4">Your Learning Progress</h2>
                <p className="text-muted-foreground">You don't have any active courses yet.</p>
                {/* Dashboard content will go here */}
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-background rounded-xl border border-border p-6">
                <h2 className="text-xl font-semibold mb-4">Account Info</h2>
                <div className="space-y-2">
                  <p><span className="font-medium">Username:</span> {user?.username}</p>
                  <p><span className="font-medium">Email:</span> {user?.email}</p>
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

export default Dashboard;
