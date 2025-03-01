const images = [
    "/p/i1.jpeg",
    "/p/i2.jpeg",
    "/p/i3.jpeg",
    "/p/i4.jpeg",
    "/p/i5.jpeg",
    "/p/i6.jpeg",
  ];

  const MemoriesPage = () => {
    return (
      <div className="min-h-screen bg-gray-100 flex flex-col items-center p-8">
        <h1 className="text-4xl font-bold text-center mb-6">Our Precious Memories 💖</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Memory ${index + 1}`}
              className="w-full h-64 object-cover rounded-lg shadow-lg"
            />
          ))}
        </div>

        {/* Back Button */}
        <a
          href="/funny"
          className="mt-6 px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
        >
          Go Home
        </a>
      </div>
    );
  };

  export default MemoriesPage;
