import React, {useState} from 'react'
const NAV_ITEMS = [
  {label: 'Floors', index: '01'},
  {label: 'Rooms', index: '02'},
  {label: 'Reports', index: '03'},
]

export default function DashboardLayout({children}) {
  const [active, setActive] = useState('Floors')

  return (
    <div className="h-screen flex bg-stone-100 font-sans overflow-hidden">
      {/* ── Sidebar ── */}
      <aside className="w-56 flex-shrink-0 bg-stone-900 flex flex-col">
        {/* Brand */}
        <div className="px-7 pt-8 pb-7 border-b border-stone-700/50">
          <p className="text-xs font-medium tracking-widest text-amber-500/80 uppercase mb-1">
            Admin
          </p>
          <h2 className="text-lg font-semibold text-stone-100 tracking-tight leading-tight">
            Building
          </h2>
        </div>

        {/* Nav */}
        <nav className="flex-1 px-4 py-6 flex flex-col gap-1">
          {NAV_ITEMS.map(({label, index}) => (
            <button
              key={label}
              onClick={() => setActive(label)}
              className={`
                w-full flex items-center gap-3 px-3 py-2.5 rounded-md text-left
                text-sm font-medium tracking-wide transition-all duration-200
                ${
                  active === label
                    ? 'bg-amber-500/15 text-amber-400'
                    : 'text-stone-400 hover:bg-stone-800 hover:text-stone-200'
                }
              `}
            >
              <span className="text-xs font-light tabular-nums opacity-40">
                {index}
              </span>
              {label}
              {active === label && (
                <span className="ml-auto w-1.5 h-1.5 rounded-full bg-amber-400" />
              )}
            </button>
          ))}
        </nav>

        {/* Footer */}
        <div className="px-7 py-5 border-t border-stone-700/50">
          <p className="text-xs text-stone-600 tracking-wider uppercase">
            v2.4.1
          </p>
        </div>
      </aside>

      {/* ── Right Side ── */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="h-16 flex-shrink-0 bg-white border-b border-stone-200 flex items-center justify-between px-8">
          <div className="flex items-center gap-3">
            <div className="w-px h-5 bg-stone-300" />
            <h1 className="text-sm font-semibold text-stone-800 tracking-wide">
              {active} Dashboard
            </h1>
          </div>

          <div className="flex items-center gap-4">
            {/* Notification dot */}
            <div className="relative">
              <div className="w-8 h-8 rounded-lg bg-stone-100 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-stone-400" />
              </div>
              <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-amber-400 rounded-full" />
            </div>

            {/* Divider */}
            <div className="w-px h-5 bg-stone-200" />

            {/* User */}
            <div className="flex items-center gap-3">
              <div className="text-right">
                <p className="text-xs font-semibold text-stone-700 leading-none">
                  Admin User
                </p>
                <p className="text-xs text-stone-400 mt-0.5">Super Admin</p>
              </div>
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center">
                <span className="text-xs font-bold text-white">A</span>
              </div>
            </div>
          </div>
        </header>

        {/* Breadcrumb bar */}
        <div className="h-10 flex-shrink-0 bg-stone-50 border-b border-stone-200 flex items-center px-8 gap-2">
          <span className="text-xs text-stone-400">Building Admin</span>
          <span className="text-xs text-stone-300">/</span>
          <span className="text-xs font-medium text-stone-600">{active}</span>
        </div>

        {/* Content */}
        <main className="flex-1 overflow-auto p-8 bg-stone-100">
          {children ?? (
            <div className="h-full flex flex-col gap-6">
              {/* Stats row */}
              <div className="grid grid-cols-3 gap-4">
                {[
                  {label: 'Total Floors', value: '12'},
                  {label: 'Occupied Rooms', value: '148'},
                  {label: 'Open Reports', value: '5'},
                ].map(({label, value}) => (
                  <div
                    key={label}
                    className="bg-white rounded-xl p-6 border border-stone-200/80 shadow-sm"
                  >
                    <p className="text-xs uppercase tracking-widest text-stone-400 font-medium mb-3">
                      {label}
                    </p>
                    <p className="text-3xl font-semibold text-stone-800 tracking-tight">
                      {value}
                    </p>
                  </div>
                ))}
              </div>

              {/* Main card */}
              <div className="flex-1 bg-white rounded-xl border border-stone-200/80 shadow-sm p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-sm font-semibold text-stone-700 tracking-wide">
                    Recent Activity
                  </h3>
                  <span className="text-xs text-stone-400 bg-stone-100 px-3 py-1 rounded-full">
                    Today
                  </span>
                </div>
                <div className="space-y-3">
                  {[
                    {
                      desc: 'Floor 3 inspection completed',
                      time: '9:41 AM',
                      status: 'Done',
                    },
                    {
                      desc: 'Room 204 maintenance request',
                      time: '10:15 AM',
                      status: 'Pending',
                    },
                    {
                      desc: 'Monthly report generated',
                      time: '11:00 AM',
                      status: 'Done',
                    },
                    {
                      desc: 'Floor 7 access updated',
                      time: '1:30 PM',
                      status: 'Done',
                    },
                  ].map(({desc, time, status}) => (
                    <div
                      key={desc}
                      className="flex items-center justify-between py-3 border-b border-stone-100 last:border-0"
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-2 h-2 rounded-full flex-shrink-0 ${
                            status === 'Done'
                              ? 'bg-emerald-400'
                              : 'bg-amber-400'
                          }`}
                        />
                        <p className="text-sm text-stone-600">{desc}</p>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="text-xs text-stone-400">{time}</span>
                        <span
                          className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                            status === 'Done'
                              ? 'bg-emerald-50 text-emerald-600'
                              : 'bg-amber-50 text-amber-600'
                          }`}
                        >
                          {status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  )
}
