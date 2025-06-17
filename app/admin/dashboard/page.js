"use client";
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { FiPackage, FiHome, FiLogOut } from 'react-icons/fi';

export default function AdminDashboard() {
  const router = useRouter();

  useEffect(() => {
    // Check if cookie exists
    const hasToken = document.cookie.includes('admin-token=authenticated');
    if (!hasToken) {
      router.replace('/admin');
    }
  }, [router]);

  const handleLogout = () => {
    document.cookie = 'admin-token=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT';
    router.replace('/admin');
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="fixed h-full w-64 bg-white shadow-lg">
        <div className="p-6">
          <h2 className="text-2xl font-bold text-purple-600">Admin Panel</h2>
        </div>
        <nav className="mt-6">
          <div
            onClick={() => router.push('/admin/dashboard')}
            className="flex items-center px-6 py-4 text-gray-700 hover:bg-purple-50 cursor-pointer"
          >
            <FiHome className="h-5 w-5 mr-3" />
            <span>Dashboard</span>
          </div>
          <div
            onClick={() => router.push('/admin/orders')}
            className="flex items-center px-6 py-4 text-gray-700 hover:bg-purple-50 cursor-pointer"
          >
            <FiPackage className="h-5 w-5 mr-3" />
            <span>Orders</span>
          </div>
        </nav>
      </div>

      {/* Main Content */}
      <div className="ml-64 p-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
            >
              <FiLogOut className="h-5 w-5" />
              Logout
            </button>
          </div>

          {/* Dashboard Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
              <button
                onClick={() => router.push('/admin/orders')}
                className="w-full bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors flex items-center justify-center gap-2"
              >
                <FiPackage className="h-5 w-5" />
                View Orders
              </button>
            </div>
            
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-semibold mb-4">Overview</h2>
              <p className="text-gray-600">Welcome to your admin dashboard!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}