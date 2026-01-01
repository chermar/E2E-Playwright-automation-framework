export function randomThreeDigits(): string {
  return Math.floor(100 + Math.random() * 900).toString(); // 100–999
}