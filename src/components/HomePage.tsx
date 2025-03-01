import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Thermometer,
  Droplets,
  Sun,
  Wind,
  Leaf,
  ChevronRight,
  ChevronLeft,
  BarChart3,
  Settings,
  Home,
  PieChart,
  Users,
  Search,
  Bell,
  UserCircle,
  Tractor,
  Sprout,
  DollarSign,
  LineChart,
  LayoutDashboard,
  ArrowRight,
  ArrowUpRight,
  TrendingUp,
  Calendar
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function HomePage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [temperature, setTemperature] = useState(24);
  const [humidity, setHumidity] = useState(65);
  const [sunlight, setSunlight] = useState(80);
  const [soilMoisture, setSoilMoisture] = useState(58);
  const [windSpeed, setWindSpeed] = useState(12);
  const [activeTab, setActiveTab] = useState("overview");

  // Simulate changing environmental data
  useEffect(() => {
    const interval = setInterval(() => {
      setTemperature(prev => prev + (Math.random() * 2 - 1));
      setHumidity(prev => Math.min(100, Math.max(0, prev + (Math.random() * 4 - 2))));
      setSunlight(prev => Math.min(100, Math.max(0, prev + (Math.random() * 5 - 2.5))));
      setSoilMoisture(prev => Math.min(100, Math.max(0, prev + (Math.random() * 3 - 1.5))));
      setWindSpeed(prev => Math.max(0, prev + (Math.random() * 2 - 1)));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col items-center text-white overflow-hidden">
      {/* Background Video with Overlay */}
      <div className="absolute top-0 left-0 w-full h-full z-[-1]">
        <div className="absolute top-0 left-0 w-full h-full bg-black/40 z-[1]"></div>
        <video
          autoPlay
          loop
          muted
          className="w-full h-full object-cover"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-agricultural-fields-9192-large.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Sidebar Toggle Button */}
      <motion.button
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5 }}
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="fixed top-1/2 left-0 z-50 bg-green-600 p-2 rounded-r-lg transform -translate-y-1/2"
      >
        {sidebarOpen ? <ChevronLeft /> : <ChevronRight />}
      </motion.button>

      {/* Modern Tablet-Style Sidebar */}
      <AnimatePresence>
        {sidebarOpen && (
          <motion.div
            initial={{ x: -400 }}
            animate={{ x: 0 }}
            exit={{ x: -400 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed left-0 top-0 h-full w-[360px] bg-white text-black z-40 rounded-r-3xl overflow-hidden shadow-2xl"
          >
            {/* Sidebar Header */}
            <div className="bg-green-50 p-5 border-b border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="bg-green-600 text-white p-1.5 rounded-md">
                    <Leaf size={18} />
                  </div>
                  <span className="font-bold text-green-800 uppercase text-sm tracking-wider">FARMVEST</span>
                </div>
                <div className="flex items-center gap-3">
                  <Search size={18} className="text-gray-500" />
                  <Bell size={18} className="text-gray-500" />
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="bg-green-100 rounded-full p-1">
                  <UserCircle size={36} className="text-green-700" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Hi, Flora 👋</h3>
                  <p className="text-xs text-gray-500">Welcome back to your farm dashboard</p>
                </div>
              </div>
            </div>

            {/* Sidebar Navigation */}
            <div className="p-4">
              <div className="space-y-1">
                {[
                  { name: "Home", icon: <Home size={18} />, id: "home" },
                  { name: "Overview", icon: <LayoutDashboard size={18} />, id: "overview" },
                  { name: "Investments", icon: <DollarSign size={18} />, id: "investments" },
                  { name: "Analytics", icon: <BarChart3 size={18} />, id: "analytics" },
                  { name: "Portfolio", icon: <PieChart size={18} />, id: "portfolio" },
                  { name: "Timelines", icon: <LineChart size={18} />, id: "timelines" },
                  { name: "Learning", icon: <Sprout size={18} />, id: "learning" },
                  { name: "Settings", icon: <Settings size={18} />, id: "settings" }
                ].map(item => (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`flex items-center gap-3 w-full p-3 rounded-lg text-left transition-colors ${
                      activeTab === item.id
                        ? "bg-green-100 text-green-800"
                        : "text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    <span className={activeTab === item.id ? "text-green-600" : "text-gray-500"}>
                      {item.icon}
                    </span>
                    <span className="text-sm font-medium">{item.name}</span>
                    {item.id === "portfolio" && (
                      <span className="ml-auto bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                        1
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Dashboard Content */}
            <div className="p-5 mt-2 overflow-y-auto" style={{ maxHeight: "calc(100vh - 200px)" }}>
              {activeTab === "overview" && (
                <div className="space-y-5">
                  <div>
                    <h2 className="text-xl font-bold text-gray-800">Overview</h2>
                    <div className="mt-4 bg-green-50 p-4 rounded-xl">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Total Investment</span>
                        <span className="text-xs bg-green-200 text-green-800 px-2 py-0.5 rounded-full">+4.5%</span>
                      </div>
                      <div className="text-2xl font-bold text-gray-800 mt-1">$3,389.61</div>

                      <div className="grid grid-cols-4 gap-2 mt-6">
                        {[
                          { name: "Wheat", icon: "🌾" },
                          { name: "Soy", icon: "🌱" },
                          { name: "Maize", icon: "🌽" },
                          { name: "Rice", icon: "🍚" }
                        ].map(crop => (
                          <div key={crop.name} className="flex flex-col items-center">
                            <div className="text-xl mb-1">{crop.icon}</div>
                            <div className="text-xs text-gray-600">{crop.name}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between items-center">
                      <h3 className="font-semibold text-gray-800">Funded Investments</h3>
                      <button className="text-xs bg-green-600 text-white px-3 py-1 rounded-full">
                        + Fund
                      </button>
                    </div>

                    <div className="mt-3 space-y-3">
                      {[
                        { name: "Rosemount Farm", type: "Wheat", amount: "$5,000.00", status: "Completed" },
                        { name: "Stone Creek Farm", type: "Fruits", amount: "$2,750.00", status: "Completed" },
                        { name: "Oak River Farm", type: "Organic", amount: "$3,800.00", status: "Pending" }
                      ].map((farm, index) => (
                        <div key={index} className="flex items-center justify-between p-2 border-b border-gray-100">
                          <div className="flex items-center gap-3">
                            <span className="text-gray-500">{index + 1}</span>
                            <div>
                              <div className="text-sm font-medium text-gray-800">{farm.name}</div>
                              <div className="text-xs text-gray-500">Crop type: {farm.type}</div>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-sm font-medium text-gray-800">{farm.amount}</div>
                            <div className={`text-xs ${farm.status === "Completed" ? "text-green-600" : "text-amber-600"}`}>
                              {farm.status}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "learning" && (
                <div className="space-y-4">
                  <h2 className="text-xl font-bold text-gray-800">Learning Center</h2>
                  <div className="bg-gradient-to-r from-green-400 to-blue-500 p-4 rounded-xl text-white">
                    <h3 className="font-bold">Explore farming basics</h3>
                    <p className="text-sm mt-1 text-white/80">Learn about sustainable farming practices</p>
                    <button className="mt-3 bg-white text-green-600 text-xs font-medium px-3 py-1 rounded-full">
                      Learn More
                    </button>
                  </div>
                </div>
              )}

              {activeTab === "analytics" && (
                <div className="space-y-4">
                  <h2 className="text-xl font-bold text-gray-800">Farm Analytics</h2>

                  <div className="space-y-3">
                    <div className="bg-white p-3 rounded-lg shadow-sm">
                      <div className="flex justify-between items-center mb-2">
                        <div className="flex items-center gap-2">
                          <Thermometer className="text-red-400" size={16} />
                          <span className="text-sm text-gray-700">Temperature</span>
                        </div>
                        <span className="text-sm font-medium">{temperature.toFixed(1)}°C</span>
                      </div>
                      <Progress value={temperature * 2} className="h-1.5" />
                    </div>

                    <div className="bg-white p-3 rounded-lg shadow-sm">
                      <div className="flex justify-between items-center mb-2">
                        <div className="flex items-center gap-2">
                          <Droplets className="text-blue-400" size={16} />
                          <span className="text-sm text-gray-700">Humidity</span>
                        </div>
                        <span className="text-sm font-medium">{humidity.toFixed(1)}%</span>
                      </div>
                      <Progress value={humidity} className="h-1.5" />
                    </div>

                    <div className="bg-white p-3 rounded-lg shadow-sm">
                      <div className="flex justify-between items-center mb-2">
                        <div className="flex items-center gap-2">
                          <Sun className="text-yellow-400" size={16} />
                          <span className="text-sm text-gray-700">Sunlight</span>
                        </div>
                        <span className="text-sm font-medium">{sunlight.toFixed(1)}%</span>
                      </div>
                      <Progress value={sunlight} className="h-1.5" />
                    </div>

                    <div className="bg-white p-3 rounded-lg shadow-sm">
                      <div className="flex justify-between items-center mb-2">
                        <div className="flex items-center gap-2">
                          <Leaf className="text-green-400" size={16} />
                          <span className="text-sm text-gray-700">Soil Moisture</span>
                        </div>
                        <span className="text-sm font-medium">{soilMoisture.toFixed(1)}%</span>
                      </div>
                      <Progress value={soilMoisture} className="h-1.5" />
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "investments" && (
                <div className="space-y-4">
                  <h2 className="text-xl font-bold text-gray-800">Investment Opportunities</h2>

                  <div className="space-y-3">
                    {[
                      {
                        name: "Greenfield Organic Farm",
                        location: "California",
                        return: "16.5%",
                        amount: "$2,500",
                        image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFybXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                      },
                      {
                        name: "Sunrise Valley Crops",
                        location: "Iowa",
                        return: "14.2%",
                        amount: "$5,000",
                        image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFybXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                      },
                      {
                        name: "Blue River Dairy",
                        location: "Wisconsin",
                        return: "15.8%",
                        amount: "$3,750",
                        image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFybXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                      }
                    ].map((opportunity, index) => (
                      <div key={index} className="bg-white rounded-lg overflow-hidden shadow-sm">
                        <div className="h-24 bg-gray-200 relative">
                          <img
                            src={opportunity.image}
                            alt={opportunity.name}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute top-2 right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                            {opportunity.return} ROI
                          </div>
                        </div>
                        <div className="p-3">
                          <h3 className="font-medium text-gray-800">{opportunity.name}</h3>
                          <p className="text-xs text-gray-500">{opportunity.location}</p>
                          <div className="flex justify-between items-center mt-2">
                            <span className="text-sm font-medium">{opportunity.amount}</span>
                            <button className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded flex items-center gap-1">
                              Invest <ArrowRight size={12} />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content - Animated to shrink when sidebar is open */}
      <motion.div
        animate={{
          marginLeft: sidebarOpen ? "360px" : "0px",
          width: sidebarOpen ? "calc(100% - 360px)" : "100%"
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="min-h-screen w-full flex flex-col items-center"
      >
        {/* Navbar */}
        <motion.nav
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="w-full flex justify-between p-6 max-w-6xl z-10"
        >
          <h1 className="text-2xl font-bold flex items-center">
            <Leaf className="mr-2 text-green-500" /> Farmvest
          </h1>
          <div className="space-x-4 hidden md:block">
            <a href="#" className="hover:underline hover:text-green-400 transition-colors">Why Farmvest?</a>
            <a href="#" className="hover:underline hover:text-green-400 transition-colors">Investment</a>
            <a href="#" className="hover:underline hover:text-green-400 transition-colors">Products</a>
            <a href="#" className="hover:underline hover:text-green-400 transition-colors">Company</a>
            <a href="#" className="hover:underline hover:text-green-400 transition-colors">Contact</a>
          </div>
        </motion.nav>

        {/* Conditional Content - Show different content based on sidebar state */}
        <AnimatePresence mode="wait">
          {!sidebarOpen ? (
            /* Landing Page Content when sidebar is closed */
            <motion.div
              key="landing"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="mt-20 max-w-4xl z-10 px-6"
            >
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-5xl font-bold"
              >
                Investing in Farmvest.
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="mt-4 text-lg"
              >
                Diversify with an asset with an average 15.0% annual return.
              </motion.p>

              {/* Email Input Form */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9, type: "spring" }}
                className="mt-6 flex items-center bg-white p-2 rounded-lg shadow-lg max-w-md mx-auto"
              >
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-grow px-4 py-2 text-black outline-none"
                />
                <Button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg">
                  Get Started →
                </Button>
              </motion.div>

              {/* Stats Cards */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1, duration: 0.8 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-black/30 backdrop-blur-sm p-6 rounded-xl"
                >
                  <h3 className="text-2xl font-bold">15%</h3>
                  <p className="text-sm text-gray-300">Average Annual Return</p>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-black/30 backdrop-blur-sm p-6 rounded-xl"
                >
                  <h3 className="text-2xl font-bold">$50M+</h3>
                  <p className="text-sm text-gray-300">Assets Under Management</p>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-black/30 backdrop-blur-sm p-6 rounded-xl"
                >
                  <h3 className="text-2xl font-bold">5,000+</h3>
                  <p className="text-sm text-gray-300">Satisfied Investors</p>
                </motion.div>
              </motion.div>
            </motion.div>
          ) : (
            /* Dashboard Content when sidebar is open */
            <motion.div
              key="dashboard"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="w-full max-w-6xl mt-10 px-8 z-10"
            >
              <div className="bg-black/40 backdrop-blur-md rounded-2xl p-6 shadow-xl">
                <h2 className="text-2xl font-bold mb-4">Farm Dashboard</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Market Overview */}
                  <div className="bg-black/30 rounded-xl p-5">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="font-semibold">Market Overview</h3>
                      <span className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded-full flex items-center">
                        <TrendingUp size={12} className="mr-1" /> +2.4%
                      </span>
                    </div>

                    <div className="space-y-3">
                      {[
                        { name: "Wheat", price: "$7.24", change: "+0.32%" },
                        { name: "Corn", price: "$5.86", change: "-0.14%" },
                        { name: "Soybeans", price: "$13.92", change: "+1.25%" }
                      ].map((crop, index) => (
                        <div key={index} className="flex justify-between items-center p-2 border-b border-white/10">
                          <span>{crop.name}</span>
                          <div className="text-right">
                            <div className="font-medium">{crop.price}</div>
                            <div className={crop.change.startsWith("+") ? "text-green-400 text-xs" : "text-red-400 text-xs"}>
                              {crop.change}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Weather Forecast */}
                  <div className="bg-black/30 rounded-xl p-5">
                    <h3 className="font-semibold mb-4">Weather Forecast</h3>

                    <div className="flex justify-between">
                      {[
                        { day: "Today", icon: <Sun size={24} />, temp: "24°C" },
                        { day: "Tue", icon: <Sun size={24} />, temp: "26°C" },
                        { day: "Wed", icon: <Cloud size={24} />, temp: "22°C" },
                        { day: "Thu", icon: <CloudRain size={24} />, temp: "19°C" },
                        { day: "Fri", icon: <Sun size={24} />, temp: "25°C" }
                      ].map((day, index) => (
                        <div key={index} className="flex flex-col items-center">
                          <span className="text-sm">{day.day}</span>
                          <div className="my-2 text-yellow-300">{day.icon}</div>
                          <span className="font-medium">{day.temp}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Farm Metrics */}
                  <div className="bg-black/30 rounded-xl p-5">
                    <h3 className="font-semibold mb-4">Farm Metrics</h3>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <div className="flex justify-between items-center mb-1">
                          <div className="flex items-center">
                            <Thermometer size={14} className="text-red-400 mr-1" />
                            <span className="text-sm">Temperature</span>
                          </div>
                          <span className="text-sm">{temperature.toFixed(1)}°C</span>
                        </div>
                        <Progress value={temperature * 2} className="h-1.5" />
                      </div>

                      <div>
                        <div className="flex justify-between items-center mb-1">
                          <div className="flex items-center">
                            <Droplets size={14} className="text-blue-400 mr-1" />
                            <span className="text-sm">Humidity</span>
                          </div>
                          <span className="text-sm">{humidity.toFixed(1)}%</span>
                        </div>
                        <Progress value={humidity} className="h-1.5" />
                      </div>

                      <div>
                        <div className="flex justify-between items-center mb-1">
                          <div className="flex items-center">
                            <Sun size={14} className="text-yellow-400 mr-1" />
                            <span className="text-sm">Sunlight</span>
                          </div>
                          <span className="text-sm">{sunlight.toFixed(1)}%</span>
                        </div>
                        <Progress value={sunlight} className="h-1.5" />
                      </div>

                      <div>
                        <div className="flex justify-between items-center mb-1">
                          <div className="flex items-center">
                            <Leaf size={14} className="text-green-400 mr-1" />
                            <span className="text-sm">Soil Moisture</span>
                          </div>
                          <span className="text-sm">{soilMoisture.toFixed(1)}%</span>
                        </div>
                        <Progress value={soilMoisture} className="h-1.5" />
                      </div>
                    </div>
                  </div>

                  {/* Upcoming Tasks */}
                  <div className="bg-black/30 rounded-xl p-5">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="font-semibold">Upcoming Tasks</h3>
                      <button className="text-xs bg-white/10 hover:bg-white/20 px-2 py-1 rounded-lg flex items-center">
                        <Calendar size={14} className="mr-1" /> View All
                      </button>
                    </div>

                    <div className="space-y-3">
                      {[
                        { task: "Irrigation System Maintenance", date: "Today", priority: "High" },
                        { task: "Harvest Winter Wheat", date: "Tomorrow", priority: "Medium" },
                        { task: "Soil Testing - North Field", date: "May 15", priority: "Low" }
                      ].map((task, index) => (
                        <div key={index} className="flex items-center p-2 border-b border-white/10">
                          <div className={`w-2 h-2 rounded-full mr-3 ${
                            task.priority === "High" ? "bg-red-500" :
                            task.priority === "Medium" ? "bg-yellow-500" : "bg-blue-500"
                          }`}></div>
                          <div className="flex-grow">
                            <div className="text-sm font-medium">{task.task}</div>
                            <div className="text-xs text-gray-400">{task.date}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

// Mock components for the weather forecast section
const Cloud = ({ size }: { size: number }) => {
  return <div className="text-gray-300"><Sun size={size} /></div>;
};

const CloudRain = ({ size }: { size: number }) => {
  return <div className="text-blue-300"><Droplets size={size} /></div>;
};
