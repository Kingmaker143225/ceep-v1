import SiteLayout from "@/components/layout/SiteLayout";
import PageBanner from "@/components/layout/PageBanner";

export default function TermsConditions() {
  return (
    <SiteLayout>
      <PageBanner
        title="Terms & Conditions"
        crumbs={[{ label: "Terms & Conditions" }]}
      />

      <div className="container mx-auto max-w-6xl py-12 px-4">
        <div className="bg-white rounded-lg shadow-md border p-6 md:p-10">

          <h2 className="text-3xl font-bold text-[#06254D] mb-8">
            Terms & Conditions
          </h2>

          <div className="space-y-6 text-gray-700 leading-8">

            <p>
              No Warranty :

The information and materials contained in the site, including text, graphics, links or other items - are provided on an "As Is" and "As Available" basis. Although, TG ECET - 2026 Committee which organises and conducts TG ECET - 2026 tries to provide information accurately it expressly disclaims liability for errors or omissions in this information and materials. No warranty of any kind, implied, express or statutory, including but not limited to the warranty of fitness for a particular purpose and freedom from computer virus, is given in conjunction with the information and materials.

Limitation of Liability :

In no event, TG ECET - 2026 will be liable for any damages, including without limitation, direct or indirect, special, incidental, or consequential damages, losses, or expenses arising in connection with this site or use thereof or inability to use by any persons, or in connection with any failure of performance, error, omission, interruption, defect, delay of operation or transmission, computer virus or line or system failure, even if TG ECET - 2026, or representative thereof, are advised of the possibility of such damages, losses or expenses.

Network Services :

The TG ECET - 2026 committee cannot be held responsible for reduced access speeds due to bandwidth overloads especially close to the submission date.
            </p>

          </div>

        </div>
      </div>
    </SiteLayout>
  );
}