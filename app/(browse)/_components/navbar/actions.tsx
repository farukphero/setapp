import Link from "next/link";

export const Actions = async () => {
  return (
    <ul className="flex  gap-x-6">
      <li className=" cursor-pointer hover:underline">How it works</li>

      <li className=" cursor-pointer hover:underline">All apps</li>
      <li className=" cursor-pointer hover:underline">Pricing</li>
      <li className=" cursor-pointer hover:underline">For Teams</li>
      <li className=" cursor-pointer hover:underline">Blog</li>
      <li className=" cursor-pointer hover:underline">Podcast</li>
      <Link href={"/login"}>
        <li className=" cursor-pointer hover:underline">Sign in</li>
      </Link>
    </ul>
  );
};
export const PhoneActionsItems = async () => {
  return (
    <div className="pl-12">
      <ul className="flex-col text-start gap-y-10">
        <li className="text-black cursor-pointer hover:underline text-xl font-medium">
          How it works
        </li>
        <li className="text-black cursor-pointer hover:underline text-xl font-medium pt-4">
          All apps
        </li>
        <li className="text-black cursor-pointer hover:underline text-xl font-medium pt-4">
          Pricing
        </li>
        <li className="text-black cursor-pointer hover:underline text-xl font-medium pt-4">
          For Teams
        </li>
        <li className="text-black cursor-pointer hover:underline text-xl font-medium pt-4">
          Blog
        </li>
        <li className="text-black cursor-pointer hover:underline text-xl font-medium pt-4">
          Podcast
        </li>
        <li className="text-black cursor-pointer hover:underline text-xl font-medium pt-4">
          Sign in
        </li>
      </ul>
    </div>
  );
};
