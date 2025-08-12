import { Calendar, MapPin, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface EventCardProps {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  image: string;
  category: string;
  attendees: number;
  maxAttendees: number;
  price?: number;
}

export const EventCard = ({ 
  id, 
  title, 
  description, 
  date, 
  time, 
  location, 
  image, 
  category, 
  attendees, 
  maxAttendees,
  price 
}: EventCardProps) => {
  const spotsLeft = maxAttendees - attendees;
  
  return (
    <Card className="group overflow-hidden bg-gradient-card border-primary/10 hover:border-primary/30 transform hover:scale-105 hover:shadow-card transition-smooth cursor-pointer">
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-48 object-cover transition-smooth group-hover:scale-110"
        />
        <div className="absolute top-3 left-3">
          <Badge className="bg-primary text-primary-foreground">{category}</Badge>
        </div>
        {price && (
          <div className="absolute top-3 right-3">
            <Badge variant="secondary" className="bg-secondary text-secondary-foreground font-semibold">
              ${price}
            </Badge>
          </div>
        )}
      </div>
      
      <CardHeader className="pb-2">
        <div className="flex items-start justify-between">
          <CardTitle className="text-lg font-bold text-primary group-hover:text-primary-glow transition-smooth line-clamp-2">
            {title}
          </CardTitle>
        </div>
        <CardDescription className="text-sm text-muted-foreground line-clamp-2">
          {description}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="pb-2">
        <div className="space-y-2">
          <div className="flex items-center text-sm text-muted-foreground">
            <Calendar className="h-4 w-4 mr-2 text-primary" />
            {date} at {time}
          </div>
          <div className="flex items-center text-sm text-muted-foreground">
            <MapPin className="h-4 w-4 mr-2 text-secondary" />
            {location}
          </div>
          <div className="flex items-center text-sm text-muted-foreground">
            <Users className="h-4 w-4 mr-2 text-primary" />
            {attendees}/{maxAttendees} attendees
            {spotsLeft <= 5 && spotsLeft > 0 && (
              <Badge variant="destructive" className="ml-2 text-xs">
                Only {spotsLeft} spots left!
              </Badge>
            )}
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="pt-2">
        <Button 
          variant="event" 
          className="w-full"
          onClick={() => window.location.href = `/event/${id}`}
        >
          View Details
        </Button>
      </CardFooter>
    </Card>
  );
};