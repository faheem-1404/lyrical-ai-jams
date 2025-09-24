import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Sparkles, Music, Send } from "lucide-react";

interface MoodInputProps {
  onMoodSubmit: (mood: string) => void;
}

const MoodInput = ({ onMoodSubmit }: MoodInputProps) => {
  const [mood, setMood] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (mood.trim()) {
      onMoodSubmit(mood.trim());
    }
  };

  const quickMoods = [
    "Cozy evening vibes",
    "Beast mode workout", 
    "Deep focus flow",
    "Road trip anthem",
    "Rainy day comfort",
    "Party night energy",
    "Sunset meditation",
    "Creative coding session",
    "Morning motivation"
  ];

  return (
    <Card className="playlist-card p-8 max-w-3xl mx-auto">
      <div className="text-center mb-8">
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="p-3 rounded-full glass-effect">
            <Sparkles className="w-8 h-8 text-primary pulse-glow" />
          </div>
          <h2 className="text-3xl font-black gradient-text">Describe Your Mood</h2>
          <div className="p-3 rounded-full glass-effect">
            <Music className="w-8 h-8 text-accent" />
          </div>
        </div>
        <p className="text-lg text-muted-foreground font-medium">
          Tell our AI how you're feeling and get the <span className="text-accent font-bold">perfect playlist</span> instantly
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="relative group">
          <Input
            value={mood}
            onChange={(e) => setMood(e.target.value)}
            placeholder="e.g., cozy rainy afternoon, intense workout motivation, late night creative flow..."
            className="pr-16 h-16 text-lg rounded-xl border-2 border-border focus:border-primary/50 bg-muted/30 backdrop-blur-sm transition-all duration-300 group-hover:shadow-lg"
          />
          <Button
            type="submit"
            variant="music"
            size="icon"
            className="absolute right-2 top-2 h-12 w-12 rounded-xl"
            disabled={!mood.trim()}
          >
            <Send className="w-6 h-6" />
          </Button>
        </div>

        <div className="space-y-4">
          <p className="text-sm text-muted-foreground font-medium text-center">
            Or try one of these popular moods:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {quickMoods.map((quickMood) => (
              <Button
                key={quickMood}
                type="button"
                variant="music"
                size="sm"
                onClick={() => setMood(quickMood)}
                className="text-sm h-12 rounded-xl font-medium hover:scale-105 transition-all duration-300"
              >
                {quickMood}
              </Button>
            ))}
          </div>
        </div>
      </form>
    </Card>
  );
};

export default MoodInput;