import Header from './pages/Header/Header';

export default function MainContent() {
    return (
        <main className="mx-auto grid min-h-screen grid-cols-10">
            <div className="hidden md:col-span-1 md:block lg:col-span-2">
                {/* Left sidebar */}
            </div>
            <div className="col-span-10 flex h-full flex-col gap-4 md:col-span-8 lg:col-span-6">
                <div className="h-96 min-h-32">
                    <Header />
                </div>
                <div className="flex-1 border bg-white">Main content</div>
                <div className="h-20 bg-blue-300">Footer</div>
            </div>
            <div className="hidden md:col-span-1 md:block lg:col-span-2">
                {/* Right sidebar */}
            </div>
        </main>
    );
}
