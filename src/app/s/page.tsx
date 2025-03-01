const SorryPage = () => {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center">
        <h1 className="text-4xl font-bold text-red-600 mb-4">I am so sorry! 😿</h1>

        {/* Crying Cat GIF */}
        <img
          src="https://i.pinimg.com/474x/10/50/1b/10501b3d7836af036ff684ed5b43d642.jpg"
          alt="Crying Cat"
          className="w-64 h-64 rounded-lg shadow-lg"
        />

        <p className="mt-4 text-lg text-gray-700">Please click below to go back!</p>

        {/* Go Back Button */}
        <a
          href="/memo"
          className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
        >
          Go Back Home
        </a>
      </div>
    );
  };

  export default SorryPage;
