import SiteLayout from "@/components/layout/SiteLayout";
import PageBanner from "@/components/layout/PageBanner";

export default function OU() {
  return (
    <SiteLayout>
      <PageBanner
        title="About Osmania University"
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Osmania University" },
        ]}
      />

      <div className="container mx-auto max-w-6xl py-12 px-4">
        <div className="bg-white rounded-lg shadow-sm border p-8">

          <h2 className="text-3xl font-bold text-primary mb-6">
            About Osmania University
          </h2>

          <div className="space-y-5 text-gray-700 leading-8 text-justify">
            <p>
              Osmania University, established in the year 1918, is the
              seventh oldest university in the country, third oldest in
              South India and the oldest in the state of Andhra Pradesh.
              It was founded by His Exalted Highness Mir Osman Ali Khan,
              the Seventh Nizam of Hyderabad State.
            </p>

            <p>
              It was the first University to impart higher education
              through Urdu as the medium of instruction. It is the largest
              affiliating University in Asia with close to 800 affiliated
              colleges spread over 3 districts of Telangana providing
              academic and research facilities for nearly five lakh
              students.
            </p>

            <p>
              It was accredited with a FIVE STAR rating by NAAC in 2001
              and reaccredited with the highest grade A in 2008. It has
              consistently ranked among India's leading universities.
            </p>

            <p>
              Osmania is a multi-faculty and multi-campus university
              offering comprehensive education with 12 faculties and 53
              academic departments spread over multiple campuses and
              constituent colleges.
            </p>

            <p>
              The University has launched several new initiatives in
              teaching, learning and research to keep pace with global
              trends in higher education. These initiatives empower
              students with knowledge and skills while improving
              employability and research output.
            </p>

            <p>
              The University has established strong collaborations with
              industry and international institutions and has developed
              advanced research facilities including technology
              development centers and central instrumentation facilities.
            </p>
          </div>

        </div>
      </div>
    </SiteLayout>
  );
}