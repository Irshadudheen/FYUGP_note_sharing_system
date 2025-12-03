import React from 'react';
import useAuthStore from '../store/authstore';
import LandingPage from '../pages/home/home';


const ConditionalLanding = () => {
  const { isAuthenticated, role } = useAuthStore();
    console.log('conditional landing - isAuthenticated:', isAuthenticated, 'role:', role);
  // If not authenticated, show the public landing page
  if (!isAuthenticated) {
    return <LandingPage />;
  }

  // If authenticated, show role-specific layout
  if (role === 'employee') {
    return (
      <EmployeeLayout>
        <JobSearch />
      </EmployeeLayout>
    );
  }

  if (role === 'employer') {
    return (
      <EmployerLayout>
        <div className="p-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Welcome back!</h1>
          <p className="text-gray-600">You are now in the employer dashboard.</p>
        </div>
      </EmployerLayout>
    );
  }

  // Fallback to public landing page
  return <LandingPage />;
};

export default ConditionalLanding;
