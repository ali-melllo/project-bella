const LandingPage = () => {
  return (
    <div className="container mx-auto py-12">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Welcome to Our Amazing Product</h1>
        <p className="text-gray-600 mb-8">
          Discover the power of our innovative solution and transform your business today.
        </p>
        <div className="flex justify-center space-x-4">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Get Started</button>
          <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded">
            Learn More
          </button>
        </div>

        {/* Hero Cards */}
        <div className="mt-8 flex justify-center space-x-4">
          <div className="glass-morphism gradient-purple p-4 rounded-lg shadow-md w-64">
            <h2 className="text-xl font-semibold mb-2">Card 1</h2>
            <p className="text-gray-700">Description for card 1.</p>
          </div>
          <div className="glass-morphism gradient-purple p-4 rounded-lg shadow-md w-64">
            <h2 className="text-xl font-semibold mb-2">Card 2</h2>
            <p className="text-gray-700">Description for card 2.</p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="glass-morphism gradient-card card-shimmer p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Feature 1</h3>
            <p className="text-gray-700">Detailed description of feature 1.</p>
          </div>
          <div className="glass-morphism gradient-card card-shimmer p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Feature 2</h3>
            <p className="text-gray-700">Detailed description of feature 2.</p>
          </div>
          <div className="glass-morphism gradient-card card-shimmer p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Feature 3</h3>
            <p className="text-gray-700">Detailed description of feature 3.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">What Our Customers Say</h2>
        <div className="flex overflow-x-auto space-x-4">
          <div className="glass-morphism gradient-cool p-4 rounded-lg shadow-md w-80">
            <p className="text-gray-700 italic">"Great product! It has transformed our workflow."</p>
            <p className="text-gray-800 font-semibold mt-2">- John Doe</p>
          </div>
          <div className="glass-morphism gradient-cool p-4 rounded-lg shadow-md w-80">
            <p className="text-gray-700 italic">"Easy to use and highly effective. Highly recommended!"</p>
            <p className="text-gray-800 font-semibold mt-2">- Jane Smith</p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section>
        <h2 className="text-3xl font-bold text-center mb-8">Pricing Plans</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="glass-morphism gradient-nature p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Basic</h3>
            <p className="text-gray-700">$19/month</p>
            <p className="text-gray-700">Limited features</p>
          </div>
          <div className="glass-morphism gradient-nature p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Pro</h3>
            <p className="text-gray-700">$49/month</p>
            <p className="text-gray-700">All basic features + more</p>
          </div>
          <div className="glass-morphism gradient-nature p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Enterprise</h3>
            <p className="text-gray-700">$99/month</p>
            <p className="text-gray-700">Unlimited features and support</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default LandingPage
