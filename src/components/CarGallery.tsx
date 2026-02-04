import { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight, ZoomIn, Play, Pause, Volume2, VolumeX } from 'lucide-react';

interface GalleryItem {
  type: 'image' | 'video';
  src: string;
}

interface CarGalleryProps {
  images: string[];
  video?: string;
  carName: string;
}

const CarGallery = ({ images, video, carName }: CarGalleryProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Combine video (if exists) with images
  const galleryItems: GalleryItem[] = [
    ...(video ? [{ type: 'video' as const, src: video }] : []),
    ...images.map(img => ({ type: 'image' as const, src: img })),
  ];

  const currentItem = galleryItems[activeIndex];

  const goToPrevious = () => {
    setActiveIndex(prev => (prev === 0 ? galleryItems.length - 1 : prev - 1));
    setIsPlaying(false);
  };

  const goToNext = () => {
    setActiveIndex(prev => (prev === galleryItems.length - 1 ? 0 : prev + 1));
    setIsPlaying(false);
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="space-y-4">
      {/* Main Display */}
      <div className="relative group overflow-hidden rounded-lg bg-card aspect-[16/10]">
        {currentItem.type === 'video' ? (
          <>
            <video
              ref={videoRef}
              src={currentItem.src}
              className="w-full h-full object-cover"
              loop
              muted={isMuted}
              playsInline
              onClick={togglePlay}
            />
            
            {/* Video Controls */}
            <div className="absolute bottom-4 right-4 flex gap-2 z-10">
              <button
                onClick={togglePlay}
                className="w-10 h-10 bg-background/80 backdrop-blur-sm rounded-full flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                {isPlaying ? <Pause size={18} /> : <Play size={18} />}
              </button>
              <button
                onClick={toggleMute}
                className="w-10 h-10 bg-background/80 backdrop-blur-sm rounded-full flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
              </button>
            </div>

            {/* Play Overlay when paused */}
            {!isPlaying && (
              <div 
                className="absolute inset-0 flex items-center justify-center bg-background/20 cursor-pointer"
                onClick={togglePlay}
              >
                <div className="w-20 h-20 bg-primary/90 rounded-full flex items-center justify-center text-primary-foreground shadow-lg hover:scale-110 transition-transform duration-300">
                  <Play size={32} className="ml-1" />
                </div>
              </div>
            )}

            {/* Video Badge */}
            <div className="absolute top-4 left-4 bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-sm">
              Vídeo
            </div>
          </>
        ) : (
          <>
            <img
              src={currentItem.src}
              alt={`${carName} - Imagem ${activeIndex + 1}`}
              className={`w-full h-full object-cover transition-transform duration-700 ${
                isZoomed ? 'scale-150 cursor-zoom-out' : 'cursor-zoom-in'
              }`}
              onClick={() => setIsZoomed(!isZoomed)}
            />

            {/* Zoom Indicator */}
            <div className="absolute top-4 right-4 w-10 h-10 bg-background/80 backdrop-blur-sm rounded-full flex items-center justify-center text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <ZoomIn size={18} />
            </div>
          </>
        )}

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent pointer-events-none" />

        {/* Navigation Arrows */}
        <button
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-background/80 backdrop-blur-sm rounded-full flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 opacity-0 group-hover:opacity-100 z-20"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-background/80 backdrop-blur-sm rounded-full flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 opacity-0 group-hover:opacity-100 z-20"
        >
          <ChevronRight size={24} />
        </button>

        {/* Counter */}
        <div className="absolute bottom-4 left-4 bg-background/80 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-medium text-foreground z-10">
          {activeIndex + 1} / {galleryItems.length}
        </div>
      </div>

      {/* Thumbnails */}
      <div className="flex gap-3 overflow-x-auto pb-2">
        {galleryItems.map((item, index) => (
          <button
            key={index}
            onClick={() => {
              setActiveIndex(index);
              setIsPlaying(false);
            }}
            className={`relative flex-shrink-0 w-20 h-16 md:w-24 md:h-18 rounded-lg overflow-hidden transition-all duration-300 ${
              index === activeIndex
                ? 'ring-2 ring-primary ring-offset-2 ring-offset-background'
                : 'opacity-60 hover:opacity-100'
            }`}
          >
            {item.type === 'video' ? (
              <>
                <video
                  src={item.src}
                  className="w-full h-full object-cover"
                  muted
                />
                <div className="absolute inset-0 flex items-center justify-center bg-background/30">
                  <Play size={16} className="text-foreground" />
                </div>
              </>
            ) : (
              <img
                src={item.src}
                alt={`${carName} thumbnail ${index + 1}`}
                className="w-full h-full object-cover"
              />
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CarGallery;
