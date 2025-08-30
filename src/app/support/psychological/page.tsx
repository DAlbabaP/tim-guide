'use client';

import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import FadeIn from "@/components/ui/fade-in";
import { MapPin, Mail, Clock, Users, Heart, ExternalLink } from "lucide-react";

export default function PsychologicalServicePage() {
  const instituteStaff = [
    {
      name: "Авдеева Дарья Михайловна",
      specialization: "Клинический психолог, нейропсихолог",
      education: "специалитет, Санкт-Петербургская государственная медицинская педиатрическая академия",
      location: "27 учебный корпус (ул. Тимирязевская, д. 58), 1 этаж, кабинет 104",
      email: "d.avdeeva@rgau-msha.ru",
      phone: null,
      schedule: null
    },
    {
      name: "Бондарева Маргарита Викторовна",
      specialization: "Психолог, CBT (когнитивно-поведенческий терапевт)",
      education: "бакалавриат (МГУ им. М. В. Ломоносова), магистратура (СПбГУ)",
      location: "24 учебный корп. (ул. Лиственничная аллея, д. 6), 1 этаж, кабинет 110",
      email: "m.bondareva@rgau-msha.ru",
      phone: null,
      schedule: null
    }
  ];

  const collegeStaff = [
    {
      name: "Антохова Оксана Юрьевна",
      specialization: "Социальный педагог",
      location: "21 учебный корпус (ул. Прянишникова, д.14 стр.6), 1 этаж, 12 кабинет",
      schedule: "Ежедневно Пн-Чт: 09:00-17:30, Пт: 09:00-16:30"
    },
    {
      name: "Микулинская Татьяна Анатольевна",
      specialization: "Педагог-психолог",
      location: "21 учебный корпус (ул. Прянишникова, д.14 стр.6), 1 этаж, 12 кабинет",
      schedule: "Ежедневно Пн-Чт: 09:00-17:30, Пт: 09:00-16:30"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8 md:py-12 space-y-6 md:space-y-8">
      {/* Заголовок */}
      <header className="space-y-4">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center">
            <Heart className="w-8 h-8 text-gray-700" />
          </div>
          <div>
            <h1 className="font-heading text-4xl md:text-5xl text-dark">Социально-психологическая служба</h1>
            <p className="text-gray text-lg mt-2">РГАУ-МСХА имени К.А. Тимирязева</p>
          </div>
        </div>
      </header>

      {/* Основная информация и специалисты */}
      <div className="grid gap-4 md:gap-6 lg:grid-cols-2 auto-rows-fr">
        {/* Левая колонка - 3 блока информации */}
        <div className="space-y-4 md:space-y-6">
          <FadeIn>
            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  <Heart className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                  Общая информация
                </h3>
              </CardHeader>
              <CardContent className="space-y-12">
                <p className="text-base text-gray leading-relaxed">
                  Социально-психологическая служба РГАУ-МСХА создана для оказания помощи и поддержки
                  в решении различных психологических проблем и преодолении трудных жизненных ситуаций
                  студентов, аспирантов и преподавателей.
                </p>

                <div className="flex flex-wrap gap-2.5">
                  <Badge variant="neutral" className="text-sm hover:scale-105 transition-transform duration-200">Профессиональная помощь</Badge>
                  <Badge variant="neutral" className="text-sm hover:scale-105 transition-transform duration-200">Конфиденциальность</Badge>
                  <Badge variant="neutral" className="text-sm hover:scale-105 transition-transform duration-200">Бесплатные консультации</Badge>
                  <Badge variant="neutral" className="text-sm hover:scale-105 transition-transform duration-200">Квалифицированные специалисты</Badge>
                </div>
              </CardContent>
            </Card>
          </FadeIn>

          <FadeIn>
            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  <Users className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                  Специалисты институтов
                </h3>
              </CardHeader>
              <CardContent className="space-y-4">
                {instituteStaff.map((staff, index) => (
                  <div key={staff.name} className="border-b border-gray-100 pb-4 last:border-b-0 last:pb-0">
                    <div className="flex items-start justify-between mb-2">
                      <div className="min-w-0 flex-1">
                        <h4 className="font-semibold text-dark text-sm truncate">{staff.name}</h4>
                        <Badge variant="primary" className="text-sm mt-1">
                          {staff.specialization.split(',')[0]}
                        </Badge>
                      </div>
                      <Heart className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                    </div>
                    <div className="space-y-2 text-sm text-gray-600">
                      <div className="flex items-start gap-2">
                        <MapPin className="w-3 h-3 mt-1 flex-shrink-0" />
                        <span className="line-clamp-2">{staff.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Mail className="w-3 h-3 flex-shrink-0" />
                        <a href={`mailto:${staff.email}`} className="text-primary hover:underline truncate">
                          {staff.email}
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </FadeIn>

          <FadeIn>
            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  <Users className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                  Специалисты колледжа
                </h3>
              </CardHeader>
              <CardContent className="space-y-4">
                {collegeStaff.map((staff, index) => (
                  <div key={staff.name} className="border-b border-gray-100 pb-4 last:border-b-0 last:pb-0">
                    <div className="flex items-start justify-between mb-2">
                      <div className="min-w-0 flex-1">
                        <h4 className="font-semibold text-dark text-sm truncate">{staff.name}</h4>
                        <Badge variant="primary" className="text-sm mt-1">
                          {staff.specialization}
                        </Badge>
                      </div>
                      <Users className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                    </div>
                    <div className="space-y-2 text-sm text-gray-600">
                      <div className="flex items-start gap-2">
                        <MapPin className="w-3 h-3 mt-1 flex-shrink-0" />
                        <span className="line-clamp-2">{staff.location}</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Clock className="w-3 h-3 mt-1 flex-shrink-0" />
                        <span className="line-clamp-2">{staff.schedule}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </FadeIn>
        </div>

        {/* Правая колонка - запись и фото */}
        <div className="space-y-4 md:space-y-6">
          <FadeIn>
            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  <Clock className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                  Запись на консультации
                </h3>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-2">
                  <div className="flex items-center justify-between p-2 bg-blue-50 rounded-lg">
                    <span className="font-medium text-xs">Для институтов</span>
                    <Button
                      variant="primary"
                      size="sm"
                      onClick={() => window.open('https://forms.gle/2VfGBHUZ2sfHKFdR', '_blank')}
                    >
                      Записаться
                    </Button>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-green-50 rounded-lg">
                    <span className="font-medium text-xs">Для колледжа</span>
                    <Button
                      variant="primary"
                      size="sm"
                      onClick={() => window.open('https://docs.google.com/forms/d/1XRt0yzpIywSS5NdK5BWw5wCEVwpq5h2I7tP4DWTl2Jg/viewform?edit_requested=true', '_blank')}
                    >
                      Записаться
                    </Button>
                  </div>
                </div>
                <p className="text-xs text-gray-500">
                  Все консультации проводятся бесплатно и конфиденциально
                </p>
              </CardContent>
            </Card>
          </FadeIn>

          <FadeIn>
            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  <Heart className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                  Фото службы
                </h3>
              </CardHeader>
              <CardContent>
                {/* Плейсхолдер для фото */}
                <div className="aspect-square rounded-lg overflow-hidden shadow-sm bg-gradient-to-br from-primary/10 to-accent/10">
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-center">
                      <Heart className="w-12 h-12 text-primary/50 mx-auto mb-4" />
                      <p className="text-sm text-gray-500 font-medium">Фото психологической службы</p>
                      <p className="text-xs text-gray-400">Будет добавлено позже</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </FadeIn>
        </div>
      </div>





      {/* Дополнительная поддержка */}
      <FadeIn>
        <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
          <CardHeader>
            <h3 className="text-xl font-semibold flex items-center gap-2">
              <Heart className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              Студенческая группа MentalTeam
            </h3>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-yellow-50 p-4 rounded-lg">
              <p className="text-sm text-yellow-800 font-medium mb-2">
                MentalTeam — группа студентов, оказывающих допсихологическую поддержку
              </p>
              <p className="text-xs text-yellow-700">
                <strong>ВАЖНО:</strong> НЕ ЗАНИМАЮТСЯ оказанием профессиональной психологической помощи и консультированием
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-dark mb-3">Мы поможем тебе:</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>узнать больше о ментальном здоровье</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>понять, что ты не один</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>получить поддержку и поделиться опытом</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-3">
                <Link href="/student-life">
                  <Button variant="primary" className="w-full">
                    Подробная информация
                  </Button>
                </Link>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => window.open('https://vk.com/mentalteam_rgau', '_blank')}
                  className="w-full"
                >
                  ВКонтакте MentalTeam
                  <ExternalLink className="w-3 h-3 ml-1" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </FadeIn>


    </div>
  );
} 
