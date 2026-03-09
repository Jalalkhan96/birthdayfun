// Theme definitions

export const themes = {
    romantic: {
        id: 'romantic',
        name: 'Romantic',
        emoji: '💕',
        dataTheme: '', // default
        swatch: 'linear-gradient(135deg, #ff2d75, #7b2ff7)',
        particleColors: ['#ff2d75', '#7b2ff7', '#ff6b9d', '#c44dff', '#ff9ec4'],
        balloonColors: ['🎈', '💖', '🩷', '💜'],
    },
    friends: {
        id: 'friends',
        name: 'Friends Party',
        emoji: '🎉',
        dataTheme: 'friends',
        swatch: 'linear-gradient(135deg, #00d4ff, #7b2ff7)',
        particleColors: ['#00d4ff', '#7b2ff7', '#00ff88', '#ff6b9d', '#ffd700'],
        balloonColors: ['🎈', '🟢', '🔵', '🟡'],
    },
    royal: {
        id: 'royal',
        name: 'Royal Gold',
        emoji: '👑',
        dataTheme: 'royal',
        swatch: 'linear-gradient(135deg, #ffd700, #ff8c00)',
        particleColors: ['#ffd700', '#ff8c00', '#ffe066', '#fff5cc', '#b8860b'],
        balloonColors: ['🎈', '✨', '⭐', '🌟'],
    },
    cute: {
        id: 'cute',
        name: 'Cute Hearts',
        emoji: '🩷',
        dataTheme: 'cute',
        swatch: 'linear-gradient(135deg, #ff8fab, #ffc2d1)',
        particleColors: ['#ff8fab', '#ffc2d1', '#ffb3c6', '#ffd6e0', '#ff69b4'],
        balloonColors: ['🎈', '🩷', '💗', '🌸'],
    },
    minimal: {
        id: 'minimal',
        name: 'Minimal Elegant',
        emoji: '🤍',
        dataTheme: 'minimal',
        swatch: 'linear-gradient(135deg, #e0e0e0, #a0a0a0)',
        particleColors: ['#e0e0e0', '#a0a0a0', '#c0c0c0', '#ffffff', '#808080'],
        balloonColors: ['🎈', '🤍', '🖤', '⬜'],
    }
};

export function applyTheme(themeId) {
    const theme = themes[themeId] || themes.romantic;
    if (theme.dataTheme) {
        document.documentElement.setAttribute('data-theme', theme.dataTheme);
    } else {
        document.documentElement.removeAttribute('data-theme');
    }
    return theme;
}

export function getTheme(themeId) {
    return themes[themeId] || themes.romantic;
}
