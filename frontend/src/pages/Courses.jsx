


import SiteLayout from "@/components/layout/SiteLayout"
import PageBanner from "@/components/layout/PageBanner"

const btechCourses = [
  { sl: "01", code: "CIV", name: "Civil Engineering" },
  { sl: "02", code: "CSE", name: "Computer Science and Engineering" },
  { sl: "03", code: "EEE", name: "Electrical and Electronics Engineering" },
  { sl: "04", code: "ECE", name: "Electronics and Communication Engineering" },
  { sl: "05", code: "MEC", name: "Mechanical Engineering / Mechatronics" },
  { sl: "06", code: "MET", name: "Metallurgical and Material Engineering"},
  
  
]

// const pharmacyCourses = [
//   { sl: "01", code: "PHM", name: "Pharmacy" },
//   { sl: "02", code: "PHE", name: "Pharmaceutical Engineering" },
// ]

function CourseCard({ course }) {
  return (
    <div className="h-full rounded-xl border bg-card p-6 transition-all hover:border-primary/50 hover:shadow-md">
      <div className="mb-4 flex items-start justify-between gap-3">
        <span className="rounded-md bg-secondary px-2.5 py-0.5 text-xs font-bold text-secondary-foreground">
          {course.sl}
        </span>

        <span className="text-lg font-serif font-bold text-primary">
          {course.code}
        </span>
      </div>

      <h3 className="font-medium text-foreground leading-relaxed">
        {course.name}
      </h3>
    </div>
  )
}

export default function Courses() {
  return (
    <SiteLayout>
      <PageBanner title="Courses Offered" crumbs={[{ label: "Courses" }]} />

      <div className="container mx-auto max-w-6xl py-16 px-4">
        <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-10 text-lg">
          List of B.E./B.Tech. courses for 2026-2027 lateral entry candidates.
        </p>

        <div className="mb-12">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary text-center mb-8">
            B.E / B.Tech Courses
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
            {btechCourses.map((course) => (
              <CourseCard key={course.code} course={course} />
            ))}
          </div>
        </div>
{/* 
        <div>
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary text-center mb-8">
            B. Pharmacy Courses
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-5 max-w-3xl mx-auto">
            {pharmacyCourses.map((course) => (
              <CourseCard key={course.code} course={course} />
            ))}
          </div>
        </div> */}

        <div className="mt-12 text-sm md:text-base text-[#0B2C5F] leading-8">
          <p>
            <span className="font-bold">Note:</span>{" "}
            The eligibility criteria for admission into the new B.E./B.Tech. programmes
            permitted by the Government of Telangana will be considered at the time of
            admission based on the Telangana Government Orders for the academic year
            2026-2027.
          </p>
        </div>
      </div>
    </SiteLayout>
  )
}