export interface InstagramMediaItem {
  id: string;
  type: 'image' | 'video';
  src: string;
  poster?: string;
  title: string;
  caption: string;
  category: 'Bridal & Gowns' | 'AsoEbi & Occasion' | 'Corset Dresses' | 'Two-Piece & Suits';
  date?: string;
}

export const INSTAGRAM_MEDIA: InstagramMediaItem[] = [
  // --- REELS & VIDEO HIGHLIGHTS (15 Reels) ---
  {
    id: 'reel-1',
    type: 'video',
    src: '/AQMOrBtkbt8KJcqAXefiOwISmvXmn-0uelvz6WhdcTeET_G6qZKK7ZGLEXC3muqc44f5bh7tPsUeNA_SC1RQsJBuqSzTIKnw.mp4',
    poster: '/702677140_18090891239209785_1629760954102161083_n..jpg',
    title: 'Emerald Velvet Corset Reveal',
    caption: 'Close-up video of rich silk velvet finish, structured boning, and split skirt drape.',
    category: 'Corset Dresses',
    date: '2026'
  },
  {
    id: 'reel-2',
    type: 'video',
    src: '/AQOCV93cET0XaKZ1HnjSzv-q167gWxCBCGFUACeIWUvEAP8kkiI85Ule_wDSzcoyRthdJmvs3-0tnBaIq0VAJYMM5tIbADXU.mp4',
    poster: '/475048304_18460208356066534_4170807441650733791_n..jpg',
    title: 'Bridal Fitting Session with Maria',
    caption: 'Full bridal fitting session showing custom adjustments and perfect final silhouette.',
    category: 'Bridal & Gowns',
    date: '2026'
  },
  {
    id: 'reel-3',
    type: 'video',
    src: '/AQMpEaOAj7MPGXlcmCynMsADV1XPIjo_rNYu8wb7mmIHEYU6gMsnZS04xZW8CMjrpzgOSIZrpw3etydQI_BfQw1MeCFTVc09.mp4',
    poster: '/787681247_18100758488209785_8250190080221885875_n..jpg',
    title: 'Gold Metallic Brocade Reel',
    caption: 'Live video highlight showing metallic luster and tailored one-shoulder line.',
    category: 'AsoEbi & Occasion',
    date: '2026'
  },
  {
    id: 'reel-4',
    type: 'video',
    src: '/AQNZaqWe-IiacxgXkEWOruvRp-Jxz-0EsfHdSzzoVbmEUin2Yh_s1hwxeWMZ0LUDYp_k7OQZEznSxHPJIp3Z9qrWATONoOds.mp4',
    poster: '/474978160_18460208374066534_8669784616015070844_n..jpg',
    title: 'Bridal Gown Spin & Silhouette',
    caption: 'Full 360-degree look at bridal gown construction, veil, and train movement.',
    category: 'Bridal & Gowns',
    date: '2026'
  },
  {
    id: 'reel-5',
    type: 'video',
    src: '/AQNpN5L4Te6iOZIv7KyiAsOehKrwFcbGYR8pDClUi3RlpI3NyUIX9E9v7lPF4kcYOdUoD7zqsNqiik57NzsBGyioDNcUIFfA.mp4',
    poster: '/656229261_18057927758447864_1096944494893606949_n..jpg',
    title: 'Reception Glamour Walk',
    caption: 'Client celebration walk in custom embellished champagne reception dress.',
    category: 'AsoEbi & Occasion',
    date: '2026'
  },
  {
    id: 'reel-6',
    type: 'video',
    src: '/AQMCG8_HfAzbCAbSm8gkcUYgQxAOue8jdc2fbNMucE2urQQMMPOca9rXmWHnVCv6X5yWlkDnlWzCzrtGHBFcugGWnw5njck9.mp4',
    poster: '/702677140_18090891239209785_1629760954102161083_n..jpg',
    title: 'Client Fitting & Walk-through',
    caption: 'Live movement and structured boning in action during an office fitting.',
    category: 'Corset Dresses',
    date: '2026'
  },
  {
    id: 'reel-7',
    type: 'video',
    src: '/AQO4JcJFBRpXvFLdQcxZzdjkrNANApP3u0CyuD5AQ4jU54rKrtfbGwrXAjLUPXo2L0mwMVbzhhS3UQB-0F_BwJ2bg4-fLMM5.mp4',
    poster: '/622835790_18092000915316785_3285453560893394621_n..jpg',
    title: 'Midnight Blue Hand-Beaded Dress',
    caption: 'Sparkle of handset crystal beading on midnight blue silk fabric.',
    category: 'Bridal & Gowns',
    date: '2025'
  },
  {
    id: 'reel-8',
    type: 'video',
    src: '/AQMTaJhVGlvqQ3-5upHtkOW4LDL6LUpd20Cph9uyMgCoJoP457TRsWDmSrebGLlO9gl426StfaDLrVhFphZJmPMix9_jPHQn.mp4',
    poster: '/480015915_18046256432209785_2007828001936906031_n..jpg',
    title: 'Lilac AsoEbi Elegance',
    caption: 'Client looking regal in full bespoke lilac African lace AsoEbi event wear.',
    category: 'AsoEbi & Occasion',
    date: '2026'
  },
  {
    id: 'reel-9',
    type: 'video',
    src: '/AQNoc-5jtITG11_MHOegPcNZ6K4pEOO5087Si0EwvGBc2OWUuaJa5T1GB9ghRo-hmac_tJBkidOo0cC4WfYA7aOw..mp4',
    poster: '/482741170_18048060305209785_3517385242168054651_n..jpg',
    title: 'Corset Boning & Seam Precision',
    caption: 'Demonstrating clean internal boning and waist sculpting tailored by hand.',
    category: 'Corset Dresses',
    date: '2026'
  },
  {
    id: 'reel-10',
    type: 'video',
    src: '/AQMJGY4t4bqxkgw2VBuGu9BpDyYNf1-nQPpYTMhjL6udm7Mk9gYd5D1ANuQARsD9APshr0wdMNxklBgus4fbDdLH79DCoica.mp4',
    poster: '/785146344_18101073197209785_5321239396981543417_n..jpg',
    title: 'Organza Ruffles In Motion',
    caption: 'Capturing the flutter and flow of tiered organza layers on this evening dress.',
    category: 'Bridal & Gowns',
    date: '2025'
  },
  {
    id: 'reel-11',
    type: 'video',
    src: '/AQO-9hm0V6e4x5-epzz7rUAF1L1XH3UFfND2GiawL3W3OOhZqpxeuVxwCqo3aubmHceW4nFijrdCnaWzhfZEOV6oxQQY13mD.mp4',
    poster: '/674395107_18087917180209785_4654614509024661815_n..jpg',
    title: 'Black Velvet Corset In Light',
    caption: 'Velvet texture and structural boning highlighted in office studio lighting.',
    category: 'Corset Dresses',
    date: '2026'
  },
  {
    id: 'reel-12',
    type: 'video',
    src: '/AQOQ9CRUoT3ujAHM_S_1hyeidr_K6wTH9sP3onDZax2-QrvmX3Q9DxHPIausAqV77PMPVyLiqyV-15n--OokTlo..mp4',
    poster: '/789563154_18101288558209785_7864774096023239589_n..jpg',
    title: 'Crimson Tailored Suit Reel',
    caption: 'Tailored suit in motion showing clean peak lapels and straight-leg trousers.',
    category: 'Two-Piece & Suits',
    date: '2026'
  },
  {
    id: 'reel-13',
    type: 'video',
    src: '/AQOQZKhAcLd7RpaHvn_HuKQWZ54KFrVwUlUTUqEjnVfhIBpZtVUKd3ch8Zl7gEZMnRxOWK9bepjT0914wpoP_0_WAgSXAp-R.mp4',
    poster: '/539831462_18064086311209785_4129108639106196069_n..jpg',
    title: 'Modern Chic Set In Motion',
    caption: 'Casual yet elevated bespoke two-piece tailored wear for day or night.',
    category: 'Two-Piece & Suits',
    date: '2026'
  },
  {
    id: 'reel-14',
    type: 'video',
    src: '/AQOg4qMyEp1SkS6RbFAP0ZC4INNWAYRIr2fhHAd3Sn5TH9RYC89pkdpzydI74l9U-9kk42SE0p00j9xeNxAnvvZOuY4n4V4m.mp4',
    poster: '/480401926_18046256411209785_2834296132481723895_n..jpg',
    title: 'Intricate Lace Embroidery Reel',
    caption: 'Close inspection of detailed beadwork and floral lace embroidery.',
    category: 'AsoEbi & Occasion',
    date: '2026'
  },
  {
    id: 'reel-15',
    type: 'video',
    src: '/AQOq6FliFI6XdF_crhKnk6c67Agutjd7xXxo5EHbCfr650-fGYveZ9-3A3xm-WCBx9ejcUR4s6GSrn0JM5MPPsn2ngVvp5AT.mp4',
    poster: '/683307658_18088861094209785_151602593339453533_n..jpg',
    title: 'Royal Blue Gown Motion',
    caption: 'Vivid royal blue fabric with slit skirt showing full sweep and flow.',
    category: 'Bridal & Gowns',
    date: '2026'
  },

  // --- PHOTOS & LOOKBOOK (22 High-Res Photos) ---
  {
    id: 'photo-1',
    type: 'image',
    src: '/474978160_18460208374066534_8669784616015070844_n..jpg',
    title: 'Bespoke Bridal White Gown',
    caption: 'Tailored bridal piece with beaded neckline and structured couture silhouette.',
    category: 'Bridal & Gowns',
    date: '2026'
  },
  {
    id: 'photo-2',
    type: 'image',
    src: '/475048304_18460208356066534_4170807441650733791_n..jpg',
    title: 'Wedding Reception Gown',
    caption: 'Detailed ivory fabric with precision darting and draped floor-length hem.',
    category: 'Bridal & Gowns',
    date: '2026'
  },
  {
    id: 'photo-3',
    type: 'image',
    src: '/475107989_18460208347066534_4797484710823092259_n..jpg',
    title: 'Bridal Veil & Seam Craftsmanship',
    caption: 'Close-up look at seam finishing and delicate bridal embroidery detailing.',
    category: 'Bridal & Gowns',
    date: '2026'
  },
  {
    id: 'photo-4',
    type: 'image',
    src: '/702677140_18090891239209785_1629760954102161083_n..jpg',
    title: 'Emerald Silk Velvet Corset Dress',
    caption: 'Tailored with internal steel boning and draped velvet fabric for an exact waist-sculpted silhouette.',
    category: 'Corset Dresses',
    date: '2026'
  },
  {
    id: 'photo-5',
    type: 'image',
    src: '/787681247_18100758488209785_8250190080221885875_n..jpg',
    title: 'Gold Brocade One-Shoulder Gown',
    caption: 'Clean lines, tailored structure, and elegant drape from shoulder to hem.',
    category: 'AsoEbi & Occasion',
    date: '2025'
  },
  {
    id: 'photo-6',
    type: 'image',
    src: '/480015915_18046256432209785_2007828001936906031_n..jpg',
    title: 'Lilac AsoEbi Event Dress',
    caption: 'Ornate lace AsoEbi occasion wear tailored for high-profile Nigerian celebrations.',
    category: 'AsoEbi & Occasion',
    date: '2026'
  },
  {
    id: 'photo-7',
    type: 'image',
    src: '/480401926_18046256411209785_2834296132481723895_n..jpg',
    title: 'Sweetheart Lace Corset Dress',
    caption: 'Corseted bustier top with intricate African lace embroidery and structured fit.',
    category: 'AsoEbi & Occasion',
    date: '2026'
  },
  {
    id: 'photo-8',
    type: 'image',
    src: '/482741170_18048060305209785_3517385242168054651_n..jpg',
    title: 'Sculpted Silhouette Evening Dress',
    caption: 'Waist-cinching corset dress with structured boning tailored to exact measurements.',
    category: 'Corset Dresses',
    date: '2026'
  },
  {
    id: 'photo-9',
    type: 'image',
    src: '/483358003_18048060314209785_3416327988428262151_n..jpg',
    title: 'Corset Bodice Tailoring Detail',
    caption: 'Handcrafted internal boning and tailored fit at the waistline.',
    category: 'Corset Dresses',
    date: '2026'
  },
  {
    id: 'photo-10',
    type: 'image',
    src: '/656229261_18057927758447864_1096944494893606949_n..jpg',
    title: 'Champagne Shimmer Reception Dress',
    caption: 'Shimmering metallic gold and champagne embellished dress tailored for evening events.',
    category: 'AsoEbi & Occasion',
    date: '2026'
  },
  {
    id: 'photo-11',
    type: 'image',
    src: '/683307658_18088861094209785_151602593339453533_n..jpg',
    title: 'Royal Blue High-Slit Gown',
    caption: 'Vivid royal blue fabric with an elegant thigh-high slit and corset bodice.',
    category: 'Bridal & Gowns',
    date: '2026'
  },
  {
    id: 'photo-12',
    type: 'image',
    src: '/674395107_18087917180209785_4654614509024661815_n..jpg',
    title: 'Classic Black Velvet Corset',
    caption: 'Timeless black velvet draped corset dress tailored to client shape.',
    category: 'Corset Dresses',
    date: '2026'
  },
  {
    id: 'photo-13',
    type: 'image',
    src: '/622835790_18092000915316785_3285453560893394621_n..jpg',
    title: 'Midnight Blue Hand-Beaded Dress',
    caption: 'Detailed hand beadwork and crystal accents on rich midnight blue silk.',
    category: 'Bridal & Gowns',
    date: '2025'
  },
  {
    id: 'photo-14',
    type: 'image',
    src: '/785146344_18101073197209785_5321239396981543417_n..jpg',
    title: 'Blush Pink Tiered Organza Gown',
    caption: 'Cascading fine organza tiers tailored for a romantic celebration look.',
    category: 'Bridal & Gowns',
    date: '2025'
  },
  {
    id: 'photo-15',
    type: 'image',
    src: '/789563154_18101288558209785_7864774096023239589_n..jpg',
    title: 'Crimson Red Tailored Suit Set',
    caption: 'Tailored suit cut to client measurements with padded shoulders and straight-leg trousers.',
    category: 'Two-Piece & Suits',
    date: '2026'
  },
  {
    id: 'photo-16',
    type: 'image',
    src: '/586719512_18074845451209785_6897662849049284331_n..jpg',
    title: 'Emerald Velvet Event Dress',
    caption: 'Deep emerald velvet paired with sheer illusion neckline and split hem.',
    category: 'AsoEbi & Occasion',
    date: '2026'
  },
  {
    id: 'photo-17',
    type: 'image',
    src: '/655278750_18076920677423603_3118224655366152153_n..jpg',
    title: 'Glamour Mermaid Cut Gown',
    caption: 'Fitted through hips with a dramatic fluted hemline for formal celebrations.',
    category: 'AsoEbi & Occasion',
    date: '2026'
  },
  {
    id: 'photo-18',
    type: 'image',
    src: '/539831462_18064086311209785_4129108639106196069_n..jpg',
    title: 'Chic Tailored Two-Piece Ensemble',
    caption: 'Modern co-ord tailored set for versatile occasion styling.',
    category: 'Two-Piece & Suits',
    date: '2026'
  },
  {
    id: 'photo-19',
    type: 'image',
    src: '/623432570_18082647224590255_71609373515789739_n..jpg',
    title: 'Patterned Occasion Two-Piece',
    caption: 'Combining textured patterned fabric with tailored lines for a striking contemporary look.',
    category: 'Two-Piece & Suits',
    date: '2026'
  },
  {
    id: 'photo-20',
    type: 'image',
    src: '/705964618_18091181198209785_997318308146192574_n..jpg',
    title: 'Waistline Contour & Fit',
    caption: 'Focus on waist contouring, clean darts, and tailored seams.',
    category: 'Corset Dresses',
    date: '2026'
  },
  {
    id: 'photo-21',
    type: 'image',
    src: '/789972772_18101073113209785_3019173193536765792_n..jpg',
    title: 'Tailored Silhouette Fitting Look',
    caption: 'Client fitting preview displaying exact shoulder and hip drape.',
    category: 'Corset Dresses',
    date: '2026'
  },
  {
    id: 'photo-22',
    type: 'image',
    src: '/619941251_18070858427432884_6195469396661003456_n..webp',
    title: 'Collar & Neckline Craftsmanship',
    caption: 'Precision stitching preview showing crisp collar alignment and lapel finish.',
    category: 'Two-Piece & Suits',
    date: '2026'
  }
];
