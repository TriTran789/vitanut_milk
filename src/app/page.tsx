"use client";
import Hero from "@/components/Hero";
import { products } from "./config/product";
import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

export default function Home() {
  return (
    <div className="px-4 py-8">
      <Hero />
      <h1 className="font-bold text-3xl my-8">Sản Phẩm</h1>
      <div className="flex flex-row justify-between flex-wrap">
        {products.map((product) => (
          <Link href={`/product/${product.id}`} className="" key={product.id}>
            <Card className="w-[300px]">
              <CardContent>
                <Image src={product.image[0]} alt={product.name} />
              </CardContent>
              <CardFooter>
                <h3>{product.name}</h3>
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
