function Contact() {
  return (
    <section className="py-16 px-6 bg-gray-100">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">
          Hubungi Kami
        </h2>

        <p className="text-gray-600 mb-8">
          Punya pertanyaan atau ingin booking servis?
          Hubungi kami melalui informasi berikut.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="font-semibold mb-2">📍 Alamat</h3>
            <p>Jl. Dummy Air Upas</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="font-semibold mb-2">🕒 Jam Operasional</h3>
            <p>Senin - Sabtu</p>
            <p>08.00 - 17.00</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;