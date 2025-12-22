"use client";
import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";
import Image from "next/image";
import Tea from "../public/tea.gif";

const Navbar = () => {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        Signed in as {session.user.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }
  return (
    <nav className="flex bg-gray-900 items-center justify-between px-20 py-4">
      <Link href="/" className="flex items-center space-x-2">
        <Image src={Tea} alt="Tea Gif" width={44} className="invertImg" />
        <span className="font-bold">Get Me a Chai</span>
      </Link>

      <button className="bg-[#00C950] hover:bg-green-700 text-white px-6 py-2 rounded-4xl">
        Login
      </button>
    </nav>
  );
};

export default Navbar;
