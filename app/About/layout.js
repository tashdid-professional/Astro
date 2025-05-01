// import { div } from "framer-motion/dist/types/client";
// import AboutNav from "../../components/AboutNav"


export default function AboutLayout({ children }) {
    return (
        <div>
          {/* <AboutNav/> */}
         <div className="flex space-x-20  text-black lg:pt-20 px-[5%]"> 
         
          {children}
          </div> 
      </div>
      
    );
  }
  