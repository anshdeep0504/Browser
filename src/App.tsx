import React, { useState } from 'react';
import {
  Layout,
  LayoutGrid,
  PlayCircle,
  PauseCircle,
  Settings,
  Clock,
  Database,
  Activity,
  Plus,
  Search,
  Link,
  Loader
} from 'lucide-react';

interface ExtractedData {
  connections: number;
  location: string;
  title: string;
  company: string;
}

function App() {
  const [url, setUrl] = useState('');
  const [isExtracting, setIsExtracting] = useState(false);
  const [extractedData, setExtractedData] = useState<ExtractedData | null>(null);

  const simulateExtraction = async (url: string) => {
    setIsExtracting(true);
    setExtractedData(null);
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Simulate extracted data
    setExtractedData({
      connections: Math.floor(Math.random() * 2000) + 500,
      location: "San Francisco Bay Area",
      title: "Senior Software Engineer",
      company: "Tech Company Inc."
    });
    
    setIsExtracting(false);
  };

  const handleExtract = (e: React.FormEvent) => {
    e.preventDefault();
    if (url) {
      simulateExtraction(url);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Layout className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">AutomationHub</span>
            </div>
            <button className="p-2 text-gray-500 hover:text-gray-700">
              <Settings className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* URL Input Form */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mb-8">
          <h2 className="text-lg font-semibold mb-4">Extract Profile Data</h2>
          <form onSubmit={handleExtract} className="space-y-4">
            <div className="flex gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Link className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="url"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    placeholder="Enter LinkedIn profile URL..."
                    className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
              </div>
              <button
                type="submit"
                disabled={isExtracting}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-blue-400 flex items-center"
              >
                {isExtracting ? (
                  <>
                    <Loader className="h-4 w-4 mr-2 animate-spin" />
                    Extracting...
                  </>
                ) : (
                  'Extract Data'
                )}
              </button>
            </div>
          </form>

          {/* Extraction Results */}
          {extractedData && (
            <div className="mt-6 p-4 bg-gray-50 rounded-lg">
              <h3 className="text-md font-medium mb-3">Extracted Data:</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-500">Connections</p>
                  <p className="text-lg font-semibold">{extractedData.connections}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Location</p>
                  <p className="text-lg font-semibold">{extractedData.location}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Title</p>
                  <p className="text-lg font-semibold">{extractedData.title}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Company</p>
                  <p className="text-lg font-semibold">{extractedData.company}</p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center">
              <Activity className="h-10 w-10 text-blue-600" />
              <div className="ml-4">
                <p className="text-sm text-gray-500">Profiles Analyzed</p>
                <p className="text-2xl font-bold text-gray-900">152</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center">
              <Database className="h-10 w-10 text-green-600" />
              <div className="ml-4">
                <p className="text-sm text-gray-500">Data Points</p>
                <p className="text-2xl font-bold text-gray-900">1,418</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center">
              <Clock className="h-10 w-10 text-purple-600" />
              <div className="ml-4">
                <p className="text-sm text-gray-500">Avg. Extract Time</p>
                <p className="text-2xl font-bold text-gray-900">1.2s</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;