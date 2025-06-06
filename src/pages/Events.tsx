import React, { useState } from 'react';
import inaugurationVideo from '../assets/law.mp4';
import workshopVideo from '../assets/law2.mp4';

const videoData = [
  { title: 'Inauguration', src: inaugurationVideo },
  { title: 'Cooking without fire Highlights', src: workshopVideo },
];

function Events() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  return (
    <div className="max-w-5xl mx-auto px-6 py-16 bg-gradient-to-br from-white to-blue-50 rounded-xl shadow-sm">
      <h1 className="text-5xl font-extrabold text-center text-blue-900 mb-4 tracking-tight font-serif">
        🎥 Events Gallery
      </h1>
      <p className="text-center text-gray-600 text-lg mb-12">
        Catch the highlights from our most memorable moments.
      </p>

      <div className="grid gap-12 sm:grid-cols-1 md:grid-cols-2 place-items-center">
        {videoData.map((video, index) => (
          <div
            key={index}
            className="w-full max-w-md bg-white rounded-3xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer overflow-hidden border border-gray-200"
            onClick={() => setSelectedVideo(video.src)}
          >
            <div className="overflow-hidden w-full">
              <video
                className="w-full h-80 object-cover pointer-events-none"
                muted
              >
                <source src={video.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="p-5 text-center">
              <h2 className="text-xl font-semibold text-blue-800">{video.title}</h2>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedVideo && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center backdrop-blur-sm"
          onClick={() => setSelectedVideo(null)}
        >
          <div
            className="relative bg-white rounded-2xl shadow-2xl max-w-4xl w-full mx-4 p-4 animate-fadeIn"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 text-gray-700 hover:text-red-600 text-3xl font-bold z-50"
              onClick={() => setSelectedVideo(null)}
            >
              &times;
            </button>
            <div className="flex justify-center items-center h-[70vh]">
              <video className="w-full h-full object-contain rounded-xl" controls autoPlay>
                <source src={selectedVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Events;
