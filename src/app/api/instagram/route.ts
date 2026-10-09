import { NextResponse } from 'next/server';
import { PROJECTS, Project } from '@/data/portfolioData';

export const dynamic = 'force-dynamic';

export async function GET() {
  const feedUrl = process.env.INSTAGRAM_FEED_URL;
  const accessToken = process.env.INSTAGRAM_ACCESS_TOKEN;

  // 1. Try external Instagram feed bridge if configured
  if (feedUrl) {
    try {
      const response = await fetch(feedUrl, {
        headers: { Accept: 'application/json' },
        next: { revalidate: 1800 }, // cache 30 mins
      });

      if (response.ok) {
        const data = await response.json();
        // Standardize items whether from Behold, Curator, or RSS bridge
        const items = Array.isArray(data) ? data : data.posts || data.data || [];
        if (items.length > 0) {
          const formattedPosts: Project[] = items.map((item: any, index: number) => ({
            id: item.id || `ig-${index}`,
            title: item.caption ? item.caption.split('\n')[0].slice(0, 40) : `Custom Piece #${index + 1}`,
            subtitle: item.caption ? item.caption.slice(0, 80) : 'Custom tailored outfit by Maria',
            category: (item.media_type === 'VIDEO' ? 'Event & Occasion Wear' : 'Custom Dresses & Gowns') as any,
            year: new Date(item.timestamp || Date.now()).getFullYear().toString(),
            client: 'Tailored by Maria Client',
            coverImage: item.media_url || item.thumbnail_url || item.image || item.sizes?.large?.mediaUrl,
            galleryImages: [item.media_url || item.thumbnail_url || item.image],
            videoSrc: item.media_type === 'VIDEO' ? item.media_url : undefined,
            description: item.caption || 'Custom made piece by Maria Lórán (@tailored_by_maria).',
            materialDetails: 'High quality luxury fabric selected for client.',
            styleDetails: 'Tailored to custom client measurements.',
          }));

          return NextResponse.json({
            source: 'live_feed',
            username: 'tailored_by_maria',
            profileUrl: 'https://www.instagram.com/tailored_by_maria',
            posts: formattedPosts,
          });
        }
      }
    } catch (err) {
      console.warn('Could not fetch external Instagram feed, falling back to curated posts:', err);
    }
  }

  // 2. Try Instagram Basic Display Graph API if access token provided
  if (accessToken) {
    try {
      const igRes = await fetch(
        `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink,timestamp&access_token=${accessToken}`,
        { next: { revalidate: 3600 } }
      );

      if (igRes.ok) {
        const json = await igRes.json();
        if (json.data && json.data.length > 0) {
          const formattedPosts: Project[] = json.data.map((item: any, index: number) => ({
            id: item.id,
            title: item.caption ? item.caption.split('\n')[0].slice(0, 40) : `Custom Piece #${index + 1}`,
            subtitle: item.caption ? item.caption.slice(0, 80) : 'Custom tailored outfit',
            category: (item.media_type === 'VIDEO' ? 'Event & Occasion Wear' : 'Custom Dresses & Gowns') as any,
            year: new Date(item.timestamp || Date.now()).getFullYear().toString(),
            client: 'Tailored by Maria Client',
            coverImage: item.media_type === 'VIDEO' ? (item.thumbnail_url || item.media_url) : item.media_url,
            galleryImages: [item.media_url],
            videoSrc: item.media_type === 'VIDEO' ? item.media_url : undefined,
            description: item.caption || 'Tailored by Maria (@tailored_by_maria).',
            materialDetails: 'Quality fabric tailored for client.',
            styleDetails: 'Custom fit pattern.',
          }));

          return NextResponse.json({
            source: 'graph_api',
            username: 'tailored_by_maria',
            profileUrl: 'https://www.instagram.com/tailored_by_maria',
            posts: formattedPosts,
          });
        }
      }
    } catch (err) {
      console.warn('Instagram Graph API error, falling back to curated posts:', err);
    }
  }

  // 3. Clean reliable fallback: serves the real @tailored_by_maria images & videos
  return NextResponse.json({
    source: 'curated_instagram_media',
    username: 'tailored_by_maria',
    profileUrl: 'https://www.instagram.com/tailored_by_maria',
    posts: PROJECTS,
  });
}
