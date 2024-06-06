import { Link } from "react-router-dom";

const Footer = () => {
    return (
      <div className="bg-red-600 py-10">
        <div className="container mx-auto flex justify-between items-center">
          {/* <span className="underline text-3xl text-white font-bold tracking-tight cursor-pointer">
            Vacations.Com
          </span> */}
          <span className="text-3xl text-white font-bold tracking-tight">
          <Link to="/" className="underline">Vacations.Com</Link>
        </span>
          <span className="text-white font-bold tracking-tight flex gap-4">
            <p className="cursor-pointer">Privacy Policy</p>
            <p className="cursor-pointer">Terms of Service</p>
          </span>
        </div>
      </div>
    );
  };
  
  export default Footer;