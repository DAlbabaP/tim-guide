import { SectionCard } from "@/components/cards/section-card";
import { mainNavigation } from "@/lib/navigation";

export const metadata = {
  title: "Поступление",
};

export default function AdmissionPage() {
  const section = mainNavigation.find((item) => item.href === "/admission");
  const children = section?.children ?? [];

  return (
    <div className="container mx-auto px-4 py-12 space-y-10">
      <header className="space-y-4">
        <h1 className="font-heading text-4xl md:text-5xl text-dark">{section?.title}</h1>
        <p className="text-gray max-w-2xl">{section?.description}</p>
      </header>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {children.map((child) => {
          // Извлекаем ключ для иконки из href
          const iconKey = child.href.split('/').pop();
          
          return (
            <SectionCard
              key={child.href}
              href={child.href}
              title={child.title}
              description={child.description}
              iconKey={iconKey}
            />
          );
        })}
      </div>
    </div>
  );
} 