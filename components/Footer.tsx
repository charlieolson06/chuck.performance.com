import { SocialLinks } from "@/components/SocialLinks";

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="flex items-center gap-4 px-6 py-6 sm:px-12 lg:px-20">
        <SocialLinks variant="button" />
      </div>
    </footer>
  );
}
