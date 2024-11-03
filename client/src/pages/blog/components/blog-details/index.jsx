import { useParams } from "react-router-dom";
import useFetch from "../../../../hooks/get";

export default function BlogDetails() {
  const { id } = useParams();
  const { data, loading, error } = useFetch(`/blog/${id}`);

  if (loading)
    return <div className="text-center mt-10 text-xl">Yükleniyor...</div>;
  if (error)
    return (
      <div className="text-center mt-10 text-red-600">
        Bir hata oluştu: {error.message}
      </div>
    );

  return (
    <div className="max-w-4xl mx-auto p-6 mt-10 bg-white shadow-lg rounded-lg">
      <header className="text-center">
        <h1 className="text-3xl font-bold text-gray-800">
          {data.blogs?.title}
        </h1>
        <div className="text-gray-600 mt-2">
          <div className="flex items-center justify-center">
            <img
              src={data.blogs?.writer_image}
              alt={`${data.blogs?.writer_f} ${data.blogs?.writer_l}`}
              className="w-10 h-10 rounded-full border-2 border-gray-300 mr-2"
            />
            <div>
              <span className="block">
                {data.blogs?.writer_f} {data.writer_l}
              </span>
              <span className="text-sm text-gray-500">
                {data.blogs?.writer_title}
              </span>
            </div>
          </div>
          <span className="block mt-1">
            {new Date(data.blogs?.created_at).toLocaleDateString()}
          </span>
        </div>
      </header>

      <main className="mt-8">
        <img
          src={data.blogs?.image}
          alt={data.blogs?.title}
          className="w-full h-64 object-cover rounded-lg shadow-md mb-6"
        />
        <p className="text-gray-700 text-lg leading-relaxed">
          {data.blogs?.short_text}
        </p>
        <div className="mt-4 text-gray-700 text-lg leading-relaxed">
          {data.blogs?.text}
        </div>
      </main>

      <footer className="mt-10">
        <div className="border-t pt-4 text-gray-500 text-sm">
          {/* Diğer footer içerikleri buraya eklenebilir */}
        </div>
      </footer>
    </div>
  );
}
