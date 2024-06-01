import Image from "next/image"

const Hero = () => {
  return (
    <div className="h-[90vh] w-full relative">
      <Image
        src="/hero.webp"
        loading="eager"
        priority={true}
        quality={90}
        alt="Photo by @thevoncomplex https://unsplash.com/@thevoncomplex"
        className="absolute inset-0"
        draggable="false"
        fill
        sizes="100vw"
        style={{
          objectFit: "contain",
        }}
      />
    </div>
  )
}

export default Hero
