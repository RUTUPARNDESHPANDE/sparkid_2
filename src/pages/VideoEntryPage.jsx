import React, { useEffect, useRef, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import entryVideo from '../Assets/entry-video/entry video.mp4';
import '../styles/videoEntry.css';

// Function to check if video entry should be disabled (after 5 PM on Dec 7, 2025)
const isVideoEntryDisabled = () => {
  const cutoffDate = new Date('2025-12-07T17:00:00'); // December 7, 2025 at 5:00 PM
  const currentDate = new Date();
  return currentDate >= cutoffDate;
};

const VideoEntryPage = () => {
  const videoRef = useRef(null);
  const navigate = useNavigate();

  // Check if video should be disabled and redirect if so
  useEffect(() => {
    if (isVideoEntryDisabled()) {
      navigate('/', { replace: true });
    }
  }, [navigate]);

  const handleVideoEnd = useCallback(() => {
    // Redirect to home page after video ends
    // Video will play again on next refresh until 5 PM on Dec 7, 2025
    navigate('/');
  }, [navigate]);

  const playVideo = useCallback(() => {
    const video = videoRef.current;
    if (video) {
      // Set volume to maximum for sound
      video.volume = 1.0;
      video.muted = false;
      
      // Try to play with sound
      const playPromise = video.play();
      
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            console.log('Video playing with sound');
          })
          .catch(error => {
            console.error('Error playing video with sound:', error);
            // If autoplay with sound fails, user can click to play
            console.log('User interaction may be required to play video');
          });
      }
    }
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    
    if (video) {
      // Set volume to maximum for sound
      video.volume = 1.0;
      video.muted = false;
      
      // Wait for video to be ready before playing
      const handleCanPlay = () => {
        console.log('Video can play');
        playVideo();
      };

      const handleLoadedData = () => {
        console.log('Video data loaded');
        playVideo();
      };

      const handleLoadedMetadata = () => {
        console.log('Video metadata loaded');
        playVideo();
      };

      // Handle click to play if autoplay fails
      const handleClick = () => {
        if (video.paused) {
          playVideo();
        }
      };

      // Add event listeners
      video.addEventListener('canplay', handleCanPlay);
      video.addEventListener('loadeddata', handleLoadedData);
      video.addEventListener('loadedmetadata', handleLoadedMetadata);
      video.addEventListener('ended', handleVideoEnd);
      video.addEventListener('click', handleClick);

      // Try to play when video is ready
      if (video.readyState >= 2) {
        playVideo();
      }

      // Also try after a short delay to ensure video is loaded
      const timeoutId = setTimeout(() => {
        if (video.readyState >= 2) {
          playVideo();
        }
      }, 100);

      return () => {
        clearTimeout(timeoutId);
        video.removeEventListener('canplay', handleCanPlay);
        video.removeEventListener('loadeddata', handleLoadedData);
        video.removeEventListener('loadedmetadata', handleLoadedMetadata);
        video.removeEventListener('ended', handleVideoEnd);
        video.removeEventListener('click', handleClick);
      };
    }
  }, [handleVideoEnd, playVideo]);

  const handleContainerClick = useCallback((e) => {
    const video = videoRef.current;
    if (video && video.paused && e.target === e.currentTarget) {
      playVideo();
    }
  }, [playVideo]);

  const handleVideoError = useCallback((e) => {
    console.error('Video error:', e);
    const video = e.target;
    if (video) {
      console.error('Video error details:', {
        error: video.error,
        networkState: video.networkState,
        readyState: video.readyState
      });
    }
  }, []);

  return (
    <div className="video-entry-container" onClick={handleContainerClick}>
      <video
        ref={videoRef}
        className="entry-video"
        src={entryVideo}
        autoPlay
        playsInline
        preload="auto"
        onError={handleVideoError}
        onLoadStart={() => console.log('Video load started')}
        onLoadedData={() => console.log('Video data loaded')}
      />
    </div>
  );
};

export default VideoEntryPage;

