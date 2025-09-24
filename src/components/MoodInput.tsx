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
    "Chill evening vibes",
    "High-energy workout",
    "Focus & study mode",
    "Road trip adventure",
    "Rainy day comfort",
    "Party time"
  ];

  return (
    <Card className="playlist-card p-6 max-w-2xl mx-auto">
      <div className="text-center mb-6">
        <div className="flex items-center justify-center gap-2 mb-3">
          <Sparkles className="w-6 h-6 text-primary" />
          <h2 className="text-2xl font-bold gradient-text">Describe Your Mood</h2>
          <Music className="w-6 h-6 text-accent" />
        </div>
        <p className="text-muted-foreground">
          Tell AI how you're feeling and get the perfect playlist instantly
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="relative">
          <Input
            value={mood}
            onChange={(e) => setMood(e.target.value)}
            placeholder="e.g., relaxing Sunday morning, energetic gym session, late night study..."
            className="pr-12 h-12 text-base"
          />
          <Button
            type="submit"
            variant="ghost"
            size="icon"
            className="absolute right-1 top-1 h-10 w-10"
            disabled={!mood.trim()}
          >
            <Send className="w-4 h-4" />
          </Button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-6">
          {quickMoods.map((quickMood) => (
            <Button
              key={quickMood}
              type="button"
              variant="music"
              size="sm"
              onClick={() => setMood(quickMood)}
              className="text-xs h-8"
            >
              {quickMood}
            </Button>
          ))}
        </div>
      </form>
    </Card>
  );
};

export default MoodInput;