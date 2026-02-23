import React from 'react'

export default function DashboardLayout({children}) {
  return (
    <div className="h-screen flex bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 text-white flex flex-col">
        <div className="h-16 flex items-center justify-center font-bold text-lg border-b border-gray-700">
          Building Admin
        </div>

        <nav className="flex-1 p-4 space-y-3">
          <div className="hover:bg-gray-700 p-2 rounded cursor-pointer">
            Floors
          </div>
          <div className="hover:bg-gray-700 p-2 rounded cursor-pointer">
            Rooms
          </div>
          <div className="hover:bg-gray-700 p-2 rounded cursor-pointer">
            Reports
          </div>
        </nav>
      </aside>

      {/* Right Side */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Navbar */}
        <header className="h-16 bg-white shadow flex items-center justify-between px-6">
          <h1 className="text-xl font-semibold">Floor Dashboard</h1>
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-600">Admin User</span>
            <div className="w-8 h-8 bg-gray-300 rounded-full" />
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 overflow-hidden">{children}</main>
      </div>
    </div>
  )
}
