import SiteLayout from "@/components/layout/SiteLayout";
import PageBanner from "@/components/layout/PageBanner";

export default function PrivacyPolicy() {
  return (
    <SiteLayout>
      <PageBanner
        title="Privacy Policy"
        crumbs={[{ label: "Privacy Policy" }]}
      />

      <div className="container mx-auto max-w-6xl py-12 px-4">
        <div className="bg-white rounded-lg shadow-md border p-6 md:p-10">

          <h2 className="text-3xl font-bold text-[#06254D] mb-8">
            Privacy Policy
          </h2>

          <div className="space-y-8 text-gray-700 leading-8 text-justify">

            <p>
              We value the trust you place in us. That's why we insist upon the
              highest standards for secure transactions and applicant information
              privacy. Please read the following statement to learn about our
              information gathering and dissemination practices.
            </p>

            <p>
              Note: Our privacy policy is subject to change at any time without
              notice. To make sure you are aware of any changes, please review
              this policy periodically.
            </p>

            <div>
              <h3 className="text-xl font-bold text-[#06254D] mb-3">
                1. PAYMENT SECURITY
              </h3>

              <p>
                Our site has stringent security measures in place to protect the
                loss, misuse, and alteration of the information under our
                control. Whenever you change or access your account information,
                we offer the use of a secure server.
              </p>

              <p className="mt-3">
                TG ECET - 2026 website ensures that every transaction between
                you and our TG ECET website through online mode is in a safe and
                secure environment using SSL technology.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-[#06254D] mb-3">
                2. COLLECTION OF PERSONALLY IDENTIFIABLE INFORMATION
              </h3>

              <p>
                We collect personally identifiable information such as Email ID,
                Name, Contact Number, etc., when you apply for TG ECET - 2026.
              </p>

              <p className="mt-3">
                Certain activities such as applying for examination, checking
                application status, and complaint status require registration.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-[#06254D] mb-3">
                3. USE OF DEMOGRAPHIC AND PROFILE DATA
              </h3>

              <p>
                We use your personal information for smooth conduct of TG ECET
                and to verify eligibility as per Telangana Government rules.
              </p>

              <p className="mt-3">
                We may use the information to resolve disputes, troubleshoot
                problems, improve services, detect fraud, and administer the
                website.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-[#06254D] mb-3">
                4. COOKIES
              </h3>

              <p>
                Cookies are small pieces of information stored on your browser
                to remember user-specific information.
              </p>

              <p className="mt-3">
                TG ECET - 2026 uses both permanent and temporary cookies, which
                do not contain personally identifiable information.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-[#06254D] mb-3">
                5. SHARING OF PERSONAL INFORMATION
              </h3>

              <p>
                Personal information may be shared with related government
                departments or authorities where necessary for legal,
                administrative, or examination purposes.
              </p>

              <p className="mt-3">
                Information may also be disclosed if required by law or to
                prevent fraud and illegal activities.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-[#06254D] mb-3">
                6. PROHIBITION AGAINST UNLAWFUL USE
              </h3>

              <p>
                Users shall not use the TG ECET Website for any unlawful,
                illegal, or prohibited activity.
              </p>

              <p className="mt-3">
                Users must not attempt to damage, overload, hack, or interfere
                with the website or its services.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-[#06254D] mb-3">
                7. LINKS TO OTHER SITES
              </h3>

              <p>
                The website may contain links to external websites. TG ECET -
                2026 is not responsible for the privacy practices or content of
                external sites.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-[#06254D] mb-3">
                8. USE OF COMMUNICATION SERVICES
              </h3>

              <p>
                Users agree to use communication services such as email,
                announcements, and help centers responsibly and legally.
              </p>

              <p className="mt-3">
                Uploading harmful software, violating laws, harassing others, or
                distributing malicious files is strictly prohibited.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-[#06254D] mb-3">
                9. TERMINATION / ACCESS RESTRICTION
              </h3>

              <p>
                TG ECET reserves the right to terminate access to the website or
                related services at any time without notice.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-[#06254D] mb-3">
                10. QUESTIONS?
              </h3>

              <p>
                Questions regarding this policy may be directed to:
              </p>

              <p className="mt-3 font-semibold text-[#06254D]">
                desktgecet@gmail.com
              </p>
            </div>

          </div>
        </div>
      </div>
    </SiteLayout>
  );
}