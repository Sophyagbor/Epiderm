import PagePlaceholder from "@/components/PagePlaceholder";
import SystemsSection from "@/components/SystemsSection";

export default function SystemsPage() {
  return (
    <>
      <PagePlaceholder
        eyebrow="Systems"
        title="Four rituals."
        italic="One precise answer."
        description="Each Epiderm system is a complete regimen — cleanser, treatment, moisturizer, and protection — formulated to solve a single, specific concern without compromise."
      />
      <SystemsSection />
    </>
  );
}
