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
}

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
        tags: ['Robbery', 'LSPD', 'Breaking']
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
        tags: ['Election', 'Politics']
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
        tags: ['Maze Bank', 'Economy']
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
        tags: ['Vinewood', 'Cinema']
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
        tags: ['Sports', 'Safety']
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
        tags: ['LSPD', 'Police']
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
        tags: ['Casino', 'Luxury']
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
        tags: ['Racing', 'Arrest']
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
        tags: ['Missing', 'Blaine County']
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
        tags: ['Art', 'City']
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
        tags: ['Tennis', 'Scandal']
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
        tags: ['Beach', 'Community']
    }
];
