import React from 'react';
import { Bluetooth, Zap, Home, Smartphone, Wifi, Settings } from 'lucide-react';

export const SystemOverview = () => {
  const features = [
    {
      icon: Bluetooth,
      title: 'Bluetooth Connectivity',
      description: 'Wireless control via Bluetooth Low Energy for reliable communication',
      color: 'bg-blue-500'
    },
    {
      icon: Zap,
      title: 'Relay Control',
      description: '4-channel relay module to switch AC/DC appliances safely',
      color: 'bg-orange-500'
    },
    {
      icon: Home,
      title: 'Home Automation',
      description: 'Complete home automation system for lights, fans, and appliances',
      color: 'bg-green-500'
    },
    {
      icon: Smartphone,
      title: 'Mobile App',
      description: 'Easy-to-use mobile application for remote device control',
      color: 'bg-purple-500'
    },
    {
      icon: Wifi,
      title: 'Real-time Control',
      description: 'Instant response and status feedback for all connected devices',
      color: 'bg-teal-500'
    },
    {
      icon: Settings,
      title: 'Customizable',
      description: 'Expandable system with support for additional devices and rooms',
      color: 'bg-red-500'
    }
  ];

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">System Overview</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => {
          const IconComponent = feature.icon;
          return (
            <div
              key={index}
              className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow"
            >
              <div className={`${feature.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
                <IconComponent size={24} className="text-white" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </div>
          );
        })}
      </div>

      {/* Technical Specifications */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gray-50 rounded-lg p-6">
          <h3 className="font-semibold text-gray-800 mb-4">Technical Specifications</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li className="flex justify-between"><span>Microcontroller:</span><span>ESP32</span></li>
            <li className="flex justify-between"><span>Connectivity:</span><span>Bluetooth 4.2</span></li>
            <li className="flex justify-between"><span>Relay Module:</span><span>4-Channel 5V</span></li>
            <li className="flex justify-between"><span>Power Supply:</span><span>12V DC</span></li>
            <li className="flex justify-between"><span>Max Load:</span><span>10A per channel</span></li>
            <li className="flex justify-between"><span>Range:</span><span>Up to 10 meters</span></li>
          </ul>
        </div>

        <div className="bg-gray-50 rounded-lg p-6">
          <h3 className="font-semibold text-gray-800 mb-4">Safety Features</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li className="flex items-center"><span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>Optical isolation</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>Overcurrent protection</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>Short circuit protection</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>Low voltage operation</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>LED status indicators</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>Secure Bluetooth pairing</li>
          </ul>
        </div>
      </div>
    </div>
  );
};