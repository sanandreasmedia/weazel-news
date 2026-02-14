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

            <footer className="bg-black text-white py-12 mt-20">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
                        <div className="col-span-1 md:col-span-2">
                            <div className="flex flex-col items-start leading-none mb-6">
                                <span className="bg-white text-black px-2 py-1 font-header text-xl font-black italic tracking-tighter uppercase">
                                    Weazel
                                </span>
                                <span className="bg-weazel-yellow text-black px-2 py-0.5 font-header text-sm font-bold tracking-tight uppercase">
                                    News
                                </span>
                            </div>
                            <p className="text-gray-400 text-sm max-w-sm mb-6">
                                LOS SANTOS FIRST SOURCE FOR NEWS. We confirm what you already suspect. Professional journalism focused on crime, politics, and the lifestyle of San Andreas.
                            </p>
                        </div>

                        <div>
                            <h4 className="font-header font-bold uppercase mb-4 text-weazel-yellow">Network</h4>
                            <ul className="text-sm text-gray-400 space-y-2 font-medium">
                                <li><a href="#" className="hover:text-white transition-colors">LS Daily</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Vinewood Gossip</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Blaine County Radio</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Public Radio</a></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-header font-bold uppercase mb-4 text-weazel-yellow">Legal</h4>
                            <ul className="text-sm text-gray-400 space-y-2 font-medium">
                                <li><a href="#" className="hover:text-white transition-colors">Impressum</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Disclaimer</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">
                            © {new Date().getFullYear()} Weazel News Network. All rights reserved. Part of San Andreas Media Group.
                        </p>
                        <div className="flex gap-4">
                            {/* Simple Social Icons */}
                            <div className="w-6 h-6 bg-white/10 rounded-full flex items-center justify-center hover:bg-weazel-yellow transition-colors cursor-pointer">
                                <div className="w-3 h-3 bg-black rounded-sm" />
                            </div>
                            <div className="w-6 h-6 bg-white/10 rounded-full flex items-center justify-center hover:bg-weazel-yellow transition-colors cursor-pointer">
                                <div className="w-3 h-3 bg-black rounded-sm" />
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
