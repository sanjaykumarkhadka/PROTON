import { render, size, alt } from "../_og/products";

export const runtime = "edge";
export const contentType = "image/png";
export { size, alt };

export default function TwitterImage() {
  return render();
}
