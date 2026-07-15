export default function TopBanner() {
  return (
    <div className="w-full bg-[#0A1F44] text-white py-2.5 px-4 sm:px-8 flex items-center justify-center text-xs font-medium z-50 relative border-b border-white/10 shadow-md">
      <div className="flex items-center gap-2 text-[11px] sm:text-xs tracking-wide">
        <span className="text-white/80">Welcome to</span>
        <span className="text-[#FF1493] inline-block font-bold animate-pulse">✦</span>
        <span className="font-extrabold tracking-tight text-white bg-gradient-to-r from-[#FF1493] via-[#00B4FF] to-white bg-clip-text text-transparent">GoCreative</span>
        <span className="text-white/60">•</span>
        <span className="text-white/90 font-semibold">Vibrant, Tech-Inspired Creative & Growth Systems</span>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#FF1493] via-[#4B00B5] to-[#00B4FF] opacity-80" />
    </div>
  );
}
