import Navbar from './pages/Navbar/Navbar';
import MainContent from './MainContent';

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

        <div className="entire-website">
            <Navbar />
            <MainContent />
        </div>
    );
}
