import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import FadeIn from "@/components/ui/fade-in";
import { 
  Heart,
  Users, 
  FileText, 
  CreditCard,
  Calendar,
  CheckCircle,
  AlertCircle,
  Shield,
  UserCheck,
  Clock,
  ArrowRight,
  Banknote
} from "lucide-react";

export const metadata = { 
  title: "Государственная социальная стипендия",
  description: "Социальная стипендия для студентов льготных категорий: сироты, инвалиды, ветераны, получатели государственной социальной помощи"
};

export default function SocialScholarshipPage() {
  const eligibleCategories = [
    {
      title: "Дети-сироты и оставшиеся без попечения",
      icon: <Heart className="w-5 h-5" />,
      color: "text-pink-500",
      bgColor: "bg-pink-500",
      description: "Дети-сироты, дети без попечения родителей, лица из их числа, потерявшие родителей в период обучения",
      tags: ["Сироты", "Без попечения", "Потеря родителей"]
    },
    {
      title: "Инвалиды",
      icon: <Shield className="w-5 h-5" />,
      color: "text-blue-500", 
      bgColor: "bg-blue-500",
      description: "Дети-инвалиды, инвалиды I и II групп, инвалиды с детства",
      tags: ["Дети-инвалиды", "I группа", "II группа", "С детства"]
    },
    {
      title: "Пострадавшие от радиации",
      icon: <AlertCircle className="w-5 h-5" />,
      color: "text-orange-500",
      bgColor: "bg-orange-500", 
      description: "Студенты, подвергшиеся воздействию радиации вследствие катастроф на ЧАЭС, испытаний на Семипалатинском полигоне",
      tags: ["ЧАЭС", "Семипалатинск", "Радиация"]
    },
    {
      title: "Военные категории",
      icon: <UserCheck className="w-5 h-5" />,
      color: "text-green-500",
      bgColor: "bg-green-500",
      description: "Инвалиды военной травмы, ветераны боевых действий, граждане с военной службой по контракту от 3 лет",
      tags: ["Военная травма", "Ветераны", "Контракт 3+ года"]
    },
    {
      title: "Получатели государственной социальной помощи",
      icon: <Users className="w-5 h-5" />,
      color: "text-purple-500",
      bgColor: "bg-purple-500",
      description: "Студенты, получившие государственную социальную помощь",
      tags: ["Гос. помощь", "Социальная поддержка"]
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12 space-y-12">
      {/* Заголовок */}
      <header className="space-y-4">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
            <Heart className="w-8 h-8 text-primary" />
          </div>
          <div>
            <h1 className="font-heading text-4xl md:text-5xl text-dark">
              Государственная социальная стипендия
            </h1>
            <p className="text-gray text-lg mt-2">
              Социальная поддержка студентов льготных категорий
            </p>
          </div>
        </div>
      </header>

      {/* Краткая информация с бейджами */}
      <FadeIn>
        <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
          <CardContent className="p-8">
            <div className="text-center space-y-4">
              <h2 className="font-heading text-2xl text-dark">Кому предназначена стипендия</h2>
              <p className="text-gray max-w-3xl mx-auto">
                Назначается студентам бакалавриата, магистратуры, специалитета, обучающимся на бюджетной основе и относящимся к льготным категориям
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <Badge variant="neutral" className="hover:scale-105 transition-transform duration-200">Социальная поддержка</Badge>
                <Badge variant="neutral" className="hover:scale-105 transition-transform duration-200">Льготные категории</Badge>
                <Badge variant="neutral" className="hover:scale-105 transition-transform duration-200">Бюджетная основа</Badge>
                <Badge variant="neutral" className="hover:scale-105 transition-transform duration-200">Ежемесячно</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </FadeIn>

      {/* Сроки и условия */}
      <FadeIn>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <CardContent className="p-8 text-center">
              <div className="w-12 h-12 mx-auto rounded-full bg-info/10 flex items-center justify-center mb-4">
                <Calendar className="w-6 h-6 text-info" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-dark mb-2">Срок назначения</h3>
              <p className="text-gray text-sm">На один год с момента получения помощи или справки</p>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <CardContent className="p-8 text-center">
              <div className="w-12 h-12 mx-auto rounded-full bg-warning/10 flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-warning" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-dark mb-2">Прекращение</h3>
              <p className="text-gray text-sm">При окончании льготы или отчислении</p>
            </CardContent>
          </Card>
        </div>
      </FadeIn>

      {/* Размеры выплат и Процесс оформления - по бокам */}
      <FadeIn>
        <div className="grid md:grid-cols-2 gap-12">
          {/* Размеры выплат - слева */}
          <div className="space-y-6">
            <h2 className="font-heading text-2xl text-dark text-center">Размер стипендии на 2024/2025 год</h2>
            <div className="space-y-4">
              <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 hover:scale-105">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 mx-auto rounded-full bg-purple-100 flex items-center justify-center mb-3">
                    <Banknote className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-dark mb-2">Получатели гос. соц. помощи</h3>
                  <div className="text-2xl font-bold text-purple-600">3 125 ₽</div>
                </CardContent>
              </Card>
              
              <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 hover:scale-105">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 mx-auto rounded-full bg-green-100 flex items-center justify-center mb-3">
                    <CreditCard className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-dark mb-2">Остальные категории</h3>
                  <div className="text-2xl font-bold text-green-600">4 167 ₽</div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Процесс оформления - справа */}
          <div className="space-y-6">
            <h2 className="font-heading text-2xl text-dark text-center">Как оформить стипендию</h2>
            <div className="space-y-4">
              <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-3">
                    <FileText className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-dark mb-2">1. Заявление</h3>
                  <p className="text-gray text-sm">Написать заявление по установленному образцу в дирекции института</p>
                </CardContent>
              </Card>
              
              <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 mx-auto rounded-full bg-success/10 flex items-center justify-center mb-3">
                    <CheckCircle className="w-6 h-6 text-success" />
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-dark mb-2">2. Документы</h3>
                  <p className="text-gray text-sm">Приложить оригинал справки, подтверждающей льготу</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </FadeIn>

      {/* Льготные категории - сетка 3+2 */}
      <FadeIn>
        <div className="space-y-6">
          <h2 className="font-heading text-3xl text-dark text-center">Льготные категории</h2>
          <div className="space-y-6">
            {/* Первые 3 категории */}
            <div className="grid md:grid-cols-3 gap-6">
              {eligibleCategories.slice(0, 3).map((category, index) => (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6 text-center">
                    <div className={`w-12 h-12 mx-auto rounded-full bg-gray-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <div className={category.color}>
                        {category.icon}
                      </div>
                    </div>
                    <h3 className="font-heading text-lg font-semibold text-dark mb-3">
                      {category.title}
                    </h3>
                    <p className="text-gray text-sm leading-relaxed">
                      {category.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            {/* Последние 2 категории - растянуты на всю ширину */}
            <div className="grid md:grid-cols-2 gap-6">
              {eligibleCategories.slice(3).map((category, index) => (
                <Card key={index + 3} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6 text-center">
                    <div className={`w-12 h-12 mx-auto rounded-full bg-gray-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <div className={category.color}>
                        {category.icon}
                      </div>
                    </div>
                    <h3 className="font-heading text-lg font-semibold text-dark mb-3">
                      {category.title}
                    </h3>
                    <p className="text-gray text-sm leading-relaxed">
                      {category.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </FadeIn>
    </div>
  );
} 