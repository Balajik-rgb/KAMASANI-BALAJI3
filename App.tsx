import React from 'react';
import { Home, Zap } from 'lucide-react';
import { SystemOverview } from './components/SystemOverview';
import { CircuitDiagram } from './components/CircuitDiagram';
import { DeviceControl } from './components/DeviceControl';
import { CodeExample } from './components/CodeExample';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <div className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Home size={24} className="text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-800">Smart Home Controller</h1>
                <p className="text-sm text-gray-600">Bluetooth-Controlled Automation System</p>
              </div>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Zap size={16} />
              <span>ESP32 Powered</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-8">
          
          {/* System Overview */}
          <SystemOverview />

          {/* Device Control Demo */}
          <DeviceControl />

          {/* Circuit Diagram */}
          <CircuitDiagram />

          {/* Code Examples */}
          <CodeExample />

          {/* Footer */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="text-center">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Complete Home Automation Solution
              </h3>
              <p className="text-gray-600 mb-4">
                This system provides a comprehensive solution for controlling home appliances 
                via Bluetooth connectivity using an ESP32 microcontroller and relay modules.
              </p>
              <div className="flex justify-center space-x-4 text-sm text-gray-500">
                <span>✓ Circuit Diagram Included</span>
                <span>✓ Complete Source Code</span>
                <span>✓ Working Demo</span>
                <span>✓ Mobile App Ready</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;