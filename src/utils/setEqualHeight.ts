export function setEqualHeight(cardGroupSelector: string): void {
  const cards = document.querySelectorAll<HTMLElement>(cardGroupSelector);
  let maxHeight = 0;

  // Reset heights to calculate the tallest card accurately
  cards.forEach((card) => {
    card.style.height = 'auto';
  });

  // Calculate the tallest card height
  cards.forEach((card) => {
    maxHeight = Math.max(maxHeight, card.offsetHeight);
  });

  // Set all cards to the tallest card height
  cards.forEach((card) => {
    card.style.height = `${maxHeight}px`;
  });
}
