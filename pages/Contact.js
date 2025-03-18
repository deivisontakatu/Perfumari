function Contact() {
    try {
        return (
            <div data-name="contact-page" className="pt-16">
                <div className="bg-purple-100 py-20 px-4">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
                        <p className="text-xl text-gray-600">
                            We'd love to hear from you
                        </p>
                    </div>
                </div>

                <div className="max-w-4xl mx-auto px-4 py-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div>
                            <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
                            <div className="space-y-4">
                                <div className="flex items-center">
                                    <i className="fas fa-map-marker-alt text-purple-600 w-8"></i>
                                    <span>123 Perfume Street, Fragrance City</span>
                                </div>
                                <div className="flex items-center">
                                    <i className="fas fa-phone text-purple-600 w-8"></i>
                                    <span>+1 234 567 890</span>
                                </div>
                                <div className="flex items-center">
                                    <i className="fas fa-envelope text-purple-600 w-8"></i>
                                    <span>contact@perfumari.com</span>
                                </div>
                            </div>

                            <div className="mt-8">
                                <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
                                <div className="flex space-x-4">
                                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-2xl text-gray-600 hover:text-purple-600">
                                        <i className="fab fa-instagram"></i>
                                    </a>
                                    <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer" className="text-2xl text-gray-600 hover:text-purple-600">
                                        <i className="fab fa-whatsapp"></i>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-2xl font-semibold mb-6">Business Hours</h2>
                            <div className="space-y-3">
                                <div className="flex justify-between">
                                    <span>Monday - Friday</span>
                                    <span>9:00 AM - 8:00 PM</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Saturday</span>
                                    <span>10:00 AM - 6:00 PM</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Sunday</span>
                                    <span>Closed</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    } catch (error) {
        console.error('Contact page error:', error);
        reportError(error);
        return null;
    }
}
