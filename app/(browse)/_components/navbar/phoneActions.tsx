import React from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { PhoneActionsItems } from "./actions";
import { X, MenuIcon } from "lucide-react";

const PhoneActions = () => {
  return (
    <div className="flex lg:hidden">
      <Drawer>
        <DrawerTrigger>
          <MenuIcon />
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <div className="flex mb-10 gap-x-52 px-12">
              <DrawerTitle className="text-xl font-semibold">
                SETAPP
              </DrawerTitle>
              <DrawerClose className="">
                <X className="h-6 w-6 font-semibold" />
              </DrawerClose>
            </div>
            <DrawerDescription>
              <PhoneActionsItems />
            </DrawerDescription>
          </DrawerHeader>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default PhoneActions;
