import SiteLayout from "@/components/layout/SiteLayout";
import PageBanner from "@/components/layout/PageBanner";

export default function Disclaimer() {
  return (
    <SiteLayout>
      <PageBanner
        title="Disclaimer"
        crumbs={[{ label: "Disclaimer" }]}
      />

      <div className="container mx-auto max-w-6xl py-12 px-4">
        <div className="bg-white rounded-lg shadow-md border p-6 md:p-10">

          <h2 className="text-3xl font-bold text-[#06254D] mb-8">
            Disclaimer
          </h2>

          <div className="space-y-6 text-gray-700 leading-8">
            <p>
              This website has been launched to provide the candidates and public-at-large, information about the TG ECET - 2026 examination. If you do not agree to the terms and conditions below, do not access this site or any pages thereof.
            </p>

            
          </div>

        </div>
      </div>
    </SiteLayout>
  );
}