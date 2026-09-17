"use client";

interface GoogleMapProps {
  address: string;
  className?: string;
}

export default function GoogleMap({ address, className = "" }: GoogleMapProps) {
  const encoded = encodeURIComponent(address);
  return (
    <div className={`relative overflow-hidden rounded-lg bg-cream-hover ${className}`}>
      <iframe
        title={`Map for ${address}`}
        src={`https://www.google.com/maps?q=${encoded}&output=embed&z=15`}
        width="100%"
        height="100%"
        style={{ border: 0, minHeight: "250px" }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="absolute inset-0 h-full w-full"
      />
    </div>
  );
}
