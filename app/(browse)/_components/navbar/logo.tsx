import Link from "next/link";
import { Poppins } from "next/font/google";

const font = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const Logo = () => {
  return (
    <Link href="/">
      <div className="flex justify-between">
      <div className="  gap-x-4 hover:opacity-90 transition">
        SETAPP
      </div>
   
       
  
      </div>
    </Link>
  );
};
