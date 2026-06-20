import { useEffect, useState } from "react";

const FloatingWhatsApp = (): JSX.Element => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 200) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const handleClick = () => {
    const phoneNumber = "6281234567890"; // ganti nomor Aken Motor
    const message = "Halo, saya ingin menanyakan layanan bengkel Aken Motor.";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");
  };

  if (!visible) return <></>;

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 z-50 flex items-center justify-center"
      aria-label="Chat WhatsApp"
    >
      {/* WhatsApp Icon (SVG) */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-6 h-6"
      >
        <path d="M12.04 2C6.58 2 2.15 6.43 2.15 11.89c0 1.75.46 3.46 1.34 4.96L2 22l5.29-1.39a9.87 9.87 0 0 0 4.75 1.21c5.46 0 9.89-4.43 9.89-9.89S17.5 2 12.04 2zm0 18.02c-1.48 0-2.93-.4-4.2-1.16l-.3-.18-3.14.83.84-3.06-.2-.31a7.8 7.8 0 0 1-1.2-4.16c0-4.3 3.5-7.79 7.8-7.79s7.8 3.49 7.8 7.79-3.5 7.84-7.8 7.84zm4.26-5.8c-.23-.12-1.36-.67-1.57-.75-.21-.08-.36-.12-.51.12-.15.23-.59.75-.72.9-.13.15-.26.17-.49.06-.23-.12-.98-.36-1.87-1.15-.69-.61-1.15-1.36-1.29-1.59-.13-.23-.01-.36.11-.48.11-.11.23-.29.34-.44.11-.15.15-.26.23-.42.08-.15.04-.29-.02-.41-.06-.12-.51-1.23-.7-1.68-.18-.43-.37-.37-.51-.38h-.44c-.15 0-.41.06-.62.29-.21.23-.8.78-.8 1.9s.82 2.2.94 2.35c.12.15 1.61 2.46 3.9 3.45.55.24.98.38 1.32.48.55.17 1.05.15 1.45.09.44-.07 1.36-.56 1.55-1.1.19-.54.19-1 .13-1.1-.06-.1-.21-.15-.44-.27z" />
      </svg>
    </button>
  );
};

export default FloatingWhatsApp;