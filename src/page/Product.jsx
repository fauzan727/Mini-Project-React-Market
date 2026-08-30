import Card from "../components/Card"
import useFetch from "../hooks/useFetch"

function Products() {
  const { data: products, loading, error } = useFetch("/products");

  if (loading) {
    return <div className="text-center py-10 text-primary">Memuat produk...</div>;
  }

  if (error) {
    return <div className="text-center py-10 text-red-500">Terjadi kesalahan: {error}</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-primary mb-6">Produk Populer</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products && products.map((product) => (
          <Card
            key={product.id}
            image={product.image}
            imageAlt={product.title}
            title={product.title}
            description={product.description.substring(0, 80) + "..."} 
            className="cursor-pointer"
            onClick={() => console.log(`Produk ID ${product.id} diklik`)}
          >
            {/* Mengisi children Card dengan Harga dan Tombol */}
            <div className="flex flex-col gap-3">
              <span className="text-lg font-bold text-emerald-600">
                ${product.price}
              </span>
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  console.log(`Tambah produk ${product.id} ke keranjang`);
                }}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200 text-sm"
              >
                Tambah ke cart
              </button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Products;
