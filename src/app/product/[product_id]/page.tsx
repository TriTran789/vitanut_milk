"use client";
import { products } from "@/app/config/product";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Loader2 } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

const page = ({ params }: { params: { product_id: string } }) => {
  const router = useRouter();
  const product = products[Number(params.product_id)];
  const [curImage, setCurImage] = useState(product.image[0]);
  const [check, setCheck] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const handleClickBuy = () => {
    setIsLoading(true);
    setTimeout(() => {
      router.push("/");
      toast.success("Mua hàng thành công!");
    }, 1000);
  };

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
        <p className="max-w-[700px]">{product.description}</p>
        <p>
          <span className="font-semibold">Giá: </span>350,000 đồng
        </p>
        <div className="flex flex-row gap-2">
          <label>Số lượng</label>
          <input
            type="number"
            className="border rounded-lg px-4"
            defaultValue={1}
          />
        </div>
        <div className="flex flex-row gap-2 items-center">
          <Checkbox
            defaultChecked={true}
            onClick={() => setCheck((pre) => !pre)}
          />
          <p>Sử dụng địa chỉ mặc định</p>
        </div>
        <div className={`${check ? "hidden" : "flex"} flex-col gap-2`}>
          <div className="flex flex-row gap-2">
            <label className="min-w-64">Tên</label>
            <input type="text" className="border rounded-lg" />
          </div>
          <div className="flex flex-row gap-2">
            <label className="min-w-64">Số điện thoại</label>
            <input type="text" className="border rounded-lg" />
          </div>
          <div className="flex flex-row gap-2">
            <label className="min-w-64">Địa chỉ</label>
            <input type="text" className="border rounded-lg" />
          </div>
        </div>
        <div>
          <Button onClick={handleClickBuy}>
            {isLoading ? <Loader2 className="animate-spin" /> : <>Mua Ngay</>}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default page;
