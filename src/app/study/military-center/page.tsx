import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import FadeIn from "@/components/ui/fade-in";
import { Shield, FileText, Calendar, Users, Award, AlertCircle, CheckCircle, Clock, MapPin, Phone, Image, Stethoscope, ClipboardCheck, AlertTriangle } from "lucide-react";
import PhotoGallery from "@/components/gallery/PhotoGallery";

export const metadata = { 
  title: "Военный учебный центр",
  description: "Информация о военной подготовке, поступлении и обучении в военном учебном центре РГАУ-МСХА"
};

export default function MilitaryCenterPage() {
  return (
    <div className="container mx-auto px-4 py-12 space-y-8">
      {/* Заголовок */}
      <header className="space-y-4">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center">
            <Shield className="w-8 h-8 text-gray-700" />
          </div>
          <div>
            <h1 className="font-heading text-4xl md:text-5xl text-dark">Военный учебный центр</h1>
            <p className="text-gray text-lg mt-2">РГАУ-МСХА имени К.А. Тимирязева</p>
          </div>
        </div>
      </header>

      {/* Основная информация */}
      <div className="grid gap-6 lg:grid-cols-2 auto-rows-fr">
        <FadeIn className="h-full">
          <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
            <CardHeader>
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <Users className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                Общая информация
              </h3>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Реальное фото военного учебного центра */}
              <div className="aspect-video rounded-lg overflow-hidden mb-4 shadow-sm">
                <img
                  src="/tim-guide/images/military-center/center.jpg"
                  alt="Военный учебный центр РГАУ-МСХА"
                  className="object-cover w-full h-full"
                />
              </div>
              
              <p className="text-gray leading-relaxed">
                Военная кафедра доступна для всех парней на первом и втором курсах для получения звания младшего сержанта, 
                поскольку обучение в центре продолжается 1,5 года. Для студентов определенных направлений Института механики 
                и энергетики имени В.П. Горячкина на первом курсе предоставляется возможность подать заявление на обучение 
                с целью получения звания офицера.
              </p>
              
              <div className="flex flex-wrap gap-2">
                <Badge variant="neutral" className="hover:scale-105 transition-transform duration-200">1-2 курс</Badge>
                <Badge variant="neutral" className="hover:scale-105 transition-transform duration-200">1.5 года обучения</Badge>
                <Badge variant="neutral" className="hover:scale-105 transition-transform duration-200">Младший сержант</Badge>
                <Badge variant="neutral" className="hover:scale-105 transition-transform duration-200">Офицер запаса</Badge>
              </div>
            </CardContent>
          </Card>
        </FadeIn>
        <div className="flex flex-col gap-6 h-full">
          {/* Сроки отбора */}
          <FadeIn>
            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <h3 className="text-xl font-semibold flex items-center gap-2">
                  <Calendar className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  Сроки отбора
                </h3>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-2 p-2 rounded-lg">
                    <Clock className="w-4 h-4 text-blue-500" />
                    <span className="font-medium">Февраль-март</span>
                    <span className="text-gray">- начало отбора</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 rounded-lg">
                    <FileText className="w-4 h-4 text-green-500" />
                    <span className="font-medium">Апрель</span>
                    <span className="text-gray">- сбор документов</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 rounded-lg">
                    <Award className="w-4 h-4 text-purple-500" />
                    <span className="font-medium">Май</span>
                    <span className="text-gray">- физические нормативы</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 rounded-lg">
                    <Calendar className="w-4 h-4 text-orange-500" />
                    <span className="font-medium">Сентябрь</span>
                    <span className="text-gray">- поступление</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </FadeIn>

          {/* Фото поступления/отбора — занимает оставшееся место */}
          <FadeIn className="flex-1 min-h-0">
            <div className="flex-1 min-h-0 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
              <img
                src="/tim-guide/images/military-center/admission.jpg"
                alt="Поступление / Отбор"
                className="object-cover w-full h-full"
              />
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Важная информация и Контакты */}
      <div className="grid gap-6 lg:grid-cols-2 auto-rows-fr">
        <FadeIn className="h-full">
          <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
            <CardHeader>
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <AlertCircle className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                Важная информация
              </h3>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-gray leading-relaxed">
                Для получения актуальной информации рекомендуется проверять группу в Telegram по адресу{' '}
                <a 
                  href="https://t.me/vuc_rgay_official" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline font-medium hover:text-primary/80 transition-colors"
                >
                  https://t.me/vuc_rgay_official
                </a>
                , где размещаются все последние новости и обновления.
              </p>
              <div className="bg-yellow-50 p-4 rounded-lg hover:bg-yellow-100 transition-colors duration-300">
                <h4 className="font-semibold mb-2 text-yellow-800">Дополнительные документы</h4>
                <p className="text-sm text-yellow-700">
                  К данной информации прикреплены документы: таблица с нормативами, этапы прохождения отбора 
                  и шаблон автобиографии, которые содержат подробные данные 
                  по каждому из указанных этапов и помогут лучше подготовиться к процессу отбора.
                </p>
              </div>
            </CardContent>
          </Card>
        </FadeIn>
        <FadeIn className="h-full">
          <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
            <CardHeader>
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <MapPin className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                Контакты
              </h3>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center gap-3 hover:bg-gray-50 p-2 rounded-lg transition-colors duration-200">
                  <Phone className="w-4 h-4 text-gray-500" />
                  <div>
                    <p className="font-medium">Телефон</p>
                    <p className="text-sm text-gray">+7 (499) 976-37-28</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 hover:bg-gray-50 p-2 rounded-lg transition-colors duration-200">
                  <MapPin className="w-4 h-4 text-gray-500" />
                  <div>
                    <p className="font-medium">Адрес</p>
                    <p className="text-sm text-gray">Лиственничная аллея, 7, Москва</p>
                  </div>
                </div>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg hover:bg-blue-100 transition-colors duration-300">
                <h4 className="font-semibold mb-2 text-blue-800">Полезные ссылки</h4>
                <div className="space-y-2">
                  <a 
                    href="https://t.me/vuc_rgay_official" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-blue-600 hover:text-blue-800 text-sm hover:scale-105 transition-all duration-200"
                  >
                    <span>📱</span>
                    <span>Telegram канал ВУЦ</span>
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </FadeIn>
      </div>

      {/* Этапы поступления (аккордеон) */}
      <FadeIn>
        <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
          <CardHeader>
            <h3 className="text-xl font-semibold flex items-center gap-2">
              <FileText className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              Этапы поступления в ВУЦ
            </h3>
          </CardHeader>
          <CardContent>
            <Accordion className="w-full space-y-4">
              {/* Этап 1 */}
              <AccordionItem className="border rounded-xl overflow-hidden hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                <AccordionTrigger className="px-6 py-4 hover:bg-blue-50 transition-colors group">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <span className="text-blue-600 font-bold text-sm">1</span>
                    </div>
                    <span className="font-semibold text-left">I ЭТАП - В ВОЕННОМ УЧЕБНОМ ЦЕНТРЕ</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <div className="space-y-4">
                    <div className="bg-blue-50 p-4 rounded-lg hover:bg-blue-100 transition-colors duration-300">
                      <h5 className="font-semibold mb-3 text-blue-800 flex items-center gap-2">
                        <CheckCircle className="w-4 h-4" />
                        Действия студента:
                      </h5>
                      <ol className="space-y-2 text-sm list-decimal list-inside">
                        <li>Прибыть на беседу в установленное для каждого института время</li>
                        <li>Подать заявление (см. список необходимых документов ниже)</li>
                        <li>Получить направления на ВВК, профессиональный психологический отбор и диспансеры</li>
                      </ol>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg hover:bg-blue-100 transition-colors duration-300">
                      <h5 className="font-semibold mb-3 text-blue-800 flex items-center gap-2">
                        <CheckCircle className="w-4 h-4" />
                        Условия участия:
                      </h5>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2 p-1 rounded">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span>Гражданство РФ</span>
                        </li>
                        <li className="flex items-start gap-2 p-1 rounded">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span>Очная форма обучения</span>
                        </li>
                        <li className="flex items-start gap-2 p-1 rounded">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span>Возраст до 30 лет</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition-colors duration-300">
                      <h5 className="font-semibold mb-3 text-gray-800 flex items-center gap-2">
                        <FileText className="w-4 h-4" />
                        Необходимые документы:
                      </h5>
                      <div className="grid gap-2 text-sm">
                        <div className="flex items-start gap-2 p-1 rounded"><span className="font-bold">1.</span><span>Копия паспорта (на одном листе) – 1 стр. + регистрация</span></div>
                        <div className="flex items-start gap-2 p-1 rounded"><span className="font-bold">2.</span><span>Копия удостоверения гражданина, подлежащего призыву (приписное свидетельство) – 1-3 стр.</span></div>
                        <div className="flex items-start gap-2 p-1 rounded"><span className="font-bold">3.</span><span>Характеристика с дирекции института (с печатью)</span></div>
                        <div className="flex items-start gap-2 p-1 rounded"><span className="font-bold">4.</span><span>Копия зачетной книжки (все заполненные страницы) или выписка с оценками</span></div>
                        <div className="flex items-start gap-2 p-1 rounded"><span className="font-bold">5.</span><span>Копия студенческого билета</span></div>
                        <div className="flex items-start gap-2 p-1 rounded"><span className="font-bold">6.</span><span>Расписка о приеме заявления на выдачу справки о несудимости</span></div>
                        <div className="flex items-start gap-2 p-1 rounded"><span className="font-bold">7.</span><span>Фото 3×4 (матовые, цветные, без уголка) – 6&nbsp;шт.</span></div>
                        <div className="flex items-start gap-2 p-1 rounded"><span className="font-bold">8.</span><span>Фото 4×6 (матовые, цветные, без уголка) – 1&nbsp;шт.</span></div>
                        <div className="flex items-start gap-2 p-1 rounded"><span className="font-bold">9.</span><span>Фото 9×12 (только для программ офицеров запаса) – 1&nbsp;шт.</span></div>
                        <div className="flex items-start gap-2 p-1 rounded"><span className="font-bold">10.</span><span>Копия СНИЛС</span></div>
                        <div className="flex items-start gap-2 p-1 rounded"><span className="font-bold">11.</span><span>Копия ИНН</span></div>
                        <div className="flex items-start gap-2 p-1 rounded"><span className="font-bold">12.</span><span>Автобиография (синей ручкой, без исправлений, бланк на 1 листе с обеих сторон)</span></div>
                        <div className="flex items-start gap-2 p-1 rounded"><span className="font-bold">13.</span><span>Папка белая картонная с завязками и крыльями</span></div>
                        <div className="flex items-start gap-2 p-1 rounded"><span className="font-bold">14.</span><span>Конверт почтовый 110×220&nbsp;мм</span></div>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* Этап 2 */}
              <AccordionItem className="border rounded-xl overflow-hidden hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                <AccordionTrigger className="px-6 py-4 hover:bg-green-50 transition-colors group">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <span className="text-green-600 font-bold text-sm">2</span>
                    </div>
                    <span className="font-semibold text-left">II ЭТАП - МЕДИЦИНСКОЕ ОБСЛЕДОВАНИЕ</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <div className="space-y-4">
                    <div className="bg-green-50 p-4 rounded-lg hover:bg-green-100 transition-colors duration-300">
                      <h5 className="font-semibold mb-3 text-green-800 flex items-center gap-2">
                        <Stethoscope className="w-4 h-4" />
                        В ПОЛИКЛИНИКЕ:
                      </h5>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2 p-1 rounded">
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span>Получить выписку из амбулаторной карты</span>
                        </li>
                        <li className="flex items-start gap-2 p-1 rounded">
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span>Пройти диагностические исследования</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="bg-blue-50 p-4 rounded-lg hover:bg-blue-100 transition-colors duration-300">
                      <h5 className="font-semibold mb-3 text-blue-800">Диагностические исследования:</h5>
                      <div className="grid gap-2 text-sm">
                        <div className="p-1 rounded">• Флюорография легких в 2-х проекциях</div>
                        <div className="p-1 rounded">• Общий анализ крови</div>
                        <div className="p-1 rounded">• Общий анализ мочи</div>
                        <div className="p-1 rounded">• Исследование крови на ВИЧ</div>
                        <div className="p-1 rounded">• Исследование крови на гепатит В и С</div>
                        <div className="p-1 rounded">• Исследование крови на сифилис</div>
                        <div className="p-1 rounded">• ЭКГ в покое</div>
                      </div>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg hover:bg-green-100 transition-colors duration-300">
                      <h5 className="font-semibold mb-3 text-green-800">В ДИСПАНСЕРАХ (по прикреплению):</h5>
                      <p className="text-sm">
                        Пройти все диспансеры согласно направлению. При себе иметь паспорт, флюорографию, результаты анализа крови на гепатиты&nbsp;B и&nbsp;C, ВИЧ, сифилис!
                      </p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* Этап 3 */}
              <AccordionItem className="border rounded-xl overflow-hidden hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                <AccordionTrigger className="px-6 py-4 hover:bg-purple-50 transition-colors group">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <span className="text-purple-600 font-bold text-sm">3</span>
                    </div>
                    <span className="font-semibold text-left">III ЭТАП - ПРЕДОСТАВЛЕНИЕ РЕЗУЛЬТАТОВ</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <div className="space-y-4">
                    <div className="bg-purple-50 p-4 rounded-lg hover:bg-purple-100 transition-colors duration-300">
                      <h5 className="font-semibold mb-3 text-purple-800 flex items-center gap-2">
                        <ClipboardCheck className="w-4 h-4" />
                        В ВУЦ необходимо сдать:
                      </h5>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2 p-1 rounded">
                          <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span>Карту мед.освидетельствования с заключением ВВК</span>
                        </li>
                        <li className="flex items-start gap-2 p-1 rounded">
                          <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span>Результаты профессионального психологического отбора</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="bg-red-50 p-4 rounded-lg hover:bg-red-100 transition-colors duration-300">
                      <h5 className="font-semibold mb-3 text-red-800 flex items-center gap-2">
                        <AlertTriangle className="w-4 h-4" />
                        НЕ ДОПУСКАЮТСЯ К ОТБОРУ:
                      </h5>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2 p-1 rounded"><div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0"></div><span>Не явившиеся для прохождения мед. освидетельствования и/или профессионального отбора</span></li>
                        <li className="flex items-start gap-2 p-1 rounded"><div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0"></div><span>По результатам мед. освидетельствования признанные не годными, ограниченно годными или временно не годными к военной службе (категории В, Г, Д)</span></li>
                        <li className="flex items-start gap-2 p-1 rounded"><div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0"></div><span>Отнесенные к 4 категории профессиональной пригодности</span></li>
                        <li className="flex items-start gap-2 p-1 rounded"><div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0"></div><span>Своевременно не предоставившие в ВУЦ результаты мед. освидетельствования и/или проф. отбора</span></li>
                        <li className="flex items-start gap-2 p-1 rounded"><div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0"></div><span>Имеющие академические задолженности</span></li>
                      </ul>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* Этап 4 */}
              <AccordionItem className="border rounded-xl overflow-hidden hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                <AccordionTrigger className="px-6 py-4 hover:bg-orange-50 transition-colors group">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <span className="text-orange-600 font-bold text-sm">4</span>
                    </div>
                    <span className="font-semibold text-left">IV ЭТАП - ФИЗИЧЕСКИЕ НОРМАТИВЫ</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <div className="space-y-4">
                    <div className="bg-orange-50 p-4 rounded-lg hover:bg-orange-100 transition-colors duration-300">
                      <h5 className="font-semibold mb-3 text-orange-800 flex items-center gap-2">
                        <Award className="w-4 h-4" />
                        Нормативы для сдачи:
                      </h5>
                      <div className="grid gap-3 text-sm">
                        <div className="flex items-center gap-3 p-2 rounded">
                          <div className="w-8 h-8 bg-orange-200 rounded-full flex items-center justify-center">
                            <span className="text-orange-700 font-bold text-xs">1</span>
                          </div>
                          <span>Подтягивания на перекладине</span>
                        </div>
                        <div className="flex items-center gap-3 p-2 rounded">
                          <div className="w-8 h-8 bg-orange-200 rounded-full flex items-center justify-center">
                            <span className="text-orange-700 font-bold text-xs">2</span>
                          </div>
                          <span>Бег 100 м</span>
                        </div>
                        <div className="flex items-center gap-3 p-2 rounded">
                          <div className="w-8 h-8 bg-orange-200 rounded-full flex items-center justify-center">
                            <span className="text-orange-700 font-bold text-xs">3</span>
                          </div>
                          <span>Бег 3 км</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-blue-50 p-4 rounded-lg hover:bg-blue-100 transition-colors duration-300">
                      <h5 className="font-semibold mb-2 text-blue-800">Система оценки:</h5>
                      <p className="text-sm text-blue-700">
                        Общая оценка формируется из 200 баллов: 100 баллов за академические достижения 
                        и 100 баллов за результаты физических нормативов.
                      </p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>
      </FadeIn>

      {/* Документы */}
      <FadeIn>
        <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
          <CardHeader>
            <h3 className="text-xl font-semibold flex items-center gap-2">
              <FileText className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              Документы для скачивания
            </h3>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col h-full border rounded-lg p-4 hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                <div className="flex-1">
                  <h4 className="font-semibold mb-2">Нормативы физической подготовки</h4>
                  <p className="text-sm text-gray-600 mb-4">Таблица с нормативами по физической подготовке для поступающих в ВУЦ</p>
                </div>
                <a 
                  href="/tim-guide/documents/military-center/normativy.pdf" 
                  download
                  className="mt-auto inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
                >
                  <FileText className="w-4 h-4" />
                  Скачать PDF
                </a>
              </div>
              
              <div className="flex flex-col h-full border rounded-lg p-4 hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                <div className="flex-1">
                  <h4 className="font-semibold mb-2">Этапы отбора</h4>
                  <p className="text-sm text-gray-600 mb-4">Подробное описание всех этапов прохождения отбора в ВУЦ</p>
                </div>
                <a 
                  href="/tim-guide/documents/military-center/etapy-otbora.pdf" 
                  download
                  className="mt-auto inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
                >
                  <FileText className="w-4 h-4" />
                  Скачать PDF
                </a>
              </div>
              
              <div className="flex flex-col h-full border rounded-lg p-4 hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                <div className="flex-1">
                  <h4 className="font-semibold mb-2">Шаблон автобиографии</h4>
                  <p className="text-sm text-gray-600 mb-4">Бланк для заполнения автобиографии при поступлении в ВУЦ</p>
                </div>
                <a 
                  href="/tim-guide/documents/military-center/avtobiografiya-shablon.pdf" 
                  download
                  className="mt-auto inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
                >
                  <FileText className="w-4 h-4" />
                  Скачать PDF
                </a>
              </div>
            </div>
          </CardContent>
        </Card>
      </FadeIn>

      {/* Галерея фото */}
      <FadeIn>
        <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
          <CardHeader>
            <h3 className="text-xl font-semibold flex items-center gap-2">
              <Image className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              Галерея фотографий
            </h3>
          </CardHeader>
          <CardContent>
            <PhotoGallery
              photos={[
                { src: '/tim-guide/images/military-center/photo1.jpg', alt: 'Учебный процесс 1' },
                { src: '/tim-guide/images/military-center/photo2.jpg', alt: 'Учебный процесс 2' },
                { src: '/tim-guide/images/military-center/photo3.jpg', alt: 'Учебный процесс 3' },
                { src: '/tim-guide/images/military-center/photo4.jpg', alt: 'Учебный процесс 4' },
              ]}
            />
          </CardContent>
        </Card>
      </FadeIn>
    </div>
  );
} 