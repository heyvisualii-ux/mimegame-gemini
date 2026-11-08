import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center space-y-4 p-6">
      <div className="text-5xl">🎭</div>
      <h2 className="text-2xl font-black text-amber-300">صفحه مورد نظر پیدا نشد</h2>
      <p className="text-sm text-slate-300">به نظر می‌رسد این صفحه در بازی پانتومیم وجود ندارد!</p>
      <Link
        href="/"
        className="px-6 py-2.5 rounded-2xl bg-amber-400 text-slate-950 font-black text-sm shadow-md hover:bg-amber-300 transition-all"
      >
        بازگشت به بازی
      </Link>
    </div>
  );
}
