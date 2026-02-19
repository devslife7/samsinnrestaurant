import Link from "next/link";
import { MapPin, Clock } from "lucide-react";
import { Facebook, Instagram } from "lucide-react";

interface HoursEntry {
    days: string;
    open: string;
    close: string;
}

interface HoursTableProps {
    hours: HoursEntry[];
    address: string;
    social: { facebook: boolean; instagram: boolean };
}

export function HoursTable({ hours, address, social }: HoursTableProps) {
    return (
        <section id="contact" className="py-20 bg-white border-t border-zinc-100">
            <div className="container mx-auto px-4">
                <h2 className="font-heading text-zinc-900 text-2xl md:text-4xl uppercase tracking-widest text-center mb-12">
                    FIND US
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">

                    {/* Hours */}
                    <div>
                        <div className="flex items-center gap-3 mb-6">
                            <Clock className="text-zinc-500 w-5 h-5 flex-shrink-0" />
                            <h3 className="font-heading text-zinc-900 text-lg uppercase tracking-wide">
                                Hours
                            </h3>
                        </div>
                        <table className="w-full">
                            <tbody>
                                {hours.map((entry) => (
                                    <tr key={entry.days} className="border-b border-zinc-100">
                                        <td className="py-3 text-zinc-900 font-heading uppercase text-xs tracking-wide">
                                            {entry.days}
                                        </td>
                                        <td className="py-3 text-zinc-500 text-sm text-right">
                                            {entry.open} – {entry.close}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Location */}
                    <div>
                        <div className="flex items-center gap-3 mb-6">
                            <MapPin className="text-zinc-500 w-5 h-5 flex-shrink-0" />
                            <h3 className="font-heading text-zinc-900 text-lg uppercase tracking-wide">
                                Location
                            </h3>
                        </div>
                        <div className="space-y-2 mb-6">
                            <p className="text-zinc-700 text-sm">{address}</p>
                            <p className="text-zinc-400 text-xs italic">
                                Located inside Quantico Marine Corps Base
                            </p>
                        </div>

                        {/* Map placeholder */}
                        <div className="h-36 bg-zinc-100 border border-zinc-200 flex items-center justify-center mb-6">
                            <div className="flex items-center gap-2 text-zinc-400">
                                <MapPin className="w-4 h-4" />
                                <span className="font-heading text-xs uppercase tracking-wide">
                                    Google Maps
                                </span>
                            </div>
                        </div>

                        {/* Social icons */}
                        <div className="flex gap-4">
                            {social.facebook && (
                                <Link
                                    href="#"
                                    className="text-zinc-600 hover:text-brand-red transition-colors"
                                    aria-label="Facebook"
                                >
                                    <Facebook size={22} />
                                </Link>
                            )}
                            {social.instagram && (
                                <Link
                                    href="#"
                                    className="text-zinc-600 hover:text-brand-red transition-colors"
                                    aria-label="Instagram"
                                >
                                    <Instagram size={22} />
                                </Link>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
