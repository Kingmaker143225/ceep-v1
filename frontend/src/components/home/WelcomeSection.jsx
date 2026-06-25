
export default function WelcomeSection() {
  return (
    <section className="bg-white py-5">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="bg-white border border-gray-200 rounded-2xl shadow-sm px-10 py-4">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#06254D] mb-4 leading-tight text-center">
            Welcome to Telangana Engineering Common Entrance Test For Working Professionals
          </h2>

          <div className="w-20 h-1 bg-[#F4B400] mb-8 rounded"></div>

          <div className="space-y-5 text-[#06254D] text-sm md:text-base leading-6 text-justify">
            <p>
              A Common Entrance Test designated in full as Engineering Common Entrance Test for Diploma Candidates in short as{" "}
              <strong>M.E/M.Tech.(CEEP) - 2026</strong> will be conducted by Osmania
              University Hyderabad on behalf of the Telangana Council of Higher Education for the academic year
              2026-2027.
            </p>

            <p>
              For lateral entry admission into 2nd year regular B.E/B.Tech Courses in both University and Private
              Un-aided Professional Institutions (Minority &amp; Non-Minority) approved by All India Council for
              Technical Education (AICTE).
            </p>

          </div>
        </div>
      </div>
    </section>
  );
}