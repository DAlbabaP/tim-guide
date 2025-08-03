import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { User, ExternalLink, MessageCircle } from "lucide-react";
import { SportOrg } from "@/data/sport-orgs";

interface SportOrgCardProps {
  sportOrg: SportOrg;
  className?: string;
}

export const SportOrgCard: React.FC<SportOrgCardProps> = ({ sportOrg, className }) => {
  const getContactIcon = () => {
    return sportOrg.contactType === 'vk' ? (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M15.07 8.93V6.6a5.4 5.4 0 0 0-1.24-3.54A4.03 4.03 0 0 0 10.8 2.4c-1.34 0-2.4.36-3.18 1.08-.78.72-1.17 1.68-1.17 2.88v2.37H4.8v2.4h1.65v8.4h2.4v-8.4h2.4l.42-2.4H8.85V6.6c0-.72.18-1.32.54-1.8.36-.48.84-.72 1.44-.72.6 0 1.08.24 1.44.72.36.48.54 1.08.54 1.8v2.33h2.4l-.42 2.4h-2.4v8.4h2.4v-8.4h1.65v-2.4h-1.65z"/>
      </svg>
    ) : (
      <MessageCircle className="w-4 h-4" />
    );
  };

  const getContactColor = () => {
    return sportOrg.contactType === 'vk' ? 'text-blue-600' : 'text-blue-500';
  };

  const getContactBgColor = () => {
    return sportOrg.contactType === 'vk' ? 'bg-blue-100 hover:bg-blue-200' : 'bg-blue-100 hover:bg-blue-200';
  };

  const getPositionColor = () => {
    if (sportOrg.position.includes('Спорторг Академии')) return 'bg-purple-100 text-purple-800';
    if (sportOrg.position.includes('Спорторг института')) return 'bg-primary/10 text-primary';
    if (sportOrg.position.includes('Спорторг колледжа')) return 'bg-orange-100 text-orange-800';
    return 'bg-gray-100 text-gray-800';
  };

  return (
    <Card className={`group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col ${className}`}>
      <CardHeader className="pb-4 flex-1">
        <div className="flex items-start gap-4">
          {/* Фото или заглушка */}
          <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
            {sportOrg.photo ? (
              <img 
                src={sportOrg.photo} 
                alt={sportOrg.fullName}
                className="w-16 h-16 rounded-full object-cover"
              />
            ) : (
              <User className="w-8 h-8 text-gray-400" />
            )}
          </div>
          
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-dark text-lg mb-1 group-hover:text-primary transition-colors">
              {sportOrg.fullName}
            </h3>
            <Badge className={`${getPositionColor()} text-xs font-medium mb-2`}>
              {sportOrg.position}
            </Badge>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="pt-0 mt-auto">
        <a 
          href={sportOrg.contactLink.startsWith('http') ? sportOrg.contactLink : `https://t.me/${sportOrg.contactLink.replace('@', '')}`}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center gap-2 px-3 py-2 rounded-full ${getContactBgColor()} ${getContactColor()} transition-colors text-sm font-medium`}
        >
          {getContactIcon()}
          <span className="truncate">
            {sportOrg.contactType === 'vk' ? 'ВКонтакте' : 'Telegram'}
          </span>
          <ExternalLink className="w-3 h-3" />
        </a>
      </CardContent>
    </Card>
  );
}; 