function About() {
    try {
        return (
            <div data-name="about-page" className="pt-16">
                <div className="bg-purple-100 py-20 px-4">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="text-4xl font-bold mb-6">About Perfumari</h1>
                        <p className="text-xl text-gray-600">
                            Your trusted partner in discovering the perfect fragrance
                        </p>
                    </div>
                </div>

                <div className="max-w-4xl mx-auto px-4 py-16">
                    <div className="prose prose-lg mx-auto">
                        <p className="text-lg text-gray-600 mb-6">
                            At Perfumari, we understand that finding the perfect fragrance is a personal journey. 
                            Our expertise lies in helping you discover scents that not only smell wonderful but 
                            also resonate with your personality and style.
                        </p>
                        <p className="text-lg text-gray-600 mb-6">
                            We specialize in curating an exclusive collection of fragrances from renowned brands, 
                            including Victoria's Secret, Bath & Body Works, authentic Arabic perfumes, and 
                            prestigious imported fragrances.
                        </p>
                        <p className="text-lg text-gray-600">
                            Our team of fragrance experts is dedicated to providing personalized guidance, 
                            ensuring that each customer finds their ideal scent. We believe that the right 
                            perfume can elevate your presence and become an integral part of your identity.
                        </p>
                    </div>
                </div>
            </div>
        );
    } catch (error) {
        console.error('About page error:', error);
        reportError(error);
        return null;
    }
}
