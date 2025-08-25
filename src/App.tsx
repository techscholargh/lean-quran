import React, { useState } from 'react';
import { Monitor, Users, Video, Star, Check, Play, Calendar, Shield, Zap, Crown } from 'lucide-react';

type Page = 'home' | 'auth' | 'pricing' | 'dashboard' | 'live-session' | 'admin';
type AuthMode = 'signin' | 'signup';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [authMode, setAuthMode] = useState<AuthMode>('signin');
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [userTier, setUserTier] = useState<'free' | 'pro' | 'premium'>('free');
  const [hasActiveSubscription, setHasActiveSubscription] = useState(false);
  const [subscriptionExpiry, setSubscriptionExpiry] = useState('2024-02-15');

  const NavBar = () => (
    <nav className="bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => setCurrentPage('home')}>
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-teal-600 rounded-lg flex items-center justify-center">
              <Monitor className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
              ScreenMaster Pro
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => setCurrentPage('home')}
              className={`text-sm font-medium transition-colors ${currentPage === 'home' ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'}`}
            >
              Home
            </button>
            <button
              onClick={() => setCurrentPage('pricing')}
              className={`text-sm font-medium transition-colors ${currentPage === 'pricing' ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'}`}
            >
              {hasActiveSubscription ? 'Upgrade Now' : 'Renew Subscription'}
            </button>
            {isSignedIn && (
              <button
                onClick={() => setCurrentPage('dashboard')}
                className={`text-sm font-medium transition-colors ${currentPage === 'dashboard' ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'}`}
              >
                Dashboard
              </button>
            )}
          </div>

          <div className="flex items-center space-x-4">
            {!isSignedIn ? (
              <>
                <button
                  onClick={() => { setCurrentPage('auth'); setAuthMode('signin'); }}
                  className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Sign In
                </button>
                <button
                  onClick={() => { setCurrentPage('auth'); setAuthMode('signup'); }}
                  className="bg-gradient-to-r from-blue-600 to-teal-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:shadow-lg transition-all duration-200 transform hover:scale-105"
                >
                  Get Started
                </button>
              </>
            ) : (
              <div className="flex items-center space-x-3">
                <div className="flex items-center space-x-2">
                  {userTier === 'premium' && <Crown className="w-4 h-4 text-yellow-500" />}
                  {userTier === 'pro' && <Star className="w-4 h-4 text-blue-500" />}
                  <span className="text-sm font-medium text-gray-700 capitalize">{userTier} User</span>
                </div>
                <button
                  onClick={() => setCurrentPage('admin')}
                  className="bg-gray-100 text-gray-700 px-3 py-1.5 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors"
                >
                  Admin
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );

  const LandingPage = () => (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Premium Screen Sharing
              <span className="block bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                Education Platform
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Access exclusive live sessions, recorded tutorials, and personalized screen-sharing consultations 
              from industry experts. Join thousands of professionals advancing their skills.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => { setCurrentPage('auth'); setAuthMode('signup'); }}
                className="bg-gradient-to-r from-blue-600 to-teal-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Start Your Journey
              </button>
              <button
                onClick={() => setCurrentPage('pricing')}
                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl text-lg font-semibold hover:border-blue-600 hover:text-blue-600 transition-all duration-300"
              >
                View Plans
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose ScreenMaster Pro?</h2>
            <p className="text-xl text-gray-600">Professional-grade learning with premium features</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Video className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Live Sessions</h3>
              <p className="text-gray-600">Join exclusive live screen-sharing sessions with real-time interaction and Q&A.</p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Monitor className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Screen Recordings</h3>
              <p className="text-gray-600">Access our extensive library of high-quality recorded sessions anytime, anywhere.</p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Premium Support</h3>
              <p className="text-gray-600">Get personalized guidance and direct access to expert instructors.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-teal-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Level Up Your Skills?</h2>
          <p className="text-xl text-blue-100 mb-8">Join thousands of professionals who trust ScreenMaster Pro</p>
          <button
            onClick={() => { setCurrentPage('auth'); setAuthMode('signup'); }}
            className="bg-white text-blue-600 px-8 py-4 rounded-xl text-lg font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            Get Started Now
          </button>
        </div>
      </section>
    </div>
  );

  const AuthPage = () => (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-teal-50 flex items-center justify-center py-12 px-4">
      <div className="max-w-md w-full">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="text-center mb-8">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-teal-600 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Monitor className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">
              {authMode === 'signin' ? 'Welcome Back' : 'Create Account'}
            </h2>
            <p className="text-gray-600 mt-2">
              {authMode === 'signin' ? 'Sign in to your account' : 'Join the community of learners'}
            </p>
          </div>

          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input
                type="email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                placeholder="Enter your email"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
              <input
                type="password"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                placeholder="Enter your password"
              />
            </div>

            <button
              type="button"
              onClick={() => { 
                setIsSignedIn(true); 
                setUserTier('pro');
                setHasActiveSubscription(true);
                setCurrentPage('dashboard'); 
              }}
              className="w-full bg-gradient-to-r from-blue-600 to-teal-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-200 transform hover:scale-105"
            >
              {authMode === 'signin' ? 'Sign In' : 'Create Account'}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              {authMode === 'signin' ? "Don't have an account?" : 'Already have an account?'}
              <button
                onClick={() => setAuthMode(authMode === 'signin' ? 'signup' : 'signin')}
                className="text-blue-600 hover:text-blue-700 font-medium ml-1"
              >
                {authMode === 'signin' ? 'Sign up' : 'Sign in'}
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  const PricingPage = () => (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Choose Your Plan</h2>
          <p className="text-xl text-gray-600">Flexible pricing for every learning journey</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Free Tier */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Free</h3>
              <div className="text-4xl font-bold text-gray-900 mb-2">$0<span className="text-lg text-gray-600">/month</span></div>
              <p className="text-gray-600">Perfect for getting started</p>
            </div>
            
            <ul className="space-y-4 mb-8">
              <li className="flex items-center"><Check className="w-5 h-5 text-green-500 mr-3" />Free preview content</li>
              <li className="flex items-center"><Check className="w-5 h-5 text-green-500 mr-3" />Community support</li>
              <li className="flex items-center"><Check className="w-5 h-5 text-green-500 mr-3" />Basic features</li>
            </ul>
            
            <button className="w-full border-2 border-gray-300 text-gray-700 py-3 rounded-lg font-semibold hover:border-blue-600 hover:text-blue-600 transition-colors">
              Get Started
            </button>
          </div>

          {/* Pro Tier */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-blue-500 relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">Most Popular</span>
            </div>
            
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Pro</h3>
              <div className="text-4xl font-bold text-blue-600 mb-2">$29<span className="text-lg text-gray-600">/month</span></div>
              <p className="text-gray-600">For serious learners</p>
            </div>
            
            <ul className="space-y-4 mb-8">
              <li className="flex items-center"><Check className="w-5 h-5 text-green-500 mr-3" />Full video library access</li>
              <li className="flex items-center"><Check className="w-5 h-5 text-green-500 mr-3" />Join group sessions</li>
              <li className="flex items-center"><Check className="w-5 h-5 text-green-500 mr-3" />Session recordings</li>
              <li className="flex items-center"><Check className="w-5 h-5 text-green-500 mr-3" />Priority support</li>
            </ul>
            
            <button
              onClick={() => { 
                setUserTier('pro'); 
                setHasActiveSubscription(true);
                setCurrentPage('dashboard'); 
              }}
              className="w-full bg-gradient-to-r from-blue-600 to-teal-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-200 transform hover:scale-105"
            >
              Upgrade to Pro
            </button>
          </div>

          {/* Premium Tier */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Premium</h3>
              <div className="text-4xl font-bold text-orange-600 mb-2">$79<span className="text-lg text-gray-600">/month</span></div>
              <p className="text-gray-600">For professionals & teams</p>
            </div>
            
            <ul className="space-y-4 mb-8">
              <li className="flex items-center"><Check className="w-5 h-5 text-green-500 mr-3" />Everything in Pro</li>
              <li className="flex items-center"><Check className="w-5 h-5 text-green-500 mr-3" />1-on-1 consultations</li>
              <li className="flex items-center"><Check className="w-5 h-5 text-green-500 mr-3" />Priority session booking</li>
              <li className="flex items-center"><Check className="w-5 h-5 text-green-500 mr-3" />White-label access</li>
            </ul>
            
            <button
              onClick={() => { 
                setUserTier('premium'); 
                setHasActiveSubscription(true);
                setCurrentPage('dashboard'); 
              }}
              className="w-full bg-gradient-to-r from-orange-600 to-red-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-200 transform hover:scale-105"
            >
              Go Premium
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const Dashboard = () => (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome back!</h1>
          <div className="flex items-center justify-between">
            <p className="text-gray-600">Continue your learning journey with our latest content</p>
            {!hasActiveSubscription && (
              <div className="bg-red-50 border border-red-200 rounded-lg px-4 py-2">
                <p className="text-red-700 text-sm font-medium">
                  Subscription expired on {subscriptionExpiry}
                  <button 
                    onClick={() => setCurrentPage('pricing')}
                    className="ml-2 text-red-600 hover:text-red-800 underline"
                  >
                    Renew now
                  </button>
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Sessions Watched</p>
                <p className="text-2xl font-bold text-gray-900">24</p>
              </div>
              <Video className="w-8 h-8 text-blue-500" />
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Live Sessions</p>
                <p className="text-2xl font-bold text-gray-900">8</p>
              </div>
              <Users className="w-8 h-8 text-teal-500" />
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Hours Learned</p>
                <p className="text-2xl font-bold text-gray-900">156</p>
              </div>
              <Monitor className="w-8 h-8 text-orange-500" />
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Certificates</p>
                <p className="text-2xl font-bold text-gray-900">3</p>
              </div>
              <Star className="w-8 h-8 text-yellow-500" />
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Recent Videos */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900">Recent Videos</h2>
                <button className="text-blue-600 hover:text-blue-700 font-medium">View All</button>
              </div>
              
              <div className="space-y-4">
                {[
                  { title: 'Advanced React Patterns', duration: '45 min', thumbnail: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop' },
                  { title: 'TypeScript Deep Dive', duration: '1h 20min', thumbnail: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop' },
                  { title: 'Database Design Principles', duration: '55 min', thumbnail: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop' }
                ].map((video, index) => (
                  <div key={index} className={`flex items-center space-x-4 p-4 rounded-lg transition-colors group ${
                    hasActiveSubscription 
                      ? 'hover:bg-gray-50 cursor-pointer' 
                      : 'opacity-60 cursor-not-allowed bg-gray-50'
                  }`}>
                    <div className="relative">
                      <img src={video.thumbnail} alt={video.title} className="w-24 h-16 object-cover rounded-lg" />
                      <div className={`absolute inset-0 bg-black bg-opacity-40 rounded-lg flex items-center justify-center transition-opacity ${
                        hasActiveSubscription 
                          ? 'opacity-0 group-hover:opacity-100' 
                          : 'opacity-100'
                      }`}>
                        {hasActiveSubscription ? (
                          <Play className="w-6 h-6 text-white" />
                        ) : (
                          <div className="text-center">
                            <Shield className="w-6 h-6 text-white mx-auto mb-1" />
                            <p className="text-xs text-white">Premium</p>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900">{video.title}</h3>
                      <p className="text-sm text-gray-600">{video.duration}</p>
                      {!hasActiveSubscription && (
                        <p className="text-xs text-red-600 mt-1">Subscription required</p>
                      )}
                    </div>
                    {hasActiveSubscription && <Shield className="w-5 h-5 text-green-500" />}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Upcoming Sessions */}
          <div>
            <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Upcoming Live Sessions</h2>
              
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="font-semibold text-gray-900">System Design Workshop</h3>
                  <p className="text-sm text-gray-600 mt-1">Tomorrow at 2:00 PM</p>
                  {hasActiveSubscription ? (
                    <button
                      onClick={() => setCurrentPage('live-session')}
                      className="mt-2 text-blue-600 hover:text-blue-700 font-medium text-sm"
                    >
                      Join Session →
                    </button>
                  ) : (
                    <p className="mt-2 text-red-600 text-sm">Subscription required</p>
                  )}
                </div>
                
                <div className="border-l-4 border-teal-500 pl-4">
                  <h3 className="font-semibold text-gray-900">API Security Best Practices</h3>
                  <p className="text-sm text-gray-600 mt-1">Friday at 10:00 AM</p>
                  {hasActiveSubscription ? (
                    <button className="mt-2 text-teal-600 hover:text-teal-700 font-medium text-sm">
                      Set Reminder →
                    </button>
                  ) : (
                    <p className="mt-2 text-red-600 text-sm">Subscription required</p>
                  )}
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-600 to-teal-600 rounded-xl p-6 text-white">
              <h3 className="font-bold text-lg mb-2">Upgrade to Premium</h3>
              <p className="text-blue-100 text-sm mb-4">Get access to exclusive 1-on-1 consultations and custom sessions</p>
              <button
                onClick={() => setCurrentPage('pricing')}
                className="bg-white text-blue-600 px-4 py-2 rounded-lg font-medium text-sm hover:shadow-lg transition-all duration-200 transform hover:scale-105"
              >
                Upgrade Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const LiveSession = () => (
    <div className="min-h-screen bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-4 gap-6 h-[calc(100vh-6rem)]">
          {/* Main Screen Share Area */}
          <div className="lg:col-span-3 bg-black rounded-xl overflow-hidden relative">
            <div className="absolute top-4 left-4 z-10">
              <div className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center">
                <div className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></div>
                LIVE
              </div>
            </div>
            
            <div className="absolute top-4 right-4 z-10 flex space-x-2">
              <button className="bg-black bg-opacity-50 text-white p-2 rounded-lg hover:bg-opacity-70 transition-colors">
                <Monitor className="w-5 h-5" />
              </button>
              <button className="bg-red-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-red-700 transition-colors">
                End Session
              </button>
            </div>
            
            <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
              <div className="text-center text-white">
                <Monitor className="w-16 h-16 mx-auto mb-4 opacity-50" />
                <h3 className="text-xl font-semibold mb-2">Screen Share Active</h3>
                <p className="text-gray-400">Your screen is being shared with 24 participants</p>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="bg-white rounded-xl flex flex-col">
            {/* Participants */}
            <div className="p-4 border-b border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                <Users className="w-5 h-5 mr-2" />
                Participants (24)
              </h3>
              <div className="space-y-2 max-h-32 overflow-y-auto">
                {['John Doe', 'Sarah Smith', 'Mike Johnson', 'Emma Wilson'].map((name, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-teal-500 rounded-full flex items-center justify-center text-white text-sm font-medium">
                      {name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <span className="text-sm text-gray-700">{name}</span>
                    {userTier === 'premium' && (
                      <Crown className="w-3 h-3 text-yellow-500" />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Chat */}
            <div className="flex-1 p-4">
              <h3 className="font-semibold text-gray-900 mb-3">Live Chat</h3>
              <div className="space-y-3 h-64 overflow-y-auto mb-4">
                <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="text-sm font-medium text-gray-900">Sarah Smith</p>
                  <p className="text-sm text-gray-600 mt-1">Great explanation of the design patterns!</p>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="text-sm font-medium text-gray-900">Mike Johnson</p>
                  <p className="text-sm text-gray-600 mt-1">Can you show the TypeScript version?</p>
                </div>
              </div>
              
              <div className="flex space-x-2">
                <input
                  type="text"
                  placeholder="Type a message..."
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
                <button className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const AdminDashboard = () => (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Admin Dashboard</h1>
          <p className="text-gray-600">Manage your content and sessions</p>
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <button
            onClick={() => setCurrentPage('live-session')}
            className="bg-gradient-to-br from-blue-600 to-blue-700 text-white p-6 rounded-xl hover:shadow-lg transition-all duration-200 transform hover:scale-105"
          >
            <Calendar className="w-8 h-8 mb-3" />
            <h3 className="font-bold text-lg">Start Live Session</h3>
            <p className="text-blue-100 text-sm">Begin a new screen-sharing session</p>
          </button>
          
          <button className="bg-gradient-to-br from-purple-600 to-purple-700 text-white p-6 rounded-xl hover:shadow-lg transition-all duration-200 transform hover:scale-105">
            <Users className="w-8 h-8 mb-3" />
            <h3 className="font-bold text-lg">Schedule 1-on-1</h3>
            <p className="text-purple-100 text-sm">Set up private consultation slots</p>
          </button>
          
          <button className="bg-gradient-to-br from-teal-600 to-teal-700 text-white p-6 rounded-xl hover:shadow-lg transition-all duration-200 transform hover:scale-105">
            <Video className="w-8 h-8 mb-3" />
            <h3 className="font-bold text-lg">Upload Video</h3>
            <p className="text-teal-100 text-sm">Add new recorded content</p>
          </button>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Session Management */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Session Management</h2>
            <div className="space-y-4">
              <div className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold text-gray-900">Available Time Slots</h3>
                  <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                    + Add Slot
                  </button>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                    <span className="text-sm">Tomorrow 2:00 PM - 3:00 PM</span>
                    <div className="flex space-x-2">
                      <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">Available</span>
                      <button className="text-blue-600 hover:text-blue-700 text-xs">Start Now</button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                    <span className="text-sm">Friday 10:00 AM - 11:00 AM</span>
                    <div className="flex space-x-2">
                      <span className="text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded">2 Requests</span>
                      <button className="text-blue-600 hover:text-blue-700 text-xs">View</button>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-3">Session Requests</h3>
                <div className="space-y-2">
                  <div className="flex items-center justify-between p-2 bg-blue-50 rounded">
                    <div>
                      <p className="text-sm font-medium">John Doe (Premium)</p>
                      <p className="text-xs text-gray-600">Requested: React Architecture Review</p>
                    </div>
                    <div className="flex space-x-2">
                      <button className="bg-green-600 text-white px-3 py-1 rounded text-xs hover:bg-green-700">
                        Accept
                      </button>
                      <button className="bg-gray-300 text-gray-700 px-3 py-1 rounded text-xs hover:bg-gray-400">
                        Decline
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Library */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Content Library</h2>
            <div className="space-y-4">
              {[
                { title: 'Advanced React Patterns', views: 1240, duration: '45 min' },
                { title: 'TypeScript Deep Dive', views: 856, duration: '1h 20min' },
                { title: 'Database Design Principles', views: 632, duration: '55 min' }
              ].map((video, index) => (
                <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                  <div>
                    <h3 className="font-semibold text-gray-900">{video.title}</h3>
                    <p className="text-sm text-gray-600">{video.views} views • {video.duration}</p>
                  </div>
                  <div className="flex space-x-2">
                    <button className="text-blue-600 hover:text-blue-700 p-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                      </svg>
                    </button>
                    <button className="text-red-600 hover:text-red-700 p-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* User Management */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Subscriber Management</h2>
            <div className="space-y-4">
              {[
                { name: 'Sarah Johnson', tier: 'Premium', status: 'Active', expiry: '2024-03-15' },
                { name: 'Mike Chen', tier: 'Pro', status: 'Expired', expiry: '2024-01-20' },
                { name: 'Emma Wilson', tier: 'Pro', status: 'Active', expiry: '2024-02-28' }
              ].map((user, index) => (
                <div key={index} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                  <div>
                    <p className="font-medium text-gray-900">{user.name}</p>
                    <p className="text-sm text-gray-600">{user.tier} • Expires {user.expiry}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className={`text-xs px-2 py-1 rounded ${
                      user.status === 'Active' 
                        ? 'bg-green-100 text-green-700' 
                        : 'bg-red-100 text-red-700'
                    }`}>
                      {user.status}
                    </span>
                    <button className="text-blue-600 hover:text-blue-700 text-sm">
                      Manage
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Analytics */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Analytics Overview</h2>
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Subscribers</p>
                  <p className="text-3xl font-bold text-gray-900">1,247</p>
                </div>
                <Zap className="w-8 h-8 text-blue-500" />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Active Sessions</p>
                  <p className="text-3xl font-bold text-gray-900">24</p>
                </div>
                <Users className="w-8 h-8 text-teal-500" />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Monthly Revenue</p>
                  <p className="text-3xl font-bold text-gray-900">$12,840</p>
                </div>
                <Star className="w-8 h-8 text-orange-500" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <LandingPage />;
      case 'auth':
        return <AuthPage />;
      case 'pricing':
        return <PricingPage />;
      case 'dashboard':
        return <Dashboard />;
      case 'live-session':
        return <LiveSession />;
      case 'admin':
        return <AdminDashboard />;
      default:
        return <LandingPage />;
    }
  };

  return (
    <div className="min-h-screen">
      <NavBar />
      {renderPage()}
    </div>
  );
}

export default App;