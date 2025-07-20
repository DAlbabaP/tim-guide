import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

export const metadata = { title: "Часто задаваемые вопросы" };

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    id: "q1",
    question: "Как подать документы?",
    answer: "Placeholder-ответ. В будущем здесь будет подробная инструкция.",
  },
  {
    id: "q2",
    question: "Какие есть стипендии?",
    answer: "Placeholder-ответ о видах стипендий.",
  },
  {
    id: "q3",
    question: "Как получить место в общежитии?",
    answer: "Placeholder-ответ о порядке заселения.",
  },
  {
    id: "q4",
    question: "Где взять справку об обучении?",
    answer: "Placeholder-ответ про заказ справок.",
  },
];

export default function FAQQuestionsPage() {
  return (
    <div className="container mx-auto px-4 py-12 space-y-10">
      <header className="space-y-4">
        <h1 className="font-heading text-4xl md:text-5xl text-dark">Часто задаваемые вопросы</h1>
        <p className="text-gray max-w-2xl">Ниже приведены популярные вопросы. Нажмите, чтобы раскрыть ответ.</p>
      </header>

      <Accordion>
        {faqItems.map((item) => (
          <AccordionItem key={item.id}>
            <AccordionTrigger>{item.question}</AccordionTrigger>
            <AccordionContent>{item.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
} 