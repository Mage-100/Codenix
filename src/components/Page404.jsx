
function Page404() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black-10">
        <h1 className="text-6xl font-bold text-red-500 mb-4">404</h1>
        <p className="text-2xl text-neutral-600 mb-8">Page Not Found</p>
        <a href="/" className="px-4 py-2 bg-white text-black font-bold rounded hover:-translate-y-0.5 transition">Go to Home</a>
    </div>
  );
}

export default Page404;