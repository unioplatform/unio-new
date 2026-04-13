// app/err404.tsx
export default function Err404() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-black text-white">
      <h1 className="text-6xl font-bold">404</h1>
      <p className="mt-4 text-lg text-gray-400">
        This page does not exist 🫠
      </p>

      <a
        href="/"
        className="mt-6 rounded-2xl bg-white px-6 py-3 text-black font-medium hover:bg-gray-200 transition"
      >
        Go Home
      </a>
    </div>
  );
}
