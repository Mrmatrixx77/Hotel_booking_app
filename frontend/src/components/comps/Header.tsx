
// const Header = () => {
//   return (
//     <div className="header bg-black">Header</div>
//   )
// }

// export default Header
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { useAppContext } from "@/context/AppContext";
const Header = () => {

 const {isLoggedIn} =  useAppContext();
  return (
    <div className="bg-red-600 py-6 md:px-[10rem] px-[2rem]" >
      <div className="container mx-auto flex justify-between">
        <span className="text-3xl text-white font-bold tracking-tight">
          <Link to="/" className="underline">Vacations.Com</Link>
        </span>
        <span className="flex space-x-2">
          {isLoggedIn ? (
            <>
              <Link
                className="flex items-center text-white px-3 font-bold hover:border-2 hover:border-black hover:rounded"
                to="/my-bookings"
              >
                My Bookings
              </Link>
              <Link
                className="flex items-center text-white px-3 font-bold hover:border-2 hover:border-black hover:rounded"
                to="/my-hotels"
              >
                My Hotels
              </Link>
              {/* <SignOutButton /> */}
            </>
          ) : (
            <Link
              to="/sign-in"
            >
              <Button variant="default" className="text-[1rem] hover:border-2 hover:border-white"> Log in </Button>
              
            </Link>
            
          )}
          
        </span>
      </div>
    </div>
  );
};

export default Header;