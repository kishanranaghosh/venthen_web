import { CONTACT_EMAIL, LAST_UPDATED, TOC_ITEMS } from "./data";

function H2({ id, children }: { id: string; children: string }) {
  return (
    <h2 id={id} className="text-2xl font-bold text-white mt-12 mb-4 pb-2 border-b border-zinc-800/50">
      {children}
    </h2>
  );
}

function H3({ children }: { children: string }) {
  return <h3 className="text-lg font-semibold text-white mt-6 mb-3">{children}</h3>;
}

function P({ children }: { children: React.ReactNode }) {
  return <p className="text-zinc-300 leading-relaxed mb-4">{children}</p>;
}

function Strong({ children }: { children: string }) {
  return <strong className="text-white font-medium">{children}</strong>;
}

function UL({ children }: { children: React.ReactNode }) {
  return <ul className="list-disc pl-6 space-y-2 text-zinc-300 mb-4">{children}</ul>;
}

export function PrivacyContent() {
  return (
    <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <div className="mb-2">
          <p className="text-xs font-medium text-orange-400/80 uppercase tracking-wider">Legal</p>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">Privacy Policy</h1>
        <p className="mt-4 text-zinc-400 leading-relaxed">
          Your privacy matters to us. This policy explains how Venthen collects,
          uses, stores, and protects information when you use our services.
        </p>
        <p className="mt-3 text-sm text-zinc-500">
          Last updated: <strong className="text-zinc-300">{LAST_UPDATED}</strong>
        </p>

        <nav className="mt-10 rounded-2xl border border-zinc-800/60 bg-[#0f0f0f] p-6">
          <h2 className="text-sm font-semibold text-zinc-400 uppercase tracking-wider mb-4">Contents</h2>
          <ol className="space-y-2 text-sm">
            {TOC_ITEMS.map(([id, label]) => (
              <li key={id}>
                <a href={`#${id}`} className="text-zinc-400 hover:text-orange-400 transition-colors">{label}</a>
              </li>
            ))}
          </ol>
        </nav>

        <H2 id="introduction">1. Introduction</H2>
        <P>
          Venthen provides an educational technology platform designed to help
          colleges and institutions manage attendance, students, faculty,
          devices, and academic workflows. This Privacy Policy applies to the
          Venthen mobile application, the Venthen website at{" "}
          <Strong>venthen.dev</Strong>, and related services (collectively, the
          &ldquo;Services&rdquo;).
        </P>
        <P>
          This policy explains what information we collect, why we collect it,
          how we use it, and the choices available to you. By using the
          Services, you agree to the practices described in this policy.
        </P>

        <H2 id="information-we-collect">2. Information We Collect</H2>
        <H3>2.1 Account Information</H3>
        <P>When you create an account or are registered through your institution, Venthen may collect:</P>
        <UL>
          <li>Full name</li>
          <li>Email address</li>
          <li>Institution, department, and role (student, faculty, or administrator)</li>
          <li>User ID or roll number assigned by your institution</li>
          <li>Account credentials (stored in hashed form)</li>
        </UL>

        <H3>2.2 Academic Information</H3>
        <P>In order to provide the Services, Venthen processes academic information associated with your account, which may include:</P>
        <UL>
          <li>Course and class enrollment information</li>
          <li>Attendance records (date, time, and method — e.g., RFID, fingerprint, or manual)</li>
          <li>Class schedules and timetables</li>
          <li>Grades, quiz results, and assignment data (if configured by your institution)</li>
          <li>Faculty-class and student-class associations</li>
        </UL>

        <H3>2.3 Attendance Hardware Data</H3>
        <P>Venthen integrates with attendance hardware including RFID card readers, fingerprint sensors, and ESP32-based devices. When a student uses an attendance device:</P>
        <UL>
          <li><Strong>RFID:</Strong> The device reads the unique identifier from the RFID card to associate the attendance event with the corresponding student account.</li>
          <li><Strong>Fingerprint:</Strong> The fingerprint sensor on the ESP32-based device processes biometric data locally to verify identity. <Strong>Venthen does not collect, transmit, or store raw fingerprint or biometric data on its servers.</Strong> Only a confirmation of the attendance event (student identity + timestamp) is transmitted to the Venthen platform.</li>
        </UL>

        <H3>2.4 Device and Technical Information</H3>
        <P>When you use the Venthen mobile application, we may automatically collect:</P>
        <UL>
          <li>Device type and operating system version</li>
          <li>App version</li>
          <li>Push notification token (if notifications are enabled)</li>
          <li>Network information for connectivity and troubleshooting</li>
        </UL>

        <H3>2.5 Usage Information</H3>
        <P>We may collect information about how you interact with the Services, including features used, screens visited within the app, and error or crash reports, to improve reliability and user experience.</P>

        <H2 id="mobile-permissions">3. Mobile App Permissions</H2>
        <P>The Venthen Android application may request the following device permissions. Each permission serves a specific purpose within the Services.</P>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm text-zinc-300 border-collapse">
            <thead>
              <tr className="border-b border-zinc-800/50 text-left">
                <th className="py-2 pr-4 font-semibold text-zinc-400">Permission</th>
                <th className="py-2 pr-4 font-semibold text-zinc-400">Purpose</th>
                <th className="py-2 font-semibold text-zinc-400">Required</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Internet / Network Access", "Required for all app functionality — connecting to the Venthen platform to retrieve and send data.", "Yes"],
                ["Notifications", "Used to deliver attendance alerts, class updates, announcements, and academic notifications via push.", "Optional"],
                ["Camera", "May be used for scanning QR codes for attendance or device provisioning if enabled by your institution.", "Optional"],
                ["Storage", "Used to cache data for offline access where supported.", "Optional"],
              ].map(([perm, purpose, required]) => (
                <tr key={perm} className="border-b border-zinc-800/30">
                  <td className="py-3 pr-4 font-medium text-white">{perm}</td>
                  <td className="py-3 pr-4">{purpose}</td>
                  <td className="py-3">
                    <span className={required === "Yes" ? "text-xs bg-orange-500/15 text-orange-400 px-2 py-0.5 rounded-full" : "text-xs bg-zinc-800 text-zinc-500 px-2 py-0.5 rounded-full"}>{required}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <P><Strong>Note:</Strong> The exact set of permissions requested may vary based on your institution&apos;s configuration. You can manage permissions at any time through your device&apos;s system settings.</P>

        <H2 id="how-we-use">4. How We Use Information</H2>
        <P>Venthen uses the information we collect for the following purposes:</P>
        <UL>
          <li>Providing, maintaining, and improving the Services</li>
          <li>Authenticating users and managing accounts</li>
          <li>Recording and displaying attendance information</li>
          <li>Managing academic workflows and class data</li>
          <li>Enabling faculty to view student information and attendance</li>
          <li>Sending notifications related to attendance, classes, and announcements</li>
          <li>Operating and monitoring attendance hardware infrastructure</li>
          <li>Providing analytics and insights to authorized faculty and administrators</li>
          <li>Diagnosing and troubleshooting technical issues</li>
          <li>Preventing fraudulent or unauthorized use</li>
          <li>Complying with legal obligations</li>
        </UL>

        <H2 id="push-notifications">5. Push Notifications</H2>
        <P>Venthen may send push notifications to deliver attendance alerts, class updates, announcements from faculty, and other academic notifications. To enable push notifications, the mobile application collects a push notification token provided by the device operating system. This token is used solely for delivering notifications and is not used for tracking or advertising purposes.</P>
        <P>You can disable push notifications at any time through your device&apos;s system notification settings. Disabling notifications will not affect your ability to use the core features of the application.</P>

        <H2 id="ai-features">6. AI Features</H2>
        <P>Venthen is developing an AI assistant feature designed to help faculty interact with campus data using natural language — for example, querying attendance records, analyzing trends, and performing authorized actions.</P>
        <P><Strong>Current status:</Strong> As of the date of this policy, the Venthen AI agent is in development and is not yet available in the publicly released mobile application. This section will be updated when AI features become available, describing what information may be processed by the AI service and any third-party AI providers involved.</P>
        <P>When AI features are introduced, they will only process information that the authenticated user (faculty member) is already authorized to access through the Venthen platform. User prompts and relevant campus data may be processed to generate responses.</P>

        <H2 id="third-party">7. Third-Party Services</H2>
        <P>Venthen relies on certain third-party services to provide and operate the platform. These may include:</P>
        <UL>
          <li><Strong>Cloud infrastructure providers</Strong> for hosting the Venthen backend, databases, and APIs.</li>
          <li><Strong>Push notification services</Strong> (such as Firebase Cloud Messaging) used to deliver notifications to mobile devices.</li>
          <li><Strong>Authentication services</Strong> used for secure user authentication and account management.</li>
        </UL>
        <P>These providers process data on behalf of Venthen and are contractually obligated to handle data securely. For more information, please refer to the privacy policies of the respective providers:</P>
        <UL>
          <li><a href="https://firebase.google.com/support/privacy" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300 underline">Firebase Privacy and Security</a></li>
          <li><a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300 underline">Google Privacy Policy</a></li>
        </UL>

        <H2 id="data-sharing">8. How We Share Information</H2>
        <P><Strong>Venthen does not sell personal information.</Strong> We may share information in the following circumstances:</P>
        <UL>
          <li><Strong>With your institution:</Strong> Account information, attendance records, and academic data are accessible to authorized faculty members and administrators within your educational institution as necessary for academic and administrative purposes.</li>
          <li><Strong>With service providers:</Strong> We share information with third-party service providers who help us operate the platform (cloud hosting, notifications, authentication). These providers are bound by data processing agreements.</li>
          <li><Strong>Role-based visibility:</Strong> Information within the platform is subject to role-based access controls. Students can view their own information. Faculty can view information related to their classes and students. Administrators have broader access as configured by the institution.</li>
          <li><Strong>Legal compliance:</Strong> We may disclose information when required by law, court order, or governmental regulation.</li>
          <li><Strong>Business transfers:</Strong> In the event of a merger, acquisition, or sale of assets, user information may be transferred as part of that transaction, subject to the same privacy commitments.</li>
        </UL>

        <H2 id="retention">9. Data Retention</H2>
        <P>Venthen retains personal information for as long as necessary to provide the Services, comply with applicable legal obligations, resolve disputes, and enforce our agreements. The retention period may vary depending on the type of data and the requirements of the educational institution using Venthen.</P>
        <P>Attendance records, academic information, and account data are generally retained for the duration of the active academic relationship plus any additional period required by institutional policies or applicable regulations. When information is no longer needed, it is deleted or anonymized in accordance with our data handling practices.</P>

        <H2 id="security">10. Data Security</H2>
        <P>Venthen implements security measures designed to protect information from unauthorized access, alteration, disclosure, or destruction. These measures include:</P>
        <UL>
          <li>TLS/HTTPS encryption for all data transmitted between applications, devices, and backend services</li>
          <li>Authentication required for all API access</li>
          <li>Role-based access controls to limit data visibility</li>
          <li>Device authentication for attendance hardware</li>
          <li>Password hashing for account credentials</li>
          <li>Access logging and monitoring</li>
        </UL>
        <P>However, no method of transmission over the Internet or electronic storage is completely secure. While we strive to protect your information, we cannot guarantee its absolute security.</P>

        <H2 id="children">11. Children&apos;s Privacy</H2>
        <P>Venthen is designed for higher education institutions — colleges, universities, and similar post-secondary educational settings. The Services are intended for use by students, faculty, and staff of such institutions and are not directed at children under the age of 13.</P>
        <P>If we become aware that we have inadvertently collected personal information from a child under 13 without appropriate consent, we will take steps to delete such information promptly.</P>

        <H2 id="rights">12. Your Rights and Choices</H2>
        <P>Depending on your jurisdiction, you may have certain rights regarding your personal information, which may include:</P>
        <UL>
          <li><Strong>Access:</Strong> You can view your account and academic information through the Venthen application.</li>
          <li><Strong>Correction:</Strong> You can update your profile information within the app. For corrections to academic records, please contact your institution or faculty.</li>
          <li><Strong>Notification preferences:</Strong> You can manage push notification settings through your device or in-app settings.</li>
          <li><Strong>Permission management:</Strong> You can revoke app permissions at any time through your device&apos;s system settings.</li>
          <li><Strong>Data portability and deletion:</Strong> See Section 13 below for information on requesting deletion.</li>
        </UL>

        <H2 id="deletion">13. Account and Data Deletion</H2>
        <P>Users may request deletion of their Venthen account and associated personal information by contacting us at the email address provided in the Contact Us section below.</P>
        <P>When you request deletion:</P>
        <UL>
          <li>We will verify your identity and confirm the deletion request.</li>
          <li>Personal account information will be removed from active systems.</li>
          <li>Certain information may be retained as required by your educational institution&apos;s policies, applicable law, or for legitimate operational purposes (such as audit logs).</li>
          <li>Attendance records associated with your account may be retained in anonymized or aggregated form for institutional reporting purposes.</li>
        </UL>
        <P>Please note that if your account was created through your educational institution, deletion requests may need to be coordinated with your institution&apos;s administration.</P>

        <H2 id="cookies">14. Cookies and Website Technologies</H2>
        <P>The Venthen website at <Strong>venthen.dev</Strong> is a static marketing site. It does not use tracking cookies, analytics cookies, advertising cookies, or third-party tracking scripts.</P>
        <P>The Next.js framework used to build the website may use minimal technical mechanisms for server-side rendering and page delivery, but these do not collect personal information or track browsing behavior.</P>
        <P>The Venthen mobile application may use local storage to cache data for offline access where supported, but this is limited to application data necessary for functionality.</P>

        <H2 id="international">15. International Data Transfers</H2>
        <P>Venthen uses cloud infrastructure providers that may process and store data in data centers located in various regions. By using the Services, you acknowledge that your information may be transferred to and processed in countries other than your country of residence.</P>
        <P>We take steps to ensure that data transfers comply with applicable data protection laws, including through contractual safeguards with our service providers.</P>

        <H2 id="changes">16. Changes to This Privacy Policy</H2>
        <P>Venthen may update this Privacy Policy from time to time to reflect changes in our practices, the Services, or applicable law. When we make changes, we will update the &ldquo;Last updated&rdquo; date at the top of this page.</P>
        <P>For material changes, we may provide additional notice through the Venthen application or website. We encourage you to review this policy periodically to stay informed about how we protect your information.</P>

        <H2 id="contact">17. Contact Us</H2>
        <P>If you have questions about this Privacy Policy, wish to exercise your data rights, or need to request account deletion, please contact us at:</P>
        <div className="rounded-xl border border-zinc-800/60 bg-[#0f0f0f] p-5 mt-4">
          <p className="text-sm text-zinc-400 mb-1">Email</p>
          <a href={`mailto:${CONTACT_EMAIL}`} className="text-orange-400 hover:text-orange-300 font-medium">{CONTACT_EMAIL}</a>
        </div>
        <div className="rounded-xl border border-zinc-800/60 bg-[#0f0f0f] p-5 mt-3">
          <p className="text-sm text-zinc-400 mb-1">Website</p>
          <a href="https://venthen.dev" className="text-orange-400 hover:text-orange-300 font-medium">https://venthen.dev</a>
        </div>

        <div className="mt-16 pt-8 border-t border-zinc-800/50">
          <p className="text-xs text-zinc-600">&copy; 2026 Venthen. All rights reserved.</p>
        </div>
      </div>
    </main>
  );
}
