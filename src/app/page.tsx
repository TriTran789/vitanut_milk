'use client'
import { signOut } from "supertokens-web-js/recipe/session";
import { HomeClientComponent } from "@/components/homeClientComponent";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Hero from "@/components/Hero";

export default function Home() {

  const handleLogout = async () => {
    await signOut();
  };

  return (
    <div className="px-4 py-8">
      <Hero />
      <h1 className="font-bold text-3xl my-8">Sản Phẩm</h1>
    </div>
  );
}
