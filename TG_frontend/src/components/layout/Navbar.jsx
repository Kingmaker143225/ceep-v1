
// import { useState } from "react";
// import { Link, useLocation } from "wouter";
// import { Menu, X, ChevronRight } from "lucide-react";

// const NAV_LINKS = [
//   { href: "/", label: "Home" },
//   { href: "/about", label: "About" },
//   // { href: "/important-dates", label: "Important Dates" },
//   // { href: "/application", label: "Application" },
//   // { href: "/syllabus", label: "Syllabus" },
//   // { href: "/courses", label: "Courses" },
//   { href: "/contact", label: "Contact" },
//   // { href: "/faq", label: "FAQ" },
// ];

// export default function Navbar() {
//   const [location] = useLocation();
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <nav className="bg-[#2EA6D9] text-white sticky top-0 z-40 shadow-md">
//       <div className="container mx-auto max-w-7xl px-4">

//         {/* Desktop Nav */}
//         <div className="hidden lg:flex items-center justify-between h-14">
//           <ul className="flex items-center gap-1">
//             {NAV_LINKS.map((link) => {
//               const isActive = location === link.href;

//               return (
//                 <li key={link.href}>
//                   <Link href={link.href}>
//                     <div
//                       className={`px-3 py-4 text-sm font-semibold transition-all border-b-2 hover:bg-white/10 cursor-pointer ${
//                         isActive
//                           ? "border-[#F4B400] text-[#F4B400]"
//                           : "border-transparent text-white"
//                       }`}
//                     >
//                       {link.label}
//                     </div>
//                   </Link>
//                 </li>
//               );
//             })}
//           </ul>
//         </div>

//         {/* Mobile Nav */}
//         <div className="flex lg:hidden items-center justify-between h-14">
//           <span className="font-serif font-bold text-lg">Menu</span>

//           <button
//             onClick={() => setIsOpen(true)}
//             className="p-2 -mr-2 hover:bg-white/10 rounded-md"
//           >
//             <Menu className="h-6 w-6" />
//           </button>
//         </div>
//       </div>

//       {/* Mobile Drawer (custom instead of Sheet) */}
//       {isOpen && (
//         <div className="fixed inset-0 z-50 lg:hidden">

//           {/* Overlay */}
//           <div
//             className="absolute inset-0 bg-black/70"
//             onClick={() => setIsOpen(false)}
//           />

//           {/* Drawer */}
//           <div className="absolute right-0 top-0 h-full w-[300px] sm:w-[400px] bg-[#2EA6D9] text-white shadow-lg animate-in slide-in-from-right">

//             {/* Header */}
//             <div className="p-4 border-b border-white/10 flex justify-between items-center">
//               <span className="font-serif font-bold text-lg">
//                 Navigation
//               </span>

//               <button
//                 onClick={() => setIsOpen(false)}
//                 className="p-2 rounded-md hover:bg-white/10"
//               >
//                 <X className="h-5 w-5" />
//               </button>
//             </div>

//             {/* Links */}
//             <div className="flex flex-col py-2 overflow-y-auto max-h-[calc(100vh-60px)]">
//               {NAV_LINKS.map((link) => {
//                 const isActive = location === link.href;

//                 return (
//                   <Link
//                     href={link.href}
//                     key={link.href}
//                     onClick={() => setIsOpen(false)}
//                   >
//                     <div
//                       className={`flex items-center justify-between px-6 py-3 border-b border-white/10 text-sm font-medium ${
//                         isActive ? "text-[#F4B400] bg-white/10" : ""
//                       }`}
//                     >
//                       {link.label}
//                       <ChevronRight className="h-4 w-4 opacity-60" />
//                     </div>
//                   </Link>
//                 );
//               })}
//             </div>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// }












import { useState } from "react";
import { Link, useLocation } from "wouter";
import {
  Menu,
  X,
  ChevronRight,
  ChevronDown,
} from "lucide-react";

const NAV_LINKS = [
  { href: "/", label: "Home" },

  {
    label: "About",
    children: [
      // {
      //   href: "/about",
      //   label: "About M.E/M.Tech.(CEEP)-2026",
      // },
      {
        href: "/ou",
        label: "Osmania University",
      },
      {
        href: "/uce-ou",
        label: "University College of Engineering, OU",
      },
    ],
  },

  {
    href: "/contact",
    label: "Contact",
  },
];
export default function Navbar() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#2EA6D9] text-white sticky top-0 z-40 shadow-md">
      <div className="container mx-auto max-w-7xl px-4">
        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center justify-between h-14">
          <ul className="flex items-center">
            {NAV_LINKS.map((item) => {
              const isActive =
                item.href && location === item.href;

              return (
                <li
                  key={item.label}
                  className="relative group"
                >
                  {item.children ? (
                    <>
                      <button
                        className="
                          flex items-center gap-1
                          px-5 py-4
                          text-sm font-semibold
                          text-white
                          hover:bg-white/10
                          transition
                        "
                      >
                        {item.label}
                        <ChevronDown size={15} />
                      </button>

                      {/* Dropdown */}
                      <div
                        className="
                          absolute
                          left-0
                          top-full
                          hidden
                          group-hover:block
                          min-w-[320px]
                          bg-gradient-to-b
                          from-gray-600
                          to-gray-800
                          shadow-lg
                          z-50
                        "
                      >
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                          >
                            <div
                              className="
                                px-5 py-3
                                text-sm
                                font-medium
                                text-white
                                border-b
                                border-white/10
                                hover:bg-black/20
                                cursor-pointer
                              "
                            >
                              {child.label}
                            </div>
                          </Link>
                        ))}
                      </div>
                    </>
                  ) : (
                    <Link href={item.href}>
                      <div
                        className={`
                          px-5 py-4
                          text-sm font-semibold
                          cursor-pointer
                          border-b-2
                          transition-all
                          hover:bg-white/10
                          ${
                            isActive
                              ? "border-[#F4B400] text-[#F4B400]"
                              : "border-transparent text-white"
                          }
                        `}
                      >
                        {item.label}
                      </div>
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        </div>

        {/* Mobile Header */}
        <div className="flex lg:hidden items-center justify-between h-14">
          <span className="font-serif font-bold text-lg">
            Menu
          </span>

          <button
            onClick={() => setIsOpen(true)}
            className="p-2 -mr-2 hover:bg-white/10 rounded-md"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-black/70"
            onClick={() => setIsOpen(false)}
          />

          {/* Drawer */}
          <div className="absolute right-0 top-0 h-full w-[320px] bg-[#2EA6D9] text-white shadow-xl">
            {/* Drawer Header */}
            <div className="p-4 border-b border-white/10 flex justify-between items-center">
              <span className="font-serif font-bold text-lg">
                Navigation
              </span>

              <button
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-md hover:bg-white/10"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Drawer Links */}
            <div className="overflow-y-auto">
              {NAV_LINKS.map((item) => (
                <div key={item.label}>
                  {item.children ? (
                    <>
                      <div className="px-6 py-3 text-[#F4B400] font-semibold border-b border-white/10">
                        {item.label}
                      </div>

                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() =>
                            setIsOpen(false)
                          }
                        >
                          <div
                            className="
                              flex
                              items-center
                              justify-between
                              px-10
                              py-3
                              text-sm
                              border-b
                              border-white/10
                              hover:bg-white/10
                              cursor-pointer
                            "
                          >
                            {child.label}
                            <ChevronRight className="h-4 w-4 opacity-60" />
                          </div>
                        </Link>
                      ))}
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={() =>
                        setIsOpen(false)
                      }
                    >
                      <div
                        className={`
                          flex
                          items-center
                          justify-between
                          px-6
                          py-3
                          text-sm
                          font-medium
                          border-b
                          border-white/10
                          cursor-pointer
                          hover:bg-white/10
                          ${
                            location === item.href
                              ? "bg-white/10 text-[#F4B400]"
                              : ""
                          }
                        `}
                      >
                        {item.label}
                        <ChevronRight className="h-4 w-4 opacity-60" />
                      </div>
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}