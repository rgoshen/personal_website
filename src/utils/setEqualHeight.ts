/**
 * Adjusts the height of elements in a given group to match the height of the tallest element.
 *
 * This function is useful for setting consistent heights across a group of cards or elements
 * to ensure a clean and uniform layout.
 *
 * @param {string} cardGroupSelector - The CSS selector for the group of elements (e.g., cards) to equalize in height.
 *
 * @returns {void} This function does not return a value; it directly modifies the styles of the elements.
 */
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
