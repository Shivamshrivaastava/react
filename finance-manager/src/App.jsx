import AppRoutes from "./routes/AppRoutes";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-indigo-700 text-white p-4 text-2xl font-bold text-center">
        Finance Manager
      </header>
      <main className="p-4">
        <AppRoutes />
      </main>
    </div>
  );
}
