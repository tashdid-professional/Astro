// import { div } from "framer-motion/dist/types/client";
import StoreNav from "../../components/StoreNav"


export default function StoreLayout({ children }) {
    return (
        <div>
          <StoreNav/>
         
          
          {children}
          
      </div>
      
    );
  }
  