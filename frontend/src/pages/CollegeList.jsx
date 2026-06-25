import SiteLayout from "@/components/layout/SiteLayout";
import PageBanner from "@/components/layout/PageBanner";
import { collegeList } from "@/data/collegeList";
 
export default function CollegeList() {
  return (
    <SiteLayout>
      <PageBanner
        title="List of Colleges"
        crumbs={[{ label: "List of Colleges" }]}
      />
 
      <div className="container mx-auto max-w-6xl py-12 px-4">
        {/* <h2 className="text-2xl font-bold text-[#06254D] mb-6 text-center">
          M.E/M.Tech.(CEEP) College List - 2026
        </h2> */}
        <h1
  className="text-2xl md:text-4xl leading-tight drop-shadow-md text-[#06254D] text-center mb-10"
  style={{
    fontFamily: "Arial, Helvetica, sans-serif",
    fontWeight: "700",
    letterSpacing: "0px",
    lineHeight: "1.2",
    // color: "#ffffff",
  }}
>
  M.E/M.Tech.(CEEP)-2026 List of Colleges
</h1>
 
        <div className="space-y-6">
          {collegeList.map((college, index) => (
            <div
              key={index}
              className="border rounded-lg shadow-sm overflow-hidden"
            >
             <div className="bg-[#06254D] text-sm text-yellow-400 px-5 py-3 flex justify-between items-start">
                <div className="bg-yellow-600 text-black px-3 py-2 rounded">
 
  <h3 className="font-bold text-base">
    {index + 1}. {college.name}
  </h3>
 
  {college.address && (
    <p className="text-xs md:text-sm mt-1 text-black/80">
      {college.address}
    </p>
  )}
 
</div>
                <span className="text-sm bg-white text-black px-3 py-2 rounded self-start whitespace-nowrap">
  {college.type}
</span>
              </div>
 
              <table className="w-full table-fixed border">
  <thead className="bg-gray-100">
    <tr>
      <th className="border px-3 py-3 text-left w-[12%]">
        S.No
      </th>
 
      <th className="border px-3 py-3 text-left w-[73%]">
        Branch
      </th>
 
      <th className="border px-3 py-3 text-center w-[15%]">
        Seats
      </th>
    </tr>
  </thead>
 
  <tbody>
    {college.branches.map((b, i) => (
      <tr
        key={i}
        className="hover:bg-gray-50 transition-colors"
      >
        <td className="border px-3 py-3 align-middle">
          {i + 1}
        </td>
 
        <td className="border px-3 py-3 align-middle break-words">
          {b.branch}
        </td>
 
        <td className="border px-3 py-3 text-center align-middle font-medium">
          {b.seats}
        </td>
      </tr>
    ))}
  </tbody>
</table>
            </div>
          ))}
        </div>
      </div>
    </SiteLayout>
  );
}
