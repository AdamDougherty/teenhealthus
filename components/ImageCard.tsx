import Image from "next/image";
import { cn } from "@/lib/utils";

export function ImageCard({
  src,
  alt,
  aspectRatio = "3/2",
  className,
}: {
  src: string;
  alt: string;
  aspectRatio?: string;
  className?: string;
}) {
  return (
    <div
      className={cn("relative overflow-hidden rounded-2xl", className)}
      style={{ aspectRatio }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
  );
}
