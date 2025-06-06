import Navbar from "./pages/Navbar/Navbar";
import Header from "./pages/Header/Header";

export default function App() {
  return (
    // <div className="min-h-screen bg-gray-100 flex items-center justify-center">
    //   <div className="text-center">
    //     <h1 className="text-4xl font-bold text-gray-900 mb-8">
    //       My React App
    //     </h1>
    //     <div className="bg-white p-8 rounded-lg shadow-md">
    //       <button 
    //         onClick={() => setCount((count) => count + 1)}
    //         className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    //       >
    //         Count is {count}
    //       </button>
    //     </div>
    //   </div>
    // </div>

    <div>
      <Navbar />
      
      <div className="grid grid-cols-10 w-screen min-h-screen mx-auto">
        <div className="col-span-2">
          {/* Left sidebar */}
        </div>
        <div className="col-span-6 flex flex-col h-full gap-4">
          <div className="h-32 bg-red-500 min-h-32">
            <Header />
          </div>
          <div className="flex-1 bg-white border">
            Main content
          </div>
          <div className="h-20 bg-blue-300">
            Footer
          </div>
        </div>
        <div className="col-span-2">
          {/* Right sidebar */}
        </div>
      </div>
    </div>
  );
}