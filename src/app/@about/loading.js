export default function Loading() {
    return (
        <div className="flex h-screen items-center justify-center">
            <div className="animate-pulse">
                <div className="mb-2 h-4 w-20 rounded bg-gray-300"></div>
                <div className="mb-2 h-4 w-40 rounded bg-gray-300"></div>
                <div className="mb-2 h-4 w-60 rounded bg-gray-300"></div>
                <div className="mb-2 h-4 w-80 rounded bg-gray-300"></div>
                <div className="mb-2 h-4 w-40 rounded bg-gray-300"></div>
                <div className="mb-2 h-4 w-20 rounded bg-gray-300"></div>
            </div>
        </div>
    );
}
