import { Logo } from "./logo";
import { Actions } from "./actions";
import PhoneActions from "./phoneActions";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full lg:w-11/12  h-16 z-50 px-2 lg:px-4  flex justify-between items-center">
      <Logo />

     <div className="hidden lg:flex">
     <Actions />
     </div>
      <PhoneActions/>
    </nav>
  );
};
