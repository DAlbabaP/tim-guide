import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import FadeIn from "@/components/ui/fade-in";
import { Trophy, Users, Building, MessageCircle, Quote, Crown } from "lucide-react";
import { SportOrgCard } from "@/components/sports/sport-org-card";
import { getSportOrgsByInstitute, getUniqueInstitutes } from "@/data/sport-orgs";

export const metadata = { 
  title: "Спорторги институтов",
  description: "Спортивные организаторы институтов РГАУ-МСХА. Контакты и информация о спорторгах всех институтов и колледжей."
};

export default function SportOrgsPage() {
  const sportOrgsByInstitute = getSportOrgsByInstitute();
  const uniqueInstitutes = getUniqueInstitutes();

  // Находим спорторга академии
  const academySportOrg = Object.values(sportOrgsByInstitute)
    .flat()
    .find(org => org.position.includes('Спорторг Академии'));

  return (
    <div className="container mx-auto px-4 py-12 space-y-12">
      {/* Заголовок */}
      <header className="space-y-4">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
            <Trophy className="w-8 h-8 text-primary" />
          </div>
          <div>
            <h1 className="font-heading text-4xl md:text-5xl text-dark">Спорторги институтов</h1>
            <p className="text-gray text-lg mt-2">Спортивные организаторы всех институтов и колледжей РГАУ-МСХА</p>
          </div>
        </div>
      </header>

      {/* Спорторг Академии - отдельный блок */}
      {academySportOrg && (
        <FadeIn>
          <div className="space-y-6">
            {/* Заголовок академии */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-100 to-purple-200 flex items-center justify-center">
                <Crown className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h2 className="font-heading text-2xl md:text-3xl text-dark">Спорторг Академии</h2>
                <p className="text-gray">Главный спортивный организатор университета</p>
              </div>
            </div>

            {/* Карточка спорторга академии и цитата */}
            <div className="grid gap-6 lg:grid-cols-2">
              <SportOrgCard sportOrg={academySportOrg} />
              
              {/* Место для цитаты */}
              <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 border-purple-200">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                      <Quote className="w-6 h-6 text-purple-600" />
                    </div>
                    <div className="flex-1">
                      <blockquote className="text-gray italic text-lg leading-relaxed">
                        "Спорт объединяет студентов всех институтов и создает дух командной работы, который так важен в нашем университете."
                      </blockquote>
                      <cite className="block mt-3 text-purple-600 font-medium">
                        — {academySportOrg.fullName}, {academySportOrg.position}
                      </cite>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </FadeIn>
      )}

      {/* Спорторги институтов */}
      <div className="space-y-12">
        {Object.entries(sportOrgsByInstitute).map(([institute, sportOrgs], index) => {
          // Пропускаем академию, так как она уже отображена выше
          if (institute.includes('Академия')) {
            return null;
          }
          
          return (
            <FadeIn key={institute} className={`delay-${Math.min(index * 100, 500)}`}>
              <div className="space-y-6">
                {/* Заголовок института */}
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/10 to-primary/20 flex items-center justify-center">
                    <Building className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h2 className="font-heading text-2xl md:text-3xl text-dark">{institute}</h2>
                    <p className="text-gray">
                      {sportOrgs.length} {sportOrgs.length === 1 ? 'спортивный организатор' : 
                      sportOrgs.length < 5 ? 'спортивных организатора' : 'спортивных организаторов'}
                    </p>
                  </div>
                </div>

                {/* Карточки спорторгов - делаем шире */}
                <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                  {sportOrgs.map((sportOrg, sportOrgIndex) => (
                    <SportOrgCard 
                      key={sportOrg.id} 
                      sportOrg={sportOrg}
                      className={`delay-${Math.min(sportOrgIndex * 50, 300)}`}
                    />
                  ))}
                </div>
              </div>
            </FadeIn>
          );
        })}
      </div>
    </div>
  );
} 