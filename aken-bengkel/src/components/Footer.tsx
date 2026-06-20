function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-10">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-3">
            Aken Motor Air Upas
          </h3>

          <p className="text-gray-300">
            Bengkel terpercaya untuk servis dan perawatan motor Anda.
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-3">
            Kontak
          </h3>

          <ul className="space-y-2 text-gray-300">
            <li>📍 Jl. Raya Contoh No.123</li>
            <li>✉️ info@akenmotor.com</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-700 mt-8 pt-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Bengkel Aken Motor. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;