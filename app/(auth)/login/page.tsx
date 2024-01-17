import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import React from "react";
import apple from "../../../images/Apple-Logo.png";
import google from "../../../images/google-icon-2048x2048-czn3g8x8.png";
import Image from "next/image";

const LoginPage = () => {
  return (
    <div className="w-full h-[450px] rounded border-t-2 shadow-2xl flex justify-center p-8 mt-20 lg:mt-10">
      <div className="w-full">
        <h1 className="text-xl mb-10 text-center">Sign in to your account</h1>
        <div className="flex gap-x-5 ">
          <button className="border-2 rounded flex justify-center items-center  px-3 py-2 gap-x-5 w-full">
            <Image
              src={apple}
              alt="apple"
              width={100}
              height={100}
              className="h-6 w-12"
            />
          </button>
          <button className="border-2 rounded px-3 flex justify-center items-center w-full">
            <Image
              src={google}
              alt="apple"
              width={100}
              height={100}
              className="h-6 w-6"
            />
          </button>
        </div>
        <div className="border-b-2 py-4" />
        <div className="-mt-3 bg-white text-sm w-1/2 mx-auto text-center">
          or sign in with email
        </div>
        <div className="my-5 flex-col">
          <Input
            className="rounded-r-none rounded focus-visible:ring-0   focus-visible:ring-offset-0 border border-black/20 focus:border-black/40 outline-none pl-4 pr-10 w-full py-3"
            placeholder="Your email"
            type="email"
          />
          <div className="flex">
            <Input
              className="rounded-none  rounded-l-sm focus-visible:ring-0   focus-visible:ring-offset-0 border border-black/20 focus:border-black/40 outline-none pl-4 pr-10 w-full py-3 my-5"
              placeholder="Your password"
              type="password"
            />
            <Link href={"/recover-password"}>
              <div
                className="text-center text-[#EA842E] hover:underline 
            rounded-l-none rounded focus-visible:ring-0 focus-visible:ring-offset-0 border border-black/20 focus:border-black/40 outline-none  px-4  py-[7px] my-5"
              >
                Forgot?
              </div>
            </Link>
          </div>
          <Button className="w-full">Sign in</Button>
        </div>
        <Link href={"/signup"}>
          <div className="text-center text-[#EA842E] hover:underline">
            Create an account
          </div>
        </Link>
      </div>
    </div>
  );
};

export default LoginPage;
