export default function TrustSection() {
  return (
    <section className="py-20 px-5 bg-gray-100">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

        <div>
          <img
            src="https://placehold.co/600x400"
            alt="Owner Aken Motor"
            className="rounded-xl"
          />
        </div>

        <div>
          <h2 className="text-4xl font-bold mb-4">
            Tentang Aken Motor Air Upas
          </h2>

          <p className="mb-4 text-gray-600">
            Aken Motor Air Upas telah melayani servis dan perbaikan motor
            selama bertahun-tahun dengan fokus pada kualitas,
            kejujuran, dan kepuasan pelanggan.
          </p>

          <div className="grid grid-cols-3 gap-4 text-center my-6">
            <div>
              <h3 className="text-3xl font-bold">5+</h3>
              <p>Tahun</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold">100+</h3>
              <p>Pelanggan</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold">4.8★</h3>
              <p>Rating</p>
            </div>
          </div>

          <div className="bg-white p-4 rounded-xl shadow">
            <p>
              "Servis cepat, harga jujur, dan hasil memuaskan."
            </p>
            <span className="font-semibold">
              - Pelanggan Aken Motor
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}