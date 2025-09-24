import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Music, Sparkles, Play, Heart, Zap } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <div className="min-h-screen hero-glow flex items-center justify-center relative overflow-hidden">
      {/* Background Image with Enhanced Overlay */}
      <div 
        className="absolute inset-0 opacity-20 floating-animation"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(1px) contrast(1.2)',
        }}
      />
      
      {/* Multi-layer Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/90 to-background/40" />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      
      {/* Floating Elements */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/10 rounded-full blur-xl floating-animation" />
      <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-accent/10 rounded-full blur-xl floating-animation" style={{ animationDelay: '2s' }} />
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-5xl mx-auto space-y-12 animate-fade-in">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full glass-effect text-sm font-medium mb-8">
              <Sparkles className="w-4 h-4 text-primary animate-pulse" />
              <span>Powered by Advanced AI</span>
              <Music className="w-4 h-4 text-accent" />
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black gradient-text leading-[0.9] tracking-tight">
              AI Playlist
              <br />
              <span className="text-5xl md:text-7xl">Generator</span>
            </h1>
            <p className="text-xl md:text-3xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light">
              Transform your <span className="text-accent font-semibold">mood</span> into the perfect playlist with 
              <span className="gradient-text font-semibold"> AI-powered</span> music curation
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              size="lg" 
              variant="hero"
              className="text-xl px-12 py-8 gap-4 rounded-2xl"
            >
              <Sparkles className="w-7 h-7" />
              Generate My Playlist
            </Button>
            <Button 
              size="lg" 
              variant="premium"
              className="text-xl px-12 py-8 gap-4 rounded-2xl"
            >
              <Music className="w-7 h-7" />
              Explore Moods
            </Button>
          </div>
          
          <div className="pt-12">
            <div className="flex justify-center gap-12 text-muted-foreground/80 mb-8">
              <div className="flex flex-col items-center gap-3 group cursor-pointer">
                <div className="p-4 rounded-full glass-effect group-hover:scale-110 transition-transform duration-300">
                  <Play className="w-6 h-6 text-primary" />
                </div>
                <span className="text-sm font-medium">Instant Playback</span>
              </div>
              <div className="flex flex-col items-center gap-3 group cursor-pointer">
                <div className="p-4 rounded-full glass-effect group-hover:scale-110 transition-transform duration-300">
                  <Heart className="w-6 h-6 text-accent" />
                </div>
                <span className="text-sm font-medium">Save Favorites</span>
              </div>
              <div className="flex flex-col items-center gap-3 group cursor-pointer">
                <div className="p-4 rounded-full glass-effect group-hover:scale-110 transition-transform duration-300 pulse-glow">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <span className="text-sm font-medium">AI Powered</span>
              </div>
            </div>
            
            <p className="text-sm text-muted-foreground/50 font-medium tracking-wider">
              CONNECTED TO SPOTIFY • MILLIONS OF TRACKS
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;