"use client";
import React, { useEffect, useState, useTransition } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";
import apple from "../../../images/Apple-Logo.png";
import google from "../../../images/google-icon-2048x2048-czn3g8x8.png";
import { SubmitHandler, useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

type Inputs = {
  phone: number;
  email: string;
  password: string;
  offers: boolean;
  rules: boolean;
};

const SignUpPage = () => {
  const [isPending, startTransition] = useTransition();
  const [offers, setOffers] = useState(false);
  const [rules, setRules] = useState(false);
  const [error, setError] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Inputs>();
  useEffect(() => {
    if (offers && rules) {
      setError("");
    }
  }, [offers, rules]);
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    if (!offers && !rules) {
      setError("Please agree with policies to continue");
    } else {
      startTransition(async () => {
        const values = {
          phone: data.phone,
          email: data.email,
          password: data.password,
          offers: offers,
          rules: rules,
        };
        try {
          const response = await axios.post(
            "https://dev-api.lazyfolks.in/accounts/signup/",
            values
          );

          if (response.data.status === 400) {
            toast.success("Account created successful.");
            setOffers(false);
            setRules(false);
            reset();
          }
        } catch (error: any) {
          toast.error(error.message);
        }
      });
    }
  };

  const handleOffer = () => {
    setOffers(!offers);
  };
  const handleRules = () => {
    setRules(!rules);
  };

  return (
    <div className="w-full rounded shadow-2xl flex justify-center p-8 border-t-2 z-50 mt-16 lg:mt-0">
      <div className="w-full">
        <h1 className="text-xl mb-10 text-center">
          Start your Setapp membership
        </h1>
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
        <form onSubmit={handleSubmit(onSubmit)} className="my-5 flex-col">
          <Input
            className="rounded-r-none rounded focus-visible:ring-0   focus-visible:ring-offset-0 border border-black/20 focus:border-black/40 outline-none pl-4 pr-10 w-full py-3"
            placeholder="Your phone"
            type="text"
            {...register("phone", {
              required: "Phone is required",
              pattern: {
                value: /^\d+$/,
                message: "Phone must be a number",
              },
            })}
          />
          {errors.phone && (
            <span className="text-red-400 text-sm mt-1">
              {errors.phone.message}
            </span>
          )}
          <Input
            className={cn(
              "rounded-r-none rounded focus-visible:ring-0   focus-visible:ring-offset-0 border border-black/20 focus:border-black/40 outline-none pl-4 pr-10 w-full py-3 mt-5",
              errors.phone && "mt-2"
            )}
            placeholder="Your email"
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: "Invalid email address",
              },
            })}
          />
          {errors.email && (
            <span className="text-red-400 text-sm mt-1">
              {errors.email.message}
            </span>
          )}
          <Input
            className={cn(
              "rounded-none  rounded-l-sm focus-visible:ring-0   focus-visible:ring-offset-0 border border-black/20 focus:border-black/40 outline-none pl-4 pr-10 w-full py-3 mt-5",
              errors.email && "mt-2"
            )}
            placeholder="Create password"
            type="password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters",
              },
              pattern: {
                value: /^(?=.*[a-z])(?=.*[A-Z])/,
                message: "At least 1 uppercase and 1 lowercase letter",
              },
            })}
          />
          {errors.password && (
            <span className="text-red-400 text-sm mt-1">
              {errors.password.message}
            </span>
          )}
          <div className={cn("flex gap-x-2 mt-5", errors.password && "mt-2")}>
            <Checkbox onClick={handleOffer} checked={offers} />{" "}
            <h3 className="text-[15.4px] text-muted-foreground w-80">
              I want to get pro advice on Mac apps and exclusive member offers.
            </h3>
          </div>
          <div className="flex gap-x-2 mt-5 w-80">
            <Checkbox onClick={handleRules} checked={rules} />{" "}
            <h3 className="text-[15.4px] text-muted-foreground">
              Accept{" "}
              <span className="text-[#EA842E] hover:underline">
                Terms of Service
              </span>
              ,{" "}
              <span className="text-[#EA842E] hover:underline">
                Privacy Policy
              </span>{" "}
              and{" "}
              <span className="text-[#EA842E] hover:underline">
                Cookie Policy
              </span>
            </h3>
          </div>
          <div className="text-red-400 text-sm my-3">{error}</div>
          <Button className="w-full" disabled={isPending}>
            {" "}
            Continue
          </Button>
        </form>
        <div className="flex justify-center gap-x-1">
          <h2 className=" text-muted-foreground text-[15px]">
            Got an account?
          </h2>
          <Link href={"/login"}>
            <span className="text-center text-[#EA842E] hover:underline text-[15.4px]">
              Sign in
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
