export interface SpotlightItem {
    id: string;
    type: 'citizen' | 'wanted' | 'business';
    title: string;
    subtitle: string;
    description: string;
    image: string;
    accent: string;
}

export const mockSpotlight: SpotlightItem[] = [
    {
        id: 's-1',
        type: 'business',
        title: 'Premium Deluxe Motorsport',
        subtitle: 'Business Spotlight',
        description: 'Simeon Yetarian expanded his showroom at Pillbox Hill. Best deals on vehicles you definitely deserve.',
        image: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&q=80&w=400',
        accent: '#FFCC00'
    },
    {
        id: 's-2',
        type: 'wanted',
        title: 'Unknown Suspect',
        subtitle: 'Most Wanted',
        description: 'Wanted for multiple counts of reckless driving and property damage in Little Seoul. Reward: $5,000.',
        image: 'https://images.unsplash.com/photo-1582233479168-8263ca79d863?auto=format&fit=crop&q=80&w=400',
        accent: '#CC0000'
    },
    {
        id: 's-3',
        type: 'citizen',
        title: 'Tracey De Santa',
        subtitle: 'Citizen of the Week',
        description: 'Local celebrity and rising star. Read our exclusive interview about life in the Vinewood spotlight.',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400',
        accent: '#0066CC'
    }
];
