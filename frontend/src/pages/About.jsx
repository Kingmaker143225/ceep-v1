// import SiteLayout from "@/components/layout/SiteLayout";
// import PageBanner from "@/components/layout/PageBanner";

// export default function About() {
//   return (
//     <SiteLayout>
//       <PageBanner
//         title="About M.E/M.Tech.(CEEP)-2026"
//         crumbs={[{ label: "About" }]}
//       />

//       <div className="container mx-auto max-w-5xl py-12 px-4 space-y-12">
//         <section className="prose prose-slate max-w-none">
//           <h2 className="text-3xl font-serif font-bold text-primary mb-6">
//             Introduction
//           </h2>

//           <p className="text-lg text-muted-foreground leading-relaxed text-justify">
//             Telangana Engineering Common Entrance Test for Diploma Holders (Working Professional)
//             Engineering/Technology in short form as M.E/M.Tech.(CEEP)- 2026
//             is being conducted by Osmania University Hyderabad on behalf of the
//             Telangana Council of Higher Education (TGCHE) for the academic year
//             2026-2027. This examination is the prerequisite for lateral entry
//             admission into 2nd year regular B.E./B.Tech. courses in both
//             University and Un-Aided Private Professional Institutions (Minority &
//             Non-Minority).
//           </p>

//           <p className="text-lg text-muted-foreground leading-relaxed text-justify">
//             Osmania University Hyderabad, Telangana is a place of Academic
//             Excellence. Bringing the spark of knowledge to young minds and
//             instilling a new confidence and vigor to face the world, it is
//             providing quality Technical Education for 100 plus years. Telangana
//             Council of Higher Education (TGCHE) has delegated the task to
            
//              <b> Telangana Council of Higher Education (TGCHE)</b> has delegated the task to <b>Osmania University</b> for conducting the prestigious <b>Telangana Engineering Common Entrance Test for Working Professionals (M.E/M.Tech.(CEEP)-2026)</b> for the year 2026, and the examination will be conducted in <b>PHYSICAL</b> mode only.
          
//           </p>

          
//         </section>
//       </div>
//     </SiteLayout>
//   );
// }















import SiteLayout from "@/components/layout/SiteLayout";
import PageBanner from "@/components/layout/PageBanner";

export default function About() {
  return (
    <SiteLayout>
      <PageBanner
        title="About M.E/M.Tech.(CEEP)-2026"
        crumbs={[{ label: "About" }]}
      />

      <div className="container mx-auto max-w-6xl py-12 px-4 space-y-16">

        {/* Introduction */}
        <section>
          <h2 className="text-3xl font-bold text-primary mb-6">
            Introduction
          </h2>

          <div className="space-y-5 text-justify leading-8 text-gray-700">
            <p>
              Telangana Engineering Common Entrance Test for Diploma Holders
              (Working Professional) Engineering/Technology in short form as
              M.E/M.Tech.(CEEP)-2026 is being conducted by Osmania University,
              Hyderabad on behalf of Telangana Council of Higher Education
              (TGCHE) for the academic year 2026-2027.
            </p>

            <p>
              This examination is the prerequisite for lateral entry admission
              into 2nd year regular B.E./B.Tech. courses in both University
              and Un-Aided Private Professional Institutions (Minority &
              Non-Minority).
            </p>

            <p>
              Telangana Council of Higher Education (TGCHE) has delegated the
              task to <strong>Osmania University</strong> for conducting the
              prestigious <strong>M.E/M.Tech.(CEEP)-2026</strong>. The examination
              will be conducted in <strong>PHYSICAL</strong> mode only.
            </p>
          </div>
        </section>

        {/* Osmania University */}
        <section
          id="osmania-university"
          className="scroll-mt-24"
        >
          <div className="border-l-4 border-[#C98A45] pl-4 mb-6">
            <h2 className="text-3xl font-bold text-primary">
              About Osmania University
            </h2>
          </div>

          <div className="space-y-5 text-justify leading-8 text-gray-700">
            <p>
              Osmania University, established in the year 1918, is the seventh
              oldest university in the country, third oldest in South India
              and the oldest in the state of Andhra Pradesh. It was founded by
              His Exalted Highness Mir Osman Ali Khan, the Seventh Nizam of
              Hyderabad State.
            </p>

            <p>
              It was the first University to impart higher education through
              Urdu as the medium of instruction. It is the largest affiliating
              University in Asia with close to 800 affiliated colleges spread
              over three districts of Telangana providing academic and research
              facilities for nearly five lakh students.
            </p>

            <p>
              It was accredited with a FIVE STAR rating by NAAC in 2001 and
              reaccredited with the highest grade A in 2008. The university
              offers comprehensive education with 12 faculties and 53 academic
              departments spread over multiple campuses and constituent
              colleges.
            </p>

            <p>
              The University has launched several initiatives in teaching,
              learning and research to keep pace with global trends in higher
              education. It has established collaborations with industry,
              national organizations and international institutions for
              sponsored research, consultancy and academic partnerships.
            </p>
          </div>
        </section>

        {/* UCE */}
        <section
          id="uce-ou"
          className="scroll-mt-24"
        >
          <div className="border-l-4 border-[#C98A45] pl-4 mb-6">
            <h2 className="text-3xl font-bold text-primary">
              About The University College of Engineering, OU
            </h2>
          </div>

          <div className="space-y-5 text-justify leading-8 text-gray-700">
            <p>
              The University College of Engineering (UCE) has the distinction
              of being the oldest and the biggest among the Engineering
              Colleges of the State. Established in 1929, eleven years after
              the formation of Osmania University, it was the sixth
              Engineering College established in British India.
            </p>

            <p>
              The College moved to its present permanent building in 1947.
              Today it is the largest among the campus colleges of Osmania
              University. The College celebrated its Golden Jubilee in 1979,
              Diamond Jubilee in 1989 and Platinum Jubilee in 2004.
            </p>

            <p>
              The College was made autonomous in 1994 and offers B.E.
              programmes in Biomedical Engineering, Civil Engineering,
              Computer Science and Engineering, Electrical and Electronics
              Engineering, Electronics and Communication Engineering and
              Mechanical Engineering.
            </p>

            <p>
              It also offers MCA, M.S. by Research and Ph.D. programmes in
              various branches of Engineering. Part-time courses are available
              at both undergraduate and postgraduate levels.
            </p>

            <p>
              The institution currently has more than 100 faculty members,
              including professors, and admits hundreds of undergraduate and
              postgraduate students every year.
            </p>
          </div>
        </section>
      </div>
    </SiteLayout>
  );
}