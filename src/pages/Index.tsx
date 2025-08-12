import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { EventGrid } from "@/components/EventGrid";
import { Categories } from "@/components/Categories";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Categories />
      <EventGrid />
    </div>
  );
};

export default Index;
