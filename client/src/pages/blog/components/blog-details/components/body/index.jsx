export default function Body({data}) {
    return (
        <main className="mt-8">
            <div className="prose prose-lg text-gray-700 leading-relaxed max-w-none whitespace-pre-line">
                <div>{data.blogs?.text}</div>
                <p className="text-gray-500 text-right px-3 py-3">
                    {new Date(data.blogs?.created_at).toLocaleDateString()}
                </p>
            </div>
        </main>
    )
}