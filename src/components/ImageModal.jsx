import Image from "next/image";

export default function ImageModal({ image }) {
  if (image === null) return null;

  return (
    <div className="fixed start-0 top-0 w-screen h-screen flex items-center justify-center z-50 bg-card-hover">
      <div className="relative w-[80%] h-[80%] border-8 border-white">
        <Image
          alt={`Project image`}
          src={image.src}
          style={{
            display: 'block'
          }}
          sizes="500px"
          fill
          placeholder={image.base64}
          className="object-contain"
        />
      </div>
    </div>
  );
}
