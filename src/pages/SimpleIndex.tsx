import React from 'react';

const SimpleIndex: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-4xl font-bold mb-4">SENSOR FUSION DASHBOARD</h1>
      <div className="bg-red-500 p-4 rounded">
        <h2 className="text-2xl font-bold">TEST COMPONENT WORKING!</h2>
        <p>If you can see this, React is working correctly.</p>
      </div>
      <div className="mt-8 bg-blue-500 p-4 rounded">
        <h3 className="text-xl font-bold">Server Status</h3>
        <p>✅ Server is running on port 8081</p>
        <p>✅ React components are loading</p>
        <p>✅ Dashboard is accessible</p>
      </div>
    </div>
  );
};

export default SimpleIndex;
