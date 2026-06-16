import { useState } from "react";
import SiteLayout from "@/components/layout/SiteLayout";
import PageBanner from "@/components/layout/PageBanner";
import { BookOpen, Download, X } from "lucide-react";

const syllabusItems = [
  // { name: "B.Sc. (MATHEMATICS)", pdf: "/pdfs/syllabus/bsc-mathematics.pdf" },
  { name: "Civil Engineering", pdf: "/pdfs/syllabus/CIV-2026-Final.pdf" },
  { name: "Computer Science and Engineering", pdf: "/pdfs/syllabus/CSE _ 2026 Final.pdf" },
  { name: "Electrical and Electronics Engineering", pdf: "/pdfs/syllabus/EEE_2026 Final.pdf" },
  { name: "Electronics and Communication Engineering", pdf: "/pdfs/syllabus/ECE_ 2026 Final.pdf" },
  { name: "Mechanical Engineering / Mechatronics", pdf: "/pdfs/syllabus/Mechanical_ 2026 Final.pdf" },
  { name: "Metallurgical and Material Engineering", pdf: "/pdfs/syllabus/Metallurgical _2026 Final.pdf" },
  // { name: "METALLURGICAL ENGINEERING", pdf: "/pdfs/syllabus/metallurgical-engineering.pdf" },
  // { name: "MINING ENGINEERING", pdf: "/pdfs/syllabus/mining-engineering.pdf" },
  // { name: "CIVIL ENGINEERING", pdf: "/pdfs/syllabus/civil-engineering.pdf" },
  // { name: "PHARMACY", pdf: "/pdfs/syllabus/pharmacy.pdf" },
];

export default function Syllabus() {
  const [openPdf, setOpenPdf] = useState(null);

  return (
    <SiteLayout>
      <PageBanner title="Syllabus" crumbs={[{ label: "Syllabus" }]} />

      <div className="container mx-auto max-w-7xl py-12 px-4">
        <h2 className="text-2xl font-bold text-[#003b8f] mb-4">
          Syllabus
        </h2>

        <div className="bg-white border border-gray-300 rounded-sm shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {syllabusItems.map((item, index) => (
              <button
                key={index}
                onClick={() => setOpenPdf(item)}
                className={`
                  flex items-center gap-2 px-4 py-4 text-left text-lg font-medium
                  border-b border-gray-300 hover:bg-blue-50 transition
                  ${index % 4 === 0 || index % 4 === 1 ? "bg-gray-100" : "bg-white"}
                  ${index % 2 === 0 ? "md:border-r" : ""}
                `}
              >
                <BookOpen className="w-5 h-5 text-black shrink-0" />
                <span className="text-black">{item.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {openPdf && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-3">
          <div className="w-[95vw] h-[92vh] bg-white rounded-lg overflow-hidden shadow-2xl flex flex-col">
            <div className="h-16 px-4 md:px-6 border-b bg-[#06254D] flex items-center justify-between gap-3">
              <h2 className="text-lg md:text-xl font-bold text-white truncate">
                {openPdf.name} Syllabus
              </h2>

              <div className="flex items-center gap-2 shrink-0">
                <a
                  href={openPdf.pdf}
                  download
                  className="flex items-center gap-2 px-3 md:px-4 py-2 rounded-md bg-yellow-400 text-[#06254D] text-xs md:text-sm font-bold hover:bg-yellow-300"
                >
                  <Download className="w-4 h-4" />
                  Download PDF
                </a>

                <button
                  type="button"
                  onClick={() => setOpenPdf(null)}
                  className="w-9 h-9 rounded-md bg-white/10 hover:bg-white/20 text-white flex items-center justify-center"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="flex-1 bg-gray-100">
              <iframe
                src={openPdf.pdf}
                title={`${openPdf.name} Syllabus`}
                className="w-full h-full border-0"
              />
            </div>
          </div>
        </div>
      )}
    </SiteLayout>
  );
}