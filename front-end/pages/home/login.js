import Link from 'next/link';

function Login() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-8">Login or Register</h1>
      <div className="flex space-x-4">
        <Link href="/login">
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Login
        </button>
        </Link>
        <Link href="/register">
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Register
        </button>
            
        </Link>
      </div>
    </div>
  );
}

export default Login;
