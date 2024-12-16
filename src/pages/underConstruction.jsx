import SUCBG from "../assets/customIllustration/BGCropped.png"; // Import the background image

function SUC() {
  return (
    <div
      className="flex flex-col items-start justify-center min-h-screen bg-cover bg-center px-8 sm:px-16 md:px-28"
      style={{
        backgroundImage: `url(${SUCBG})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <h1 className="text-4xl sm:text-5xl font-vermin text-gray-800 mb-4 ml-8 sm:ml-12 md:ml-16">
        Under Construction
      </h1>

      <p className="text-xl sm:text-2xl md:text-3xl font-speedPixel text-gray-600 ml-8 sm:ml-12 md:ml-16 w-full sm:w-[500px] md:w-[600px] mb-6">
        We are working hard to bring you the best experience. Please check back later.
      </p>

      <p className="text-sm sm:text-xl md:text-xl font-speedPixel text-gray-600 ml-8 sm:ml-12 md:ml-16 w-full sm:w-[500px] md:w-[600px]">
        Our team is currently upgrading the site to introduce new features that
        will improve your experience. We appreciate your patience during this
        process and assure you that the site will be back online shortly.
      </p>

      <p className="text-sm sm:text-lg md:text-lg font-speedPixel text-gray-600 ml-8 sm:ml-12 md:ml-16 w-full sm:w-[500px] md:w-[600px] mt-4">
        In the meantime, feel free to contact us for any urgent inquiries or
        check back later for updates on the progress. Thank you for your
        understanding!
      </p>
    </div>
  );
}

export default SUC;