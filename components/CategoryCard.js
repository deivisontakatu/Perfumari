function CategoryCard({ title, image, description }) {
    try {
        return (
            <div data-name="category-card" className="category-card bg-white rounded-lg overflow-hidden shadow-lg">
                <div className="relative h-64">
                    <img src={image} alt={title} className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{title}</h3>
                    <p className="text-gray-600">{description}</p>
                </div>
            </div>
        );
    } catch (error) {
        console.error('CategoryCard component error:', error);
        reportError(error);
        return null;
    }
}
