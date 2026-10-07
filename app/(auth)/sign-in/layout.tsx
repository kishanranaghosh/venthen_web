export default function LoginLayout({ children }: any) {
  return (
    <div className="min-h-screen flex justify-center items-center bg-[#f7faf7] px-4 py-10">
      <div className="w-full max-w-md">
        <div className="flex items-center justify-center gap-2.5 mb-8">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#0fa3a3] text-base font-bold text-white">
            V
          </div>
          <span className="font-semibold text-[#1a2b2b] text-xl tracking-tight">Venthen</span>
        </div>
        {children}
      </div>
    </div>
  );
}
