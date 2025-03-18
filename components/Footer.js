function Footer() {
    try {
        return (
            <footer data-name="footer" className="bg-gray-900 text-white py-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="mb-4 md:mb-0">
                            <h3 className="text-xl font-bold">Perfumari</h3>
                            <p className="text-gray-400 mt-2">Your Perfect Fragrance Destination</p>
                        </div>
                        <div className="flex space-x-6">
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                                <i className="fab fa-instagram text-2xl"></i>
                            </a>
                            <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                                <i className="fab fa-whatsapp text-2xl"></i>
                            </a>
                        </div>
                    </div>
                    <div className="mt-8 text-center text-gray-400 text-sm">
                        © {new Date().getFullYear()} Perfumari. All rights reserved.
                    </div>
                </div>
            </footer>
        );
    } catch (error) {
        console.error('Footer component error:', error);
        reportError(error);
        return null;
    }
}
