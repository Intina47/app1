// path:components/heroComponents/videoPlayer.jsx

const VideoPlayer = ({src}) => (
  <video
    src={src}
    alt="hero"
    className="w-full sm:h-[500px] h-[340px] object-cover rounded-tl-[40px] rounded-bl-[40px] z-10 relative"
    autoPlay
    muted
    loop
    playsInline
    style={{ filter: 'blur(0px)', animationDuration: '5s' }}
  />
);

export default VideoPlayer;
