// randomly generate a 6 digit code

export function generateCode(): string {
    return Math.floor(100000 + Math.random() * 900000).toString();
}
