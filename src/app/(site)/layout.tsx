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

            <footer className="bg-fg text-white py-16 md:py-24 mt-20">
                <div className="container-weazel">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-16">
                        <div className="col-span-1 md:col-span-2">
                            <div className="flex items-center gap-1 text-2xl font-black tracking-tighter uppercase mb-8">
                                <span className="text-white">Weazel</span>
                                <span className="text-red">News</span>
                            </div>
                            <p className="text-white/40 text-[10px] font-bold uppercase tracking-[0.2em] max-w-sm mb-6 leading-relaxed">
                                LOS SANTOS FIRST SOURCE FOR NEWS. We confirm what you already suspect. Professional journalism focused on crime, politics, and the lifestyle of San Andreas.
                            </p>
                        </div>

                        <div>
                            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] mb-8 text-white/20">Network</h4>
                            <ul className="text-[10px] space-y-4 font-bold uppercase tracking-widest">
                                <li><a href="#" className="hover:text-red transition-colors">LS Daily</a></li>
                                <li><a href="#" className="hover:text-red transition-colors">Vinewood Gossip</a></li>
                                <li><a href="#" className="hover:text-red transition-colors">Blaine County Radio</a></li>
                                <li><a href="#" className="hover:text-red transition-colors">Public Radio</a></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] mb-8 text-white/20">Legal</h4>
                            <ul className="text-[10px] space-y-4 font-bold uppercase tracking-widest">
                                <li><a href="#" className="hover:text-red transition-colors">Impressum</a></li>
                                <li><a href="#" className="hover:text-red transition-colors">Privacy Policy</a></li>
                                <li><a href="#" className="hover:text-red transition-colors">Terms of Service</a></li>
                                <li><a href="#" className="hover:text-red transition-colors">Disclaimer</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center gap-8">
                        <p className="text-[9px] text-white/20 font-bold uppercase tracking-[0.4em]">
                            © {new Date().getFullYear()} Weazel News Network / Los Santos District
                        </p>
                        <div className="flex gap-8">
                            <div className="flex items-center gap-2 group cursor-pointer">
                                <span className="text-[9px] font-black uppercase tracking-[0.2em] text-white/20 group-hover:text-red transition-colors">Bleet</span>
                                <div className="w-1.5 h-1.5 bg-white/10 group-hover:bg-red rounded-full transition-colors" />
                            </div>
                            <div className="flex items-center gap-2 group cursor-pointer">
                                <span className="text-[9px] font-black uppercase tracking-[0.2em] text-white/20 group-hover:text-red transition-colors">Invader</span>
                                <div className="w-1.5 h-1.5 bg-white/10 group-hover:bg-red rounded-full transition-colors" />
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
