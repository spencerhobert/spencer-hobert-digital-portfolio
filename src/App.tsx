import Navbar from './pages/Navbar/Navbar'
import Header from './pages/Header/Header'

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
            <div className="mx-auto grid min-h-screen grid-cols-10">
                <div className="hidden md:col-span-1 md:block lg:col-span-2">
                    {/* Left sidebar */}
                </div>
                <div className="col-span-10 flex h-full flex-col gap-4 md:col-span-8 lg:col-span-6">
                    <div className="h-96 min-h-32 bg-red-500">
                        <Header />
                    </div>
                    <div className="flex-1 border bg-white">Main content</div>
                    <div className="h-20 bg-blue-300">Footer</div>
                </div>
                <div className="hidden md:col-span-1 md:block lg:col-span-2">
                    {/* Right sidebar */}
                </div>
            </div>
        </div>
    )
}
