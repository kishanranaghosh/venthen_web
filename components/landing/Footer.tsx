"use client";

const footerNav = {
  Product: ["Features", "Students", "Faculty", "Attendance", "AI"],
  Company: ["About", "Security", "Contact"],
  Resources: ["Documentation", "Support", "Privacy", "Terms"],
};

export function Footer() {
  return (
    <footer className="border-t border-zinc-800/50 bg-[#080808]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <a href="#" className="flex items-center gap-2.5 font-semibold text-white text-lg tracking-tight mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-orange-500 to-amber-500 text-xs font-bold text-white">
                V
              </div>
              Venthen
            </a>
            <p className="text-sm text-zinc-500 leading-relaxed max-w-xs">
              Intelligent infrastructure for modern campuses. Attendance,
              academics, and campus workflows — connected in one platform.
            </p>
          </div>

          {/* Nav columns */}
          {Object.entries(footerNav).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-4">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-zinc-800/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-zinc-600">
            &copy; 2026 Venthen. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="/privacy" className="text-xs text-zinc-600 hover:text-zinc-400 transition-colors">
              Privacy Policy
            </a>
            <a href="/terms" className="text-xs text-zinc-600 hover:text-zinc-400 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
