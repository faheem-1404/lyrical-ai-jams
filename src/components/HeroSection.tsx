import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Music, Sparkles, Brain, Zap } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-hero" />
      
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <div className="mb-8">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="p-3 rounded-full bg-primary/20 backdrop-blur-sm music-glow">
              <Brain className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold">
              <span className="gradient-text">AI Playlist</span>
              <br />
              <span className="text-foreground">Generator</span>
            </h1>
            <div className="p-3 rounded-full bg-accent/20 backdrop-blur-sm music-glow">
              <Music className="w-8 h-8 text-accent" />
            </div>
          </div>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Turn your mood into music. Describe how you feel and let AI create the perfect
            <span className="text-accent font-semibold"> Spotify playlist </span>
            for any moment.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
          <Card className="playlist-card p-6 text-center">
            <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold mb-2">Describe Your Mood</h3>
            <p className="text-sm text-muted-foreground">
              Use natural language to express how you're feeling
            </p>
          </Card>
          
          <Card className="playlist-card p-6 text-center">
            <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-accent/20 flex items-center justify-center">
              <Brain className="w-6 h-6 text-accent" />
            </div>
            <h3 className="font-semibold mb-2">AI Magic</h3>
            <p className="text-sm text-muted-foreground">
              Gemini AI interprets your mood and finds matching music
            </p>
          </Card>
          
          <Card className="playlist-card p-6 text-center">
            <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
              <Zap className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold mb-2">Instant Playlists</h3>
            <p className="text-sm text-muted-foreground">
              Get curated Spotify playlists in seconds
            </p>
          </Card>
        </div>

        <Button variant="hero" className="gap-3">
          <Sparkles className="w-5 h-5" />
          Get Started - It's Free
          <Music className="w-5 h-5" />
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;