import { database } from "./fishData.js";

export const fishList = () => {
  const fishes = database.fish;
  let fishHTML = "";

  for (const fish of fishes) {
    fishHTML += generateFishCardHTML(fish);
  }

  return fishHTML;
};

export const filterFish = (criteria) => {
  const filteredFish = database.fish.filter(criteria);
  return filteredFish.map(generateFishCardHTML).join("");
};

const generateFishCardHTML = (fish) => {
  return `
    <div class="fish-card">
        <img src="${fish.image}" alt="${fish.name}">
        <h3>${fish.name}</h3>
        <p>Species: ${fish.species}</p>
        <p>Length: ${fish.length} inches</p>
        <p>Location: ${fish.location}</p>
        <p>Diet: ${fish.diet}</p>
    </div>
  `;
};

export const mostHolyFish = () => {
  return filterFish((fish) => fish.length % 3 === 0);
};

export const soldierFish = () => {
  return filterFish((fish) => fish.length % 5 === 0);
};

export const regularFish = () => {
  return filterFish((fish) => fish.length % 3 !== 0 && fish.length % 5 !== 0);
};
