import Footer from "@/components/shared/footer";
import { CONTACT_INFO } from "@/config/constants";
import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <>
      <div className="min-h-screen bg-neutral-100 dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 transition-colors duration-300">
        <div className="container mx-auto px-4 py-8 mt-16 dark:text-white">
          <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
          <p className="mb-4">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-3">1. Introduction</h2>
            <p>
              Welcome to Huffy&apos;s World. This Privacy Policy explains how we
              collect, use, disclose, and safeguard your information when you
              visit our website or use our services.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-3">
              2. Information We Collect
            </h2>
            <p>
              We may collect personal information that you provide directly to
              us, such as:
            </p>
            <ul className="list-disc pl-6 mt-2">
              <li>Name and contact information</li>
              <li>Professional or employment-related information</li>
              <li>Payment information for services rendered</li>
              <li>Information you provide in forms or surveys</li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-3">
              3. How We Use Your Information
            </h2>
            <p>We use the information we collect to:</p>
            <ul className="list-disc pl-6 mt-2">
              <li>Provide, maintain, and improve our services</li>
              <li>Process transactions and send related information</li>
              <li>Send you technical notices, updates, and support messages</li>
              <li>Respond to your comments, questions, and requests</li>
              <li>Develop new products and services</li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-3">
              4. Sharing of Information
            </h2>
            <p>We may share your personal information with:</p>
            <ul className="list-disc pl-6 mt-2">
              <li>Service providers who perform services on our behalf</li>
              <li>
                Professional advisors, such as lawyers, auditors, and insurers
              </li>
              <li>Government bodies when required by law</li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-3">5. Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to
              protect the security of your personal information. However, please
              note that no method of transmission over the Internet or
              electronic storage is 100% secure.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-3">6. Your Rights</h2>
            <p>
              Depending on your location, you may have certain rights regarding
              your personal information, including:
            </p>
            <ul className="list-disc pl-6 mt-2">
              <li>The right to access your personal information</li>
              <li>The right to rectify inaccurate personal information</li>
              <li>
                The right to request deletion of your personal information
              </li>
              <li>
                The right to restrict processing of your personal information
              </li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-3">
              7. Changes to This Privacy Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. We will
              notify you of any changes by posting the new Privacy Policy on
              this page and updating the &quot;Last updated&quot; date at the
              top of this page.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-3">8. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please
              contact us at:
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
