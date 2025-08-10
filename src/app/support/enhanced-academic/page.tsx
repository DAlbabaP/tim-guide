import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import FadeIn from "@/components/ui/fade-in";
import { 
  Award, 
  Users, 
  BookOpen, 
  Lightbulb, 
  Trophy, 
  Palette, 
  Calendar,
  CheckCircle,
  ExternalLink,
  AlertCircle,
  Clock,
  CreditCard,
  FileText,
  Target,
  Star
} from "lucide-react";

export const metadata = { 
  title: "Государственная повышенная академическая стипендия",
  description: "Повышенная стипендия за особые достижения в учебной, научной, общественной, культурно-творческой и спортивной деятельности"
};

export default function EnhancedAcademicPage() {
  const achievementAreas = [
    {
      title: "Учебная деятельность",
      icon: <BookOpen className="w-6 h-6" />,
      color: "text-blue-500",
      bgColor: "bg-blue-50",
      criteria: [
        "Получение только оценок «отлично» в течение не менее 2-х промежуточных аттестаций",
        "Награды за результаты проектной деятельности и опытно-конструкторской работы",
        "Победы в олимпиадах, конкурсах, соревнованиях международного, всероссийского, регионального уровня"
      ]
    },
    {
      title: "Научно-исследовательская деятельность",
      icon: <Lightbulb className="w-6 h-6" />,
      color: "text-purple-500",
      bgColor: "bg-purple-50",
      criteria: [
        "Награды за результаты научно-исследовательской работы",
        "Патенты и свидетельства на интеллектуальную собственность",
        "Гранты на выполнение научно-исследовательской работы",
        "Публикации в научных изданиях"
      ]
    },
    {
      title: "Общественная деятельность",
      icon: <Users className="w-6 h-6" />,
      color: "text-green-500",
      bgColor: "bg-green-50",
      criteria: [
        "Систематическое участие в общественно значимой деятельности",
        "Участие в информационном обеспечении мероприятий",
        "Волонтерская и социальная активность"
      ]
    },
    {
      title: "Культурно-творческая деятельность",
      icon: <Palette className="w-6 h-6" />,
      color: "text-pink-500",
      bgColor: "bg-pink-50",
      criteria: [
        "Награды за результаты культурно-творческой деятельности",
        "Публичное представление авторских произведений",
        "Участие в культурно-творческих мероприятиях воспитательного характера"
      ]
    },
    {
      title: "Спортивная деятельность",
      icon: <Trophy className="w-6 h-6" />,
      color: "text-orange-500",
      bgColor: "bg-orange-50",
      criteria: [
        "Награды в спортивных мероприятиях международного, всероссийского уровня",
        "Систематическое участие в спортивных мероприятиях",
        "Выполнение нормативов ГТО золотого знака отличия"
      ],
      warning: "Не назначается студентам, получающим стипендию Президента РФ для спортсменов (Указ № 368 от 31.03.2011)"
    }
  ];

  const processSteps = [
    {
      step: "1",
      title: "Регистрация в боте",
      description: "Зарегистрируйтесь в телеграм-боте @rgautestBot",
      icon: <FileText className="w-5 h-5" />,
      hasButton: true
    },
    {
      step: "2", 
      title: "Загрузка документов",
      description: "Загрузите подтверждающие документы в соответствующий раздел",
      icon: <CheckCircle className="w-5 h-5" />
    },
    {
      step: "3",
      title: "Подача заявления",
      description: "Принесите заполненное бумажное заявление на участие в конкурсе",
      icon: <Target className="w-5 h-5" />
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12 space-y-8">
      {/* Заголовок */}
      <header className="space-y-4">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
            <Award className="w-8 h-8 text-primary" />
          </div>
          <div>
            <h1 className="font-heading text-4xl md:text-5xl text-dark">
              Государственная повышенная академическая стипендия
            </h1>
            <p className="text-gray text-lg mt-2">
              За особые достижения в учебной, научной и общественной деятельности
            </p>
          </div>
        </div>
      </header>

      {/* Общая информация */}
      <FadeIn>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 mx-auto rounded-full bg-success/10 flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-success" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-dark mb-3">Кому назначается</h3>
              <p className="text-sm text-gray mb-4">
                Студентам очной формы обучения за счет бюджета за особые достижения
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                <Badge variant="neutral" className="text-xs">Очная форма</Badge>
                <Badge variant="neutral" className="text-xs">Бюджет</Badge>
                <Badge variant="neutral" className="text-xs">Особые достижения</Badge>
              </div>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 mx-auto rounded-full bg-info/10 flex items-center justify-center mb-4">
                <Trophy className="w-6 h-6 text-info" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-dark mb-3">Конкурсная основа</h3>
              <p className="text-sm text-gray">
                Назначается по результатам конкурса
              </p>
            </CardContent>
          </Card>
        </div>
      </FadeIn>

      {/* Процесс оформления */}
      <FadeIn>
        <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
          <CardHeader>
            <div className="flex items-center gap-3">
              <FileText className="w-6 h-6 text-primary" />
              <h2 className="font-heading text-2xl text-dark">Процесс оформления</h2>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-3 gap-6">
              {processSteps.map((step, index) => (
                <div key={index} className="relative">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg flex-shrink-0">
                      {step.step}
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <div className="text-primary">{step.icon}</div>
                        <h3 className="font-semibold text-dark">{step.title}</h3>
                      </div>
                      <p className="text-sm text-gray">{step.description}</p>
                      {step.hasButton && (
                        <a 
                          href="https://t.me/rgautestBot" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-4 py-2 rounded-lg bg-primary hover:bg-primary-600 text-white text-sm font-medium transition-colors shadow-soft"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Перейти в бот
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </FadeIn>

      {/* Важная информация */}
      <FadeIn>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-warning">
            <CardContent className="p-6">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-6 h-6 text-warning flex-shrink-0" />
                <div>
                  <h3 className="font-heading text-lg font-semibold text-dark mb-2">
                    Важное условие
                  </h3>
                  <p className="text-sm text-gray">
                    При наличии пересдачи экзамена по неуважительной причине в течение года 
                    повышенная стипендия за учебные достижения не назначается.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-info">
            <CardContent className="p-6">
              <div className="flex items-start gap-3">
                <CreditCard className="w-6 h-6 text-info flex-shrink-0" />
                <div>
                  <h3 className="font-heading text-lg font-semibold text-dark mb-2">
                    Выплаты
                  </h3>
                  <p className="text-sm text-gray">
                    Размер утверждается Ученым советом на семестр. 
                    Выплачивается ежемесячно на карту студента.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </FadeIn>

      {/* Области достижений */}
      <FadeIn>
        <div className="space-y-6">
          <h2 className="font-heading text-3xl text-dark text-center">
            Области достижений
          </h2>
          <div className="space-y-6">
            {/* Первые 4 блока в сетке 2x2 */}
            <div className="grid md:grid-cols-2 md:grid-rows-2 gap-6">
              {achievementAreas.slice(0, 4).map((area, index) => (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6 h-full flex flex-col">
                    <div className="flex items-start gap-4 flex-1">
                      <div className={`w-12 h-12 rounded-full ${area.bgColor} flex items-center justify-center flex-shrink-0`}>
                        <div className={area.color}>
                          {area.icon}
                        </div>
                      </div>
                      <div className="flex-1 flex flex-col">
                        <h3 className="font-heading text-xl font-semibold text-dark mb-3">
                          {area.title}
                        </h3>
                        <ul className="space-y-2 flex-1">
                          {area.criteria.map((criterion, criterionIndex) => (
                            <li key={criterionIndex} className="flex items-start gap-2 text-gray">
                              <CheckCircle className="w-4 h-4 text-success flex-shrink-0 mt-0.5" />
                              <span className="text-sm">{criterion}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            {/* Спортивная деятельность отдельно внизу */}
            {achievementAreas.slice(4).map((area, index) => (
              <Card key={index + 4} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-full ${area.bgColor} flex items-center justify-center flex-shrink-0`}>
                      <div className={area.color}>
                        {area.icon}
                      </div>
                    </div>
                    <div className="flex-1 space-y-3">
                      <h3 className="font-heading text-xl font-semibold text-dark">
                        {area.title}
                      </h3>
                      <ul className="space-y-2">
                        {area.criteria.map((criterion, criterionIndex) => (
                          <li key={criterionIndex} className="flex items-start gap-2 text-gray">
                            <CheckCircle className="w-4 h-4 text-success flex-shrink-0 mt-0.5" />
                            <span className="text-sm">{criterion}</span>
                          </li>
                        ))}
                      </ul>
                      {area.warning && (
                        <div className="bg-red-50 p-3 rounded-lg border border-red-200">
                          <div className="flex items-start gap-2">
                            <AlertCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                            <p className="text-xs text-red-700">{area.warning}</p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </FadeIn>
    </div>
  );
} 