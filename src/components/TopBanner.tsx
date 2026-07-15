export default function TopBanner() {
  return (
    <div className="w-full bg-[#0D0D0D] text-white py-2 px-4 sm:px-8 flex items-center justify-between text-xs font-medium z-50">
      <div className="flex items-center gap-1.5 text-[11px] sm:text-xs tracking-wide">
        <span className="text-white/80">Powered by</span>
        <span className="text-white inline-block">✦</span>
        <span className="font-bold tracking-tight text-white">Fieldtrip</span>
      </div>
    </div>
  );
}
