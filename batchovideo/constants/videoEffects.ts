
export const VIDEO_EFFECTS = [
    { id: 'none', name: 'None' },
    { id: 'bw', name: 'Black & White' },
    { id: 'kodachrome', name: 'Kodachrome' },
    { id: 'astia', name: 'Astia' },
    { id: 'polaroid', name: 'Polaroid' },
    { id: 'technicolor', name: 'Technicolor' },
    { id: 'vintage', name: 'Vintage' },
    { id: 'noir', name: 'Noir' },
    { id: 'dramatic', name: 'Dramatic' },
    { id: 'cyberpunk', name: 'Cyberpunk' },
    { id: 'cinematic', name: 'Cinematic' }
];

export const getEffectConfig = (effectId: string) => {
    switch (effectId) {
        case 'bw':
            return {
                contrast: 0,
                saturation: -1,
                brightness: 0
            };
        case 'kodachrome':
            return {
                contrast: 20,
                saturation: 0.3,
                brightness: 0,
                red: 20,
                green: 0,
                blue: -10
            };
        case 'astia':
            return {
                contrast: 5,
                saturation: 0.1,
                brightness: 0.05,
                red: 5,
                green: 0,
                blue: 5
            };
        case 'polaroid':
            return {
                contrast: -10,
                saturation: -0.2,
                brightness: 0.1,
                red: 10,
                green: 10,
                blue: 0
            };
        case 'technicolor':
            return {
                contrast: 30,
                saturation: 0.5,
                brightness: -0.05,
                red: 30,
                green: -10,
                blue: -10
            };
        case 'vintage':
            return {
                contrast: -20,
                saturation: -0.4,
                brightness: 0,
                red: 30,
                green: 20,
                blue: -10
            };
        case 'noir':
            return {
                contrast: 50,
                saturation: -1,
                brightness: -0.1
            };
        case 'dramatic':
            return {
                contrast: 40,
                saturation: -0.2,
                brightness: -0.05,
                red: -10,
                green: -10,
                blue: 20
            };
        case 'cyberpunk':
            return {
                contrast: 20,
                saturation: 0.4,
                brightness: 0,
                red: -10,
                green: -20,
                blue: 40
            };
        case 'cinematic':
            return {
                contrast: 15,
                saturation: -0.1,
                brightness: -0.05,
                red: 0,
                green: 0,
                blue: 10
            };
        default:
            return null;
    }
};
