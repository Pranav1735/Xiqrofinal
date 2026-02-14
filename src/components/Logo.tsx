
const Logo = ({ className = "" }: { className?: string }) => {
    return (
        <div className={`aspect-[3/1] ${className}`}>
            <svg
                width="100%"
                height="100%"
                viewBox="0 0 300 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-labelledby="logo-title"
            >
                <title id="logo-title">XIQRO Logo</title>
                <defs>
                    <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#ffffff" />
                        <stop offset="100%" stopColor="#9ca3af" />
                    </linearGradient>
                </defs>

                {/* Square Box with Open Bottom Right */}
                <path
                    d="M 75 95 L 5 95 L 5 5 L 95 5 L 95 75"
                    fill="none"
                    stroke="url(#logoGradient)"
                    strokeWidth="3"
                    strokeLinecap="square"
                />

                {/* X inside the box */}
                <text
                    x="50"
                    y="70"
                    fontSize="65"
                    fontWeight="300"
                    fill="url(#logoGradient)"
                    textAnchor="middle"
                    fontFamily="sans-serif"
                >
                    X
                </text>

                {/* Text XIQRO */}
                <text
                    x="115"
                    y="70"
                    fontSize="60"
                    fontWeight="400"
                    fill="url(#logoGradient)"
                    fontFamily="sans-serif"
                    letterSpacing="0.05em"
                >
                    XIQRO
                </text>

                {/* Text NEXT GEN */}
                <text
                    x="118"
                    y="92"
                    fontSize="11"
                    fontWeight="600"
                    fill="#9ca3af"
                    fontFamily="sans-serif"
                    letterSpacing="0.4em"
                >
                    NEXT GEN
                </text>
            </svg>
        </div>
    );
};

export default Logo;
