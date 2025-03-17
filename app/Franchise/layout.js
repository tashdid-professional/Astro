// import { div } from "framer-motion/dist/types/client";
import FranchiseeNav from "../../components/FranchiseeNav"


export default function FranchiseLayout({ children }) {
    return (
        <div>
         
          <FranchiseeNav/>
         <div className="flex space-x-20px-10  bg-white text-black pt-32 container mx-auto">
          {children}
          </div>
      </div>
      
    );
  }
  