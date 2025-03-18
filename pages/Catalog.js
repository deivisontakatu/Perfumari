function Catalog() {
    try {
        const categories = [
            {
                title: "Victoria's Secret",
                image: "https://images.unsplash.com/photo-1588405748880-8b223dbe6c6b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                description: "Luxurious fragrances from the iconic brand"
            },
            {
                title: "Bath & Body Works",
                image: "https://images.unsplash.com/photo-1616604847462-ed3b667c5e02?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                description: "Refreshing and delightful body care collections"
            },
            {
                title: "Arabic Perfumes",
                image: "https://images.unsplash.com/photo-1595425970377-c9ed01c2f61b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                description: "Exotic and rich Middle Eastern fragrances"
            },
            {
                title: "Imported Perfumes",
                image: "https://images.unsplash.com/photo-1587017539504-67cfbddac569?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                description: "Premium international perfume collections"
            }
        ];

        return (
            <div data-name="catalog-page" className="pt-16">
                <div className="bg-purple-100 py-20 px-4">
                    <div className="max-w-7xl mx-auto text-center">
                        <h1 className="text-4xl font-bold mb-6">Our Collections</h1>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Explore our carefully curated categories of premium fragrances
                        </p>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto px-4 py-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {categories.map((category, index) => (
                            <CategoryCard key={index} {...category} />
                        ))}
                    </div>
                </div>
            </div>
        );
    } catch (error) {
        console.error('Catalog page error:', error);
        reportError(error);
        return null;
    }
}
