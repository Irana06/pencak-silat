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
          <div className="relative bg-white rounded-3xl p-10 shadow-2xl w-full max-w-4xl">
            <h2 className="text-xl font-semibold text-center mb-6">Registrasi Kontingen</h2>
            <form className="space-y-6">
              {/* Row pertama */}
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="namaKontingen"
                    className="block text-left text-sm font-medium text-gray-600"
                  >
                    Nama Kontingen
                  </label>
                  <input
                    id="namaKontingen"
                    name="namaKontingen"
                    type="text"
                    placeholder="Masukkan nama kontingen"
                    className="w-full h-12 px-4 py-3 mt-2 text-gray-600 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="emailKontingen"
                    className="block text-left text-sm font-medium text-gray-600"
                  >
                    Email Kontingen
                  </label>
                  <input
                    id="emailKontingen"
                    name="emailKontingen"
                    type="email"
                    placeholder="Masukkan email kontingen"
                    className="w-full h-12 px-4 py-3 mt-2 text-gray-600 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
              </div>

              {/* Row kedua */}
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="password"
                    className="block text-left text-sm font-medium text-gray-600"
                  >
                    Password
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Masukkan password"
                    className="w-full h-12 px-4 py-3 mt-2 text-gray-600 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="retypePassword"
                    className="block text-left text-sm font-medium text-gray-600"
                  >
                    Retype Password
                  </label>
                  <input
                    id="retypePassword"
                    name="retypePassword"
                    type="password"
                    placeholder="Ulangi password"
                    className="w-full h-12 px-4 py-3 mt-2 text-gray-600 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
              </div>

              {/* Row ketiga */}
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="penanggungJawab"
                    className="block text-left text-sm font-medium text-gray-600"
                  >
                    Nama Penanggung Jawab
                  </label>
                  <input
                    id="penanggungJawab"
                    name="penanggungJawab"
                    type="text"
                    placeholder="Masukkan nama penanggung jawab"
                    className="w-full h-12 px-4 py-3 mt-2 text-gray-600 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="noTelepon"
                    className="block text-left text-sm font-medium text-gray-600"
                  >
                    Nomor Telepon Penanggung Jawab
                  </label>
                  <input
                    id="noTelepon"
                    name="noTelepon"
                    type="tel"
                    placeholder="Masukkan nomor telepon"
                    className="w-full h-12 px-4 py-3 mt-2 text-gray-600 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
              </div>

              {/* Row keempat */}
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="asalKontingen"
                    className="block text-left text-sm font-medium text-gray-600"
                  >
                    Asal Kontingen
                  </label>
                  <select
                    id="asalKontingen"
                    name="asalKontingen"
                    className="w-full h-12 px-4 py-3 mt-2 text-gray-600 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  >
                    <option value="dalamNegeri">Dalam Negeri</option>
                    <option value="luarNegeri">Luar Negeri</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="negara"
                    className="block text-left text-sm font-medium text-gray-600"
                  >
                    Negara
                  </label>
                  <select
                    id="negara"
                    name="negara"
                    className="w-full h-12 px-4 py-3 mt-2 text-gray-600 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  >
                    <option value="indonesia">Indonesia</option>
                    <option value="singapura">Singapura</option>
                  </select>
                </div>
              </div>

              {/* Row kelima */}
              <div>
                <label
                  htmlFor="alamat"
                  className="block text-left text-sm font-medium text-gray-600"
                >
                  Alamat Lengkap
                </label>
                <input
                  id="alamat"
                  name="alamat"
                  type="text"
                  placeholder="Masukkan alamat lengkap"
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
            <p className="text-sm text-black mt-4 text-center">
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
