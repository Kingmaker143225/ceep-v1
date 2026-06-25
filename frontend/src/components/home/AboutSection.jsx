
import PersonCard from "./PersonCard";

export default function AboutSection() {
  return (
    <section className="py-10 bg-background relative overflow-hidden">
      <div className="container mx-auto max-w-7xl px-4">
        
        
        <div className="grid lg:grid-cols-3 gap-10 items-center">
          
          
          <div className="flex justify-center lg:justify-start">
  <PersonCard 
  name="Sr. Prof. Kumar Molugaram"

  role={`Chairman, M.E/M.Tech.(CEEP)-2026 &`}
  role2={`Vice-Chancellor, Osmania University, Hyderabad-500007 Telangana, India.`}
    


  imageSrc="/convener.png"
  imageSize="w-44 h-44"
/>
</div>

          {/* CENTER CONTENT */}
          <div className="space-y-6 text-center lg:text-left text-center">
            <div className="mb-6">
  <h2
    className="text-3xl md:text-4xl font-bold text-[#06254D] leading-tight text-center"
    style={{
      fontFamily: "Arial, Helvetica, sans-serif",
      letterSpacing: "0px",
    }}
  >
    About M.E/M.Tech.(CEEP)-2026
  </h2>

  <div className="h-1 w-20 bg-yellow-500 mt-3 rounded-full mx-auto lg:mx-0" />
</div>

            <div className="prose prose-lg prose-slate text-muted-foreground leading-relaxed text-justify">
              <p>
                Telangana Engineering Common Entrance Test (M.E/M.Tech.(CEEP)-2026) is conducted by Osmania University on behalf of TGCHE for lateral entry admissions into engineering.
              </p>

              <p>
                It enables diploma students to directly enter the second year of professional courses across Telangana.
              </p>

              <p>
                The test is conducted in physical mode (OMR) ensuring transparency, speed, and efficiency in evaluation.
              </p>
            </div>
          </div>

          

          <div className="flex justify-center lg:justify-end">
  <PersonCard 
  name="Prof. P. Chandra Sekhar"

  role={`Convener, M.E/M.Tech.(CEEP)-2026 &`}
  role2={`Principal, University College of Engineering (A),Osmania University, Hyderabad-500007
Telangana, India.`}
    


  imageSrc="/coordinator.png"
  imageSize="w-44 h-44"
/>
</div>

        </div>

      </div>
    </section>
  );
}