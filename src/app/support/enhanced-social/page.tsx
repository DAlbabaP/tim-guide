import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import FadeIn from "@/components/ui/fade-in";
import { Heart, Users, FileText, Calendar, AlertTriangle, CheckCircle, CreditCard } from "lucide-react";

export const metadata = { 
  title: "Государственная повышенная социальная стипендия",
  description: "Условия назначения, размер и порядок выплат государственной повышенной социальной стипендии в РГАУ-МСХА"
};

export default function EnhancedSocialPage() {
  return (
    <div className="container mx-auto px-4 py-12 space-y-8">
      {/* Заголовок */}
      <header className="space-y-4">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
            <Heart className="w-8 h-8 text-primary" />
          </div>
          <div>
            <h1 className="font-heading text-4xl md:text-5xl text-dark">Государственная повышенная социальная стипендия</h1>
            <p className="text-gray text-lg mt-2">Поддержка успешных студентов с социальной льготой</p>
          </div>
        </div>
      </header>

      {/* Основная сетка 3 колонки */}
      <div className="grid gap-6 md:grid-cols-3">
        {/* Кому назначается */}
        <FadeIn>
          <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
            <CardHeader>
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <Users className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                Кому назначается?
              </h3>
            </CardHeader>
            <CardContent className="space-y-4 flex-1">
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                  <span className="text-gray">Студентам 1–2 курса бакалавриата, специалитета, обучающимся на бюджетной основе только на «хорошо» и «отлично» и получающим социальную стипендию</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                  <span className="text-gray">Студентам в возрасте до 20 лет, имеющим только одного родителя — инвалида I группы</span>
                </li>
              </ul>

              {/* Теги как на других страницах */}
              <div className="flex flex-wrap gap-2 mt-auto">
                <Badge variant="neutral" className="hover:scale-105 transition-transform duration-200">1–2 курс</Badge>
                <Badge variant="neutral" className="hover:scale-105 transition-transform duration-200">«хорошо» и «отлично»</Badge>
                <Badge variant="neutral" className="hover:scale-105 transition-transform duration-200">социальная льгота</Badge>
              </div>
            </CardContent>
          </Card>
        </FadeIn>

        {/* Что необходимо для оформления */}
        <FadeIn className="delay-200">
          <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
            <CardHeader>
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <FileText className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                Что необходимо для оформления?
              </h3>
            </CardHeader>
            <CardContent className="space-y-4 flex-1">
              <p className="text-gray leading-relaxed">
                Приказ о назначении государственной повышенной социальной стипендии готовит учебный отдел УМУ Университета после выхода приказов о назначении государственной академической стипендии на основании представления дирекций институтов.
              </p>
              <div className="bg-success/10 border border-success/20 rounded-lg p-4 mt-auto">
                <p className="text-success font-medium">
                  Студентам, претендующим на получение данной стипендии, ничего дополнительно оформлять не надо!
                </p>
              </div>
            </CardContent>
          </Card>
        </FadeIn>

        {/* Размер выплат */}
        <FadeIn className="delay-400">
          <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
            <CardHeader>
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold flex items-center gap-2">
                  <CreditCard className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  Размер выплат
                </h3>
                <Badge variant="info">2024/2025 учебный год</Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-2 flex-1">
              <p className="text-gray leading-relaxed">
                Размер государственной повышенной социальной стипендии устанавливается Ученым советом Университета.
              </p>
              <div className="bg-primary/5 border border-primary/20 rounded-xl p-4">
                <div className="text-sm text-gray mb-1">Текущий размер</div>
                <div className="text-3xl font-bold text-primary">10 200 ₽</div>
              </div>
            </CardContent>
          </Card>
        </FadeIn>
      </div>

      {/* Периодичность и порядок выплат */}
      <FadeIn>
        <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
          <CardHeader>
            <h3 className="text-xl font-semibold flex items-center gap-2">
              <Calendar className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              Как часто выплачивается?
            </h3>
          </CardHeader>
          <CardContent className="space-y-3">
            <p className="text-gray leading-relaxed">
              Государственная повышенная социальная стипендия назначается на 1 семестр (с первого числа следующего за экзаменационной сессией месяца по последнее число месяца проведения следующей экзаменационной сессии).
            </p>
            <p className="text-gray leading-relaxed">
              Государственная повышенная социальная стипендия является ежемесячной выплатой. Выплачивается 1 раз в месяц путем перечисления на карту студента в дни получения стипендии.
            </p>
          </CardContent>
        </Card>
      </FadeIn>

      {/* Прекращение выплат */}
      <div className="space-y-6">
        <div className="text-center">
          <h2 className="font-heading text-2xl md:text-3xl text-dark mb-4">
            Когда выплата стипендии прекращается?
          </h2>
          <p className="text-gray max-w-2xl mx-auto">
            Выплата может быть прекращена в следующих случаях. Обратите внимание на сроки прекращения выплат.
          </p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-3">
          <FadeIn>
            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full">
              <CardHeader>
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-warning" />
                  Академическая задолженность
                </h3>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-gray leading-relaxed">
                  При образовании задолженности или получении оценки «удовлетворительно» по результатам сессии
                </p>
                <div className="text-sm text-gray-500">
                  Прекращается с первого числа месяца, следующего за месяцем образования задолженности или получения «удовлетворительно»
                </div>
              </CardContent>
            </Card>
          </FadeIn>

          <FadeIn className="delay-200">
            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full">
              <CardHeader>
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-warning" />
                  Окончание срока льготы
                </h3>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-gray leading-relaxed">
                  В случае окончания срока действия социальной льготы, дающей право на получение стипендии
                </p>
              </CardContent>
            </Card>
          </FadeIn>

          <FadeIn className="delay-400">
            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full">
              <CardHeader>
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-warning" />
                  Отчисление
                </h3>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-gray leading-relaxed">
                  При отчислении студента из Университета
                </p>
                <div className="text-sm text-gray-500">
                  Прекращается с даты отчисления студента
                </div>
              </CardContent>
            </Card>
          </FadeIn>
        </div>
      </div>
    </div>
  );
} 