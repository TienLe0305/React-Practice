import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { BarChart2, Shield } from "lucide-react";

const NavigationPage = () => {
  const [selectedMenu, setSelectedMenu] = useState("");

  const MenuLink = ({ to, label, icon }) => (
    <Link
      to={to}
      className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
    >
      {icon}
      <span className="ml-3">{label}</span>
    </Link>
  );

  const Feature = () => <div>Features Content</div>;
  const Marketplace = () => <div>Marketplace Content</div>;
  const Analytics = () => <div>Analytics Content</div>;
  const Security = () => <div>Security Content</div>;

  return (
    <Router>
      <div className="flex h-screen">
        {/* Left Sidebar */}
        <div className="flex flex-col w-64 h-full px-4 py-8 bg-white border-r dark:bg-gray-800 dark:border-gray-600">
          <h2 className="text-3xl font-semibold text-gray-800 dark:text-white">
            Logo
          </h2>
          <div className="flex flex-col justify-between flex-1 mt-6">
            <nav>
              {/* Menu Links */}
              <MenuLink
                to="/analytics"
                label="Analytics"
                icon={<BarChart2 className="w-5 h-5" />}
                onClick={() => setSelectedMenu("analytics")}
              />
              <MenuLink
                to="/security"
                label="Security"
                icon={<Shield className="w-5 h-5" />}
                onClick={() => setSelectedMenu("security")}
              />
            </nav>
          </div>
        </div>
        {/* Content */}
        <div className="flex flex-col flex-1">
          {/* Header */}
          <div className="bg-gray-800">
            <div className="px-4 py-4 mx-auto max-w-screen-xl">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <Link
                    to="/features"
                    className="text-xl font-semibold text-white"
                  >
                    Features
                  </Link>
                  <Link
                    to="/marketplace"
                    className="ml-4 text-xl font-semibold text-white"
                  >
                    Marketplace
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* Main Content */}
          <div className="flex-1 p-10 text-2xl">
            <Routes>
              <Route path="/features" element={<Feature />} />
              <Route path="/marketplace" element={<Marketplace />} />
              <Route path="/analytics" element={<Analytics />} />
              <Route path="/security" element={<Security />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default NavigationPage;
