import Footer from "@/components/shared/footer";
import { CONTACT_INFO } from "@/config/constants";
import Link from "next/link";

export default function TermsOfService() {
  return (
    <>
      <div className="min-h-screen bg-neutral-100 dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 transition-colors duration-300">
        <div className="container mx-auto px-4 py-8 mt-16 dark:text-white">
          <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
          <p className="mb-4">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-3">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing or using the services provided by Shelby Huffman,
              including but not limited to web development, consulting, online
              courses, and blog content, you agree to be bound by these Terms of
              Service.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-3">
              2. Description of Services
            </h2>
            <p>We offer the following services:</p>
            <ul className="list-disc pl-6 mt-2">
              <li>Full-Stack Web Development</li>
              <li>Software Architecture & Design Pattern Consulting</li>
              <li>Scrum Master / Agile Coaching</li>
              <li>Project Management as a Service</li>
              <li>Technical Lead / Mentorship Sessions</li>
              <li>Resume & Portfolio Review for Tech Professionals</li>
              <li>Online Courses or Workshops</li>
              <li>Mallet Keyboard Lessons</li>
              <li>Blog Content</li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-3">
              3. User Responsibilities
            </h2>
            <p>You agree to:</p>
            <ul className="list-disc pl-6 mt-2">
              <li>
                Provide accurate and complete information when using our
                services
              </li>
              <li>Use our services only for lawful purposes</li>
              <li>Respect intellectual property rights</li>
              <li>
                Maintain the confidentiality of any login information associated
                with your account
              </li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-3">4. Payment Terms</h2>
            <p>Payment terms vary depending on the service:</p>
            <ul className="list-disc pl-6 mt-2">
              <li>
                For web development projects, payment schedules will be outlined
                in individual project contracts
              </li>
              <li>
                Consulting services are billed hourly or per engagement as
                agreed upon
              </li>
              <li>
                Online courses and workshops are paid for at the time of
                purchase
              </li>
              <li>
                Subscription-based services, if any, are billed according to the
                chosen subscription plan
              </li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-3">
              5. Intellectual Property
            </h2>
            <p>
              All content on this website, including text, graphics, logos, and
              software, is the property of Shelby Huffman and protected by
              intellectual property laws. You may not use, reproduce, or
              distribute any content without our express written permission.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-3">
              6. Limitation of Liability
            </h2>
            <p>
              To the fullest extent permitted by law, Shelby Huffman shall not
              be liable for any indirect, incidental, special, consequential, or
              punitive damages, or any loss of profits or revenues, whether
              incurred directly or indirectly, or any loss of data, use,
              goodwill, or other intangible losses resulting from your use of
              our services.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-3">7. Termination</h2>
            <p>
              We reserve the right to terminate or suspend your access to our
              services immediately, without prior notice or liability, for any
              reason whatsoever, including without limitation if you breach
              these Terms of Service.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-3">8. Governing Law</h2>
            <p>
              These Terms shall be governed and construed in accordance with the
              laws of Oklahoma within The United States of America, without
              regard to its conflict of law provisions.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-3">9. Changes to Terms</h2>
            <p>
              We reserve the right to modify or replace these Terms at any time.
              If a revision is material, we will try to provide at least 30
              days&apos; notice prior to any new terms taking effect.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-3">
              10. Contact Information
            </h2>
            <p>
              If you have any questions about these Terms, please contact us at:
            </p>
            <p>{CONTACT_INFO.email}</p>
          </section>

          <Link href="/" className="text-blue-600 hover:underline">
            Back to Home
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}
