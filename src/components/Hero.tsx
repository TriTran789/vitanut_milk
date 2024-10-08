import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay"

import Slider1 from "../../public/slider1.png"
import Slider2 from "../../public/slider2.png"
import Image from "next/image";

const Hero = () => {
  return (
    <Carousel
      className="w-full"
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
    >
      <CarouselContent>
        <CarouselItem><Image src={Slider1} alt="slider1" /></CarouselItem>
        <CarouselItem><Image src={Slider2} alt="slider2" /></CarouselItem>
      </CarouselContent>
    </Carousel>
  );
};

export default Hero;
