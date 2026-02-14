export interface NewsArticle {
    slug: string;
    title: string;
    excerpt: string;
    category: 'crime' | 'politics' | 'business' | 'culture' | 'sports';
    publishedAt: string;
    author: string;
    isBreaking: boolean;
    image: string;
    tags: string[];
    content?: string;
}

const generateMockContent = (title: string, excerpt: string) => {
    return `
    <p><strong>LOS SANTOS</strong> — ${excerpt}</p>
    <p>Wie Insider berichten, handelt es sich bei dem Vorfall rund um "${title}" um eine der bedeutendsten Entwicklungen der letzten Monate in San Andreas. Die Behörden halten sich zum jetzigen Zeitpunkt noch bedeckt, doch die Gerüchteküche in Vinewood brodelt bereits gewaltig.</p>
    <p>Unsere Reporter vor Ort konnten exklusive Einblicke gewinnen. "Es war wie in einem Film," berichtet ein Augenzeuge, der anonym bleiben möchte. "Zuerst war alles ruhig, und dann passierte es einfach." Die Auswirkungen auf die lokale Wirtschaft und das soziale Gefüge von Los Santos sind noch nicht vollständig absehbar, aber Experten rechnen mit langfristigen Konsequenzen.</p>
    <h3>Die Hintergründe</h3>
    <p>Bereits in der Vergangenheit gab es immer wieder Hinweise darauf, dass etwas in dieser Größenordnung geplant sein könnte. Doch die schiere Brutalität und Präzision, mit der die Ereignisse eintraten, überraschte selbst die erfahrensten Analysten der Weazel News Redaktion.</p>
    <p>Die Polizei von Los Santos (LSPD) hat eine Sonderkommission eingerichtet, um die Details zu klären. Officer Tenpenny betonte in einer kurzen Presseerklärung: "Wir werden alles tun, um die Ordnung in dieser Stadt aufrechtzuerhalten. Niemand steht über dem Gesetz, egal wie viel Einfluss oder Geld er in Vinewood gesammelt hat."</p>
    <blockquote>"Wir bei Weazel News bestätigen nur, was Sie ohnehin schon vermutet haben." — Redaktionsmotto</blockquote>
    <p>In den kommenden Stunden werden weitere Informationen erwartet. Wir bleiben für Sie am Ball und berichten live von den Brennpunkten der Stadt. Bleiben Sie dran für die neuesten Updates zu diesem schockierenden Ereignis.</p>
    <p>Besuchen Sie auch unsere Social Media Kanäle für exklusive Bilder und Videos, die wir aufgrund ihrer grafischen Natur hier nur teilweise zeigen können. Die Wahrheit tut oft weh, aber Weazel News scheut sich nicht, sie auszusprechen.</p>
  `;
};

export const mockNews: NewsArticle[] = [
    {
        slug: 'massive-bank-robbery-vangelico',
        title: 'Massiver Raubüberfall auf Vangelico Juwelier',
        excerpt: 'Bewaffnete Täter stürmten heute Mittag den Luxus-Juwelier in Rockford Hills. Die Polizei ist mit einem Großaufgebot vor Ort.',
        category: 'crime',
        publishedAt: '2026-02-14T15:30:00Z',
        author: 'Jack Howitzer',
        isBreaking: true,
        image: 'https://images.unsplash.com/photo-1512070679279-8988d32161be?auto=format&fit=crop&q=80&w=800',
        tags: ['Robbery', 'LSPD', 'Breaking'],
        content: generateMockContent('Massiver Raubüberfall auf Vangelico Juwelier', 'Bewaffnete Täter stürmten heute Mittag den Luxus-Juwelier in Rockford Hills.')
    },
    {
        slug: 'mayor-election-results',
        title: 'Bürgermeisterwahl: Erste Hochrechnungen liegen vor',
        excerpt: 'Das Rennen um das Rathaus von Los Santos bleibt spannend. Jock Cranley liegt laut ersten Umfragen knapp vorne.',
        category: 'politics',
        publishedAt: '2026-02-14T14:45:00Z',
        author: 'Amy Sheard',
        isBreaking: false,
        image: 'https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?auto=format&fit=crop&q=80&w=800',
        tags: ['Election', 'Politics'],
        content: generateMockContent('Bürgermeisterwahl: Erste Hochrechnungen liegen vor', 'Das Rennen um das Rathaus von Los Santos bleibt spannend.')
    },
    {
        slug: 'maze-bank-stocks-plunge',
        title: 'Maze Bank Aktien stürzen nach Skandal ab',
        excerpt: 'Finanzmärkte in Aufruhr: Die Maze Bank verliert 15% an Wert, nachdem interne Dokumente an die Öffentlichkeit gelangten.',
        category: 'business',
        publishedAt: '2026-02-14T12:00:00Z',
        author: 'Bill Binder',
        isBreaking: true,
        image: 'https://images.unsplash.com/photo-1611974714151-f40562590fc3?auto=format&fit=crop&q=80&w=800',
        tags: ['Maze Bank', 'Economy'],
        content: generateMockContent('Maze Bank Aktien stürzen nach Skandal ab', 'Finanzmärkte in Aufruhr: Die Maze Bank verliert 15% an Wert.')
    },
    {
        slug: 'vinewood-film-festival-kickoff',
        title: 'Vinewood Film Festival glanzvoll eröffnet',
        excerpt: 'Stars und Sternchen versammeln sich auf dem roten Teppich. Wir zeigen die besten Bilder der Eröffnungsnacht.',
        category: 'culture',
        publishedAt: '2026-02-14T10:30:00Z',
        author: 'Lazlow Jones',
        isBreaking: false,
        image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=800',
        tags: ['Vinewood', 'Cinema'],
        content: generateMockContent('Vinewood Film Festival glanzvoll eröffnet', 'Stars und Sternchen versammeln sich auf dem roten Teppich.')
    },
    {
        slug: 'panic-at-the-stadium',
        title: 'Panik im Maze Bank Arena während des Spiels',
        excerpt: 'Ein Fehlalarm sorgte für eine Massenpanik beim heutigen Derby. Glücklicherweise gab es nur Leichtverletzte.',
        category: 'sports',
        publishedAt: '2026-02-13T20:15:00Z',
        author: 'Ron Jakowski',
        isBreaking: false,
        image: 'https://images.unsplash.com/photo-1504450758481-7338eba7524a?auto=format&fit=crop&q=80&w=800',
        tags: ['Sports', 'Safety'],
        content: generateMockContent('Panik im Maze Bank Arena während des Spiels', 'Ein Fehlalarm sorgte für eine Massenpanik beim heutigen Derby.')
    },
    {
        slug: 'lspd-new-recruitment-drive',
        title: 'LSPD startet neue Rekrutierungsoffensive',
        excerpt: 'Mehr Sicherheit für Los Santos: Officer Tenpenny kündigt die Einstellung von 500 neuen Kadetten an.',
        category: 'crime',
        publishedAt: '2026-02-13T18:00:00Z',
        author: 'Amy Sheard',
        isBreaking: false,
        image: 'https://images.unsplash.com/photo-1566908829550-e6551b002797?auto=format&fit=crop&q=80&w=800',
        tags: ['LSPD', 'Police'],
        content: generateMockContent('LSPD startet neue Rekrutierungsoffensive', 'Mehr Sicherheit für Los Santos.')
    },
    {
        slug: 'casino-resort-expansion',
        title: 'Diamond Casino & Resort plant massive Erweiterung',
        excerpt: 'Ein neuer Tower und ein exklusiver Beach Club sollen das Casino zum Weltmarktführer machen.',
        category: 'business',
        publishedAt: '2026-02-13T16:30:00Z',
        author: 'Bill Binder',
        isBreaking: false,
        image: 'https://images.unsplash.com/photo-1568992687947-868a62a9f521?auto=format&fit=crop&q=80&w=800',
        tags: ['Casino', 'Luxury'],
        content: generateMockContent('Diamond Casino & Resort plant massive Erweiterung', 'Ein neuer Tower und ein exklusiver Beach Club.')
    },
    {
        slug: 'underground-racing-bust',
        title: 'Geheimes Straßenrennen von Polizei gesprengt',
        excerpt: 'In den Docks von Los Santos wurden letzte Nacht über 20 Fahrzeuge beschlagnahmt. Die Szene ist geschockt.',
        category: 'crime',
        publishedAt: '2026-02-13T14:20:00Z',
        author: 'Jack Howitzer',
        isBreaking: false,
        image: 'https://images.unsplash.com/photo-1503376780353-7e613e7ad834?auto=format&fit=crop&q=80&w=800',
        tags: ['Racing', 'Arrest'],
        content: generateMockContent('Geheimes Straßenrennen von Polizei gesprengt', 'In den Docks von Los Santos wurden letzte Nacht über 20 Fahrzeuge beschlagnahmt.')
    },
    {
        slug: 'tech-guru-missing-blaine-county',
        title: 'Tech-Milliardär im Blaine County vermisst',
        excerpt: 'Nach einem Wanderurlaub fehlt jede Spur von Devon Weston. Suchtrupps sind in den Bergen unterwegs.',
        category: 'politics',
        publishedAt: '2026-02-13T11:00:00Z',
        author: 'Lazlow Jones',
        isBreaking: false,
        image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=800',
        tags: ['Missing', 'Blaine County'],
        content: generateMockContent('Tech-Milliardär im Blaine County vermisst', 'Nach einem Wanderurlaub fehlt jede Spur von Devon Weston.')
    },
    {
        slug: 'new-art-gallery-mission-row',
        title: 'Neue Galerie eröffnet in Mission Row',
        excerpt: 'Schrott oder Kunst? Die neueste Ausstellung sorgt bereits vor der Eröffnung für hitzige Diskussionen.',
        category: 'culture',
        publishedAt: '2026-02-13T09:00:00Z',
        author: 'Amy Sheard',
        isBreaking: false,
        image: 'https://images.unsplash.com/photo-1499781350541-7783f6c6a0c8?auto=format&fit=crop&q=80&w=800',
        tags: ['Art', 'City'],
        content: generateMockContent('Neue Galerie eröffnet in Mission Row', 'Schrott oder Kunst?')
    },
    {
        slug: 'tennis-pro-scandal',
        title: 'Tennis-Profi nach Wutausbruch suspendiert',
        excerpt: 'Unsportliches Verhalten beim LS-Open führt zum sofortigen Turnierausschluss für den Favoriten.',
        category: 'sports',
        publishedAt: '2026-02-12T21:30:00Z',
        author: 'Ron Jakowski',
        isBreaking: false,
        image: 'https://images.unsplash.com/photo-1595435066319-70578eaa1938?auto=format&fit=crop&q=80&w=800',
        tags: ['Tennis', 'Scandal'],
        content: generateMockContent('Tennis-Profi nach Wutausbruch suspendiert', 'Unsportliches Verhalten beim LS-Open.')
    },
    {
        slug: 'beach-party-cleanup',
        title: 'Vespucci Beach Cleanup: Tausende Helfer kamen',
        excerpt: 'Eine Bürgerinitiative sorgt für einen sauberen Strand. Das Mayor Office lobt das Engagement.',
        category: 'culture',
        publishedAt: '2026-02-12T17:00:00Z',
        author: 'Jack Howitzer',
        isBreaking: false,
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=800',
        tags: ['Beach', 'Community'],
        content: generateMockContent('Vespucci Beach Cleanup: Tausende Helfer kamen', 'Eine Bürgerinitiative sorgt für einen sauberen Strand.')
    }
];
