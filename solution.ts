export function howMuchILoveYou(petals: number): string{
  if(petals <= 0) {
    return "";
  }
  const phrases = ["I love you","a little","a lot","passionately","madly","not at all"];
  return phrases[(petals - 1) % phrases.length];
}