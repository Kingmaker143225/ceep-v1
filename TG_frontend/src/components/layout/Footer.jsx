
import { useState } from "react";
import { Link } from "wouter";
import {
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

export default function Footer() {
  const [activePolicy, setActivePolicy] = useState(null);

  const policyContent = {
  privacy: {
    title: "Privacy Policy",
    content: `
<p>
We value the trust you place in us. That's why we insist upon the highest standards for secure transactions and applicant information privacy. Please read the following statement to learn about our information gathering and dissemination practices.
</p>
<p> <b>Note: </b>Our privacy policy is subject to change at any time without notice. To make sure you are aware of any changes,
</p>
<p> <b>please review this policy periodically.</b>
</p>

<br/>

<span style="font-weight:bold; color:#06254D; font-size:18px;">
1. PAYMENT SECURITY
</span>

<p>
Our site has stringent security measures in place to protect the loss, misuse, and alteration of the information under our control. Whenever you change or access your account information, we offer the use of a secure server. Once your information is in our possession we adhere to strict security guidelines, protecting it against unauthorized access.
</p>
<p> <b> M.E. / M.TECH. (PTPG) ADMISSIONS </b> website ensures that every transaction that takes between you and our M.E. / M.TECH. (PTPG) ADMISSIONSwebsite through online is in a safe and secure environment. This can be achieved, as M.E. / M.TECH. (PTPG) ADMISSIONS website is protected by Secured Socket Layer (SSL) technology.

<br/>

<span style="font-weight:bold; color:#06254D; font-size:18px;">
2. COLLECTION OF PERSONALLY IDENTIFIABLE INFORMATION
</span>

<p>
We collect personally identifiable information (Email Id., Name, Contact number, etc.) from you when you apply for the M.E. / M.TECH. (PTPG) ADMISSIONS examination. Any one can browse some sections of our site without being an applicant for M.E. / M.TECH. (PTPG) ADMISSIONS. Certain activities (such as applying for the M.E. / M.TECH. (PTPG) ADMISSIONS Examination, Application Status, Complaint Status, etc) do require Registration. We do use your contact information to send you information.
</p>

<br/>

<span style="font-weight:bold; color:#06254D; font-size:18px;">
3. USE OF DEMOGRAPHIC AND PROFILE DATA
</span>

<p>
We use Personal Information for smooth conduct of M.E. / M.TECH. (PTPG) ADMISSIONS. We use your personal information to check your eligibility to appear for the M.E. / M.TECH. (PTPG) ADMISSIONS examination as per G.O.’s issued by AP state government from time to time. We use your personal information to resolve disputes, troubleshoot problems, help promote a safe service, collect fees owed, detect and protect us against error, fraud and other criminal activity, enforce our terms and conditions, and as otherwise described to you at the time of collection.

In our efforts to continually improve our product and service offerings, we collect and analyze demographic and profile data about our users' activity on our website. We identify and use your IP address to help diagnose problems with our server, and to administer our website. Your IP address is also used to help identify you and to gather broad demographic information.


</p>

<br/>

<span style="font-weight:bold; color:#06254D; font-size:18px;">
4. COOKIES
</span>

<p>
A "cookie" is a small piece of information stored by a Web server on a Web browser so it can be later read back from that browser. Cookies are useful for enabling the browser to remember information specific to a given user. M.E. / M.TECH. (PTPG) ADMISSIONS places both permanent and temporary cookies in your computer's hard drive. M.E. / M.TECH. (PTPG) ADMISSIONS cookies do not contain any of your Personally Identifiable Information.
</p>
<span style="font-weight:bold; color:#06254D; font-size:18px;">
5. SHARING OF PERSONAL INFORMATION
</span>
<p>
We may share personal information with our other education department and other related department entities and affiliates to help detect and prevent identity theft, fraud and other potentially illegal acts, correlate related or multiple accounts to prevent abuse of our services.

We may disclose personal information, if required to do so by law or in the good faith belief that such disclosure is reasonably necessary to respond to court orders, or other legal process. We may disclose personal information to law enforcement offices, third party rights owners, or others in the good faith belief that such disclosure is reasonably necessary to enforce our Terms or Privacy Policy, respond to claims that an advertisement, posting or other content violates the rights of a third party or protect the rights, property or personal safety of our users or the general public.
</p>
<span style="font-weight:bold; color:#06254D; font-size:18px;">
6. PROHIBITION AGAINST UNLAWFUL USE
</span>
<p>
As a condition for the use of the M.E. / M.TECH. (PTPG) ADMISSIONS Website, the User warrants that they will not use the Website for any purpose that is unlawful or illegal under any law for the time being in force within or outside India or prohibited by this Agreement. In addition, the M.E. / M.TECH. (PTPG) ADMISSIONSWebsite shall not be used in any manner, which could damage, disable, overburden or impair it or interfere with any other party's use of the Website. The User shall refrain from obtaining or attempting to obtain any materials or information through any means not intentionally made available or provided for or through the Website.
</p>
<span style="font-weight:bold; color:#06254D; font-size:18px;">
7. LINKS TO OTHER SITES
</span>
<p>
Our site links to other websites that may collect Personally Identifiable Information about you. M.E. / M.TECH. (PTPG) ADMISSIONS COMMITTEE is not responsible for the privacy practices or the content of those linked websites.
</p>
<span style="font-weight:bold; color:#06254D; font-size:18px;">
8. USE OF COMMUNICATION SERVICES
</span>

<p style="margin-top:14px;">
centers, and/or other message (hereinafter collectively referred to as "Communication Services"). The User agrees and undertakes to use the Communication Services only to post, send and receive messages and material that are proper and related to the M.E. / M.TECH. (PTPG) ADMISSIONS.. By way of example, and not as a limitation, the User agrees and undertakes that when using a Communication Service, the User will not:
</p>


<ol style="padding-left:32px; margin-top:16px; line-height:2.2;">
  <li>
    1.defame, abuse, harass, stalk, threaten or otherwise violate the legal rights of others.
  </li>

  <li>
    2. upload files that contain software or other material protected by intellectual property laws unless the User owns or controls the rights thereto or have received all necessary consents.
  </li>

  <li>
    3. upload or distribute files that contain viruses, corrupted files, or any other similar software or programs that may damage the operation of the M.E. / M.TECH. (PTPG) ADMISSIONSWebsite or another's computer,
  </li>

  <li>
    4. conduct or forward surveys, contests, pyramid schemes or chain letters;
  </li>

  <li>
    5. download any file posted by another user of a Communication Service that the User know, or reasonably should know, cannot be legally distributed in such manner;
  </li>

  <li>
    6. falsify or delete any author attributions, legal or other proper notices or proprietary designations or labels of the origin or source of software or other material contained in a file that is uploaded;
  </li>

  <li>
    7. violate any code of conduct or other guidelines, which may be applicable for or to any particular Communication Service;
  </li>

  <li>
    8. violate any applicable laws or regulations for the time being in force in or outside India; and
  </li>
  
</ol>

<p style="margin-top:20px;">
violate any of the terms and conditions of this Agreement or any other terms and conditions for the use of the Website contained elsewhere herein.



<b>M.E. / M.TECH. (PTPG) ADMISSIONS.</b> reserves the right at all times to disclose any information as is necessary to satisfy or comply with any applicable law, regulation, legal process or governmental request, or to edit, refuse to post or to remove any information or materials, in whole or in part, in M.E. / M.TECH. (PTPG) ADMISSIONSsole discretion .



<b>M.E. / M.TECH. (PTPG) ADMISSIONS.</b> does not control or endorse the content, messages or information found in any communication service and, therefore, M.E. / M.TECH. (PTPG) ADMISSIONSspecifically disclaims any liability or responsibility whatsoever with regard to the communication services and any actions resulting from the user's participation in any communication  .


Materials uploaded to a Communication Service may be subject to posted limitations on usage, reproduction and/or dissemination. User is responsible for keeping himself updated of and adhering to such limitations if they download the materials.


</p>
<span style="font-weight:bold; color:#06254D; font-size:18px;">
9. TERMINATION/ACCESS RESTRICTION
</span>
<p>
M.E. / M.TECH. (PTPG) ADMISSIONSreserves the right, in its sole discretion, to terminate the access to the website and the related services or any portion thereof at any time, without notice.
</p>
<span style="font-weight:bold; color:#06254D; font-size:18px;">
10. QUESTIONS?
</span>
<p>
Questions regarding this statement should be directed to the following address: info@ouadmissions.com.
`,
  },

   terms: {
    title: "Terms & Conditions",
    content: `
    <span style="font-weight:bold; color:#06254D; font-size:18px;">
No Warranty:
</span>
<p>
The information and materials contained in the site, including text, graphics, links or other items - are provided on an "As Is" and "As Available" basis. Although, TG ECET (WP) - 2026 Committee which organises and conducts TG ECET (WP) - 2026 tries to provide information accurately it expressly disclaims liability for errors or omissions in this information and materials. No warranty of any kind, implied, express or statutory, including but not limited to the warranty of fitness for a particular purpose and freedom from computer virus, is given in conjunction with the information and materials.
</p>
<span style="font-weight:bold; color:#06254D; font-size:18px;">
Limitation of Liability:
</span>
<p>
In no event, M.E. / M.TECH. (PTPG) ADMISSIONS will be liable for any damages, including without limitation, direct or indirect, special, incidental, or consequential damages, losses, or expenses arising in connection with this site or use thereof or inability to use by any persons, or in connection with any failure of performance, error, omission, interruption, defect, delay of operation or transmission, computer virus or line or system failure, even if M.E. / M.TECH. (PTPG) ADMISSIONS., or representative thereof, are advised of the possibility of such damages, losses or expenses.
</p>
<span style="font-weight:bold; color:#06254D; font-size:18px;">
Network Services:
</span>
<p>
M.E. / M.TECH. (PTPG) ADMISSIONS committee cannot be held responsible for reduced access speeds due to bandwidth overloads especially close to the submission date.
</p>
`,
  },
  disclaimer: {
    title: "Disclaimer",
    content: `
This website has been launched to provide the candidates and public-at-large, information about the M.E. / M.TECH. (PTPG) ADMISSIONS examination. If you do not agree to the terms and conditions below, do not access this site or any pages thereof.
`,
  },

  refund: {
    title: "Refund & Cancellation Policy",
    content: `
<P>1. Registration fee once paid against a candidate cannot be exchanged, cancelled are refunded..
</p>

<P>2. This payment is made towards application fee only. However, the candidate should submit the application ONLINE by referring the payment details within the stipulated dates as per the M.E. / M.TECH. (PTPG) ADMISSIONS notification. Please ensure that you submit the application ONLINE with in the stipulated date for that fee.
</p>
<P>3. Your payment towards application fee will not make you eligible for the examination. M.E. / M.TECH. (PTPG) ADMISSIONS committee verifies your candidature as per the rules and guidelines and will decide to accept or reject your application. It is the sole discretion of the M.E. / M.TECH. (PTPG) ADMISSIONS committee to finalise the eligibility of the candidate for the examination as per the information provided by the candidate.
</p>
<P>4. Any legal disputes should be limited to Hyderabad jurisdiction.
`,
  },
};
  const openPolicy = (key) => {
    setActivePolicy(policyContent[key]);
  };

  const closePolicy = () => {
    setActivePolicy(null);
  };

  return (
    <>
      <footer className="bg-[#06254D] text-white/80 pt-16 pb-0 border-t-4 border-secondary mt-auto">
<div className="container mx-auto max-w-7xl px-4 mb-12">
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 items-start">

    {/* Brand/About */}
    {/* Brand/About */}
<div>

  {/* Heading */}
  <div className="h-[40px] flex items-center mb-6">
    <h4
      className="m-0 text-[18px] font-bold text-white leading-none whitespace-nowrap"
      style={{
        fontFamily: "Arial, Helvetica, sans-serif",
      }}
    >
      TG ECET (WP) - 2026
    </h4>

    <span className="inline-block h-[2px] w-8 bg-secondary ml-4 rounded-full" />
  </div>

  {/* Content */}
  <p className="text-sm leading-8 -m-1.5 text-justify">
    M.E./M.Tech. (CEEP) Admissions are conducted by the University College of Engineering (Autonomous), Osmania University, Hyderabad, for Working Professionals seeking admission into postgraduate engineering programmes.
  </p>

</div>

    {/* Quick Links */}
    <div className="pt-0">
      <div className="h-[40px] flex items-center mb-6">
        <div className="flex items-center whitespace-nowrap">
          <h4
            className="m-0 text-[18px] font-bold text-white leading-none"
            style={{
              fontFamily: "Arial, Helvetica, sans-serif",
            }}
          >
            Quick Links
          </h4>

          <span className="inline-block h-[2px] w-8 bg-secondary ml-4 rounded-full" />
        </div>
      </div>

      <ul className="space-y-4 text-sm">
        {/* <li>
          <Link href="/about">
            <span className="hover:text-secondary transition-colors cursor-pointer">
              About TG ECET (WP) - 2026
            </span>
          </Link>
        </li>

        <li>
          <Link href="/important-dates">
            <span className="hover:text-secondary transition-colors cursor-pointer">
              Important Dates
            </span>
          </Link>
        </li>

        <li>
          <Link href="/syllabus">
            <span className="hover:text-secondary transition-colors cursor-pointer">
              Syllabus & Exam Pattern
            </span>
          </Link>
        </li> */}

        <li>
          <Link href="/contact">
            <span className="hover:text-secondary transition-colors cursor-pointer">
              Contact Support
            </span>
          </Link>
        </li>
      </ul>
    </div>

    {/* Student Services */}
    <div className="pt-0">
      <div className="h-[40px] flex items-center mb-6">
        <div className="flex items-center whitespace-nowrap">
          <h4
            className="m-0 text-[18px] font-bold text-white leading-none"
            style={{
              fontFamily: "Arial, Helvetica, sans-serif",
            }}
          >
            Student Services
          </h4>

          <span className="inline-block h-[2px] w-8 bg-secondary ml-4 rounded-full" />
        </div>
      </div>
{/* 
      <ul className="space-y-4 text-sm">
        <li>
          <Link href="/application">
            <span className="hover:text-secondary transition-colors cursor-pointer">
              Online Application
            </span>
          </Link>
        </li>
      </ul> */}
    </div>

    {/* Contact */}
    <div className="pt-0">
      <div className="h-[40px] flex items-center mb-6">
        <div className="flex items-center whitespace-nowrap">
          <h4
            className="m-0 text-[18px] font-bold text-white leading-none"
            style={{
              fontFamily: "Arial, Helvetica, sans-serif",
            }}
          >
            Contact Us
          </h4>

          <span className="inline-block h-[2px] w-8 bg-secondary ml-4 rounded-full" />
        </div>
      </div>

      <ul className="space-y-4 text-sm">
        <li className="flex items-start gap-3">
          <MapPin className="w-5 h-5 text-secondary shrink-0 mt-0.5" />

          <span>
            UNIVERSITY COLLEGE OF ENGINEERING (Autonomous),
            <br />
            Osmania University Campus,
            <br />
            Hyderabad-500007, Telangana .

          </span>
        </li>

        <li className="flex items-center gap-3">
          <Phone className="w-4 h-4 text-secondary shrink-0" />

          <span>+91 8331997314</span>
        </li>

        <li className="flex items-center gap-3">
          <Mail className="w-4 h-4 text-secondary shrink-0" />

          <span>collegetechsuprt.cst@gmail.com</span>
        </li>
      </ul>

      <div className="mt-6 p-4 bg-white/5 border border-white/10 rounded-md">
        <p className="text-xs font-medium text-white mb-1">
          Helpline Hours
        </p>

        <p className="text-xs text-white/60">
          10:00 AM to 5:00 PM (Working days only)
        </p>
      </div>
    </div>

  </div>
</div>

        {/* Bottom Footer */}
        <div className="bg-[#041a38] py-4">
          <div className="container mx-auto max-w-7xl px-4 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-medium">

            <p>
              &copy; {new Date().getFullYear()} Osmania University Of Hyderabad.
              All rights reserved.
            </p>

            <div className="flex items-center justify-center gap-4 flex-wrap">

              <button
                onClick={() => openPolicy("privacy")}
                className="hover:text-white transition-colors"
              >
                Privacy Policy
              </button>

              <span className="w-1 h-1 rounded-full bg-white/30"></span>

              <button
                onClick={() => openPolicy("terms")}
                className="hover:text-white transition-colors"
              >
                Terms & Conditions
              </button>

              <span className="w-1 h-1 rounded-full bg-white/30"></span>

              <button
                onClick={() => openPolicy("disclaimer")}
                className="hover:text-white transition-colors"
              >
                Disclaimer
              </button>

              <span className="w-1 h-1 rounded-full bg-white/30"></span>

              <button
                onClick={() => openPolicy("refund")}
                className="hover:text-white transition-colors"
              >
                Refund & Cancellation Policy
              </button>
            </div>

            {/* <p className="text-secondary flex items-center gap-3">
              Designed and developed by

              <span className="text-white flex items-center gap-1">
                <img
                  src="/cognisysai.jpeg"
                  alt="CognisysAi Logo"
                  className="w-8 h-8 object-contain"
                /> 
                CognisysAi
              </span> 
            </p> */}
            <p className="text-secondary flex items-center gap-3">
  Designed and developed by

  <a
    href="https://cognisysai.com"
    target="_blank"
    rel="noopener noreferrer"
    className="text-white flex items-center gap-1 hover:text-primary transition"
  >
    <img
      src="/cognisysai.jpeg"
      alt="CognisysAi Logo"
      className="w-8 h-8 object-contain"
    />

    <span>CognisysAi</span>
  </a>
</p>
          </div>
          {/* <div className="text-center text-secondary mt-2">
          <span className="font-bold font-[30px]">CognisysAi</span>
          </div> */}
        </div>
      </footer>

      {/* Modal Popup */}
      {activePolicy && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center px-4">

          <div className="bg-white text-gray-800 w-full max-w-4xl rounded-lg shadow-xl overflow-hidden">

            <div className="bg-[#06254D] text-white px-6 py-4 flex items-center justify-between">
              <h2 className="text-lg font-bold">
                {activePolicy.title}
              </h2>

              <button
                onClick={closePolicy}
                className="text-white text-xl hover:text-secondary"
              >
                ✕
              </button>
            </div>

            <div className="p-6 max-h-[70vh] overflow-y-auto">
              <div
  className="text-sm leading-7 text-gray-700 text-justify"
  dangerouslySetInnerHTML={{ __html: activePolicy.content }}
/>
            </div>

            <div className="px-6 py-4 border-t flex justify-end">
              <button
                onClick={closePolicy}
                className="bg-[#06254D] text-white px-5 py-2 rounded-md hover:bg-[#041a38]"
              >
                Close
              </button>
            </div>

          </div>
        </div>
      )}
    </>
  );
}