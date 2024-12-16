import { NavLink } from "react-router-dom"; // Import NavLink from React Router
import SUCBG from "../assets/customIllustration/SUCIllustration.png"; // Import the illustration image
import HomeBackground from '../components/homeBackground';

function SUC() {
  return (
    <>
      <HomeBackground />
      <div className="flex flex-col sm:flex-row items-center justify-center min-h-screen bg-cover bg-center px-8 sm:px-16 md:px-28 backdrop-blur-xl">
        <div className="flex flex-col sm:flex-row items-start sm:items-center sm:space-x-4 mb-6 w-full sm:w-[70%] md:w-[60%]">
          <div className="flex flex-col">
            <h1 className="text-4xl sm:text-5xl font-vermin text-white mb-4 drop-shadow-[3px_3px_0px_#000]">
            ⚠️ Under Construction
            </h1>

            <p className="text-xl sm:text-2xl md:text-3xl font-speedPixel text-slate-200 mb-6 w-full sm:w-[500px] md:w-[600px] drop-shadow-[3px_3px_0px_#000]">
              We are working hard to bring you the best experience. Please check back later.
            </p>

            <p className="text-sm sm:text-xl md:text-xl font-speedPixel text-slate-200 mb-6 w-full sm:w-[500px] md:w-[600px] drop-shadow-[3px_3px_0px_#000]">
              Our team is currently upgrading the site to introduce new features that will improve your experience. We appreciate your patience during this process and assure you that the site will be back online shortly.
            </p>

            <NavLink to="/merchandise" className="px-6 py-3 w-fit mt-10 text-lg font-crossFly italic border-2 border-white text-white bg-rose-500 hover:bg-rose-600 rounded-lg drop-shadow-lg rounded-tl-3xl rounded-br-3xl hover:rounded-lg hover:text-white hover:scale-[.97] transition-all ease-in-out duration-75" >
              Buy Our Merchandise
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default SUC;
