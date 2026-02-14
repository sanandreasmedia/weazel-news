import { ImageResponse } from 'next/og';
import { mockNews } from '@/lib/mockNews';

export const runtime = 'edge';

export async function GET(
    request: Request,
    { params }: { params: Promise<{ slug: string }> }
) {
    const { slug } = await params;
    const article = mockNews.find((n) => n.slug === slug);

    if (!article) {
        return new Response('Article not found', { status: 404 });
    }

    return new ImageResponse(
        (
            <div
                style={{
                    background: 'black',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    padding: '40px 60px',
                    fontFamily: 'sans-serif',
                }}
            >
                <div
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        height: '16px',
                        background: '#FFCC00',
                    }}
                />
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
                        <div style={{ background: 'white', color: 'black', padding: '10px 20px', fontSize: '32px', fontWeight: 900, textTransform: 'uppercase', fontStyle: 'italic' }}>
                            Weazel
                        </div>
                        <div style={{ background: '#FFCC00', color: 'black', padding: '5px 20px', fontSize: '20px', fontWeight: 700, textTransform: 'uppercase' }}>
                            News
                        </div>
                    </div>
                    <div style={{ display: 'flex', gap: '10px' }}>
                        <div style={{ background: article.isBreaking ? '#CC0000' : '#333', color: 'white', padding: '8px 16px', borderRadius: '4px', fontSize: '18px', fontWeight: 700, textTransform: 'uppercase' }}>
                            {article.isBreaking ? 'Breaking News' : article.category}
                        </div>
                    </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'center' }}>
                    <div style={{ fontSize: '72px', color: 'white', fontWeight: 900, lineHeight: 1.1, marginBottom: '30px', textTransform: 'uppercase', display: 'flex' }}>
                        {article.title}
                    </div>
                    <div style={{ fontSize: '28px', color: '#999', fontWeight: 500, lineHeight: 1.4, maxWidth: '900px', display: 'flex' }}>
                        {article.excerpt}
                    </div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '40px', borderTop: '1px solid #333', paddingTop: '20px', color: '#666', fontSize: '18px', fontWeight: 700, textTransform: 'uppercase' }}>
                    <div>By {article.author}</div>
                    <div>Weazel News Network • los santos</div>
                </div>
            </div>
        ),
        {
            width: 1200,
            height: 630,
        }
    );
}
