import { getImage } from "astro:assets";
import type { ImageMetadata } from "astro";

export async function prepareBannerImage(source: ImageMetadata) {
  const image = await getImage({
    src: source,
    format: "webp",
  });

  return {
    src: image.src,
    width: image.attributes.width as number,
    height: image.attributes.height as number,
    type: "image/webp",
  };
}
