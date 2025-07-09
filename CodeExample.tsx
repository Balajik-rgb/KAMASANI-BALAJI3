import React, { useState } from 'react';
import { Copy, Check, Code, Smartphone, Cpu } from 'lucide-react';

export const CodeExample = () => {
  const [copiedCode, setCopiedCode] = useState('');
  const [activeTab, setActiveTab] = useState('arduino');

  const copyToClipboard = (code: string, type: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(type);
    setTimeout(() => setCopiedCode(''), 2000);
  };

  const arduinoCode = `#include "BluetoothSerial.h"

BluetoothSerial SerialBT;

// Relay pins
const int relay1 = 2;
const int relay2 = 4;
const int relay3 = 5;
const int relay4 = 18;

// Device states
bool device1State = false;
bool device2State = false;
bool device3State = false;
bool device4State = false;

void setup() {
  Serial.begin(115200);
  SerialBT.begin("ESP32_Home_Controller");
  
  // Initialize relay pins
  pinMode(relay1, OUTPUT);
  pinMode(relay2, OUTPUT);
  pinMode(relay3, OUTPUT);
  pinMode(relay4, OUTPUT);
  
  // Turn off all relays initially
  digitalWrite(relay1, LOW);
  digitalWrite(relay2, LOW);
  digitalWrite(relay3, LOW);
  digitalWrite(relay4, LOW);
  
  Serial.println("ESP32 Home Automation Ready!");
}

void loop() {
  if (SerialBT.available()) {
    String command = SerialBT.readString();
    command.trim();
    
    // Device control commands
    if (command == "DEVICE1_ON") {
      digitalWrite(relay1, HIGH);
      device1State = true;
      SerialBT.println("Device 1 ON");
    }
    else if (command == "DEVICE1_OFF") {
      digitalWrite(relay1, LOW);
      device1State = false;
      SerialBT.println("Device 1 OFF");
    }
    else if (command == "DEVICE2_ON") {
      digitalWrite(relay2, HIGH);
      device2State = true;
      SerialBT.println("Device 2 ON");
    }
    else if (command == "DEVICE2_OFF") {
      digitalWrite(relay2, LOW);
      device2State = false;
      SerialBT.println("Device 2 OFF");
    }
    else if (command == "DEVICE3_ON") {
      digitalWrite(relay3, HIGH);
      device3State = true;
      SerialBT.println("Device 3 ON");
    }
    else if (command == "DEVICE3_OFF") {
      digitalWrite(relay3, LOW);
      device3State = false;
      SerialBT.println("Device 3 OFF");
    }
    else if (command == "DEVICE4_ON") {
      digitalWrite(relay4, HIGH);
      device4State = true;
      SerialBT.println("Device 4 ON");
    }
    else if (command == "DEVICE4_OFF") {
      digitalWrite(relay4, LOW);
      device4State = false;
      SerialBT.println("Device 4 OFF");
    }
    else if (command == "ALL_ON") {
      digitalWrite(relay1, HIGH);
      digitalWrite(relay2, HIGH);
      digitalWrite(relay3, HIGH);
      digitalWrite(relay4, HIGH);
      device1State = device2State = device3State = device4State = true;
      SerialBT.println("All devices ON");
    }
    else if (command == "ALL_OFF") {
      digitalWrite(relay1, LOW);
      digitalWrite(relay2, LOW);
      digitalWrite(relay3, LOW);
      digitalWrite(relay4, LOW);
      device1State = device2State = device3State = device4State = false;
      SerialBT.println("All devices OFF");
    }
    else if (command == "STATUS") {
      SerialBT.println("Device States:");
      SerialBT.println("Device 1: " + String(device1State ? "ON" : "OFF"));
      SerialBT.println("Device 2: " + String(device2State ? "ON" : "OFF"));
      SerialBT.println("Device 3: " + String(device3State ? "ON" : "OFF"));
      SerialBT.println("Device 4: " + String(device4State ? "ON" : "OFF"));
    }
  }
  
  delay(100);
}`;

  const androidCode = `// Android Bluetooth Communication Example
import android.bluetooth.BluetoothAdapter;
import android.bluetooth.BluetoothDevice;
import android.bluetooth.BluetoothSocket;
import java.io.IOException;
import java.io.OutputStream;
import java.util.UUID;

public class BluetoothController {
    private BluetoothAdapter bluetoothAdapter;
    private BluetoothSocket bluetoothSocket;
    private OutputStream outputStream;
    
    private static final UUID MY_UUID = 
        UUID.fromString("00001101-0000-1000-8000-00805F9B34FB");
    
    public void connectToESP32(String deviceAddress) {
        try {
            BluetoothDevice device = 
                bluetoothAdapter.getRemoteDevice(deviceAddress);
            bluetoothSocket = device.createRfcommSocketToServiceRecord(MY_UUID);
            bluetoothSocket.connect();
            outputStream = bluetoothSocket.getOutputStream();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
    
    public void sendCommand(String command) {
        try {
            if (outputStream != null) {
                outputStream.write(command.getBytes());
                outputStream.flush();
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
    
    public void turnOnDevice(int deviceNumber) {
        sendCommand("DEVICE" + deviceNumber + "_ON");
    }
    
    public void turnOffDevice(int deviceNumber) {
        sendCommand("DEVICE" + deviceNumber + "_OFF");
    }
    
    public void turnOnAllDevices() {
        sendCommand("ALL_ON");
    }
    
    public void turnOffAllDevices() {
        sendCommand("ALL_OFF");
    }
    
    public void getDeviceStatus() {
        sendCommand("STATUS");
    }
    
    public void disconnect() {
        try {
            if (bluetoothSocket != null) {
                bluetoothSocket.close();
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}`;

  const tabs = [
    { id: 'arduino', label: 'Arduino/ESP32 Code', icon: Cpu, code: arduinoCode },
    { id: 'android', label: 'Android App Code', icon: Smartphone, code: androidCode }
  ];

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Implementation Code</h2>
      
      {/* Tab Navigation */}
      <div className="flex space-x-2 mb-6">
        {tabs.map((tab) => {
          const IconComponent = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                activeTab === tab.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <IconComponent size={18} />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Code Display */}
      {tabs.map((tab) => (
        <div key={tab.id} className={activeTab === tab.id ? 'block' : 'hidden'}>
          <div className="relative">
            <div className="absolute top-4 right-4 z-10">
              <button
                onClick={() => copyToClipboard(tab.code, tab.id)}
                className="flex items-center space-x-2 px-3 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
              >
                {copiedCode === tab.id ? (
                  <>
                    <Check size={16} />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy size={16} />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
            
            <pre className="bg-gray-900 text-green-400 p-6 rounded-lg overflow-x-auto text-sm font-mono">
              <code>{tab.code}</code>
            </pre>
          </div>
        </div>
      ))}

      {/* Implementation Notes */}
      <div className="mt-6 p-4 bg-blue-50 rounded-lg">
        <h3 className="font-semibold text-blue-800 mb-2">Implementation Notes:</h3>
        <ul className="text-sm text-blue-700 space-y-1">
          <li>• Upload the Arduino code to your ESP32 microcontroller</li>
          <li>• Connect the relay module to pins 2, 4, 5, and 18</li>
          <li>• Power the ESP32 with a 5V supply</li>
          <li>• Use the Android code to create a mobile app for control</li>
          <li>• Pair your phone with the ESP32 Bluetooth device</li>
        </ul>
      </div>
    </div>
  );
};