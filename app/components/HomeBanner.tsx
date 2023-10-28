import Image from "next/image";

const HomeBanner = () => {
  return (
    <div
      className="
        relative
        bg-gradient-to-r
        from-sky-500
        to-sky-700
        mb-8
     "
    >
      <div
        className="
         py-12
         px-8
         mx-auto
         flex
         flex-col
         items-center
         gap-2
         md:flex-row
         justify-evenly
         
       "
      >
        {/* text */}
        <div className="mb-8 md:mb-0 text-center">
          <h1 className="text-4xl md:text-6xl text-white font-bold mb-4">
            Easter Sale!
          </h1>
          <p className="text-lg md:text-xl text-white mb-2">
            Enjoy discounts on selected items
          </p>
          <p className="text-yellow-400 text-2xl md:text-5xl font-bold">
            GET 50% OFF
          </p>
        </div>
        {/* image */}
        <div
          className="
            w-1/3
            relative
            aspect-video
          "
        >
          <Image
            fill
            src="/banner-image.png"
            alt="banner image"
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
