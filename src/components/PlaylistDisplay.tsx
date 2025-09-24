import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, Heart, ExternalLink, Clock } from "lucide-react";

interface Track {
  id: string;
  name: string;
  artist: string;
  album: string;
  duration: string;
  image: string;
  spotifyUrl?: string;
}

interface Playlist {
  id: string;
  name: string;
  description: string;
  tracks: Track[];
  totalDuration: string;
  mood: string;
}

interface PlaylistDisplayProps {
  playlist: Playlist | null;
  loading: boolean;
}

const PlaylistDisplay = ({ playlist, loading }: PlaylistDisplayProps) => {
  if (loading) {
    return (
      <div className="max-w-4xl mx-auto">
        <Card className="playlist-card p-6">
          <div className="animate-pulse space-y-4">
            <div className="h-8 bg-muted rounded w-3/4"></div>
            <div className="h-4 bg-muted rounded w-1/2"></div>
            <div className="space-y-3 mt-6">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="flex items-center space-x-4">
                  <div className="h-12 w-12 bg-muted rounded"></div>
                  <div className="flex-1 space-y-2">
                    <div className="h-4 bg-muted rounded w-3/4"></div>
                    <div className="h-3 bg-muted rounded w-1/2"></div>
                  </div>
                  <div className="h-4 bg-muted rounded w-12"></div>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </div>
    );
  }

  if (!playlist) {
    return null;
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Playlist Header */}
      <Card className="playlist-card p-6">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h2 className="text-2xl font-bold mb-2">{playlist.name}</h2>
            <p className="text-muted-foreground mb-3">{playlist.description}</p>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {playlist.totalDuration}
              </div>
              <Badge variant="secondary">{playlist.tracks.length} tracks</Badge>
              <Badge variant="outline">{playlist.mood}</Badge>
            </div>
          </div>
          <div className="flex gap-2">
            <Button variant="hero" className="gap-2">
              <Play className="w-4 h-4" />
              Play All
            </Button>
            <Button variant="music" size="icon">
              <Heart className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </Card>

      {/* Track List */}
      <Card className="playlist-card p-6">
        <h3 className="text-lg font-semibold mb-4">Tracks</h3>
        <div className="space-y-3">
          {playlist.tracks.map((track, index) => (
            <div
              key={track.id}
              className="flex items-center gap-4 p-3 rounded-lg hover:bg-muted/50 transition-colors group"
            >
              <div className="flex-shrink-0 relative">
                <img
                  src={track.image}
                  alt={`${track.album} cover`}
                  className="w-12 h-12 rounded object-cover album-hover"
                />
                <Button
                  variant="player"
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-black/60"
                >
                  <Play className="w-4 h-4" />
                </Button>
              </div>
              
              <div className="flex-1 min-w-0">
                <h4 className="font-medium truncate">{track.name}</h4>
                <p className="text-sm text-muted-foreground truncate">
                  {track.artist} • {track.album}
                </p>
              </div>
              
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground min-w-12">
                  {track.duration}
                </span>
                {track.spotifyUrl && (
                  <Button
                    variant="ghost"
                    size="icon"
                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                    asChild
                  >
                    <a href={track.spotifyUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </Button>
                )}
                <Button
                  variant="ghost"
                  size="icon"
                  className="opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <Heart className="w-4 h-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default PlaylistDisplay;