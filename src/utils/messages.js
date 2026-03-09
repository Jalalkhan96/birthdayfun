// Auto-generated birthday messages

const messages = {
    emotional: {
        friend: [
            "On this special day, I want you to know how much your friendship means to me. You make the world brighter just by being in it. Happy Birthday, {name}! 🌟",
            "Dear {name}, birthdays come and go, but the memories we've shared will last forever. Here's to another year of laughter and love. Happy Birthday! 💫",
            "{name}, you are one of the most beautiful souls I've ever known. May your birthday be as wonderful as the joy you bring to everyone around you. 🎂",
            "Happy Birthday, {name}! Thank you for being the incredible person you are. Your presence in my life is a gift I cherish every single day. ❤️",
            "To the amazing {name} — may your birthday bring you all the happiness you deserve. You've made my world a better place. 🌈",
        ],
        brother: [
            "Happy Birthday to the best brother anyone could ask for! {name}, you are my rock, my hero, and my forever friend. Love you always! 💪❤️",
            "Dear {name}, growing up with you has been life's greatest adventure. May this birthday bring you endless joy and all your dreams come true. 🌟",
            "{name}, not just a brother but a best friend. Happy Birthday! Thank you for always being there. You mean the world to me. 🎉",
        ],
        sister: [
            "Happy Birthday to my beautiful sister {name}! You are my strength, my confidant, and my constant source of inspiration. Love you endlessly! 💖",
            "Dear {name}, having you as my sister is the greatest blessing. May your birthday be filled with love, laughter, and sparkle! ✨🎂",
            "{name}, you're not just my sister — you're my soulmate. Happy Birthday! Here's to another year of making beautiful memories together. 🌸",
        ],
        girlfriend: [
            "Happy Birthday to the love of my life, {name}! Every moment with you feels like a dream. May this year bring us even closer together. 💕",
            "My dearest {name}, you make my heart skip a beat every single day. On your special day, I want you to know — you are my everything. Happy Birthday, my love! 🥰",
            "{name}, your smile lights up my world. Happy Birthday, beautiful! I promise to make every day of your life as special as you are. 💝",
        ],
        boyfriend: [
            "Happy Birthday to the one who holds my heart, {name}! You make every day worth living. Here's to celebrating you today and always. 💙",
            "My dearest {name}, you are my safe place and my greatest adventure. Happy Birthday, handsome! I love you more than words can say. 💫",
        ],
        default: [
            "Happy Birthday, {name}! May your special day be filled with love, laughter, and unforgettable memories. You deserve all the happiness in the world! 🎂✨",
            "Wishing you the most magical birthday, {name}! May all your dreams come true and this year be your best one yet. 🌟❤️",
            "Happy Birthday, dear {name}! May your life be filled with happiness, love, and unforgettable memories. Here's to celebrating you! 🎉💖",
        ]
    },
    funny: {
        friend: [
            "Happy Birthday, {name}! You're not old, you're just... vintage! Like fine wine, you just keep getting better (and more expensive to maintain 😂). 🎂🍷",
            "Hey {name}, Happy Birthday! Don't worry about getting older — you still look almost as good as your Instagram filters! 😜🎉",
            "{name}, Happy Birthday! They say age is just a number, but in your case, it's a really big number! Just kidding, love you! 😄🎈",
        ],
        default: [
            "Happy Birthday, {name}! You're not getting older, you're leveling up! 🎮🎂 Time to unlock new achievements this year!",
            "Hey {name}, Happy Birthday! At this point, your birthday cake is more of a fire hazard than a dessert! 🔥🎂😂",
        ]
    },
    romantic: {
        girlfriend: [
            "To my beautiful {name} — you are the poetry my heart writes every day. Happy Birthday to the woman who makes my world complete. I love you beyond words. 🌹💕",
            "Happy Birthday, my love {name}. If I could give you one thing, it would be the ability to see yourself through my eyes. Then you'd know how truly special you are. 💝🌙",
        ],
        boyfriend: [
            "Happy Birthday to my king, {name}! You are the melody in my song and the beat in my heart. I love you more with every passing moment. 👑💙",
            "My darling {name}, Happy Birthday! You're not just my boyfriend — you're my soulmate, my best friend, and my forever. 💫❤️",
        ],
        default: [
            "Happy Birthday, {name}! May your day be as beautiful as the love that surrounds you. You are cherished, adored, and loved beyond measure. 💕🌹",
            "To the wonderful {name} — your birthday is a celebration of the love you give and receive. May it be as magical as you are. 🌟💖",
        ]
    },
    royal: {
        default: [
            "On this grand occasion, we celebrate the magnificent {name}! May your birthday be draped in golden glory and crowned with eternal joy. Long live the birthday royalty! 👑✨",
            "Your Majesty {name}, today we honor your grace and splendor! May your birthday be as regal as your spirit. The kingdom celebrates you! 🏰👑",
            "All hail {name}! On this glorious birthday, may the heavens shower you with blessings fit for royalty. Cheers to your magnificent existence! 🥂✨",
        ]
    }
};

export function generateMessage(name, relationship = 'default', mood = 'emotional') {
    const moodMessages = messages[mood] || messages.emotional;
    const relMessages = moodMessages[relationship] || moodMessages.default || messages.emotional.default;
    const template = relMessages[Math.floor(Math.random() * relMessages.length)];
    return template.replace(/{name}/g, name);
}

export function generatePoem(name) {
    const poems = [
        `Roses are red, violets are blue,\nNo birthday wish is as special as you, ${name}!\nMay your day shine bright like the stars above,\nFilled with joy, laughter, and endless love. 🌹✨`,
        `A year older, a year wiser, ${name} so true,\nThe world is a better place because of you!\nMay candles glow and wishes come alive,\nHappy Birthday — it's your time to thrive! 🎂💫`,
        `${name}, ${name}, born to shine,\nEvery moment with you feels divine.\nOn this day we celebrate your grace,\nA smile that lights up every place. 🌟❤️`,
        `Stars align on this blessed night,\nFor ${name}'s birthday — oh what a sight!\nWith every candle, make a wish come true,\nThe whole world is celebrating you! 🎆✨`,
    ];
    return poems[Math.floor(Math.random() * poems.length)];
}

export const moods = [
    { id: 'emotional', name: 'Emotional', emoji: '🥹' },
    { id: 'funny', name: 'Funny', emoji: '😄' },
    { id: 'romantic', name: 'Romantic', emoji: '💕' },
    { id: 'royal', name: 'Royal', emoji: '👑' }
];
