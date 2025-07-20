import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const HeroBanner = () => {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-primary text-white">
      <div className="container mx-auto px-4 py-20 flex flex-col md:flex-row items-center gap-12">
        <div className="max-w-xl">
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Добро пожаловать в <span className="text-lime">ТимГид</span>
          </h1>
          <p className="text-lg sm:text-xl text-secondary-100 mb-8">
            Ваш персональный навигатор по поступлению, обучению и студенческой жизни РГАУ-МСХА.
          </p>
          <Link
            href="/admission"
            className="inline-flex items-center px-8 py-3 rounded-full bg-lime hover:bg-lime/90 text-dark font-medium transition-colors shadow-soft"
          >
            Начать путь абитуриента
            <ArrowRight className="ml-3 h-5 w-5" />
          </Link>
        </div>

        <div className="hidden md:block flex-1">
          {/* Placeholder illustration */}
          <div className="aspect-square w-full rounded-4xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
            <span className="text-6xl font-heading font-bold opacity-20">🎓</span>
          </div>
        </div>
      </div>

      {/* Decorative shapes */}
      <div
        className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 h-[480px] w-[960px] rounded-full
          bg-white/5 blur-3xl"
      />
    </section>
  );
}; 