


import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="relative w-full h-[600px] overflow-hidden flex items-center justify-center">
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: "url('/campus-hero.png')" }}
      />

      <div className="absolute inset-0 bg-gradient-to-r from-[#2EA6D9]/85 via-[#082E5F]/45 to-[#7C2D3B]/75 z-10" />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="absolute top-[20px] left-0 right-0 mx-auto w-full max-w-4xl text-center z-20 px-4"
      >
        {/* <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 leading-tight drop-shadow-md">
          TG ECET (WP)-2026
        </h1> */}
        <h1
  className="text-4xl md:text-6xl leading-tight drop-shadow-md"
  style={{
    fontFamily: "Arial, Helvetica, sans-serif",
    fontWeight: "500",
    letterSpacing: "0px",
    lineHeight: "1.2",
    color: "#ffffff",
  }}
>
  M.E/M.Tech.(CEEP) ADMISSIONS 2025-2026
</h1>

        {/* <p className="text-lg md:text-xl text-white mb-10 max-w-2xl mx-auto font-medium">
         Gateway to B.E./B.Tech. programmes for Working Professionals (Direct Admission into Second Year: Lateral Entry for Diploma Holders)
        </p> */}
      </motion.div>
    </div>
  );
}