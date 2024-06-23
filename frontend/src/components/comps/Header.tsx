/* eslint-disable @typescript-eslint/no-unused-vars */

import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { useAppContext } from "@/context/AppContext";
import * as apiClient from "../../api-client";
import { useQueryClient, useMutation } from "react-query";
const Header = () => {

 const {isLoggedIn,showToast} =  useAppContext();
 const QueryClient = useQueryClient();

 const mutation = useMutation(apiClient.SignOut, {
  onSuccess: async () => {
    await QueryClient.invalidateQueries("validateToken")
    showToast({ message: "Signed Out!", type: "SUCCESS" });
  },
  onError: (error: Error) => {
    showToast({ message: error.message, type: "ERROR" });
  },
});

const handleClick = () => {
  mutation.mutate();
};
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
              <Link to="/logout">
              
              <Button variant="default" className="text-[1rem] hover:border-2 hover:border-white" onClick={handleClick}> Sign Out </Button>
              </Link>

            </>
          ) : (
            <Link
              to="/sign-in"
            >
              <Button variant="default" className="text-[1rem] hover:border-2 hover:border-white"> Sign In </Button>
              
            </Link>
            
          )}
          
        </span>
      </div>
    </div>
  );
};

export default Header;