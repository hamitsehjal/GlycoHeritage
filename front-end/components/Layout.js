import Link from 'next/link';

function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <nav className="flex items-center justify-between flex-wrap bg-green-800 p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <span className="font-semibold text-xl tracking-tight">GlycoHeritage</span>
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow">
            <Link className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-200 mr-4" href="/">
                Home
            </Link>
          </div>
          <div>
            <Link className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-200 mr-4" href="/profile">
                Profile
            </Link>
            <Link className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-200 mr-4" href="/logout">
                Logout
            
            </Link>
          </div>
        </div>
      </nav>
      <div className="container mx-auto mt-8 flex-grow">{children}</div>
      <footer className="bg-black text-white py-4 text-center">
        &copy; 2023 GlycoHeritage
      </footer>
    </div>
  );
}

export default Layout;
