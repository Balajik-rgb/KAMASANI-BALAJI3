import React from 'react';
import { Cpu, Zap, Lightbulb, Wind, Tv, Smartphone } from 'lucide-react';

export const CircuitDiagram = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Circuit Diagram</h2>
      <div className="relative bg-gray-50 rounded-lg p-8 min-h-96">
        
        {/* Microcontroller */}
        <div className="absolute top-8 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white p-4 rounded-lg shadow-lg">
          <div className="flex items-center space-x-2">
            <Cpu size={24} />
            <span className="font-semibold">ESP32</span>
          </div>
          <div className="text-xs mt-1">Bluetooth Module</div>
        </div>

        {/* Bluetooth Connection */}
        <div className="absolute top-12 right-8 bg-green-600 text-white p-3 rounded-lg shadow-lg">
          <div className="flex items-center space-x-2">
            <Smartphone size={20} />
            <span className="text-sm">Mobile App</span>
          </div>
        </div>

        {/* Connection Line */}
        <div className="absolute top-16 left-3/4 w-20 h-0.5 bg-green-400"></div>

        {/* Relay Module */}
        <div className="absolute top-32 left-1/2 transform -translate-x-1/2 bg-orange-600 text-white p-3 rounded-lg shadow-lg">
          <div className="flex items-center space-x-2">
            <Zap size={20} />
            <span className="text-sm">4-Channel Relay</span>
          </div>
        </div>

        {/* Devices */}
        <div className="absolute bottom-8 left-8 bg-yellow-500 text-white p-3 rounded-lg shadow-lg">
          <div className="flex items-center space-x-2">
            <Lightbulb size={20} />
            <span className="text-sm">Light 1</span>
          </div>
        </div>

        <div className="absolute bottom-8 left-32 bg-blue-500 text-white p-3 rounded-lg shadow-lg">
          <div className="flex items-center space-x-2">
            <Wind size={20} />
            <span className="text-sm">Fan</span>
          </div>
        </div>

        <div className="absolute bottom-8 right-32 bg-purple-500 text-white p-3 rounded-lg shadow-lg">
          <div className="flex items-center space-x-2">
            <Tv size={20} />
            <span className="text-sm">TV</span>
          </div>
        </div>

        <div className="absolute bottom-8 right-8 bg-red-500 text-white p-3 rounded-lg shadow-lg">
          <div className="flex items-center space-x-2">
            <Lightbulb size={20} />
            <span className="text-sm">Light 2</span>
          </div>
        </div>

        {/* Connection Lines */}
        <div className="absolute top-44 left-1/2 transform -translate-x-1/2 w-0.5 h-20 bg-gray-400"></div>
        <div className="absolute top-64 left-1/4 w-1/2 h-0.5 bg-gray-400"></div>
        <div className="absolute top-64 left-1/4 w-0.5 h-16 bg-gray-400"></div>
        <div className="absolute top-64 left-2/4 w-0.5 h-16 bg-gray-400"></div>
        <div className="absolute top-64 right-1/4 w-0.5 h-16 bg-gray-400"></div>
        <div className="absolute top-64 right-1/4 w-1/4 h-0.5 bg-gray-400"></div>

        {/* Power Supply */}
        <div className="absolute top-8 left-8 bg-gray-700 text-white p-3 rounded-lg shadow-lg">
          <div className="text-sm font-semibold">12V Power</div>
          <div className="text-xs">Supply</div>
        </div>

        {/* Components List */}
        <div className="absolute top-4 right-4 bg-white p-4 rounded-lg shadow-lg border-2 border-gray-200">
          <h3 className="font-semibold text-gray-800 mb-2">Components</h3>
          <ul className="text-xs space-y-1 text-gray-600">
            <li>• ESP32 Microcontroller</li>
            <li>• 4-Channel Relay Module</li>
            <li>• 12V Power Supply</li>
            <li>• Jumper Wires</li>
            <li>• Breadboard</li>
            <li>• Resistors (220Ω)</li>
          </ul>
        </div>
      </div>
    </div>
  );
};