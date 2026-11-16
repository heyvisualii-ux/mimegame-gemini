import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center space-y-4 p-6 bg-white rounded-[28px] border border-slate-900/[0.06] shadow-[0_8px_28px_rgba(15,23,42,0.05)] my-6">
      <div className="text-5xl">🎭</div>
      <h2 className="text-2xl font-black text-slate-900">صفحه مورد نظر پیدا نشد</h2>
      <p className="text-sm text-slate-600">به نظر می‌رسد این صفحه در بازی پانتومیم وجود ندارد!</p>
      <Link
        href="/"
        className="px-6 py-3 rounded-2xl bg-[#0B0D12] text-white font-black text-sm shadow-md hover:bg-slate-800 transition-all"
      >
        بازگشت به بازی
      </Link>
    </div>
  );
}
