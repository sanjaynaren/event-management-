import { useParams } from "react-router-dom";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Users, Clock, DollarSign, Heart, Share2 } from "lucide-react";
import { sampleEvents } from "@/data/sampleEvents";
import { useToast } from "@/hooks/use-toast";

const EventDetails = () => {
  const { id } = useParams();
  const { toast } = useToast();
  
  // Find the event by ID
  const event = sampleEvents.find(e => e.id === id);
  
  if (!event) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl font-bold text-primary mb-4">Event Not Found</h1>
          <p className="text-xl text-muted-foreground mb-8">The event you're looking for doesn't exist.</p>
          <Button variant="hero" onClick={() => window.location.href = "/"}>
            Back to Events
          </Button>
        </div>
      </div>
    );
  }

  const spotsLeft = event.maxAttendees - event.attendees;
  const isAlmostFull = spotsLeft <= 10;
  const isFull = spotsLeft <= 0;

  const handleRegister = () => {
    if (isFull) {
      toast({
        title: "Event is Full",
        description: "This event has reached maximum capacity.",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Registration Successful!",
      description: "You've been registered for this event. Check your email for confirmation.",
    });
  };

  const handleFavorite = () => {
    toast({
      title: "Added to Favorites",
      description: "This event has been saved to your favorites.",
    });
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    toast({
      title: "Link Copied",
      description: "Event link has been copied to clipboard.",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="relative rounded-2xl overflow-hidden mb-8">
          <img 
            src={event.image} 
            alt={event.title}
            className="w-full h-96 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
          <div className="absolute bottom-6 left-6 text-white">
            <Badge className="mb-2 bg-primary text-primary-foreground">
              {event.category}
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-2">{event.title}</h1>
          </div>
          <div className="absolute top-6 right-6 flex gap-2">
            <Button
              variant="secondary"
              size="icon"
              onClick={handleFavorite}
              className="bg-white/90 hover:bg-white"
            >
              <Heart className="h-4 w-4" />
            </Button>
            <Button
              variant="secondary"
              size="icon"
              onClick={handleShare}
              className="bg-white/90 hover:bg-white"
            >
              <Share2 className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <Card className="mb-6 bg-gradient-card border-primary/20">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">About This Event</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {event.description}
                </p>
                
                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-center space-x-3">
                    <Calendar className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-semibold">Date</p>
                      <p className="text-muted-foreground">{event.date}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-secondary" />
                    <div>
                      <p className="font-semibold">Time</p>
                      <p className="text-muted-foreground">{event.time}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-secondary" />
                    <div>
                      <p className="font-semibold">Location</p>
                      <p className="text-muted-foreground">{event.location}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <DollarSign className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-semibold">Price</p>
                      <p className="text-muted-foreground">
                        {event.price === 0 ? "Free" : `$${event.price}`}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Additional Event Info */}
            <Card className="bg-gradient-card border-primary/20">
              <CardHeader>
                <CardTitle className="text-xl text-primary">What to Expect</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Networking opportunities with industry professionals
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Interactive sessions and hands-on workshops
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Light refreshments and lunch provided
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Digital certificate of participation
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24 bg-gradient-card border-primary/20 shadow-card">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl bg-gradient-primary bg-clip-text text-transparent">
                  Registration
                </CardTitle>
                <CardDescription>
                  Secure your spot at this amazing event
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Attendance Info */}
                <div className="text-center">
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    <Users className="h-5 w-5 text-primary" />
                    <span className="text-lg font-semibold">
                      {event.attendees} / {event.maxAttendees}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">people attending</p>
                  
                  {isAlmostFull && !isFull && (
                    <Badge variant="destructive" className="mt-2">
                      Only {spotsLeft} spots left!
                    </Badge>
                  )}
                  
                  {isFull && (
                    <Badge variant="destructive" className="mt-2">
                      Event Full
                    </Badge>
                  )}
                </div>

                {/* Price */}
                <div className="text-center py-4 border border-primary/20 rounded-lg bg-gradient-to-r from-primary/5 to-secondary/5">
                  <p className="text-sm text-muted-foreground">Price</p>
                  <p className="text-3xl font-bold text-primary">
                    {event.price === 0 ? "Free" : `$${event.price}`}
                  </p>
                </div>

                {/* Register Button */}
                <Button 
                  variant={isFull ? "outline" : "hero"} 
                  className="w-full text-lg py-3"
                  onClick={handleRegister}
                  disabled={isFull}
                >
                  {isFull ? "Event Full" : "Register Now"}
                </Button>

                {/* Contact Info */}
                <div className="pt-4 border-t border-primary/20">
                  <p className="text-sm text-muted-foreground text-center">
                    Questions? Contact the organizer
                  </p>
                  <Button variant="ghost" className="w-full mt-2">
                    Send Message
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;