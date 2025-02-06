import { useState } from "react";

export const Registrasi: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Fungsi untuk membuka dan menutup modal
  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Tombol Trigger */}
      <button
        onClick={toggleModal}
        className="bg-yellow-400 text-gray-900 hover:bg-yellow-300 py-2 px-6 rounded-full text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
      >
        Daftar Sekarang!
      </button>

      {/* Modal */}
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-40 w-screen h-screen overflow-y-hidden flex items-center justify-center"
        >
          {/* Overlay */}
          <div
            onClick={toggleModal}
            className="fixed inset-0 bg-black opacity-50"
          ></div>

          {/* Panel Modal */}
          <div className="relative bg-white rounded-3xl p-10 shadow-2xl w-full max-w-sm">
            <h2 className="text-xl font-semibold text-center mb-6">Registrasi</h2>
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-600"
                >
                  Nama Lengkap
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Masukkan nama Anda"
                  className="w-full h-12 px-4 py-3 mt-2 text-gray-600 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-600"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Masukkan email Anda"
                  className="w-full h-12 px-4 py-3 mt-2 text-gray-600 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-600"
                >
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Masukkan password Anda"
                  className="w-full h-12 px-4 py-3 mt-2 text-gray-600 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              {/* Tombol Registrasi */}
              <button
                type="submit"
                className="w-full h-12 bg-gradient-to-b from-blue-500 to-indigo-600 text-white font-semibold rounded-full hover:scale-105 hover:from-blue-800 hover:to-indigo-900 transition duration-500 cursor-pointer"
              >
                Daftar
              </button>
            </form>
            <p className="text-sm mt-4 text-center">
              Sudah punya akun?{" "}
              <a href="/login" className="text-indigo-600 hover:text-indigo-700">
                Masuk sekarang
              </a>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
