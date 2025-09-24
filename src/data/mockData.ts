export const mockPlaylists = {
  "chill evening": {
    id: "1",
    name: "Chill Evening Vibes",
    description: "Perfect soundtrack for a relaxing evening at home",
    mood: "Chill Evening",
    totalDuration: "1h 23min",
    tracks: [
      {
        id: "1",
        name: "Weightless",
        artist: "Marconi Union",
        album: "Weightless",
        duration: "8:10",
        image: "/placeholder.svg",
        spotifyUrl: "https://open.spotify.com/track/example"
      },
      {
        id: "2", 
        name: "River",
        artist: "Leon Bridges",
        album: "Coming Home",
        duration: "4:12",
        image: "/placeholder.svg"
      },
      {
        id: "3",
        name: "Holocene", 
        artist: "Bon Iver",
        album: "Bon Iver, Bon Iver",
        duration: "5:36",
        image: "/placeholder.svg"
      },
      {
        id: "4",
        name: "Mad World",
        artist: "Gary Jules",
        album: "Trading Snakeoil for Wolftickets",
        duration: "3:07",
        image: "/placeholder.svg"
      },
      {
        id: "5",
        name: "The Night We Met",
        artist: "Lord Huron", 
        album: "Strange Trails",
        duration: "3:28",
        image: "/placeholder.svg"
      },
      {
        id: "6",
        name: "Skinny Love",
        artist: "Bon Iver",
        album: "For Emma, Forever Ago", 
        duration: "3:58",
        image: "/placeholder.svg"
      }
    ]
  },
  "workout": {
    id: "2", 
    name: "High-Energy Workout",
    description: "Pump up your energy with these high-intensity tracks",
    mood: "High Energy",
    totalDuration: "58min",
    tracks: [
      {
        id: "7",
        name: "Till I Collapse",
        artist: "Eminem",
        album: "The Eminem Show",
        duration: "4:57",
        image: "/placeholder.svg"
      },
      {
        id: "8",
        name: "Thunderstruck", 
        artist: "AC/DC",
        album: "The Razors Edge",
        duration: "4:53",
        image: "/placeholder.svg"
      },
      {
        id: "9",
        name: "Eye of the Tiger",
        artist: "Survivor",
        album: "Rocky III Soundtrack",
        duration: "4:05",
        image: "/placeholder.svg"
      },
      {
        id: "10",
        name: "Pump It",
        artist: "The Black Eyed Peas",
        album: "Monkey Business", 
        duration: "3:33",
        image: "/placeholder.svg"
      },
      {
        id: "11",
        name: "Lose Yourself",
        artist: "Eminem",
        album: "8 Mile Soundtrack",
        duration: "5:26",
        image: "/placeholder.svg"
      }
    ]
  }
};

export const generateMockPlaylist = (mood: string) => {
  const lowerMood = mood.toLowerCase();
  
  if (lowerMood.includes('chill') || lowerMood.includes('relax') || lowerMood.includes('evening')) {
    return mockPlaylists["chill evening"];
  }
  
  if (lowerMood.includes('workout') || lowerMood.includes('energy') || lowerMood.includes('gym')) {
    return mockPlaylists["workout"];
  }
  
  // Default to chill evening
  return {
    ...mockPlaylists["chill evening"],
    name: `${mood} Playlist`,
    description: `AI-curated tracks matching your "${mood}" mood`,
    mood: mood
  };
};