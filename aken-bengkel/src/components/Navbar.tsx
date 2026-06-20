export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4">
      <h1 className="text-2xl font-bold">
        Aken
      </h1>

      <a
        href="https://wa.me/000000000"
        target="_blank"
        className="rounded-lg bg-red-600 px-4 py-2 text-white"
      >
        WhatsApp
      </a>
    </nav>
  );
}