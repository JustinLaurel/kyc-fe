"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push("/user/make");

    // router is not referentially stable. To put router in dependencies array without causing a trillion push calls, gymnastics will need to be performed
    // Dan Abramov is an idiot
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div></div>;
}
