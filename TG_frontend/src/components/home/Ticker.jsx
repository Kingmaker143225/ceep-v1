// import { tickerItems } from "@/data/tickerItems";

// export default function Ticker() {
//   return (
//     <div className="w-full bg-secondary py-2 flex items-center overflow-hidden border-y border-secondary-foreground/10 relative z-30">
//       <div className="bg-[#06254D] text-white font-bold text-xs px-4 py-1.5 absolute left-0 z-10 h-full flex items-center shadow-[4px_0_10px_rgba(0,0,0,0.1)]">
//         LATEST
//       </div>
//       <div className="flex-1 overflow-hidden ml-24 group">
//         <div className="flex whitespace-nowrap animate-marquee group-hover:[animation-play-state:paused]">
//           {[...tickerItems, ...tickerItems].map((item, i) => (
//             <span key={i} className="text-secondary-foreground font-medium text-sm mx-6 flex items-center">
//               <span className="w-1.5 h-1.5 rounded-full bg-[#06254D] mr-3 shrink-0" />
//               {item}
//             </span>
//           ))}
//         </div>
//       </div>
//       <style dangerouslySetInnerHTML={{__html: `
//         @keyframes marquee {
//           0% { transform: translateX(0); }
//           100% { transform: translateX(-50%); }
//         }
//         .animate-marquee {
//           animation: marquee 30s linear infinite;
//         }
//       `}} />
//     </div>
//   );
// }










import { tickerItems } from "@/data/tickerItems";

export default function Ticker() {
  return (
    <div className="w-full bg-secondary py-2 flex items-center overflow-hidden border-y border-secondary-foreground/10 relative z-30">
      
      {/* Latest Label */}
      <div className="bg-[#06254D] text-white font-bold text-xs px-4 py-1.5 absolute left-0 z-10 h-full flex items-center shadow-[4px_0_10px_rgba(0,0,0,0.1)]">
        LATEST
      </div>

      {/* Ticker Content */}
      <div className="flex-1 overflow-hidden ml-24 group">
        <div className="flex whitespace-nowrap animate-marquee group-hover:[animation-play-state:paused]">

          {[...tickerItems, ...tickerItems].map((item, i) => (
            <a
              key={i}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary-foreground font-medium text-sm mx-6 flex items-center hover:underline cursor-pointer"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#06254D] mr-3 shrink-0" />
              {item.text}
            </a>
          ))}

        </div>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
            @keyframes marquee {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-50%);
              }
            }

            .animate-marquee {
              animation: marquee 30s linear infinite;
            }
          `,
        }}
      />
    </div>
  );
}