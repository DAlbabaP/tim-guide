import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import FadeIn from "@/components/ui/fade-in";
import { Settings, User, BookOpen, Monitor, Mail, Clock, MapPin, ExternalLink } from "lucide-react";

export const metadata = { 
  title: "Информационные сервисы",
  description: "Электронные сервисы РГАУ-МСХА: личный кабинет студента, электронно-библиотечная система, образовательный портал"
};

export default function StudyServicesPage() {
  return (
    <div className="container mx-auto px-4 py-12 space-y-8">
      {/* Заголовок */}
      <header className="space-y-4">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
            <Settings className="w-8 h-8 text-primary" />
          </div>
          <div>
            <h1 className="font-heading text-4xl md:text-5xl text-dark">Информационные сервисы</h1>
            <p className="text-gray text-lg mt-2">Электронные системы для обучения и управления учебным процессом</p>
          </div>
        </div>
      </header>

      {/* Вводная информация */}
      <FadeIn>
        <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
          <CardContent className="p-6">
            <div className="text-center space-y-4">
              <h2 className="font-heading text-2xl text-dark">
                Основные электронные сервисы университета
              </h2>
              <p className="text-gray max-w-3xl mx-auto">
                РГАУ-МСХА предоставляет студентам доступ к современным информационным системам для эффективного обучения и управления учебным процессом. 
                Каждый сервис имеет свои особенности доступа и функциональности.
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <Badge variant="primary" className="hover:scale-105 transition-transform duration-200">Личный кабинет</Badge>
                <Badge variant="primary" className="hover:scale-105 transition-transform duration-200">Библиотека</Badge>
                <Badge variant="primary" className="hover:scale-105 transition-transform duration-200">Образование</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </FadeIn>

      {/* Сервисы - уникальная сетка с акцентом на главный сервис */}
      <div className="space-y-8">
        {/* Главный сервис - Личный кабинет */}
        <FadeIn>
          <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 border-primary/20">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <User className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-dark">Личный кабинет студента</h3>
                    <p className="text-gray">Основной сервис для управления учебным процессом</p>
                  </div>
                </div>
                <a 
                  href="https://lk.rgau-msha.ru/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  Открыть
                </a>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-6 lg:grid-cols-2">
                <div className="space-y-4">
                  <h4 className="font-semibold text-dark flex items-center gap-2">
                    <Mail className="w-5 h-5 text-primary" />
                    Доступ к системе
                  </h4>
                  <p className="text-gray leading-relaxed">
                    Логин и Пароль для входа направлен на электронную почту указанную в личной карточке 1С:Университет ПРОФ.
                  </p>
                  <div className="bg-warning/10 border border-warning/20 rounded-lg p-4">
                    <p className="text-warning font-medium">
                      Если Вы меняли почту, или почта указанная Вами, например год или два года назад, не актуальна, просьба сообщить об этом по почте: lk.rgau@rgau-msha.ru Указав ФИО, номер группы и актуальную почту.
                    </p>
                  </div>
                </div>
                <div className="space-y-4">
                  <h4 className="font-semibold text-dark flex items-center gap-2">
                    <Settings className="w-5 h-5 text-primary" />
                    Поддержка
                  </h4>
                  <p className="text-gray leading-relaxed">
                    По вопросам работы личного кабинета студента, утери пароля можно обращаться на почту:
                  </p>
                  <div className="bg-primary/10 border border-primary/20 rounded-lg p-4">
                    <p className="text-primary font-medium">
                      lk.rgau@rgau-msha.ru
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </FadeIn>

        {/* Дополнительные сервисы - сетка 2 колонки */}
        <div className="grid gap-6 lg:grid-cols-2">
          {/* Электронно-библиотечная система */}
          <FadeIn className="delay-200">
            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                      <BookOpen className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-dark">Электронно-библиотечная система</h3>
                      <p className="text-gray text-sm">РГАУ-МСХА имени К. А. Тимирязева</p>
                    </div>
                  </div>
                  <a 
                    href="http://elib.timacad.ru/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-3 py-1 bg-blue-100 text-blue-600 rounded-full hover:bg-blue-200 transition-colors text-sm"
                  >
                    <ExternalLink className="w-3 h-3" />
                    Открыть
                  </a>
                </div>
              </CardHeader>
              <CardContent className="space-y-4 flex-1">
                <div className="space-y-4">
                  <h4 className="font-semibold text-dark flex items-center gap-2">
                    <User className="w-5 h-5 text-blue-600" />
                    Получение логина и пароля
                  </h4>
                  
                  <div className="space-y-3">
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                      <h5 className="font-medium text-blue-800 mb-2">Студентам 1-го и 2-го курсов (с 2023 года):</h5>
                      <div className="space-y-1 text-sm">
                        <p><span className="font-medium">Логин:</span> адрес электронной почты</p>
                        <p><span className="font-medium">Пароль:</span> номер студенческого билета</p>
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                      <h5 className="font-medium text-gray-800 mb-2">Студентам старших курсов:</h5>
                      <p className="text-sm text-gray-700 mb-3">
                        Просьба обращаться к Селезневу Павлу Геннадевичу, каб. 101
                      </p>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-gray-500" />
                          <span>Понедельник — четверг: 8:30 — 17:30</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-gray-500" />
                          <span>Пятница: 8:30 — 16:15</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-gray-500" />
                          <span>Перерыв: ≈ 13:00 —14:00</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Mail className="w-4 h-4 text-gray-500" />
                          <span>pseleznev@rgau-msha.ru</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </FadeIn>

          {/* Образовательный портал */}
          <FadeIn className="delay-400">
            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                      <Monitor className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-dark">Образовательный портал</h3>
                      <p className="text-gray text-sm">Система дистанционного обучения</p>
                    </div>
                  </div>
                  <a 
                    href="https://sdo.timacad.ru/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-3 py-1 bg-green-100 text-green-600 rounded-full hover:bg-green-200 transition-colors text-sm"
                  >
                    <ExternalLink className="w-3 h-3" />
                    Открыть
                  </a>
                </div>
              </CardHeader>
              <CardContent className="space-y-4 flex-1">
                <div className="space-y-4">
                  <h4 className="font-semibold text-dark flex items-center gap-2">
                    <Settings className="w-5 h-5 text-green-600" />
                    Назначение системы
                  </h4>
                  <p className="text-gray leading-relaxed">
                    Предназначен для создания учебных курсов преподавателями для дальнейшего использования студентами в чаще всего в рамках практических и лабораторных занятий.
                  </p>
                  
                  <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                    <h5 className="font-medium text-green-800 mb-2">Основные возможности:</h5>
                    <ul className="space-y-2 text-sm text-green-700">
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Создание учебных курсов преподавателями</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Практические и лабораторные занятия</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Дистанционное обучение</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Интерактивные материалы</span>
                      </li>
                    </ul>
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