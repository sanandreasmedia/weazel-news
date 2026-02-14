import { SpotlightItem, mockSpotlight } from '@/lib/mockSpotlight';

export default function SpotlightSection() {
    return (
        <section className="mb-16">
            <div className="flex items-center gap-4 mb-8">
                <h2 className="text-3xl font-header font-black italic uppercase italic leading-none">In the Spotlight</h2>
                <div className="flex-grow h-px bg-gray-200"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {mockSpotlight.map((item) => (
                    <div
                        key={item.id}
                        className="group relative bg-white border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow flex flex-col"
                    >
                        <div className="relative h-48 overflow-hidden">
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div
                                className="absolute top-4 left-4 text-[10px] font-black uppercase tracking-widest px-2 py-1 text-white"
                                style={{ backgroundColor: item.accent }}
                            >
                                {item.subtitle}
                            </div>
                        </div>

                        <div className="p-6 flex flex-col flex-grow">
                            <h3 className="text-xl font-header font-black uppercase mb-3 leading-tight group-hover:text-weazel-yellow-dark transition-colors">
                                {item.title}
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed mb-6">
                                {item.description}
                            </p>
                            <button
                                className="mt-auto text-[10px] font-black uppercase tracking-widest border-b-2 border-black inline-block self-start pb-0.5 hover:border-weazel-yellow transition-colors"
                                style={{ borderBottomColor: item.accent }}
                            >
                                Read More
                            </button>
                        </div>

                        {/* Color Accent bar at very bottom */}
                        <div className="h-1.5 w-full" style={{ backgroundColor: item.accent }}></div>
                    </div>
                ))}
            </div>
        </section>
    );
}
