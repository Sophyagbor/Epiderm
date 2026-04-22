import PagePlaceholder from "@/components/PagePlaceholder";
import TransformationsSection from "@/components/TransformationsSection";

export default function CommunityPage() {
  return (
    <>
      <PagePlaceholder
        eyebrow="Community"
        title="Skin is personal."
        italic="The journey isn't."
        description="Thousands of people sharing what actually worked — unretouched, unfiltered, and in their own words. Browse transformations, swap notes, and find someone whose skin story looks like yours."
        ctaLabel="Share your story"
        ctaHref="#"
      />
      <TransformationsSection />
    </>
  );
}
