import { useState, useEffect } from "react"
import Card from "../components/Card"
import useFetch from "../hooks/useFetch"

function Products() {
  const { data: products, loading, error } = useFetch("/products");

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const baseUrl = import.meta.env.VITE_API_URL || 'https://fakestoreapi.com';
    
    fetch(`${baseUrl}/products/categories`)
      .then((res) => (res.ok ? res.json() : []))
      .then((data) => {
        if (Array.isArray(data)) setCategories(data);
      })
      .catch(() => setCategories([]));
  }, []);

  if (loading) {
    return <div className="text-center py-10 text-primary">Memuat produk...</div>;
  }

  if (error) {
    return <div className="text-center py-10 text-red-500">Terjadi kesalahan: {error}</div>;
  }
  // -----------------------------------------------

  let filteredProducts = [];
  if (products && Array.isArray(products)) {
    if (selectedCategory === "All") {
      filteredProducts = products;
    } else {
      filteredProducts = products.filter((product) => product.category === selectedCategory);
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-center text-2xl font-bold text-primary mb-6">Produk</h2>

      {/* CATEGORY FILTER BUTTONS */}
      <div className="flex flex-wrap gap-2 mb-12 justify-center">
        <button
          onClick={() => setSelectedCategory("All")}
          className={`px-4 py-2 rounded-md text-sm font-medium border transition-colors cursor-pointer ${
            selectedCategory === "All"
              ? "bg-blue-600 text-white border-blue-600"
              : "bg-white text-gray-600 border-gray-200 hover:bg-gray-50"
          }`}
        >
          Semua Kategori
        </button>

        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-md text-sm font-medium border capitalize transition-colors cursor-pointer ${
              selectedCategory === category
                ? "bg-blue-600 text-white border-blue-600"
                : "bg-white text-gray-600 border-gray-200 hover:bg-gray-50"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* PRODUCTS DISPLAY GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10 pt-4">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <Card
              key={product.id}
              image={product.image}
              imageAlt={product.title}
              title={product.title}
              description={product.description ? product.description.substring(0, 80) + "..." : ""} 
              className="cursor-pointer"
              onClick={() => console.log(`Produk ID ${product.id} diklik`)}
            >
              <div className="flex flex-col gap-3">
                <span className="text-lg font-bold text-emerald-600">
                  ${product.price}
                </span>
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    console.log(`Tambah produk ${product.id} ke keranjang`);
                  }}
                  className="w-fit bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2.5 rounded-none transition-colors duration-200 text-sm cursor-pointer"
                >
                  Tambah ke cart
                </button>
              </div>
            </Card>
          ))
        ) : (
          <div className="col-span-full text-center py-20 text-gray-400 text-sm">
            Tidak ada produk ditemukan di kategori ini.
          </div>
        )}
      </div>
    </div>
  );
}

export default Products;

