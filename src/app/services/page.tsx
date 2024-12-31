import { ServicesOverview } from "@/components/shared/services/ServicesOverview";
import Footer from "@/components/shared/footer";

export default function ServicesPage() {
  return (
    <div className="mx-auto mt-8 py-8 bg-neutral-100 dark:bg-neutral-950">
      <ServicesOverview />
      <Footer />
    </div>
  );
}
