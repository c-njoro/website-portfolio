import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Structure from "../components/Structure";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Structure>
      <Component {...pageProps} />
    </Structure>
  );
}
