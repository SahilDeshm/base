import { NavLink } from "@remix-run/react";

export default function Navbar() {
  return (
    <nav className="bg-gray-100 border-b border-gray-300 shadow-sm">
      <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
        <h1 className="text-xl font-semibold text-gray-700">📝 NoteApp</h1>
        <div className="flex gap-4">
          <NavLink
            to="/write"
            className={({ isActive }) =>
              `px-4 py-2 rounded-md transition-colors duration-200 ${
                isActive
                  ? "bg-blue-600 text-white"
                  : "text-blue-600 hover:bg-blue-100"
              }`
            }
          >
            Write Note
          </NavLink>
          <NavLink
            to="/stats"
            className={({ isActive }) =>
              `px-4 py-2 rounded-md transition-colors duration-200 ${
                isActive
                  ? "bg-blue-600 text-white"
                  : "text-blue-600 hover:bg-blue-100"
              }`
            }
          >
            Stats
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
