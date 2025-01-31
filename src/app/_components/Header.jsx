"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useUser, UserButton } from "@clerk/nextjs";
import Link from "next/link";

function header() {
  const { user, isSignedIn } = useUser();
  return (
    <div className="p-5 flex  justify-between items-center border shadow-sm">
      <div className="flex flex-row items-center">
        <Image src={"/chart-donut.svg"} alt="logo " width={40} height={25} />
        {/*lOGO */}
        <span className="text-blue-800  font-bold text-xl">Finan Smart</span>
      </div>
      {isSignedIn ? (
        <UserButton />
      ) : (
        <div className="flex gap-3 items-center">
          <Link href="/dashboard">
            <Button variant="outline" className="rounded-full">
              Dashboard
            </Button>
          </Link>
          <Link href="/dashboard">
            <Button className="rounded-full">Get started</Button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default header;
