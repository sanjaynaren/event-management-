import { Button } from "@/components/ui/button";
import { Calendar, Users, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Event Management Platform"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-primary opacity-20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Create Amazing{" "}
            <span className="bg-gradient-secondary bg-clip-text text-transparent">
              Events
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto leading-relaxed">
            Discover, create, and manage unforgettable events. Connect with your community 
            and make every moment count.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button variant="hero" size="lg" className="text-lg px-8 py-3">
              <Calendar className="h-5 w-5 mr-2" />
              Browse Events
            </Button>
            <Button variant="orange" size="lg" className="text-lg px-8 py-3">
              <Sparkles className="h-5 w-5 mr-2" />
              Create Event
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary mb-2">10,000+</div>
              <div className="text-gray-300">Events Created</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-glow mb-2">500K+</div>
              <div className="text-gray-300">Happy Attendees</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary mb-2">50+</div>
              <div className="text-gray-300">Cities Worldwide</div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-secondary/20 rounded-full blur-xl animate-pulse delay-700"></div>
      <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-primary-glow/30 rounded-full blur-lg animate-pulse delay-1000"></div>
    </section>
  );
};