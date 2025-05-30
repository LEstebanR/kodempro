"use client";

import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function Home() {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center gap-1">
      <DotLottieReact
        src="https://lottie.host/37dfd887-8c9a-462c-ac65-c73631a22ad8/88lAuISLsF.lottie"
        loop
        autoplay
        style={{ height: "400px", width: "400px" }}
      />
      <p className="text-center text-3xl font-bold text-sky-700">
        Pronto estaremos disponibles
      </p>
    </div>
  );
}
