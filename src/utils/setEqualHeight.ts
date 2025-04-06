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
  const cards: HTMLElement[] = Array.from(
    document.querySelectorAll(cardGroupSelector),
  );
  const images: HTMLImageElement[] = Array.from(
    document.querySelectorAll(`${cardGroupSelector} img`),
  );
  let imagesLoaded = 0;

  const runEqualHeight = (): void => {
    // Give layout a chance to fully settle
    requestAnimationFrame(() => {
      let maxHeight = 0;
      cards.forEach((card) => {
        card.style.height = 'auto'; // Reset
      });
      cards.forEach((card) => {
        maxHeight = Math.max(maxHeight, card.offsetHeight);
      });
      cards.forEach((card) => {
        card.style.height = `${maxHeight}px`;
      });
    });
  };

  if (images.length === 0) {
    runEqualHeight();
  } else {
    images.forEach((img) => {
      if (img.complete) {
        imagesLoaded++;
        if (imagesLoaded === images.length) {
          runEqualHeight();
        }
      } else {
        img.addEventListener('load', () => {
          imagesLoaded++;
          if (imagesLoaded === images.length) {
            runEqualHeight();
          }
        });
        img.addEventListener('error', () => {
          imagesLoaded++;
          if (imagesLoaded === images.length) {
            runEqualHeight();
          }
        });
      }
    });
  }
}
