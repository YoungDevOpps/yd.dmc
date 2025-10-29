import Navbar from "@/components/Navbar";
import ToasterSonner from "@/components/ToasterSonner";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-900">
      {/* NAVBAR */}
      <Navbar />

      {children}

      {/* FOOTER */}
      <footer className="bg-[#006699] text-white py-6 text-center">
        <p>
          &copy; {new Date().getFullYear()} DM COMPANY - Tous droits réservés.
        </p>
      </footer>
      <ToasterSonner />
    </div>
  );
}
