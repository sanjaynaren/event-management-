import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, MapPin, Clock, Users, Image as ImageIcon } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const categories = [
  "Conference", "Workshop", "Networking", "Social", "Educational", 
  "Sports", "Arts & Culture", "Technology", "Business", "Entertainment"
];

export const EventForm = ({ onClose }: { onClose?: () => void }) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    date: "",
    time: "",
    location: "",
    category: "",
    maxAttendees: "",
    image: "",
    price: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (!formData.title || !formData.date || !formData.time || !formData.location) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    // Here you would typically save to backend/database
    console.log("Event Data:", formData);
    
    toast({
      title: "Event Created Successfully!",
      description: "Your event has been created and is now live.",
    });

    // Reset form
    setFormData({
      title: "",
      description: "",
      date: "",
      time: "",
      location: "",
      category: "",
      maxAttendees: "",
      image: "",
      price: ""
    });

    if (onClose) onClose();
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Card className="w-full max-w-2xl mx-auto bg-gradient-card border-primary/20">
      <CardHeader className="text-center pb-6">
        <CardTitle className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
          Create New Event
        </CardTitle>
        <CardDescription>
          Fill in the details below to create your event
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="md:col-span-2">
              <Label htmlFor="title" className="text-sm font-semibold">Event Title *</Label>
              <Input
                id="title"
                value={formData.title}
                onChange={(e) => handleChange("title", e.target.value)}
                placeholder="Enter event title"
                className="mt-1 border-primary/20 focus:border-primary"
              />
            </div>
            
            <div className="md:col-span-2">
              <Label htmlFor="description" className="text-sm font-semibold">Description</Label>
              <Textarea
                id="description"
                value={formData.description}
                onChange={(e) => handleChange("description", e.target.value)}
                placeholder="Describe your event..."
                className="mt-1 min-h-[100px] border-primary/20 focus:border-primary"
              />
            </div>

            <div>
              <Label htmlFor="date" className="text-sm font-semibold flex items-center">
                <Calendar className="h-4 w-4 mr-1 text-primary" />
                Date *
              </Label>
              <Input
                id="date"
                type="date"
                value={formData.date}
                onChange={(e) => handleChange("date", e.target.value)}
                className="mt-1 border-primary/20 focus:border-primary"
              />
            </div>

            <div>
              <Label htmlFor="time" className="text-sm font-semibold flex items-center">
                <Clock className="h-4 w-4 mr-1 text-secondary" />
                Time *
              </Label>
              <Input
                id="time"
                type="time"
                value={formData.time}
                onChange={(e) => handleChange("time", e.target.value)}
                className="mt-1 border-primary/20 focus:border-primary"
              />
            </div>

            <div>
              <Label htmlFor="location" className="text-sm font-semibold flex items-center">
                <MapPin className="h-4 w-4 mr-1 text-secondary" />
                Location *
              </Label>
              <Input
                id="location"
                value={formData.location}
                onChange={(e) => handleChange("location", e.target.value)}
                placeholder="Event location"
                className="mt-1 border-primary/20 focus:border-primary"
              />
            </div>

            <div>
              <Label htmlFor="category" className="text-sm font-semibold">Category</Label>
              <Select onValueChange={(value) => handleChange("category", value)}>
                <SelectTrigger className="mt-1 border-primary/20 focus:border-primary">
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map(category => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="maxAttendees" className="text-sm font-semibold flex items-center">
                <Users className="h-4 w-4 mr-1 text-primary" />
                Max Attendees
              </Label>
              <Input
                id="maxAttendees"
                type="number"
                value={formData.maxAttendees}
                onChange={(e) => handleChange("maxAttendees", e.target.value)}
                placeholder="100"
                className="mt-1 border-primary/20 focus:border-primary"
              />
            </div>

            <div>
              <Label htmlFor="price" className="text-sm font-semibold">Price ($)</Label>
              <Input
                id="price"
                type="number"
                step="0.01"
                value={formData.price}
                onChange={(e) => handleChange("price", e.target.value)}
                placeholder="0.00 (Free)"
                className="mt-1 border-primary/20 focus:border-primary"
              />
            </div>

            <div className="md:col-span-2">
              <Label htmlFor="image" className="text-sm font-semibold flex items-center">
                <ImageIcon className="h-4 w-4 mr-1 text-secondary" />
                Event Image URL
              </Label>
              <Input
                id="image"
                value={formData.image}
                onChange={(e) => handleChange("image", e.target.value)}
                placeholder="https://example.com/image.jpg"
                className="mt-1 border-primary/20 focus:border-primary"
              />
            </div>
          </div>

          <div className="flex gap-4 pt-4">
            <Button type="submit" variant="hero" className="flex-1">
              Create Event
            </Button>
            {onClose && (
              <Button type="button" variant="outline" onClick={onClose} className="flex-1">
                Cancel
              </Button>
            )}
          </div>
        </form>
      </CardContent>
    </Card>
  );
};