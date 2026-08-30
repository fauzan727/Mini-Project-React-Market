import { useState } from "react";
import Card from "../components/Card";
import useFetch from "../hooks/useFetch";

function Users() {
  const { data: users, loading, error, post, put, del, get } = useFetch("/users");

  // State untuk manajemen Form (Tambah / Edit)
  const [formData, setFormData] = useState({ id: "", username: "", email: "", password: "" });
  const [isEditing, setIsEditing] = useState(false);
  const [message, setMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    try {
      if (isEditing) {
        const result = await put(`/users/${formData.id}`, {
          id: Number(formData.id),
          username: formData.username,
          email: formData.email,
          password: formData.password,
        });
        console.log("Update Success:", result);
        setMessage(`User ID ${formData.id} berhasil diperbarui (Simulasi)`);
      } else {
        const result = await post("/users", {
          id: Math.floor(Math.random() * 1000), // Simulasi ID acak
          username: formData.username,
          email: formData.email,
          password: formData.password,
        });
        console.log("Create Success:", result);
        setMessage(`User "${formData.username}" berhasil ditambahkan (Simulasi)`);
      }
      
      setFormData({ id: "", username: "", email: "", password: "" });
      setIsEditing(false);
    } catch (err) {
      console.error("Aksi gagal:", err);
      setMessage("Terjadi kesalahan saat memproses data.");
    }
  };

  const handleEditClick = async (user) => {
    setIsEditing(true);
    setMessage(`Memuat detail User ID: ${user.id}...`);
    try {
      // Mengambil data user spesifik dari API
      const singleUser = await get(`/users/${user.id}`);
      setFormData({
        id: singleUser.id,
        username: singleUser.username,
        email: singleUser.email,
        password: singleUser.password,
      });
      setMessage("");
    } catch (err) {
        console.error("Gagal mengambil single user dari API:", err.message);
      setFormData({
        id: user.id,
        username: user.username,
        email: user.email,
        password: user.password,
      });
      setMessage("Menggunakan data lokal karena gagal fetch single user.");
    }
  };

  // 4. DELETE (DELETE /users/{id})
  const handleDelete = async (id) => {
    if (!window.confirm(`Apakah Anda yakin ingin menghapus user dengan ID ${id}?`)) return;
    setMessage("");

    try {
      const result = await del(`/users/${id}`);
      console.log("Delete Success:", result);
      setMessage(`User ID ${id} berhasil dihapus (Simulasi)`);
    } catch (err) {
      console.error("Gagal menghapus:", err);
      setMessage("Gagal menghapus user.");
    }
  };

  if (loading) return <div className="text-center py-10 font-medium">Memuat data user...</div>;
  if (error) return <div className="text-center py-10 text-red-500">Error: {error}</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-md mx-auto bg-white p-6 rounded-lg border border-gray-200 mb-10 shadow-sm">
        <h3 className="text-lg font-bold mb-4 text-primary">
          {isEditing ? `✏️ Edit User (ID: ${formData.id})` : "➕ Tambah User Baru"}
        </h3>
        
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleInputChange}
            required
            className="border p-2 rounded text-sm focus:outline-blue-500"
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="border p-2 rounded text-sm focus:outline-blue-500"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleInputChange}
            required
            className="border p-2 rounded text-sm focus:outline-blue-500"
          />
          
          <div className="flex gap-2">
            <button type="submit" className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded text-sm transition-colors">
              {isEditing ? "Simpan Perubahan" : "Tambah User"}
            </button>
            {isEditing && (
              <button
                type="button"
                onClick={() => {
                  setIsEditing(false);
                  setFormData({ id: "", username: "", email: "", password: "" });
                }}
                className="bg-gray-400 hover:bg-gray-500 text-white px-4 py-2 rounded text-sm transition-colors"
              >
                Batal
              </button>
            )}
          </div>
        </form>

        {message && <p className="text-xs mt-3 text-center text-emerald-600 font-medium bg-emerald-50 p-2 rounded border border-emerald-200">{message}</p>}
      </div>

      <h2 className="text-2xl font-bold text-primary mb-6 text-center sm:text-left">Daftar Pembeli / Users ({users?.length || 0})</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {users && users.map((user) => (
          <Card
            key={user.id}
            image={`https://dicebear.com{user.username}`}
            imageAlt={user.username}
            title={user.username}
            description={`📧 ${user.email}`}
          >
            <div className="text-xs text-secondary-text flex flex-col gap-1 border-t pt-3 mt-1">
              <p><strong>User ID:</strong> {user.id}</p>
              <p className="truncate"><strong>Password:</strong> {user.password}</p>
              
              <div className="grid grid-cols-2 gap-2 mt-4">
                <button
                  onClick={() => handleEditClick(user)}
                  className="bg-amber-500 hover:bg-amber-600 text-white py-1.5 px-2 rounded font-medium transition-colors text-center text-[11px]"
                >
                  ✏️ Edit
                </button>
                <button
                  onClick={() => handleDelete(user.id)}
                  className="bg-red-500 hover:bg-red-600 text-white py-1.5 px-2 rounded font-medium transition-colors text-center text-[11px]"
                >
                  🗑️ Hapus
                </button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Users;
