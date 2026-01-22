import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // 1. Import Link for navigation
import logo from "../assets/cyber-logo.png";

// Simple SVG icons
const UserIcon = () => (
  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
  </svg>
);

const BuildingIcon = () => (
  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
  </svg>
);

// 2. Remove the onSwitchToLogin prop from the component definition
const RequestAccessPage = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [organization, setOrganization] = useState('');
  const [reason, setReason] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(''); // For error messages
  const [successMessage, setSuccessMessage] = useState(''); // For success messages

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); // Clear previous errors
    setSuccessMessage(''); // Clear previous success messages

    // --- Manual Validation ---
    if (!fullName.trim() || !email.trim() || !organization.trim() || !reason.trim()) {
      setError('All fields are required. Please complete the form to proceed.');
      return; // Stop the submission
    }

    setIsLoading(true);

    // --- Replace this with your actual API call ---
    console.log('Submitting request:', { fullName, email, organization, reason });

    // Simulate an API call
    setTimeout(() => {
      // In a real app, your API would handle validation
      // For this example, we'll assume it's always successful if validation passes
      setSuccessMessage('Your request has been submitted successfully. We will review it and get back to you.');
      // Clear form on success
      setFullName('');
      setEmail('');
      setOrganization('');
      setReason('');
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900  py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 md:p-10 p-4  bg-gray-800 rounded-2xl shadow-2xl shadow-red-900/50 border border-gray-700">
        <div className="text-center">
          <img
            className="mx-auto h-16 w-auto"
            src={logo}
            alt="Cyber War Lab Logo"
          />
          <h2 className="mt-6 text-3xl font-bold text-red-500">
            Request Access
          </h2>
          <p className="mt-2 text-sm text-gray-400">
            Fill out the form below to apply for access to the lab.
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            {/* Full Name Input */}
            <div>
              <label htmlFor="full-name" className="sr-only">Full Name</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <UserIcon />
                </div>
                <input
                  id="full-name"
                  name="fullName"
                  type="text"
                  className="appearance-none relative block w-full pl-10 pr-3 py-3 border border-gray-600 placeholder-gray-500 text-white bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent sm:text-sm"
                  placeholder="Full Name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
              </div>
            </div>

            {/* Email Input */}
            <div>
              <label htmlFor="email-address" className="sr-only">Email address</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <UserIcon />
                </div>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="appearance-none relative block w-full pl-10 pr-3 py-3 border border-gray-600 placeholder-gray-500 text-white bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent sm:text-sm"
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            {/* Organization Input */}
            <div>
              <label htmlFor="organization" className="sr-only">Organization</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <BuildingIcon />
                </div>
                <input
                  id="organization"
                  name="organization"
                  type="text"
                  className="appearance-none relative block w-full pl-10 pr-3 py-3 border border-gray-600 placeholder-gray-500 text-white bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent sm:text-sm"
                  placeholder="Organization / Company"
                  value={organization}
                  onChange={(e) => setOrganization(e.target.value)}
                />
              </div>
            </div>

            {/* Reason Textarea */}
            <div>
              <label htmlFor="reason" className="sr-only">Reason for Access</label>
              <textarea
                id="reason"
                name="reason"
                rows={4}
                className="appearance-none relative block w-full px-3 py-3 border border-gray-600 placeholder-gray-500 text-white bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent sm:text-sm"
                placeholder="Reason for requesting access..."
                value={reason}
                onChange={(e) => setReason(e.target.value)}
              />
            </div>
          </div>

          {/* Custom Error Message Display */}
          {error && (
            <div className="text-red-400 text-sm text-center bg-red-900/20 border border-red-800 rounded-md p-2">
              {error}
            </div>
          )}

          {/* Custom Success Message Display */}
          {successMessage && (
            <div className="text-green-400 text-sm text-center bg-green-900/20 border border-green-800 rounded-md p-2">
              {successMessage}
            </div>
          )}

          <div>
            <button
              type="submit"
              disabled={isLoading}
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-red-500 disabled:opacity-50 disabled:cursor-not-allowed transition duration-150 ease-in-out"
            >
              {isLoading ? (
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              ) : null}
              {isLoading ? 'SUBMITTING...' : 'SUBMIT REQUEST'}
            </button>
          </div>
          
          {/* 3. Use the Link component to route to /login */}
          <div className="text-center text-sm text-gray-400">
            Already have an account?{' '}
            <Link to="/login" className="font-medium text-red-500 hover:text-red-400">
              Sign In
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RequestAccessPage;