import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { Shield, LogOut, LogIn, UserPlus } from "lucide-react";

const Navbar: React.FC = () => {
  const { user, logout } = useAuth(); // Dynamically fetch user and publicKey from context
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/signin");
  };

  return (
    <nav className="bg-indigo-600 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center space-x-2">
            <Shield className="h-8 w-8" />
            <span className="text-xl font-bold">
              Secure Encrypted File Transfer
            </span>
          </Link>
          <div className="flex items-center space-x-4">
            {user ? (
              <>
                {user.publicKey && (
                  <div className="flex items-center space-x-2">
                    <span className="text-sm">Your Public Key:</span>
                    <span className="hidden md:inline text-sm bg-indigo-700 px-2 py-1 rounded-md">
                      {user.publicKey}
                    </span>
                  </div>
                )}
                <span className="hidden md:inline">Welcome, {user.name}</span>
                <button
                  onClick={handleLogout}
                  className="flex items-center space-x-1 bg-indigo-700 hover:bg-indigo-800 px-4 py-2 rounded-md transition-colors"
                >
                  <LogOut className="h-5 w-5" />
                  <span>Logout</span>
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/signin"
                  className="flex items-center space-x-1 hover:text-indigo-200 transition-colors"
                >
                  <LogIn className="h-5 w-5" />
                  <span>Sign In</span>
                </Link>
                <Link
                  to="/signup"
                  className="flex items-center space-x-1 bg-indigo-700 hover:bg-indigo-800 px-4 py-2 rounded-md transition-colors"
                >
                  <UserPlus className="h-5 w-5" />
                  <span>Sign Up</span>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
