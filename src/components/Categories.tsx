import { Badge } from "@/components/ui/badge";
import { Laptop, Palette, Users, Briefcase, GraduationCap, Music, Calendar, Gamepad2 } from "lucide-react";

const categories = [
  { name: "Technology", icon: Laptop, color: "bg-gradient-primary" },
  { name: "Arts & Culture", icon: Palette, color: "bg-gradient-secondary" },
  { name: "Networking", icon: Users, color: "bg-gradient-primary" },
  { name: "Business", icon: Briefcase, color: "bg-gradient-secondary" },
  { name: "Educational", icon: GraduationCap, color: "bg-gradient-primary" },
  { name: "Entertainment", icon: Music, color: "bg-gradient-secondary" },
  { name: "Conference", icon: Calendar, color: "bg-gradient-primary" },
  { name: "Sports", icon: Gamepad2, color: "bg-gradient-secondary" },
];

export const Categories = () => {
  return (
    <section className="py-16 bg-event-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
            Browse by Category
          </h2>
          <p className="text-lg text-muted-foreground">
            Find events that match your interests and passions
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <div
                key={category.name}
                className="group cursor-pointer text-center p-6 rounded-xl bg-gradient-card border border-primary/10 hover:border-primary/30 transform hover:scale-105 transition-smooth hover:shadow-card"
              >
                <div className={`w-12 h-12 mx-auto mb-3 rounded-full ${category.color} flex items-center justify-center group-hover:scale-110 transition-smooth shadow-primary`}>
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold text-sm text-primary group-hover:text-primary-glow transition-smooth">
                  {category.name}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};