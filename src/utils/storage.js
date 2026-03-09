// Birthday data storage using localStorage

const STORAGE_KEY = 'birthday_wishes';

export function generateId() {
    return Math.random().toString(36).substring(2, 15) + Date.now().toString(36);
}

export function saveBirthday(data) {
    const wishes = getAllBirthdays();
    const id = generateId();
    const entry = { id, ...data, createdAt: Date.now() };
    wishes[id] = entry;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(wishes));
    return id;
}

export function getBirthday(id) {
    const wishes = getAllBirthdays();
    if (wishes[id]) return wishes[id];

    // Fallback: try to decode from URL query params (bot-generated links)
    return getBirthdayFromUrl(id);
}

/**
 * Decode birthday data from URL query string.
 * Bot-generated URLs have format: #/birthday/ID?data=BASE64_ENCODED_JSON
 */
export function getBirthdayFromUrl(id) {
    try {
        const hash = window.location.hash;
        const queryStart = hash.indexOf('?');
        if (queryStart === -1) return null;

        const params = new URLSearchParams(hash.substring(queryStart));
        const dataParam = params.get('data');
        if (!dataParam) return null;

        // Decode base64url → JSON
        const jsonStr = atob(dataParam.replace(/-/g, '+').replace(/_/g, '/'));
        const data = JSON.parse(jsonStr);
        data.id = id;

        // Cache in localStorage for subsequent loads
        const wishes = getAllBirthdays();
        wishes[id] = { ...data, createdAt: Date.now() };
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(wishes));
        } catch {
            // localStorage might be full — that's ok
        }

        return data;
    } catch (e) {
        console.warn('Failed to decode URL birthday data:', e);
        return null;
    }
}

export function getAllBirthdays() {
    try {
        return JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
    } catch {
        return {};
    }
}

export function deleteBirthday(id) {
    const wishes = getAllBirthdays();
    delete wishes[id];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(wishes));
}

// Photo storage as base64 data URLs
export async function processPhotos(files) {
    const photos = [];
    const maxSize = 800; // max dimension in pixels for storage

    for (const file of files) {
        try {
            const dataUrl = await resizeImage(file, maxSize);
            photos.push(dataUrl);
        } catch (e) {
            console.warn('Failed to process photo:', e);
        }
    }
    return photos;
}

function resizeImage(file, maxDim) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = (e) => {
            const img = new Image();
            img.onload = () => {
                const canvas = document.createElement('canvas');
                let { width, height } = img;

                if (width > maxDim || height > maxDim) {
                    if (width > height) {
                        height = (height / width) * maxDim;
                        width = maxDim;
                    } else {
                        width = (width / height) * maxDim;
                        height = maxDim;
                    }
                }

                canvas.width = width;
                canvas.height = height;
                const ctx = canvas.getContext('2d');
                ctx.drawImage(img, 0, 0, width, height);
                resolve(canvas.toDataURL('image/jpeg', 0.75));
            };
            img.onerror = reject;
            img.src = e.target.result;
        };
        reader.onerror = reject;
        reader.readAsDataURL(file);
    });
}
