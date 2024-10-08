"use client";
import { products } from "@/app/config/product";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState } from "react";

const page = ({ params }: { params: { product_id: string } }) => {
  const product = products[Number(params.product_id)];
  const [curImage, setCurImage] = useState(product.image[0]);

  return (
    <div className="flex flex-row px-16 py-8 gap-8">
      <div className="flex flex-col w-96 gap-2">
        <Image src={curImage} alt={`image`} />
        <div className="flex flex-row justify-between">
          {product.image.map((image, index) => (
            <Image
              onClick={() => setCurImage(image)}
              key={index}
              src={image}
              alt="image"
              className="w-28 hover:cursor-pointer"
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col flex-1 gap-8">
        <h1 className="font-bold text-3xl">{product.name}</h1>
        <p>{product.description}</p>
        <div className="flex flex-row gap-2">
          <label>Số lượng</label>
          <input type="number" className="border rounded-lg" />
        </div>
        <div>
          <Button>Mua Ngay</Button>
        </div>
      </div>
    </div>
  );
};

export default page;
