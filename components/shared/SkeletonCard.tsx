export default function SkeletonCard() {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 animate-pulse">
      <div className="aspect-[16/10] bg-slate-200" />
      <div className="p-6 space-y-4">
        <div className="h-3 bg-slate-200 rounded w-1/4" />
        <div className="space-y-2">
          <div className="h-5 bg-slate-200 rounded w-full" />
          <div className="h-5 bg-slate-200 rounded w-3/4" />
        </div>
        <div className="h-4 bg-slate-200 rounded w-1/2" />
        <div className="pt-2 h-4 bg-slate-200 rounded w-1/3" />
      </div>
    </div>
  );
}
