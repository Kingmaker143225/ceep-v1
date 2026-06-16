// import { Search } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Link } from "wouter";


// export default function OfficialHeader() {
//   return (
//     <header className="bg-background py-4 px-4 border-b">
//       <div className="container mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-4">
        
//         {/* <div className="flex items-center gap-4">
//           <Link href="/">
//             <div className="w-16 h-16 rounded-full bg-[#06254D] flex items-center justify-center text-secondary font-serif text-3xl font-bold shadow-sm shrink-0 hover:opacity-90 transition-opacity cursor-pointer ring-2 ring-secondary/40">
//               P
//             </div>
//           </Link>
//           <div>
//             <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">
//               Government of Telangana
//             </div>
//             <h1 className="text-2xl md:text-3xl font-serif font-bold text-[#06254D] tracking-tight leading-none mb-1">
//               PGCET <span className="text-primary">2026</span>
//             </h1>
//             <p className="text-sm text-muted-foreground font-medium hidden sm:block">
//               Post-Graduate Common Entrance Test • Conducted by Osmania University, Hyderabad on behalf of Telangana State Council of Higher Education (TSCHE)
//             </p>
//           </div>
//         </div> */}

//         <div className="flex items-center gap-6">

//   <img
//     src="left-logo.png"
//     alt="Government Logo"
//     className="h-20 w-auto object-contain"
//   />
//   <div>
//     <p className="text-sm font-semibold tracking-wide text-primary uppercase">
    
//     </p>

//     <h1 className="text-5xl font-serif font-bold text-primary">
//       TG ECET-Working Professionals-2026
//     </h1>

//     <p className="text-lg text-primary mt-2">
//       Telangana Common Entrance Test • Conducted by Osmania University, Hyderabad on behalf of Telangana State Council of Higher Education (TSCHE)
//     </p>
//   </div>
//   <img
//     src="right-logo.png"
//     alt="PGCET Logo"
//     className="h-20 w-auto object-contain"
//   />

//   {/* <div>
//     <p className="text-sm font-semibold tracking-wide text-primary uppercase">
//       Government of Telangana
//     </p>

//     <h1 className="text-5xl font-serif font-bold text-primary">
//       TG ECET-2026
//     </h1>

//     <p className="text-lg text-primary mt-2">
//       Telangana Common Entrance Test • Conducted by Osmania University, Hyderabad on behalf of Telangana State Council of Higher Education (TSCHE)
//     </p>
//   </div> */}

// </div>
// {/* 
//         <div className="flex items-center gap-3 w-full md:w-auto">
//           <div className="relative w-full md:w-64 hidden sm:block">
//             <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
//             <Input 
//               type="search" 
//               placeholder="Search portal..." 
//               className="pl-9 bg-card border-border"
//             />
//           </div>
//           <Link href="/application">
//             <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold px-6 shadow-sm whitespace-nowrap">
//               Apply Now
//             </Button>
//           </Link>
//         </div> */}

//       </div>
//     </header>
//   );
// }







import { Link } from "wouter";

export default function OfficialHeader() {
  return (
    <header className="bg-background py-4 px-4 border-b">
      <div className="container mx-auto max-w-7xl flex items-center justify-between">
        
        {/* LEFT LOGO */}
        <img
          src="left-logo.png"
          alt="Government Logo"
          className="h-[70px] md:h-[90px] lg:h-[110px] w-auto object-contain"
        />

        {/* CENTER CONTENT */}
        <div className="text-center px-4 flex-1">
          
          <h1
  className="text-4xl md:text-5xl leading-tight drop-shadow-md text-[#06254D]"
  style={{
    fontFamily: "Arial, Helvetica, sans-serif",
    fontWeight: "700",
    letterSpacing: "0px",
    lineHeight: "1.2",
    // color: "#1e0973",
  }}
>
  M.E/M.Tech.(CEEP) ADMISSIONS 2025-2026 
</h1>

          {/* <p className="text-sm md:text-base lg:text-lg text-[#06254D] mt-2">
            Telangana Common Entrance Test Conducted by Osmania University,
            Hyderabad 
            <p>on behalf of Telangana  Council of Higher Education (TGCHE)</p>
          </p> */}
          <div
  className="text-xl md:text-2xl lg:text-3xl text-[#06254D] mt-2"
  style={{
    fontFamily: "Arial, Helvetica, sans-serif",
    fontWeight: 600,
    lineHeight: 1.3,
  }}
>
  <p>University College of Engineering (Autonomous)</p>

  <p>OSMANIA UNIVERSITY, HYDERABAD</p>
</div>
        </div>

        

      </div>
    </header>
  );
}