/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,html}",
  ],
  theme: {
  	extend: {
  		colors: {
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted-foreground))',
  				foreground: 'hsl(var(--muted-foreground))',
  				bg: 'hsl(var(--muted))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			highlight: '#3B82F6',
  			border: 'hsl(var(--border))',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
		fontFamily: {
			sans: [
				'Geist',
				'Geist Sans',
				'system-ui',
				'-apple-system',
				'sans-serif'
			],
			mono: [
				'JetBrains Mono',
				'Fira Code',
				'monospace'
			]
		},
  		fontSize: {
  			display: [
  				'72px',
  				{
  					lineHeight: '1.1',
  					letterSpacing: '-0.02em'
  				}
  			],
  			h1: [
  				'48px',
  				{
  					lineHeight: '1.2',
  					letterSpacing: '-0.02em'
  				}
  			],
  			h2: [
  				'32px',
  				{
  					lineHeight: '1.3'
  				}
  			],
  			h3: [
  				'24px',
  				{
  					lineHeight: '1.4'
  				}
  			],
  			body: [
  				'18px',
  				{
  					lineHeight: '1.6'
  				}
  			],
  			small: [
  				'14px',
  				{
  					lineHeight: '1.5'
  				}
  			],
  			micro: [
  				'12px',
  				{
  					lineHeight: '1.4'
  				}
  			]
  		},
  		spacing: {
  			'18': '4.5rem',
  			'88': '22rem',
  			'128': '32rem'
  		},
  		borderRadius: {
  			none: '0',
  			sm: '2px',
  			DEFAULT: '2px',
  			md: '4px',
  			lg: '6px'
  		},
  		boxShadow: {
  			sm: '0 1px 2px rgba(0, 0, 0, 0.05)',
  			DEFAULT: '0 4px 6px rgba(0, 0, 0, 0.1)',
  			md: '0 4px 6px rgba(0, 0, 0, 0.1)',
  			lg: '0 10px 15px rgba(0, 0, 0, 0.1)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};

