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
        <div className="max-container py-20 max-w-2xl">
            <div className="text-center mb-16">
                <h1 className="editorial-headline text-5xl md:text-7xl text-fg mb-6">Submit a Tip</h1>
                <p className="text-muted font-serif text-lg leading-relaxed">
                    Have information our reporters should know? We maintain absolute confidentiality. Every lead is verified manually by our investigative team.
                </p>
            </div>

            {submitted ? (
                <div className="border border-fg p-12 text-center">
                    <div className="w-12 h-12 bg-red/10 text-red rounded-full flex items-center justify-center mx-auto mb-6">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
                    </div>
                    <h2 className="text-xl font-bold uppercase tracking-widest mb-4">Transmission Received</h2>
                    <p className="text-muted font-serif mb-8">Your information has been forwarded to our newsroom. Thank you for your courage.</p>
                    <button
                        onClick={() => setSubmitted(false)}
                        className="text-[10px] font-bold uppercase tracking-[0.3em] border border-fg px-8 py-4 hover:bg-fg hover:text-white transition-all"
                    >
                        Send another report
                    </button>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="space-y-10">
                    <div>
                        <label className="block text-[10px] font-bold uppercase tracking-widest text-muted mb-3">Alias (Optional)</label>
                        <input
                            type="text"
                            placeholder="Concerned Citizen"
                            className="w-full bg-transparent border-b border-border py-4 focus:border-red outline-none transition-all text-fg font-medium"
                        />
                    </div>

                    <div>
                        <label className="block text-[10px] font-bold uppercase tracking-widest text-muted mb-3">Narrative (Required)</label>
                        <textarea
                            required
                            rows={6}
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder="Describe the events..."
                            className="w-full bg-transparent border border-border px-6 py-6 focus:border-red outline-none transition-all text-fg font-medium resize-none font-serif"
                        ></textarea>
                    </div>

                    <div className="text-[10px] font-bold uppercase tracking-wider text-muted/60 leading-relaxed italic">
                        * Information is broadcast at our discretion. We protect our sources from the LSPD unless under federal subpoena.
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-fg text-white py-6 font-bold uppercase text-xs tracking-[0.4em] hover:bg-red transition-all"
                    >
                        Transmit Lead
                    </button>
                </form>
            )}
        </div>
    );
}
