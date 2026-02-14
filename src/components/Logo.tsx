export default function Logo() {
    return (
        <div className="flex flex-col items-start leading-none group cursor-pointer">
            <span className="bg-black text-weazel-yellow px-2 py-1 font-header text-2xl font-black italic tracking-tighter uppercase transition-transform group-hover:skew-x-3">
                Weazel
            </span>
            <span className="bg-weazel-yellow text-black px-2 py-0.5 font-header text-lg font-bold tracking-tight uppercase">
                News
            </span>
        </div>
    );
}
