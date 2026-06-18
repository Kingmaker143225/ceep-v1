// import { useState } from "react";
// import { Link } from "wouter";
// import {
//   FileText,
//   ScrollText,
//   MapPin,
//   CalendarDays,
//   BookOpen,
//   ListChecks,
//   AlertCircle,
//   Layers,
//   UserCheck,
//   CreditCard,
//   FilePlus2,
//   Printer,
//   Receipt,
//   Hash,
//   ChevronRight,
//   X,
// } from "lucide-react";

// const INFORMATION = [
//   {
//     label: "Important Dates (Revised-III)",
//     href: "/pdfs/M.E. and M.TECH. IMPORTANT DATES REVISED-3.pdf",
//     icon: FileText,
//     isPdf: true,
//   },
  
//   {
//     label: "Notification",
//     href: "/pdfs/Notification 2025.pdf",
//     icon: FileText,
//     isPdf: true,
//   },
//   // {
//   //   label: " Instructions and Guidelines",
//   //   href: "/pdfs/M.E.M.Tech. Instructions, Eligibility and Guidelines 2025.pdf",
//   //   icon: CalendarDays,
//   //   isPdf: true,
//   // },
//   // {
//   //   label: "Syllabus",
//   //   href: "/pdfs/M.E.M.Tech Syllabus.doc 2025.pdf",
//   //   icon: BookOpen,
//   //   isPdf: true,
//   // },

//   {
//   label: "Syllabus",
//   pdfs: [
//     {
//       name: "Annexure-I",
//       href: "/pdfs/M.E.M.Tech Syllabus.doc 2025.pdf",
//     },
//     {
//       name: "Annexure-II",
//       href: "/pdfs/M.E.M.Tech Syllabus.doc 2025.pdf",
//     },
//     {
//       name: "Annexure-III",
//       href: "/pdfs/M.E.M.Tech Syllabus.doc 2025.pdf",
//     },
//     {
//       name: "Annexure-IV",
//       href: "/pdfs/M.E.M.Tech Syllabus.doc 2025.pdf",
//     },
//   ],
//   icon: BookOpen,
//   isPdf: true,
// },

//   {
//     label: "The revised Second and Final Phase counselling is scheduled on 23rd October, 2025 at 2:00 PM.",
//     href: "/pdfs/Revised Second Phase Counciling of ME & M.Tech. CEEP 2025.pdf",
//     icon: ListChecks,
//     isPdf: true,
//   },
  
// //   {
// //     label: "Pattern of Exam",
// //     href: "/pdfs/Pattern of Examination-2026.pdf",
// //     icon: Layers,
// //     isPdf: true,
// //   },
// //   {
// //   label: "Sample Question paper & OMR",
// //   pdfs: [
// //     {
// //       name: "Sample Question Paper",
// //       href: "/pdfs/Sample QP.pdf",
// //     },
// //     {
// //       name: "Sample OMR Sheet",
// //       href: "/pdfs/Sample_OMRpdf.pdf",
// //     },
// //   ],
// //   icon: Layers,
// //   isPdf: true,
// // }
// ];

// const APPLICATION = [
  
// //   {
// //   label: "User Guide Video for filling Online Application",
// //   href: "/videos/Application_guidelines.mp4",
// //   icon: UserCheck,
// //   isVideo: true,
// // },

  
//   {
//     label: "STEP 1: Application Fee Payment",
//     href: "/fee-payment",
//     icon: CreditCard,
//   },
//   {
//     label: "STEP 2: Fill The Application Form",
//     href: "/application-form",
//     icon: FilePlus2,
//   },
//   {
//     label: "STEP 3: Print Your Filled In Application Form",
//     href: "/print-application",
//     icon: Printer,
//   },
//   {
//     label: "Know Your Payment Status",
//     href: "/payment-status",
//     icon: Receipt,
//   },
//   {
//     label: "Know Your Registration Number",
//     href: "/registration-number",
//     icon: Hash,
//   },
// ];

// const NEWS = [
 
//   {
//     text: "Application Forms will be accepted only Online",
//     date: "",
//     color: "text-[#06254D]",
//   },
//   {
//     text: "Payment can be made through Credit Card or Debit Card.",
//     date: "",
//     color: "text-[#06254D]",
//   },
//   // {
//   //   text: "Date of Examination",
//   //   date: "01-08-2026 and 02-08-2026",
//   //   color: "text-[#06254D]",
//   // },
// ];

// const FEE_SCHEDULE = [
//   // {
//   //   label: "Last date for Submission of Online Application without late fee:",
//   //   date: "18-07-2026",
//   //   amount: "",
//   // },
//   // {
//   //   label: "Last date with late fee: Rs. 1500 (late fee) + Rs. 3000 (registration fee) from",
//   //   date: "19-07-2026 to 24-07-2026",
//   //   amount: "",
//   // },
  
// ];

// function ColumnHeader({ title }) {
//   return (
//     <div className="bg-[#06254D] text-white px-4 py-3 flex items-center gap-2 rounded-t-md">
//       <span className="w-1 h-5 bg-secondary rounded-sm" />
//       <h3 className="font-serif font-bold text-base tracking-wide uppercase">
//         {title}
//       </h3>
//     </div>
//   );
// }

// function ListItem({ item, index, onOpenPdf, onOpenVideo }) {
//   const Icon = item.icon;

//   const content = (
//     <div className="flex items-start gap-3 px-4 py-3 hover:bg-secondary/10 transition-colors group cursor-pointer">
//       <Icon className="w-4 h-4 text-primary shrink-0 mt-0.5 group-hover:text-[#06254D]" />

//       <span className="text-sm text-[#06254D] font-medium leading-snug flex-1">
//         {item.label}
//       </span>

//       <ChevronRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity shrink-0 mt-0.5" />
//     </div>
//   );

//   return (
//   <li className={index % 2 === 0 ? "bg-white" : "bg-muted/40"}>
    
//     {item.isPdf ? (
//       <button
//         type="button"
//         onClick={() => onOpenPdf(item.pdfs || [item])}
//         className="w-full text-left"
//       >
//         {content}
//       </button>

//     ) : item.isVideo ? (

//       <button
//         type="button"
//         onClick={() => onOpenVideo(item.href)}
//         className="w-full text-left"
//       >
//         {content}
//       </button>

//     ) : (
//       <Link href={item.href}>{content}</Link>
//     )}

//   </li>
// );
// }

// function PdfModal({ pdf, onClose }) {
//   const [selectedPdf, setSelectedPdf] = useState(0);

//   if (!pdf) return null;

//   return (
//     <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-3">
//       <div className="w-[95vw] h-[92vh] bg-white rounded-lg overflow-hidden shadow-2xl flex flex-col">

//         {/* Header */}
//         <div className="h-16 px-4 md:px-6 border-b bg-[#06254D] flex items-center justify-between">
//           <h2 className="text-base md:text-xl font-bold text-white">
//             PDF Documents
//           </h2>

//           <button
//             type="button"
//             onClick={onClose}
//             className="w-9 h-9 rounded-md bg-white/10 hover:bg-white/20 text-white flex items-center justify-center"
//           >
//             <X className="w-5 h-5" />
//           </button>
//         </div>

//         {/* PDF Tabs */}
//         <div className="flex gap-2 p-3 border-b bg-gray-50 overflow-x-auto">
//           {pdf.map((p, index) => (
//             <button
//               key={index}
//               onClick={() => setSelectedPdf(index)}
//               className={`px-4 py-2 rounded-md text-sm font-semibold whitespace-nowrap transition
//                 ${
//                   selectedPdf === index
//                     ? "bg-[#06254D] text-white"
//                     : "bg-gray-200 text-[#06254D] hover:bg-gray-300"
//                 }
//               `}
//             >
//               {p.name || p.label}
//             </button>
//           ))}
//         </div>

//         {/* PDF Viewer */}
//         <div className="flex items-center justify-between px-4 py-2 bg-gray-100 border-b">
//           <h3 className="font-semibold text-sm">
//             {pdf[selectedPdf].name || pdf[selectedPdf].label}
//           </h3>

//           <a
//             href={pdf[selectedPdf].href}
//             download
//             className="px-3 py-1 bg-secondary text-[#06254D] rounded text-xs font-bold"
//           >
//             Download
//           </a>
//         </div>

//         <div className="flex-1 bg-gray-200">
//           <iframe
//             src={pdf[selectedPdf].href}
//             title={pdf[selectedPdf].name || pdf[selectedPdf].label}
//             className="w-full h-full border-0"
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default function LatestUpdates() {
//   const [openPdf, setOpenPdf] = useState(null);
//   const [openVideo, setOpenVideo] = useState(null);

//   return (
//     <section className="py-10 bg-muted/40 relative">
//       <div className="container mx-auto max-w-7xl px-4">
//         <div className="mb-8 text-center">
//           {/* <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#06254D] tracking-tight inline-block">
//             Latest Updates
//           </h2>

//           <div className="h-1 w-20 bg-secondary mt-3 rounded-full mx-auto" />

//           <p className="text-sm text-muted-foreground mt-3 max-w-2xl mx-auto">
//             Stay informed with all the latest notifications, application steps,
//             and announcements for M.E/M.Tech.(CEEP) ADMISSIONS 2025-2026.
//           </p> */}
//         </div>

//         {/* <div className="bg-secondary/20 border border-secondary/40 rounded-md mb-8 overflow-hidden flex items-stretch">
//           <div className="bg-[#06254D] text-white text-xs font-bold px-3 flex items-center uppercase tracking-wide shrink-0">
//             Notice
//           </div>

//           <div className="flex-1 overflow-hidden py-2">
//             <div className="whitespace-nowrap animate-[scroll-left_40s_linear_infinite] text-sm font-medium text-[#06254D]">
//               Online application portal opens 09-06-2026 &nbsp;•&nbsp; Last
//               date without late fee: 18-07-2026 &nbsp;•&nbsp; Last date with late fee: Rs. 1500 (late fee) + Rs. 3000 (registration fee) from 19-07-2026 to 24-07-2026 &nbsp;•&nbsp; Examination dates:01-08-2026 &
//               02-08-2026 &nbsp;•&nbsp; Hall ticket download
//               begins: 28-07-2026 &nbsp;•&nbsp; Results announcement:
//               08-08-2026
//             </div>
//           </div>
//         </div> */}

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           <div className="bg-card border border-border rounded-md shadow-sm overflow-hidden flex flex-col">
//             <ColumnHeader title="Important Links" />

//             <ul className="divide-y divide-border">
//               {INFORMATION.map((item, i) => (
//                 <ListItem
//   key={i}
//   item={item}
//   index={i}
//   onOpenPdf={setOpenPdf}
//   onOpenVideo={setOpenVideo}
// />
//               ))}
//             </ul>
//           </div>

//           <div className="bg-card border border-border rounded-md shadow-sm overflow-hidden flex flex-col">
//             <ColumnHeader title="Application" />

//             <ul className="divide-y divide-border">
//               {APPLICATION.map((item, i) => (
//                 <ListItem
//                   key={i}
//                   item={item}
//                   index={i}
//                   onOpenPdf={setOpenPdf}
//                   onOpenVideo={setOpenVideo}
//                 />
//               ))}
//             </ul>
//           </div>

//           <div className="bg-card border border-border rounded-md shadow-sm overflow-hidden flex flex-col">
//             <ColumnHeader title="Announcements" />

//             <div className="p-4 space-y-3 text-sm">
//               {NEWS.map((n, i) => (
//                 <div
//                   key={i}
//                   className="pb-3 border-b border-dashed border-border last:border-0 last:pb-0"
//                 >
//                   <p className={`font-semibold leading-snug ${n.color}`}>
//                     {n.text}
//                   </p>

//                   {n.date && (
//                     <p className="text-xs text-muted-foreground mt-1 font-medium">
//                       Date:{" "}
//                       <span className="text-rose-700 font-semibold">
//                         {n.date}
//                       </span>
//                     </p>
//                   )}
//                 </div>
//               ))}

//               <div className="pt-2 mt-2 border-t border-border">
//                 <p className="text-xs font-bold uppercase tracking-wide text-[#06254D] mb-2">
//                   Submission Schedule
//                 </p>

//                 <ul className="space-y-2">
//                   {FEE_SCHEDULE.map((s, i) => (
//                     <li key={i} className="text-xs leading-snug">
//                       <span className="text-foreground/80">{s.label}</span>{" "}
//                       {s.amount && (
//                         <span className="text-rose-700 font-semibold">
//                           {s.amount}{" "}
//                         </span>
//                       )}
//                       <span className="text-emerald-700 font-semibold">
//                         {s.date}
//                       </span>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <PdfModal pdf={openPdf} onClose={() => setOpenPdf(null)} />
//         {openVideo && (
//   <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">

//     <div className="relative w-full max-w-5xl bg-black rounded-lg overflow-hidden">

//       <button
//         onClick={() => setOpenVideo(null)}
//         className="absolute top-3 right-3 z-10 text-white bg-red-600 hover:bg-red-700 px-3 py-1 rounded-md text-2xl"
//       >
//         ×
//       </button>

//       <video
//         controls
//         autoPlay
//         className="w-full h-auto max-h-[90vh]"
//       >
//         <source src={openVideo} type="video/mp4" />
//       </video>

//     </div>

//   </div>
// )}

//       <style
//         dangerouslySetInnerHTML={{
//           __html: `
//             @keyframes scroll-left {
//               0% { transform: translateX(100%); }
//               100% { transform: translateX(-100%); }
//             }
//           `,
//         }}
//       />
//     </section>
//   );
// }














import { useState } from "react";
import { Link } from "wouter";
import {
  FileText,
  ScrollText,
  MapPin,
  CalendarDays,
  BookOpen,
  ListChecks,
  AlertCircle,
  Layers,
  UserCheck,
  CreditCard,
  FilePlus2,
  Printer,
  Receipt,
  Hash,
  ChevronRight,
  X,
  ChevronDown,
} from "lucide-react";

const INFORMATION = [
  {
    label: "Important Dates (Revised-III)",
    href: "/pdfs/M.E. and M.TECH. IMPORTANT DATES REVISED-3.pdf",
    icon: FileText,
    isPdf: true,
  },
  
  {
    label: "Notification",
    href: "/pdfs/Notification 2025.pdf",
    icon: FileText,
    isPdf: true,
  },
  // {
  //   label: " Instructions and Guidelines",
  //   href: "/pdfs/M.E.M.Tech. Instructions, Eligibility and Guidelines 2025.pdf",
  //   icon: CalendarDays,
  //   isPdf: true,
  // },
  // {
  //   label: "Syllabus",
  //   href: "/pdfs/M.E.M.Tech Syllabus.doc 2025.pdf",
  //   icon: BookOpen,
  //   isPdf: true,
  // },

  {
  label: "Syllabus",
  icon: BookOpen,
  children: [
    {
      label: "Annexure-I",
      href: "/pdfs/Annexure-I.pdf",
      isPdf: true,
    },
    {
      label: "Annexure-II",
      href: "/pdfs/Annexure-II.pdf",
      isPdf: true,
    },
    {
      label: "Annexure-III",
      href: "/pdfs/Annexure-III.pdf",
      isPdf: true,
    },
    {
      label: "Annexure-IV",
      href: "/pdfs/Annexure-IV.pdf",
      isPdf: true,
    },
  ],
},
  {
    label: "The revised Second and Final Phase counselling is scheduled on 23rd October, 2025 at 2:00 PM.",
    href: "/pdfs/Revised Second Phase Counciling of ME & M.Tech. CEEP 2025.pdf",
    icon: ListChecks,
    isPdf: true,
  },
  
//   {
//     label: "Pattern of Exam",
//     href: "/pdfs/Pattern of Examination-2026.pdf",
//     icon: Layers,
//     isPdf: true,
//   },
//   {
//   label: "Sample Question paper & OMR",
//   pdfs: [
//     {
//       name: "Sample Question Paper",
//       href: "/pdfs/Sample QP.pdf",
//     },
//     {
//       name: "Sample OMR Sheet",
//       href: "/pdfs/Sample_OMRpdf.pdf",
//     },
//   ],
//   icon: Layers,
//   isPdf: true,
// }
];

const APPLICATION = [
  
//   {
//   label: "User Guide Video for filling Online Application",
//   href: "/videos/Application_guidelines.mp4",
//   icon: UserCheck,
//   isVideo: true,
// },

  
  {
    label: "STEP 1: Application Fee Payment",
    href: "/fee-payment",
    icon: CreditCard,
  },
  {
    label: "STEP 2: Fill The Application Form",
    href: "/application-form",
    icon: FilePlus2,
  },
  {
    label: "STEP 3: Print Your Filled In Application Form",
    href: "/print-application",
    icon: Printer,
  },
  {
    label: "Know Your Payment Status",
    href: "/payment-status",
    icon: Receipt,
  },
  {
    label: "Know Your Registration Number",
    href: "/registration-number",
    icon: Hash,
  },
];

const NEWS = [
 
  {
    text: "Application Forms will be accepted only Online",
    date: "",
    color: "text-[#06254D]",
  },
  {
    text: "Payment can be made through Credit Card or Debit Card.",
    date: "",
    color: "text-[#06254D]",
  },
  // {
  //   text: "Date of Examination",
  //   date: "01-08-2026 and 02-08-2026",
  //   color: "text-[#06254D]",
  // },
];

const FEE_SCHEDULE = [
  // {
  //   label: "Last date for Submission of Online Application without late fee:",
  //   date: "18-07-2026",
  //   amount: "",
  // },
  // {
  //   label: "Last date with late fee: Rs. 1500 (late fee) + Rs. 3000 (registration fee) from",
  //   date: "19-07-2026 to 24-07-2026",
  //   amount: "",
  // },
  
];

function ColumnHeader({ title }) {
  return (
    <div className="bg-[#06254D] text-white px-4 py-3 flex items-center gap-2 rounded-t-md">
      <span className="w-1 h-5 bg-secondary rounded-sm" />
      <h3 className="font-serif font-bold text-base tracking-wide uppercase">
        {title}
      </h3>
    </div>
  );
}

// function ListItem({ item, index, onOpenPdf, onOpenVideo }) {
//   const Icon = item.icon;

//   const content = (
//     <div className="flex items-start gap-3 px-4 py-3 hover:bg-secondary/10 transition-colors group cursor-pointer">
//       <Icon className="w-4 h-4 text-primary shrink-0 mt-0.5 group-hover:text-[#06254D]" />

//       <span className="text-sm text-[#06254D] font-medium leading-snug flex-1">
//         {item.label}
//       </span>

//       <ChevronRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity shrink-0 mt-0.5" />
//     </div>
//   );
function ListItem({ item, index, onOpenPdf, onOpenVideo }) {
  const [open, setOpen] = useState(false);
  const Icon = item.icon;

  // Accordion Item
  if (item.children) {
    return (
      <li className={index % 2 === 0 ? "bg-white" : "bg-muted/40"}>
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="w-full flex items-center justify-between px-4 py-3 hover:bg-secondary/10"
        >
          <div className="flex items-center gap-3">
            <Icon className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-[#06254D]">
              {item.label}
            </span>
          </div>

          {open ? (
            <ChevronDown className="w-4 h-4" />
          ) : (
            <ChevronRight className="w-4 h-4" />
          )}
        </button>

        {open && (
          <ul className="bg-gray-50 border-t">
            {item.children.map((child, idx) => (
              <li
                key={idx}
                className="border-b last:border-b-0"
              >
                <button
                  onClick={() => onOpenPdf([child])}
                  className="w-full text-left px-10 py-2 text-sm text-[#06254D] hover:bg-secondary/10"
                >
                  ▶ {child.label}
                </button>
              </li>
            ))}
          </ul>
        )}
      </li>
    );
  }

  // Existing Items
  const content = (
    <div className="flex items-start gap-3 px-4 py-3 hover:bg-secondary/10 transition-colors group cursor-pointer">
      <Icon className="w-4 h-4 text-primary shrink-0 mt-0.5" />

      <span className="text-sm text-[#06254D] font-medium leading-snug flex-1">
        {item.label}
      </span>

      <ChevronRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity shrink-0 mt-0.5" />
    </div>
  );

  return (
    <li className={index % 2 === 0 ? "bg-white" : "bg-muted/40"}>
      {item.isPdf ? (
        <button
          onClick={() => onOpenPdf(item.pdfs || [item])}
          className="w-full text-left"
        >
          {content}
        </button>
      ) : item.isVideo ? (
        <button
          onClick={() => onOpenVideo(item.href)}
          className="w-full text-left"
        >
          {content}
        </button>
      ) : (
        <Link href={item.href}>{content}</Link>
      )}
    </li>
  );
}

  
function PdfModal({ pdf, onClose }) {
  const [selectedPdf, setSelectedPdf] = useState(0);

  if (!pdf) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-3">
      <div className="w-[95vw] h-[92vh] bg-white rounded-lg overflow-hidden shadow-2xl flex flex-col">

        {/* Header */}
        <div className="h-16 px-4 md:px-6 border-b bg-[#06254D] flex items-center justify-between">
          <h2 className="text-base md:text-xl font-bold text-white">
            PDF Documents
          </h2>

          <button
            type="button"
            onClick={onClose}
            className="w-9 h-9 rounded-md bg-white/10 hover:bg-white/20 text-white flex items-center justify-center"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* PDF Tabs */}
        <div className="flex gap-2 p-3 border-b bg-gray-50 overflow-x-auto">
          {pdf.map((p, index) => (
            <button
              key={index}
              onClick={() => setSelectedPdf(index)}
              className={`px-4 py-2 rounded-md text-sm font-semibold whitespace-nowrap transition
                ${
                  selectedPdf === index
                    ? "bg-[#06254D] text-white"
                    : "bg-gray-200 text-[#06254D] hover:bg-gray-300"
                }
              `}
            >
              {p.name || p.label}
            </button>
          ))}
        </div>

        {/* PDF Viewer */}
        <div className="flex items-center justify-between px-4 py-2 bg-gray-100 border-b">
          <h3 className="font-semibold text-sm">
            {pdf[selectedPdf].name || pdf[selectedPdf].label}
          </h3>

          <a
            href={pdf[selectedPdf].href}
            download
            className="px-3 py-1 bg-secondary text-[#06254D] rounded text-xs font-bold"
          >
            Download
          </a>
        </div>

        <div className="flex-1 bg-gray-200">
          <iframe
            src={pdf[selectedPdf].href}
            title={pdf[selectedPdf].name || pdf[selectedPdf].label}
            className="w-full h-full border-0"
          />
        </div>
      </div>
    </div>
  );
}

export default function LatestUpdates() {
  const [openPdf, setOpenPdf] = useState(null);
  const [openVideo, setOpenVideo] = useState(null);

  return (
    <section className="py-10 bg-muted/40 relative">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="mb-8 text-center">
          {/* <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#06254D] tracking-tight inline-block">
            Latest Updates
          </h2>

          <div className="h-1 w-20 bg-secondary mt-3 rounded-full mx-auto" />

          <p className="text-sm text-muted-foreground mt-3 max-w-2xl mx-auto">
            Stay informed with all the latest notifications, application steps,
            and announcements for M.E/M.Tech.(CEEP) ADMISSIONS 2025-2026.
          </p> */}
        </div>

        {/* <div className="bg-secondary/20 border border-secondary/40 rounded-md mb-8 overflow-hidden flex items-stretch">
          <div className="bg-[#06254D] text-white text-xs font-bold px-3 flex items-center uppercase tracking-wide shrink-0">
            Notice
          </div>

          <div className="flex-1 overflow-hidden py-2">
            <div className="whitespace-nowrap animate-[scroll-left_40s_linear_infinite] text-sm font-medium text-[#06254D]">
              Online application portal opens 09-06-2026 &nbsp;•&nbsp; Last
              date without late fee: 18-07-2026 &nbsp;•&nbsp; Last date with late fee: Rs. 1500 (late fee) + Rs. 3000 (registration fee) from 19-07-2026 to 24-07-2026 &nbsp;•&nbsp; Examination dates:01-08-2026 &
              02-08-2026 &nbsp;•&nbsp; Hall ticket download
              begins: 28-07-2026 &nbsp;•&nbsp; Results announcement:
              08-08-2026
            </div>
          </div>
        </div> */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-card border border-border rounded-md shadow-sm overflow-hidden flex flex-col">
            <ColumnHeader title="Important Links" />

            <ul className="divide-y divide-border">
              {INFORMATION.map((item, i) => (
                <ListItem
  key={i}
  item={item}
  index={i}
  onOpenPdf={setOpenPdf}
  onOpenVideo={setOpenVideo}
/>
              ))}
            </ul>
          </div>

          <div className="bg-card border border-border rounded-md shadow-sm overflow-hidden flex flex-col">
            <ColumnHeader title="Application" />

            <ul className="divide-y divide-border">
              {APPLICATION.map((item, i) => (
                <ListItem
                  key={i}
                  item={item}
                  index={i}
                  onOpenPdf={setOpenPdf}
                  onOpenVideo={setOpenVideo}
                />
              ))}
            </ul>
          </div>

          <div className="bg-card border border-border rounded-md shadow-sm overflow-hidden flex flex-col">
            <ColumnHeader title="Announcements" />

            <div className="p-4 space-y-3 text-sm">
              {NEWS.map((n, i) => (
                <div
                  key={i}
                  className="pb-3 border-b border-dashed border-border last:border-0 last:pb-0"
                >
                  <p className={`font-semibold leading-snug ${n.color}`}>
                    {n.text}
                  </p>

                  {n.date && (
                    <p className="text-xs text-muted-foreground mt-1 font-medium">
                      Date:{" "}
                      <span className="text-rose-700 font-semibold">
                        {n.date}
                      </span>
                    </p>
                  )}
                </div>
              ))}

              <div className="pt-2 mt-2 border-t border-border">
                <p className="text-xs font-bold uppercase tracking-wide text-[#06254D] mb-2">
                  Submission Schedule
                </p>

                <ul className="space-y-2">
                  {FEE_SCHEDULE.map((s, i) => (
                    <li key={i} className="text-xs leading-snug">
                      <span className="text-foreground/80">{s.label}</span>{" "}
                      {s.amount && (
                        <span className="text-rose-700 font-semibold">
                          {s.amount}{" "}
                        </span>
                      )}
                      <span className="text-emerald-700 font-semibold">
                        {s.date}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <PdfModal pdf={openPdf} onClose={() => setOpenPdf(null)} />
        {openVideo && (
  <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">

    <div className="relative w-full max-w-5xl bg-black rounded-lg overflow-hidden">

      <button
        onClick={() => setOpenVideo(null)}
        className="absolute top-3 right-3 z-10 text-white bg-red-600 hover:bg-red-700 px-3 py-1 rounded-md text-2xl"
      >
        ×
      </button>

      <video
        controls
        autoPlay
        className="w-full h-auto max-h-[90vh]"
      >
        <source src={openVideo} type="video/mp4" />
      </video>

    </div>

  </div>
)}

      <style
        dangerouslySetInnerHTML={{
          __html: `
            @keyframes scroll-left {
              0% { transform: translateX(100%); }
              100% { transform: translateX(-100%); }
            }
          `,
        }}
      />
    </section>
  );
}

