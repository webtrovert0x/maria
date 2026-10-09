export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'Custom Dresses & Gowns' | 'Tailored Sets & Two-Piece' | 'Event & Occasion Wear' | 'Signature Pieces';
  year: string;
  client: string;
  coverImage: string;
  galleryImages: string[];
  videoSrc?: string;
  description: string;
  materialDetails: string;
  styleDetails: string;
  featured?: boolean;
}

export const PROJECTS: Project[] = [
  {
    id: 'emerald-corset-gown',
    title: 'Emerald Green Velvet Gown',
    subtitle: 'Custom fitted velvet evening gown with structured corset bodice',
    category: 'Custom Dresses & Gowns',
    year: '2026',
    client: 'Custom Client Order',
    coverImage: '/702677140_18090891239209785_1629760954102161083_n..jpg',
    galleryImages: [
      '/702677140_18090891239209785_1629760954102161083_n..jpg',
      '/787681247_18100758488209785_8250190080221885875_n..jpg',
      '/705964618_18091181198209785_997318308146192574_n..jpg'
    ],
    videoSrc: '/AQMOrBtkbt8KJcqAXefiOwISmvXmn-0uelvz6WhdcTeET_G6qZKK7ZGLEXC3muqc44f5bh7tPsUeNA_SC1RQsJBuqSzTIKnw.mp4',
    description: 'A custom made floor-length evening dress crafted with structured internal boning and draped velvet fabric for an exact fit.',
    materialDetails: 'Stretch Silk Velvet with soft inner lining and flexible boning support.',
    styleDetails: 'Sweetheart neckline, structured corset waistline, and draped split skirt.',
    featured: true
  },
  {
    id: 'gold-statement-dress',
    title: 'Gold Metallic Event Gown',
    subtitle: 'Full length tailored gown with one-shoulder drape detail',
    category: 'Event & Occasion Wear',
    year: '2025/2026',
    client: 'Special Occasion Client',
    coverImage: '/787681247_18100758488209785_8250190080221885875_n..jpg',
    galleryImages: [
      '/787681247_18100758488209785_8250190080221885875_n..jpg',
      '/702677140_18090891239209785_1629760954102161083_n..jpg',
      '/785146344_18101073197209785_5321239396981543417_n..jpg'
    ],
    videoSrc: '/AQMpEaOAj7MPGXlcmCynMsADV1XPIjo_rNYu8wb7mmIHEYU6gMsnZS04xZW8CMjrpzgOSIZrpw3etydQI_BfQw1MeCFTVc09.mp4',
    description: 'Tailored for evening functions, featuring clean asymmetrical cutlines, shimmering metallic finish, and fitted silhouette.',
    materialDetails: 'Textured Gold Brocade Fabric with fine breathable backing.',
    styleDetails: 'One-shoulder neckline, sleek column skirt, and invisible rear zipper.',
    featured: true
  },
  {
    id: 'navy-beaded-outfit',
    title: 'Navy Blue Beaded Dress',
    subtitle: 'Custom tailored dress with intricate hand-placed beadwork',
    category: 'Custom Dresses & Gowns',
    year: '2025',
    client: 'Reception & Party Wear',
    coverImage: '/622835790_18092000915316785_3285453560893394621_n..jpg',
    galleryImages: [
      '/622835790_18092000915316785_3285453560893394621_n..jpg',
      '/623432570_18082647224590255_71609373515789739_n..jpg',
      '/619941251_18070858427432884_6195469396661003456_n..webp'
    ],
    videoSrc: '/AQO4JcJFBRpXvFLdQcxZzdjkrNANApP3u0CyuD5AQ4jU54rKrtfbGwrXAjLUPXo2L0mwMVbzhhS3UQB-0F_BwJ2bg4-fLMM5.mp4',
    description: 'Custom fitted formal dress made with rich navy fabric and detailed crystal and bead embellishments.',
    materialDetails: 'Heavy Silk Faille Fabric with hand-sewn bead patterns.',
    styleDetails: 'Fitted bodice, waist accentuation, and elegant hem finish.',
    featured: true
  },
  {
    id: 'blush-pink-gown',
    title: 'Blush Pink Layered Dress',
    subtitle: 'Soft tiered organza dress with clean tailoring',
    category: 'Event & Occasion Wear',
    year: '2025',
    client: 'Party & Celebration Piece',
    coverImage: '/785146344_18101073197209785_5321239396981543417_n..jpg',
    galleryImages: [
      '/785146344_18101073197209785_5321239396981543417_n..jpg',
      '/789972772_18101073113209785_3019173193536765792_n..jpg',
      '/789563154_18101288558209785_7864774096023239589_n..jpg'
    ],
    videoSrc: '/AQMJGY4t4bqxkgw2VBuGu9BpDyYNf1-nQPpYTMhjL6udm7Mk9gYd5D1ANuQARsD9APshr0wdMNxklBgus4fbDdLH79DCoica.mp4',
    description: 'Lightweight layered formal dress with careful pleating and seamless stitching throughout.',
    materialDetails: 'Multi-layer Fine Organza and soft cotton-blend lining.',
    styleDetails: 'Fitted top with cascading ruffled tiers for lightweight movement.',
    featured: false
  },
  {
    id: 'red-tailored-suit',
    title: 'Crimson Red Tailored Suit',
    subtitle: 'Sharp custom made two-piece jacket and pants set',
    category: 'Tailored Sets & Two-Piece',
    year: '2025/2026',
    client: 'Custom Tailored Suit Order',
    coverImage: '/789563154_18101288558209785_7864774096023239589_n..jpg',
    galleryImages: [
      '/789563154_18101288558209785_7864774096023239589_n..jpg',
      '/789972772_18101073113209785_3019173193536765792_n..jpg',
      '/705964618_18091181198209785_997318308146192574_n..jpg'
    ],
    description: 'A tailored suit cut to client measurements with padded shoulders, peak lapels, and matching straight-leg trousers.',
    materialDetails: 'Premium Wool-Silk Blend with full satin interior lining.',
    styleDetails: 'Double-breasted blazer with tailored high-waisted trousers.',
    featured: false
  },
  {
    id: 'classic-woven-creation',
    title: 'Patterned Occasion Two-Piece',
    subtitle: 'Custom tailored modern outfit with textured fabric mix',
    category: 'Signature Pieces',
    year: '2026',
    client: 'Custom Design Order',
    coverImage: '/623432570_18082647224590255_71609373515789739_n..jpg',
    galleryImages: [
      '/623432570_18082647224590255_71609373515789739_n..jpg',
      '/619941251_18070858427432884_6195469396661003456_n..webp',
      '/702677140_18090891239209785_1629760954102161083_n..jpg'
    ],
    description: 'Combining textured patterned fabric with tailored lines for a striking contemporary everyday or event look.',
    materialDetails: 'Woven textured fabric with silk trim accents.',
    styleDetails: 'Clean tailored neckline with structured waist detailing.',
    featured: false
  }
];

export const CATEGORIES = [
  'All',
  'Custom Dresses & Gowns',
  'Tailored Sets & Two-Piece',
  'Event & Occasion Wear',
  'Signature Pieces'
] as const;
