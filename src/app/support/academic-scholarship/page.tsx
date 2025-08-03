import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import FadeIn from "@/components/ui/fade-in";
import { Award, Users, Calendar, CreditCard, AlertTriangle, CheckCircle } from "lucide-react";

export const metadata = { 
  title: "Государственная академическая стипендия",
  description: "Условия получения, размеры и порядок выплаты государственной академической стипендии в РГАУ-МСХА"
};

export default function AcademicScholarshipPage() {
  return (
    <div className="container mx-auto px-4 py-12 space-y-8">
      {/* Заголовок */}
      <header className="space-y-4">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
            <Award className="w-8 h-8 text-primary" />
          </div>
          <div>
            <h1 className="font-heading text-4xl md:text-5xl text-dark">Государственная академическая стипендия</h1>
            <p className="text-gray text-lg mt-2">Основная стипендия для студентов очной бюджетной формы обучения</p>
          </div>
        </div>
      </header>

      {/* Основная информация - уникальная сетка 3 колонки */}
      <div className="grid gap-6 md:grid-cols-3">
        {/* Кто может получать */}
        <FadeIn>
          <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
            <CardHeader>
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <Users className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                Кто может получать?
              </h3>
            </CardHeader>
            <CardContent className="space-y-4 flex-1">
              <p className="text-gray leading-relaxed">
                Все студенты очной бюджетной формы обучения, обучающиеся:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                  <span className="text-gray">на «отлично»</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                  <span className="text-gray">на «хорошо» и «отлично»</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                  <span className="text-gray">на «хорошо» при условии сдачи всех экзаменов, зачетов и прохождения практик в установленные сроки зачетной и экзаменационной сессии в соответствии с учебным планом</span>
                </li>
              </ul>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                <Badge variant="neutral" className="hover:scale-105 transition-transform duration-200">Успеваемость</Badge>
                <Badge variant="neutral" className="hover:scale-105 transition-transform duration-200">Финансы</Badge>
                <Badge variant="neutral" className="hover:scale-105 transition-transform duration-200">Поддержка</Badge>
              </div>
            </CardContent>
          </Card>
        </FadeIn>

        {/* Как получить */}
        <FadeIn className="delay-200">
          <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
            <CardHeader>
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <CheckCircle className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                Как получить?
              </h3>
            </CardHeader>
            <CardContent className="space-y-4 flex-1">
              <p className="text-gray leading-relaxed">
                Приказ о назначении государственной академической стипендии готовят дирекции институтов и колледжа Университета после обработки зачетных и экзаменационных ведомостей.
              </p>
              <div className="bg-success/10 border border-success/20 rounded-lg p-4 mt-auto">
                <p className="text-success font-medium">
                  Студентам, претендующим на получение данной стипендии, ничего оформлять не надо!
                </p>
              </div>
            </CardContent>
          </Card>
        </FadeIn>

        {/* Периодичность выплат */}
        <FadeIn className="delay-400">
          <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
            <CardHeader>
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <Calendar className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                Периодичность выплат
              </h3>
            </CardHeader>
            <CardContent className="space-y-4 flex-1">
              <div className="space-y-3">
                <div className="flex items-center gap-2 p-2 rounded-lg">
                  <Calendar className="w-4 h-4 text-blue-500" />
                  <span className="font-medium">Назначение</span>
                  <span className="text-gray">- на 1 семестр</span>
                </div>
                <div className="flex items-center gap-2 p-2 rounded-lg">
                  <CreditCard className="w-4 h-4 text-green-500" />
                  <span className="font-medium">Выплата</span>
                  <span className="text-gray">- 1 раз в месяц</span>
                </div>
                <div className="flex items-center gap-2 p-2 rounded-lg">
                  <Calendar className="w-4 h-4 text-purple-500" />
                  <span className="font-medium">Сроки</span>
                  <span className="text-gray">- с 1 по 5 число</span>
                </div>
              </div>
              <p className="text-sm text-gray leading-relaxed mt-auto">
                Государственная академическая стипендия назначается на 1 семестр (с первого числа следующего за экзаменационной сессией месяца по последнее число месяца проведения следующей экзаменационной сессии).
              </p>
            </CardContent>
          </Card>
        </FadeIn>
      </div>

      {/* Размер стипендии - уникальная сетка с акцентом */}
      <FadeIn>
        <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
          <CardHeader>
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <CreditCard className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                Размер стипендии (руб./мес.)
              </h3>
              <Badge variant="info">2025/2026 учебный год</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-8">
              {/* Бакалавриат и магистратура */}
              <div>
                <h4 className="font-heading text-lg text-dark mb-6 flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  Бакалавриат, магистратура:
                </h4>
                <div className="grid gap-4 md:grid-cols-4">
                  <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-4 border border-gray-200 hover:shadow-md transition-all duration-300">
                    <div className="text-sm text-gray mb-2">1 курс, 1 семестр</div>
                    <div className="text-lg font-medium text-gray-500">Уточняется</div>
                  </div>
                  <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl p-4 border border-primary/20 hover:shadow-md transition-all duration-300">
                    <div className="text-sm text-gray mb-2">Средний балл 4,0 - 4,49</div>
                    <div className="text-2xl font-bold text-primary">2 976 ₽</div>
                  </div>
                  <div className="bg-gradient-to-br from-primary/10 to-primary/15 rounded-xl p-4 border border-primary/30 hover:shadow-md transition-all duration-300">
                    <div className="text-sm text-gray mb-2">Средний балл 4,5 - 4,99</div>
                    <div className="text-2xl font-bold text-primary">3 720 ₽</div>
                  </div>
                  <div className="bg-gradient-to-br from-primary/15 to-primary/20 rounded-xl p-4 border border-primary/40 hover:shadow-md transition-all duration-300">
                    <div className="text-sm text-gray mb-2">Средний балл только 5,0</div>
                    <div className="text-2xl font-bold text-primary">4 464 ₽</div>
                  </div>
                </div>
              </div>

              {/* СПО */}
              <div>
                <h4 className="font-heading text-lg text-dark mb-6 flex items-center gap-2">
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  Среднее профессиональное образование:
                </h4>
                <div className="grid gap-4 md:grid-cols-4">
                  <div className="bg-gradient-to-br from-secondary/5 to-secondary/10 rounded-xl p-4 border border-secondary/20 hover:shadow-md transition-all duration-300">
                    <div className="text-sm text-gray mb-2">1 курс, 1 семестр</div>
                    <div className="text-lg font-medium text-gray-500">Уточняется</div>
                  </div>
                  <div className="bg-gradient-to-br from-secondary/10 to-secondary/15 rounded-xl p-4 border border-secondary/30 hover:shadow-md transition-all duration-300">
                    <div className="text-sm text-gray mb-2">Средний балл 4,0 - 4,49</div>
                    <div className="text-lg font-medium text-gray-500">Уточняется</div>
                  </div>
                  <div className="bg-gradient-to-br from-secondary/15 to-secondary/20 rounded-xl p-4 border border-secondary/40 hover:shadow-md transition-all duration-300">
                    <div className="text-sm text-gray mb-2">Средний балл 4,5 - 4,99</div>
                    <div className="text-lg font-medium text-gray-500">Уточняется</div>
                  </div>
                  <div className="bg-gradient-to-br from-secondary/20 to-secondary/25 rounded-xl p-4 border border-secondary/50 hover:shadow-md transition-all duration-300">
                    <div className="text-sm text-gray mb-2">Средний балл только 5,0</div>
                    <div className="text-lg font-medium text-gray-500">Уточняется</div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </FadeIn>

      {/* Прекращение выплат - уникальная сетка 2 колонки */}
      <div className="space-y-6">
        <div className="text-center">
          <h2 className="font-heading text-2xl md:text-3xl text-dark mb-4">
            Когда выплата стипендии прекращается?
          </h2>
          <p className="text-gray max-w-2xl mx-auto">
            Государственная академическая стипендия может быть прекращена в следующих случаях. 
            Обратите внимание на сроки прекращения выплат.
          </p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2">
          <FadeIn>
            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full">
              <CardHeader>
                <h3 className="text-xl font-semibold flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  При задолженности
                </h3>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-gray leading-relaxed">
                    При образовании у студента задолженности или получении оценки «удовлетворительно» по результатам сессии
                  </p>
                  <div className="bg-warning/10 border border-warning/20 rounded-lg p-4">
                    <p className="text-warning font-medium">
                      Прекращается с первого числа месяца, следующего за месяцем образования задолженности или получения «удовлетворительно»
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </FadeIn>

          <FadeIn className="delay-200">
            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full">
              <CardHeader>
                <h3 className="text-xl font-semibold flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  При отчислении
                </h3>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-gray leading-relaxed">
                    При отчислении студента из Университета
                  </p>
                  <div className="bg-error/10 border border-error/20 rounded-lg p-4">
                    <p className="text-error font-medium">
                      Прекращается с даты отчисления студента
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </FadeIn>
        </div>
      </div>
    </div>
  );
} 