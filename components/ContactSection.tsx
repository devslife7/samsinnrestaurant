export function ContactSection() {
    return (
        <section id="contact" className="py-20 bg-zinc-50 border-t border-zinc-100">
            <div className="container mx-auto px-4 max-w-3xl">
                <h2 className="font-heading text-zinc-900 text-2xl md:text-4xl uppercase tracking-widest text-center mb-3">
                    CONTACT US
                </h2>
                <p className="text-zinc-500 text-center text-sm mb-12">
                    Questions, catering inquiries, or want to book a karaoke night? Drop us a message.
                </p>

                <form className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name */}
                    <div className="flex flex-col gap-1.5">
                        <label className="font-heading text-xs uppercase tracking-widest text-zinc-600">
                            Name
                        </label>
                        <input
                            type="text"
                            placeholder="Your name"
                            className="bg-white border border-zinc-200 px-4 py-3 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-zinc-400 transition-colors"
                        />
                    </div>

                    {/* Email */}
                    <div className="flex flex-col gap-1.5">
                        <label className="font-heading text-xs uppercase tracking-widest text-zinc-600">
                            Email
                        </label>
                        <input
                            type="email"
                            placeholder="your@email.com"
                            className="bg-white border border-zinc-200 px-4 py-3 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-zinc-400 transition-colors"
                        />
                    </div>

                    {/* Phone */}
                    <div className="flex flex-col gap-1.5">
                        <label className="font-heading text-xs uppercase tracking-widest text-zinc-600">
                            Phone <span className="text-zinc-400 normal-case font-sans">(optional)</span>
                        </label>
                        <input
                            type="tel"
                            placeholder="(555) 000-0000"
                            className="bg-white border border-zinc-200 px-4 py-3 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-zinc-400 transition-colors"
                        />
                    </div>

                    {/* Inquiry type */}
                    <div className="flex flex-col gap-1.5">
                        <label className="font-heading text-xs uppercase tracking-widest text-zinc-600">
                            Inquiry Type
                        </label>
                        <select className="bg-white border border-zinc-200 px-4 py-3 text-sm text-zinc-900 focus:outline-none focus:border-zinc-400 transition-colors appearance-none">
                            <option value="">Select a topic</option>
                            <option value="general">General Inquiry</option>
                            <option value="catering">Catering</option>
                            <option value="karaoke">Karaoke / Private Event</option>
                            <option value="reservation">Reservation</option>
                            <option value="other">Other</option>
                        </select>
                    </div>

                    {/* Message */}
                    <div className="flex flex-col gap-1.5 sm:col-span-2">
                        <label className="font-heading text-xs uppercase tracking-widest text-zinc-600">
                            Message
                        </label>
                        <textarea
                            rows={5}
                            placeholder="Tell us what you need…"
                            className="bg-white border border-zinc-200 px-4 py-3 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-zinc-400 transition-colors resize-none"
                        />
                    </div>

                    {/* Submit */}
                    <div className="sm:col-span-2">
                        <button
                            type="submit"
                            className="bg-brand-red hover:bg-red-dark text-white font-heading tracking-widest text-sm px-10 py-4 uppercase transition-colors w-full sm:w-auto"
                        >
                            SEND MESSAGE
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
}
