export default function Login() {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-md w-96">
          <h1 className="text-2xl font-bold text-center mb-6">Iniciar Sesión</h1>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700">Correo Electrónico</label>
              <input type="email" className="w-full px-4 py-2 border rounded-md" />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700">Contraseña</label>
              <input type="password" className="w-full px-4 py-2 border rounded-md" />
            </div>
            <button type="submit" className="w-full bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700">
              Iniciar Sesión
            </button>
          </form>
        </div>
      </div>
    );
  }