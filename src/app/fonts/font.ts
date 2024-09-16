// styles/fonts.js
import { Hind, Khand } from "@next/font/google";

const hind = Hind({
  weight: ["400", "600", "700"], // You can customize the weights
  subsets: ["latin"],
});

const khand = Khand({
  weight: ["400", "700"], // Customize as needed
  subsets: ["latin"],
});

export { hind, khand };
