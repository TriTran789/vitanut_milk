"use client";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

const page = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleClickSave = () => {
    setIsLoading(true);
    setTimeout(() => {
      router.push("/");
      toast.success("Cập nhật thông tin thành công!");
    }, 1000);
  };

  return (
    <div className="flex flex-col justify-center items-center py-8 gap-4">
      <h1 className="font-bold text-3xl">Thông tin</h1>
      <div className="flex flex-col gap-2 w-[500px] ">
        <label>Tên</label>
        <input type="text" className="border rounded-lg" />
        <label>Số điện thoại</label>
        <input type="text" className="border rounded-lg" />
        <label>Địa chỉ</label>
        <input type="text" className="border rounded-lg" />
      </div>
      <Button onClick={handleClickSave}>
        {isLoading ? <Loader2 className="animate-spin" /> : <>Lưu</>}
      </Button>
    </div>
  );
};

export default page;
