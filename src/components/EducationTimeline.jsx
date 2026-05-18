// src/components/EducationTimeline.jsx

function TimelineItem({ item, isLatest }) {
    return (
        <div className="relative pl-6 md:pl-10">
            {/* Timeline Node indicator dot with Ripple Logic */}
            <div className="absolute -left-[6.5px] top-1.5">
                {isLatest ? (
                    // Active Ripple Effect for the latest item
                    <span className="relative flex h-3 w-3">
                        {/* The expanding ripple ring */}
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary/60 opacity-75"></span>
                        {/* The solid core dot */}
                        <span className="relative inline-flex rounded-full h-3 w-3 border-2 border-primary bg-background"></span>
                    </span>
                ) : (
                    // Static dot for older items
                    <div className="h-3 w-3 rounded-full border border-border bg-muted shadow-sm" />
                )}
            </div>

            <div className="space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <h3 className="text-xl font-bold tracking-tight text-foreground">
                        {item.institution}
                    </h3>
                    <span
                        className={`text-xs font-semibold px-2.5 py-0.5 rounded-full max-w-fit ${
                            isLatest
                                ? "bg-primary/10 text-primary"
                                : "bg-muted text-muted-foreground"
                        }`}
                    >
                        {item.duration}
                    </span>
                </div>
                <p className="text-sm font-medium text-muted-foreground">
                    {item.degree}
                </p>
                <p className="text-sm text-muted-foreground/80 leading-relaxed">
                    {item.description}
                </p>
            </div>
        </div>
    );
}

export default function EducationTimeline({ items }) {
    if (!items || items.length === 0) return null;

    return (
        <div className="relative border-l border-border ml-3 md:ml-6 space-y-12 pb-4">
            {items.map((item, index) => (
                <TimelineItem
                    key={item.id || index}
                    item={item}
                    isLatest={index === 0} // Only adds the ripple to the first item
                />
            ))}
        </div>
    );
}