"use client";

import { useSessionContext } from "supertokens-auth-react/recipe/session";
import { Button } from "./ui/button";
import { CircleUserRound, Loader2 } from "lucide-react";
import { signOut } from "supertokens-web-js/recipe/session";
import Link from "next/link";

export const HomeClientComponent = () => {
  const session = useSessionContext();

  if (session.loading) {
    return (
      <Button>
        <Loader2 className="animate-spin" />
      </Button>
    );
  }

  if (session.doesSessionExist === false) {
    return (
      <Link href={`/auth`}>
        <Button>Đăng Nhập</Button>
      </Link>
    );
  }

  return (
    <div className="flex gap-4 items-center">
      <Button onClick={() => signOut()}>Đăng xuất</Button>
      <CircleUserRound className="text-[#eeb415] h-8 w-8" />
    </div>
  );
};
