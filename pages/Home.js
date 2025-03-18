function Home() {
    try {
        return (
            <div data-name="home-page">
                <section className="h-screen flex items-center justify-center bg-gradient-to-r from-purple-100 to-pink-100">
                    <div className="text-center px-4 fade-in">
                        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                            Discover Your Signature Scent
                        </h1>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Experience the art of perfumery with our curated collection of luxury fragrances
                        </p>
                    </div>
                </section>

                <section className="py-20 px-4 bg-white">
                    <div className="max-w-7xl mx-auto">
                        <h2 className="text-3xl font-bold text-center mb-16">Our Expertise</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <div className="text-center p-6 slide-in">
                                <i className="fas fa-star text-4xl text-purple-600 mb-4"></i>
                                <h3 className="text-xl font-semibold mb-2">Premium Selection</h3>
                                <p className="text-gray-600">Carefully curated collection of luxury fragrances</p>
                            </div>
                            <div className="text-center p-6 slide-in">
                                <i className="fas fa-hand-holding-heart text-4xl text-purple-600 mb-4"></i>
                                <h3 className="text-xl font-semibold mb-2">Personal Guidance</h3>
                                <p className="text-gray-600">Expert advice to find your perfect scent</p>
                            </div>
                            <div className="text-center p-6 slide-in">
                                <i className="fas fa-gem text-4xl text-purple-600 mb-4"></i>
                                <h3 className="text-xl font-semibold mb-2">Authentic Products</h3>
                                <p className="text-gray-600">Guaranteed genuine fragrances</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    } catch (error) {
        console.error('Home page error:', error);
        reportError(error);
        return null;
    }
}
