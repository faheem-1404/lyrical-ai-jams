import { useState } from "react";
import { toast } from "@/hooks/use-toast";
import HeroSection from "@/components/HeroSection";
import MoodInput from "@/components/MoodInput";
import PlaylistDisplay from "@/components/PlaylistDisplay";
import { generateMockPlaylist } from "@/data/mockData";

const Index = () => {
  const [currentPlaylist, setCurrentPlaylist] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showInput, setShowInput] = useState(false);

  const handleMoodSubmit = async (mood: string) => {
    setLoading(true);
    setShowInput(true);
    
    // Simulate AI processing
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    try {
      const playlist = generateMockPlaylist(mood);
      setCurrentPlaylist(playlist);
      toast({
        title: "Playlist Generated! 🎵",
        description: `Created "${playlist.name}" based on your mood`,
      });
    } catch (error) {
      toast({
        title: "Oops! Something went wrong",
        description: "Please try again with a different mood description",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const handleGetStarted = () => {
    setShowInput(true);
    // Scroll to input section
    setTimeout(() => {
      document.getElementById('mood-input')?.scrollIntoView({ 
        behavior: 'smooth',
        block: 'center'
      });
    }, 100);
  };

  return (
    <div className="min-h-screen">
      {!showInput && (
        <div onClick={handleGetStarted}>
          <HeroSection />
        </div>
      )}
      
      {showInput && (
        <div className="min-h-screen py-12">
          <div className="container mx-auto px-6 space-y-12">
            <div id="mood-input">
              <MoodInput onMoodSubmit={handleMoodSubmit} />
            </div>
            
            <PlaylistDisplay playlist={currentPlaylist} loading={loading} />
            
            {currentPlaylist && !loading && (
              <div className="text-center">
                <p className="text-muted-foreground mb-4">
                  Want a different vibe? Try another mood!
                </p>
                <MoodInput onMoodSubmit={handleMoodSubmit} />
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;
