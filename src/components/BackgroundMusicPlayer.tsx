import React, { useEffect, useState, useRef } from "react";
import { Music, Volume2, VolumeX, Play, Pause, ExternalLink, RotateCcw } from "lucide-react";

interface YTPlayer {
  playVideo: () => void;
  pauseVideo: () => void;
  seekTo: (seconds: number, allowSeekAhead?: boolean) => void;
  setVolume: (volume: number) => void;
  getVolume: () => number;
  getPlayerState: () => number;
}

declare global {
  interface Window {
    onYouTubeIframeAPIReady?: () => void;
    YT?: {
      Player: new (
        elementId: string | HTMLElement,
        options: {
          videoId: string;
          playerVars?: Record<string, unknown>;
          events?: {
            onReady?: (event: { target: YTPlayer }) => void;
            onStateChange?: (event: { data: number; target: YTPlayer }) => void;
          };
        }
      ) => YTPlayer;
      PlayerState?: {
        PLAYING: number;
        PAUSED: number;
        ENDED: number;
      };
    };
  }
}

export const BackgroundMusicPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [volume, setVolume] = useState<number>(50);
  const [isPlayerReady, setIsPlayerReady] = useState<boolean>(false);
  const [showControls, setShowControls] = useState<boolean>(false);

  const playerRef = useRef<YTPlayer | null>(null);
  const containerId = "yt-bgm-container";

  // Load YouTube IFrame API
  useEffect(() => {
    if (!document.getElementById("yt-iframe-api")) {
      const tag = document.createElement("script");
      tag.id = "yt-iframe-api";
      tag.src = "https://www.youtube.com/iframe_api";
      const firstScriptTag = document.getElementsByTagName("script")[0];
      firstScriptTag?.parentNode?.insertBefore(tag, firstScriptTag);
    }

    const initPlayer = () => {
      if (!window.YT || !window.YT.Player) return;

      playerRef.current = new window.YT.Player(containerId, {
        videoId: "SmqeO5mj0ec",
        playerVars: {
          autoplay: 0,
          start: 0,
          loop: 1,
          playlist: "SmqeO5mj0ec",
          controls: 0,
          showinfo: 0,
          rel: 0,
          modestbranding: 1,
          playsinline: 1,
          enablejsapi: 1,
          origin: window.location.origin,
        },
        events: {
          onReady: (event) => {
            event.target.setVolume(50);
            event.target.seekTo(0, true);
            setIsPlayerReady(true);
          },
          onStateChange: (event) => {
            if (window.YT && window.YT.PlayerState) {
              if (event.data === window.YT.PlayerState.PLAYING) {
                setIsPlaying(true);
              } else if (
                event.data === window.YT.PlayerState.PAUSED ||
                event.data === window.YT.PlayerState.ENDED
              ) {
                setIsPlaying(false);
              }
            }
          },
        },
      });
    };

    if (window.YT && window.YT.Player) {
      initPlayer();
    } else {
      window.onYouTubeIframeAPIReady = initPlayer;
    }
  }, []);

  const togglePlay = () => {
    if (!playerRef.current || !isPlayerReady) return;

    if (isPlaying) {
      playerRef.current.pauseVideo();
      setIsPlaying(false);
    } else {
      playerRef.current.playVideo();
      setIsPlaying(true);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseInt(e.target.value, 10);
    setVolume(val);
    if (playerRef.current && isPlayerReady) {
      playerRef.current.setVolume(val);
    }
  };

  const restartSong = () => {
    if (playerRef.current && isPlayerReady) {
      playerRef.current.seekTo(0, true);
      playerRef.current.playVideo();
      setIsPlaying(true);
    }
  };

  return (
    <>
      {/* Hidden YouTube IFrame Audio Host */}
      <div className="fixed -top-[9999px] -left-[9999px] w-1 h-1 opacity-0 pointer-events-none overflow-hidden">
        <div id={containerId} />
      </div>

      {/* Floating Ultra-Compact BGM Widget (Bottom Left, Non-Obstructive) */}
      <aside aria-label="Background music" className="fixed bottom-4 left-4 sm:bottom-6 sm:left-6 z-40 select-none">
        <div className="relative group">
          {/* Main Capsule */}
          <div
            className={`p-1.5 sm:p-2 rounded-full bg-[#191D19]/90 backdrop-blur-xl border border-[#30372D] shadow-2xl flex items-center gap-2 transition-all duration-300 hover:border-[#C5FF42]/60 ${
              isPlaying ? "ring-1 ring-[#C5FF42]/40" : ""
            }`}
          >
            {/* Play/Pause Button */}
            <button
              onClick={togglePlay}
              className={`w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center transition-all duration-200 cursor-pointer ${
                isPlaying
                  ? "bg-[#C5FF42] text-[#101210] shadow-md shadow-[#C5FF42]/30"
                  : "bg-[#101210] text-[#92978B] hover:text-[#EAE9DC] hover:bg-[#232923]"
              }`}
              title={isPlaying ? "Pause Background Music" : "Play 'In The Dark' (50% Volume)"}
              aria-label="Toggle Background Music"
            >
              {isPlaying ? (
                <Pause className="w-3.5 h-3.5 fill-current" />
              ) : (
                <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
              )}
            </button>

            {/* Song Meta & Animated Equalizer (Hidden on tiny mobile screens to avoid overlap) */}
            <div
              onClick={() => setShowControls(!showControls)}
              className="hidden sm:flex items-center gap-2.5 pr-2.5 cursor-pointer"
            >
              <div className="text-left">
                <div className="text-[11px] font-mono font-semibold text-[#EAE9DC] flex items-center gap-1.5 leading-none">
                  <span>In The Dark</span>
                  <span className="text-[9px] px-1 py-0.2 rounded bg-[#101210] text-[#C5FF42] border border-[#30372D]">
                    50%
                  </span>
                </div>
                <div className="text-[10px] font-mono text-[#92978B] leading-tight mt-0.5">
                  Swae Lee feat. Jhené Aiko
                </div>
              </div>

              {/* Animated Sound Wave Equalizer Bars */}
              <div className="flex items-end gap-0.5 h-3.5 w-3.5">
                <span
                  className={`w-0.5 bg-[#C5FF42] rounded-full transition-all duration-150 ${
                    isPlaying ? "h-3 animate-pulse" : "h-1 opacity-40"
                  }`}
                  style={{ animationDuration: "0.6s" }}
                />
                <span
                  className={`w-0.5 bg-[#C5FF42] rounded-full transition-all duration-150 ${
                    isPlaying ? "h-3.5 animate-pulse" : "h-1.5 opacity-40"
                  }`}
                  style={{ animationDuration: "0.4s", animationDelay: "0.2s" }}
                />
                <span
                  className={`w-0.5 bg-[#C5FF42] rounded-full transition-all duration-150 ${
                    isPlaying ? "h-2 animate-pulse" : "h-1 opacity-40"
                  }`}
                  style={{ animationDuration: "0.7s", animationDelay: "0.1s" }}
                />
              </div>
            </div>
          </div>

          {/* Expanded Volume & Controls Popover */}
          {showControls && (
            <div className="absolute bottom-full left-0 mb-3 p-4 w-60 rounded-2xl bg-[#191D19]/95 backdrop-blur-xl border border-[#30372D] shadow-2xl space-y-3 animate-in fade-in slide-in-from-bottom-2 duration-200">
              <div className="flex items-center justify-between pb-2 border-b border-[#30372D]">
                <div className="flex items-center gap-2 text-xs font-mono text-[#C5FF42]">
                  <Music className="w-3.5 h-3.5" />
                  <span>Now Playing</span>
                </div>
                <span className="text-[10px] font-mono text-[#92978B]">{volume}%</span>
              </div>

              <div>
                <div className="text-xs font-bold text-[#EAE9DC]">In The Dark</div>
                <div className="text-[11px] text-[#92978B] font-mono">
                  Swae Lee feat. Jhené Aiko
                </div>
              </div>

              <div className="flex items-center justify-between gap-2 pt-1">
                <button
                  onClick={restartSong}
                  className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#101210] hover:bg-[#C5FF42] text-[#92978B] hover:text-[#101210] text-[10px] font-mono transition-colors cursor-pointer border border-[#30372D]"
                  title="Restart song from 0:00"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>Restart 0:00</span>
                </button>
              </div>

              {/* Volume Slider */}
              <div className="space-y-1 pt-1">
                <div className="flex items-center justify-between text-[10px] font-mono text-[#92978B]">
                  <span>Volume</span>
                  <span>{volume}%</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={volume}
                  onChange={handleVolumeChange}
                  className="w-full h-1 bg-[#101210] rounded-lg appearance-none cursor-pointer accent-[#C5FF42]"
                />
              </div>

              {/* Credit & YouTube Link */}
              <div className="pt-2 border-t border-[#30372D] flex items-center justify-between text-[10px] font-mono text-[#92978B]">
                <span>Official Track</span>
                <a
                  href="https://youtu.be/SmqeO5mj0ec?list=RDSmqeO5mj0ec"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#C5FF42] hover:underline flex items-center gap-1"
                >
                  <span>YouTube</span>
                  <ExternalLink className="w-2.5 h-2.5" />
                </a>
              </div>
            </div>
          )}
        </div>
      </aside>
    </>
  );
};
