import Link from 'next/link';
import Navbar from './Navbar';

function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Navbar />

      <div className="container mx-auto mt-8 flex-grow">{children}</div>
      <footer className="bg-gray-800 text-white py-4 text-center">
        &copy; 2023 Pinnacle Tech
      </footer>
    </div>
  );
}

export default Layout;
