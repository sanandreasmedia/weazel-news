'use client';

import { useState } from 'react';

export default function SubmitTipPage() {
    const [submitted, setSubmitted] = useState(false);
    const [message, setMessage] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('TIP SUBMITTED:', message);
        setSubmitted(true);
    };

    return (
        <div className="container mx-auto px-4 py-20 max-w-2xl">
            <div className="text-center mb-12">
                <h1 className="text-5xl font-header font-black uppercase italic mb-4">Submit a Tip</h1>
                <p className="text-gray-500 font-medium">Have something our reporters should know? We maintain absolute confidentiality. We confirm what you suspect.</p>
            </div>

            {submitted ? (
                <div className="bg-surface-light border-2 border-black p-12 text-center">
                    <div className="w-16 h-16 bg-weazel-yellow rounded-full flex items-center justify-center mx-auto mb-6">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
                    </div>
                    <h2 className="text-2xl font-header font-black uppercase mb-2">Message Received</h2>
                    <p className="text-gray-500">Your tip has been forwarded to our investigative team. Thank you for making Los Santos safer (or more interesting).</p>
                    <button
                        onClick={() => setSubmitted(false)}
                        className="mt-8 bg-black text-white px-8 py-3 font-header font-black uppercase tracking-widest hover:bg-weazel-yellow hover:text-black transition-all"
                    >
                        Submit another tip
                    </button>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2">Alias / Name (Optional)</label>
                        <input
                            type="text"
                            placeholder="e.g. Concerned Citizen"
                            className="w-full bg-surface-light border-none px-4 py-4 focus:ring-2 focus:ring-weazel-yellow outline-none transition-all text-black font-medium"
                        />
                    </div>

                    <div>
                        <label className="block text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2">Your Message (Required)</label>
                        <textarea
                            required
                            rows={6}
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder="Describe what you saw, where it happened, and who was involved..."
                            className="w-full bg-surface-light border-none px-4 py-4 focus:ring-2 focus:ring-weazel-yellow outline-none transition-all text-black font-medium resize-none"
                        ></textarea>
                    </div>

                    <div className="bg-surface-dark text-white/60 p-4 text-[10px] font-bold uppercase tracking-tight">
                        * By clicking submit, you agree that Weazel News may investigate and broadcast your information. We do not reveal our sources to the LSPD unless mandated by a Vinewood judge (roughly 2% chance).
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-weazel-yellow text-black py-5 font-header font-black uppercase text-xl tracking-widest hover:bg-black hover:text-white transition-all shadow-lg"
                    >
                        Transmit Tip
                    </button>
                </form>
            )}
        </div>
    );
}
