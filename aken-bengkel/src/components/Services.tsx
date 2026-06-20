function Services() {
  const services = [
    "Servis Berkala",
    "Ganti Oli",
    "Tune Up Mesin",
    "Perbaikan Rem",
    "Servis Kelistrikan",
    "Pengecekan CVT"
  ];

  return (
    <section id="services" className="py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">
          Layanan Kami
        </h2>

        <p className="text-gray-600 mb-10">
          Solusi lengkap untuk perawatan dan perbaikan motor Anda.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service}
              className="p-6 border rounded-xl shadow-sm"
            >
              <h3 className="font-semibold text-lg">
                {service}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;