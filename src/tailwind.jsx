
// import Tailwind from "./tailwind";;
function App() {
  return (
    <div className="min-h-screen bg-gray-200 flex flex-col items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        <h1 className="text-3xl font-bold text-blue-600 mb-4">
          Hello Tailwind
        </h1>

        <p className="text-gray-600 mb-4">
          This is my first Tailwind component.
        </p>

        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
          Click Me
        </button>
      </div>
    </div>
  );
}

export default App;