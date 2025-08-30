import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import FadeIn from "@/components/ui/fade-in";
import { Shield, FileText, Calendar, Users, AlertCircle, CheckCircle, Clock, MapPin, Phone, AlertTriangle, UserCheck, Building, GraduationCap, BookOpen, Home, UserX, RefreshCw } from "lucide-react";
import Image from "next/image";

export const metadata = { 
  title: "Отсрочка от армии",
  description: "Информация о порядке оформления отсрочки от призыва в ряды Вооруженных сил РФ для студентов РГАУ-МСХА"
};

export default function DefermentPage() {
  return (
    <div className="container mx-auto px-4 py-8 md:py-12 space-y-6 md:space-y-8">
      {/* Заголовок */}
      <header className="space-y-4">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center">
            <Shield className="w-8 h-8 text-gray-700" />
          </div>
          <div>
            <h1 className="font-heading text-4xl md:text-5xl text-dark">Отсрочка от армии</h1>
            <p className="text-gray text-lg mt-2">Порядок оформления отсрочки от призыва для студентов РГАУ-МСХА</p>
          </div>
        </div>
      </header>

      {/* Главный блок - Контакты */}
      <FadeIn>
        <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
          <CardHeader>
            <h3 className="text-xl font-semibold flex items-center gap-2">
              <MapPin className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              Военно-учетный стол
            </h3>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-3 hover:bg-gray-50 p-2 rounded-lg transition-colors duration-200">
                    <Building className="w-4 h-4 text-gray-500" />
                    <div>
                      <p className="font-medium">Адрес</p>
                      <p className="text-sm text-gray">27 учебный корпус, кабинет №102</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 hover:bg-gray-50 p-2 rounded-lg transition-colors duration-200">
                    <Clock className="w-4 h-4 text-gray-500" />
                    <div>
                      <p className="font-medium">Время работы</p>
                      <p className="text-sm text-gray">Пн-Пт: 9:00-18:00</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-blue-50 p-4 rounded-lg hover:bg-blue-100 transition-colors duration-300">
                  <h4 className="font-semibold mb-2 text-blue-800">Важно:</h4>
                  <p className="text-sm text-blue-700">
                    Решение о предоставлении отсрочки от призыва принимает призывная комиссия того военного комиссариата, в котором обучающийся состоит на воинском учете.
                  </p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="bg-gray-100 rounded-lg p-4 flex items-center justify-center min-h-[200px]">
                  <div className="text-center text-gray-500">
                    <Building className="w-16 h-16 mx-auto mb-2 opacity-50" />
                    <p className="text-sm">Фото двери военно-учетного стола</p>
                    <p className="text-xs">27 учебный корпус, кабинет №102</p>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  <Badge variant="neutral" className="hover:scale-105 transition-transform duration-200">Отсрочка от армии</Badge>
                  <Badge variant="neutral" className="hover:scale-105 transition-transform duration-200">Воинский учет</Badge>
                  <Badge variant="neutral" className="hover:scale-105 transition-transform duration-200">Документы</Badge>
                  <Badge variant="neutral" className="hover:scale-105 transition-transform duration-200">Обязанности</Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </FadeIn>

      {/* Детальная информация в аккордеоне */}
      <FadeIn>
        <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
          <CardHeader>
            <h3 className="text-xl font-semibold flex items-center gap-2">
              <FileText className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              Подробная информация по отсрочке
            </h3>
          </CardHeader>
          <CardContent>
            <Accordion className="w-full space-y-3 md:space-y-4">
              {/* Пункт 1: Первокурсники */}
              <AccordionItem className="border rounded-xl overflow-hidden hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                <AccordionTrigger className="px-6 py-4 hover:bg-blue-50 transition-colors group">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <span className="text-blue-600 font-bold text-sm">1</span>
                    </div>
                    <span className="font-semibold text-left text-sm md:text-base">ПЕРВОКУРСНИКИ - ОБЯЗАТЕЛЬНАЯ ПОСТАНОВКА НА УЧЕТ</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <div className="space-y-3 md:space-y-4">
                    <div className="bg-blue-50 p-4 rounded-lg hover:bg-blue-100 transition-colors duration-300">
                      <h5 className="font-semibold mb-3 text-blue-800 flex items-center gap-2">
                        <CheckCircle className="w-4 h-4" />
                        Что необходимо сделать:
                      </h5>
                      <ol className="space-y-2 text-sm list-decimal list-inside">
                        <li>Предоставить военно-учетные документы в военно-учетный стол (27 учебный корпус, кабинет №102)</li>
                        <li>Получить справку «Приложение № 4»</li>
                        <li>Лично предоставить справку в военный комиссариат по месту регистрации</li>
                        <li>Оформить отсрочку от призыва по обучению</li>
                      </ol>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition-colors duration-300">
                      <h5 className="font-semibold mb-3 text-gray-800 flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        Сроки:
                      </h5>
                      <p className="text-sm text-gray-700">
                        <strong>До 15 сентября текущего года</strong> - обязательный срок для первокурсников.
                      </p>
                    </div>

                    <div className="bg-green-50 p-4 rounded-lg hover:bg-green-100 transition-colors duration-300">
                      <h5 className="font-semibold mb-3 text-green-800 flex items-center gap-2">
                        <Building className="w-4 h-4" />
                        Место подачи документов:
                      </h5>
                      <p className="text-sm text-green-700">
                        <strong>27 учебный корпус, кабинет №102</strong> - военно-учетный стол Университета.
                      </p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* Пункт 2: Старшие курсы */}
              <AccordionItem className="border rounded-xl overflow-hidden hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                <AccordionTrigger className="px-6 py-4 hover:bg-green-50 transition-colors group">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <span className="text-green-600 font-bold text-sm">2</span>
                    </div>
                    <span className="font-semibold text-left text-sm md:text-base">СТАРШИЕ КУРСЫ - ЕЖЕГОДНОЕ ПОДТВЕРЖДЕНИЕ</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <div className="space-y-3 md:space-y-4">
                    <div className="bg-green-50 p-4 rounded-lg hover:bg-green-100 transition-colors duration-300">
                      <h5 className="font-semibold mb-3 text-green-800 flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        Процедура подтверждения:
                      </h5>
                      <ol className="space-y-2 text-sm list-decimal list-inside">
                        <li>Получить справку «Приложение № 4» в Военно-учетном столе Университета</li>
                        <li>Предоставить справку в военный комиссариат по месту регистрации</li>
                        <li>Подтвердить право на отсрочку от призыва</li>
                      </ol>
                    </div>
                    
                    <div className="bg-blue-50 p-4 rounded-lg hover:bg-blue-100 transition-colors duration-300">
                      <h5 className="font-semibold mb-3 text-blue-800 flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        Частота подтверждения:
                      </h5>
                      <p className="text-sm text-blue-700">
                        <strong>Один раз в год</strong> - обязательное подтверждение для всех призывников старших курсов.
                      </p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* Пункт 3: Общежитие */}
              <AccordionItem className="border rounded-xl overflow-hidden hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                <AccordionTrigger className="px-6 py-4 hover:bg-orange-50 transition-colors group">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <span className="text-orange-600 font-bold text-sm">3</span>
                    </div>
                    <span className="font-semibold text-left text-sm md:text-base">ПРОЖИВАНИЕ В ОБЩЕЖИТИИ</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <div className="space-y-3 md:space-y-4">
                    <div className="bg-orange-50 p-4 rounded-lg hover:bg-orange-100 transition-colors duration-300">
                      <h5 className="font-semibold mb-3 text-orange-800 flex items-center gap-2">
                        <Home className="w-4 h-4" />
                        Особенности для проживающих в общежитии:
                      </h5>
                      <p className="text-sm text-orange-700">
                        Обучающимся, проживающим в студенческом общежитии, необходимо своевременно оформлять документы, касающиеся регистрации и постановки на воинский учет в военном комиссариате по месту временной регистрации.
                      </p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* Пункт 4: Повестки */}
              <AccordionItem className="border rounded-xl overflow-hidden hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                <AccordionTrigger className="px-6 py-4 hover:bg-purple-50 transition-colors group">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <span className="text-purple-600 font-bold text-sm">4</span>
                    </div>
                    <span className="font-semibold text-left text-sm md:text-base">ПОЛУЧЕНИЕ ПОВЕСТОК</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <div className="space-y-3 md:space-y-4">
                    <div className="bg-purple-50 p-4 rounded-lg hover:bg-purple-100 transition-colors duration-300">
                      <h5 className="font-semibold mb-3 text-purple-800 flex items-center gap-2">
                        <FileText className="w-4 h-4" />
                        При получении повестки:
                      </h5>
                      <ol className="space-y-2 text-sm list-decimal list-inside">
                        <li>Прибыть в Военно-учетный стол Университета</li>
                        <li>Ознакомиться с содержанием повестки</li>
                        <li>Расписаться на корешке повестки о её получении</li>
                        <li>Исполнить все указанные в ней требования</li>
                      </ol>
                    </div>
                    
                    <div className="bg-red-50 p-4 rounded-lg hover:bg-red-100 transition-colors duration-300">
                      <h5 className="font-semibold mb-3 text-red-800 flex items-center gap-2">
                        <AlertTriangle className="w-4 h-4" />
                        ВАЖНО - Отказ от получения:
                      </h5>
                      <p className="text-sm text-red-700">
                        В случае отказа от получения повестки составляется акт и направляется в военкомат вместе с повесткой. Акт об отказе получения повестки является одним из доказательств факта уклонения от службы.
                      </p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* Пункт 5: Изменения данных */}
              <AccordionItem className="border rounded-xl overflow-hidden hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                <AccordionTrigger className="px-6 py-4 hover:bg-indigo-50 transition-colors group">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <span className="text-indigo-600 font-bold text-sm">5</span>
                    </div>
                    <span className="font-semibold text-left text-sm md:text-base">ИЗМЕНЕНИЯ ДАННЫХ</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <div className="space-y-3 md:space-y-4">
                    <div className="bg-indigo-50 p-4 rounded-lg hover:bg-indigo-100 transition-colors duration-300">
                      <h5 className="font-semibold mb-3 text-indigo-800 flex items-center gap-2">
                        <UserCheck className="w-4 h-4" />
                        Обязанность сообщать об изменениях:
                      </h5>
                      <p className="text-sm text-indigo-700">
                        Призывники и граждане, пребывающие в запасе, обязаны в недельный срок сообщать в Военно-учетный стол обо всех изменениях:
                      </p>
                      <ul className="space-y-1 text-sm mt-2">
                        <li>• Сведений в документах воинского учета</li>
                        <li>• Семейного положения</li>
                        <li>• Места жительства или места пребывания</li>
                        <li>• При получении нового паспорта</li>
                        <li>• Изменений состояния здоровья</li>
                      </ul>
                    </div>
                    
                    <div className="bg-yellow-50 p-4 rounded-lg hover:bg-yellow-100 transition-colors duration-300">
                      <h5 className="font-semibold mb-3 text-yellow-800 flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        Срок уведомления:
                      </h5>
                      <p className="text-sm text-yellow-700">
                        <strong>В недельный срок</strong> - обязательное уведомление о всех изменениях.
                      </p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* Пункт 6: Восстановление */}
              <AccordionItem className="border rounded-xl overflow-hidden hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                <AccordionTrigger className="px-6 py-4 hover:bg-teal-50 transition-colors group">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <span className="text-teal-600 font-bold text-sm">6</span>
                    </div>
                    <span className="font-semibold text-left text-sm md:text-base">ВОССТАНОВЛЕНИЕ ПОСЛЕ ОТЧИСЛЕНИЯ</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <div className="space-y-3 md:space-y-4">
                    <div className="bg-teal-50 p-4 rounded-lg hover:bg-teal-100 transition-colors duration-300">
                      <h5 className="font-semibold mb-3 text-teal-800 flex items-center gap-2">
                        <RefreshCw className="w-4 h-4" />
                        Процедура восстановления:
                      </h5>
                      <ol className="space-y-2 text-sm list-decimal list-inside">
                        <li>Повторить процедуру постановки на воинский учет в Военно-учетном столе</li>
                        <li>При необходимости - провести сверку данных в военном комиссариате по месту временной регистрации</li>
                        <li>Обновить все документы воинского учета</li>
                      </ol>
                    </div>
                    
                    <div className="bg-blue-50 p-4 rounded-lg hover:bg-blue-100 transition-colors duration-300">
                      <h5 className="font-semibold mb-3 text-blue-800 flex items-center gap-2">
                        <AlertCircle className="w-4 h-4" />
                        Важно помнить:
                      </h5>
                      <p className="text-sm text-blue-700">
                        После отчисления и восстановления необходимо заново пройти всю процедуру постановки на воинский учет, так как предыдущая отсрочка была утеряна.
                      </p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* Пункт 7: Отчисление */}
              <AccordionItem className="border rounded-xl overflow-hidden hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                <AccordionTrigger className="px-6 py-4 hover:bg-red-50 transition-colors group">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <span className="text-red-600 font-bold text-sm">7</span>
                    </div>
                    <span className="font-semibold text-left text-sm md:text-base">ОТЧИСЛЕНИЕ = ПОТЕРЯ ОТСРОЧКИ</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <div className="space-y-3 md:space-y-4">
                    <div className="bg-red-50 p-4 rounded-lg hover:bg-red-100 transition-colors duration-300">
                      <h5 className="font-semibold mb-3 text-red-800 flex items-center gap-2">
                        <AlertTriangle className="w-4 h-4" />
                        Отчисление ЛИШАЕТ права на отсрочку:
                      </h5>
                      <ul className="space-y-1 text-sm">
                        <li>• За академическую неуспеваемость</li>
                        <li>• За нарушение Устава Университета</li>
                        <li>• За нарушение правил внутреннего распорядка</li>
                        <li>• За нарушение правил проживания в общежитиях</li>
                      </ul>
                    </div>
                    
                    <div className="bg-orange-50 p-4 rounded-lg hover:bg-orange-100 transition-colors duration-300">
                      <h5 className="font-semibold mb-3 text-orange-800 flex items-center gap-2">
                        <RefreshCw className="w-4 h-4" />
                        При восстановлении:
                      </h5>
                      <p className="text-sm text-orange-700">
                        Необходимо повторить процедуру постановки на воинский учет в Военно-учетном столе.
                      </p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* Пункт 8: Штрафы */}
              <AccordionItem className="border rounded-xl overflow-hidden hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                <AccordionTrigger className="px-6 py-4 hover:bg-yellow-50 transition-colors group">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-yellow-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <span className="text-yellow-600 font-bold text-sm">8</span>
                    </div>
                    <span className="font-semibold text-left text-sm md:text-base">ШТРАФЫ ЗА НАРУШЕНИЯ</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <div className="space-y-3 md:space-y-4">
                    <div className="bg-yellow-50 p-4 rounded-lg hover:bg-yellow-100 transition-colors duration-300">
                      <h5 className="font-semibold mb-3 text-yellow-800 flex items-center gap-2">
                        <AlertCircle className="w-4 h-4" />
                        Уклонение от призыва:
                      </h5>
                      <p className="text-sm text-yellow-700">
                        В соответствии с п.1 ст. 328 УК РФ наказывается штрафом.
                      </p>
                    </div>
                    
                    <div className="bg-red-50 p-4 rounded-lg hover:bg-red-100 transition-colors duration-300">
                      <h5 className="font-semibold mb-3 text-red-800 flex items-center gap-2">
                        <AlertTriangle className="w-4 h-4" />
                        Неисполнение обязанностей:
                      </h5>
                      <p className="text-sm text-red-700">
                        Размеры штрафов определены Федеральным законом № 404 от 31.07.2023 г., ст. 21.5.
                      </p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>
      </FadeIn>
    </div>
  );
} 