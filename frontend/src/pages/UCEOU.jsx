import SiteLayout from "@/components/layout/SiteLayout";
import PageBanner from "@/components/layout/PageBanner";

export default function UCEOU() {
  return (
    <SiteLayout>
      <PageBanner
        title="University College of Engineering, OU"
        crumbs={[
          { label: "Home", href: "/" },
          { label: "University College of Engineering, OU" },
        ]}
      />

      <div className="container mx-auto max-w-6xl py-12 px-4">
        <div className="bg-white rounded-lg shadow-sm border p-8">

          <h2 className="text-3xl font-bold text-primary mb-6">
            About The University College of Engineering, OU
          </h2>

          <div className="space-y-5 text-gray-700 leading-8 text-justify">
            <p>
              The University College of Engineering (UCE) has the
              distinction of being the oldest and the biggest among the
              Engineering Colleges of the State. Established in the year
              1929, eleven years after the formation of Osmania
              University, it was the sixth Engineering College to be
              established in British India.
            </p>

            <p>
              The College moved to its present permanent building in 1947.
              Today it is the biggest among the campus colleges of
              Osmania University.
            </p>

            <p>
              The Golden Jubilee of the College was celebrated in 1979,
              the Diamond Jubilee in 1989 and the Platinum Jubilee in
              2004.
            </p>

            <p>
              The College was made autonomous in 1994. It offers
              Bachelor of Engineering (B.E.) programmes in Biomedical,
              Civil, Computer Science, Electrical & Electronics,
              Electronics & Communication and Mechanical Engineering.
            </p>

            <p>
              The College also offers MCA, M.S. by Research and Ph.D.
              programmes in various branches of Engineering. Part-time
              courses are offered at both undergraduate and postgraduate
              levels.
            </p>

            <p>
              At present, the College admits hundreds of undergraduate
              and postgraduate students every year and is supported by
              over 100 experienced faculty members including professors.
            </p>

          </div>

        </div>
      </div>
    </SiteLayout>
  );
}