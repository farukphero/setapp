import { Navbar } from "./_components/navbar";

const BrowseLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="lg:w-11/12 mx-auto h-full flex flex-col items-center justify-center space-y-6">
      <Navbar />
      <div className="flex h-full pt-20">{children}</div>
    </div>
  );
};

export default BrowseLayout;
