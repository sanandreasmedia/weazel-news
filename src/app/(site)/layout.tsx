import Header from "@/components/Header";
import BreakingTicker from "@/components/BreakingTicker";

export default function SiteLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen flex flex-col bg-white">
            <Header />
            <BreakingTicker />
            <main className="flex-grow">
                {children}
            </main>

            <footer className="bg-fg text-white py-16 mt-20">
                <div className="max-container">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                        <div className="col-span-1 md:col-span-2">
                            <div className="flex items-center gap-1 font-header text-2xl font-black tracking-tighter uppercase mb-6">
                                <span className="text-white">Weazel</span>
                                <span className="text-red">News</span>
                            </div>
                            <p className="text-muted text-sm max-w-sm mb-6 font-serif">
                                LOS SANTOS FIRST SOURCE FOR NEWS. We confirm what you already suspect. Professional journalism focused on crime, politics, and the lifestyle of San Andreas.
                            </p>
                        </div>

                        <div>
                            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] mb-6 text-white/40">Network</h4>
                            <ul className="text-xs space-y-3 font-bold uppercase tracking-widest">
                                <li><a href="#" className="hover:text-red transition-colors">LS Daily</a></li>
                                <li><a href="#" className="hover:text-red transition-colors">Vinewood Gossip</a></li>
                                <li><a href="#" className="hover:text-red transition-colors">Blaine County Radio</a></li>
                                <li><a href="#" className="hover:text-red transition-colors">Public Radio</a></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] mb-6 text-white/40">Legal</h4>
                            <ul className="text-xs space-y-3 font-bold uppercase tracking-widest">
                                <li><a href="#" className="hover:text-red transition-colors">Impressum</a></li>
                                <li><a href="#" className="hover:text-red transition-colors">Privacy Policy</a></li>
                                <li><a href="#" className="hover:text-red transition-colors">Terms of Service</a></li>
                                <li><a href="#" className="hover:text-red transition-colors">Disclaimer</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
                        <p className="text-[10px] text-white/30 font-bold uppercase tracking-[0.2em]">
                            © {new Date().getFullYear()} Weazel News Network. All rights reserved.
                        </p>
                        <div className="flex gap-6">
                            <div className="w-5 h-5 border border-white/20 rounded-full flex items-center justify-center hover:border-red transition-colors cursor-pointer group">
                                <div className="w-1.5 h-1.5 bg-white/20 group-hover:bg-red rounded-full" />
                            </div>
                            <div className="w-5 h-5 border border-white/20 rounded-full flex items-center justify-center hover:border-red transition-colors cursor-pointer group">
                                <div className="w-1.5 h-1.5 bg-white/20 group-hover:bg-red rounded-full" />
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
