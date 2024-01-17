import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import React from "react";
 

const RecoveryPassword = () => {
  return (
    <div className="w-full h-96 rounded border-t-2 shadow-xl flex justify-center items-center p-8 mt-20">
      <div className="w-full">
        <h1 className="text-xl mb-6 text-center font-semibold">Password recovery</h1>
        <div className="text-sm">
        <h2>Enter your email address and we&apos;sll send you a </h2>
        <h2 className="text-center">link to reset your password.</h2>
        </div>
        <div className="my-5 flex-col">
          <Input
            className="rounded-r-none rounded focus-visible:ring-0   focus-visible:ring-offset-0 border border-black/20 focus:border-black/40 outline-none pl-4 pr-10 w-full py-3"
            placeholder="Enter your email"
            type="email"
          />
           
          <Button className="w-full my-5">Reset password</Button>
        </div>
        <Link href={"/login"}>
          <div className="text-center text-[#EA842E] hover:underline">
            Go back
          </div>
        </Link>
      </div>
    </div>
  );
};

export default RecoveryPassword;
