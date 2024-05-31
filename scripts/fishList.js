import { database } from "./fishData.js";

export const fishList = () => {
  const fishes = database.fish;
  let fishHTML = "";

  for (const fish of fishes) {
    fishHTML += `
            <div class="fish-card">
                <img src="${fish.image}" alt="${fish.name}">
                <h3>${fish.name}</h3>
                <p>Species: ${fish.species}</p>
                <p>Length: ${fish.length} inches</p>
                <p>Location: ${fish.location}</p>
                <p>Diet: ${fish.diet}</p>
            </div>
        `;
  }

  fishHTML += `</div>`;
  return fishHTML;
};

export const mostHolyFish = () => {
  const holyFish = database.fish.filter((fish) => fish.length % 3 === 0);
  return holyFish
    .map(
      (fish) =>
        `<div class="fish-card"><h3>${fish.name}</h3><img src="${fish.image}" alt="${fish.name}"><p>Species: ${fish.species}</p><p>Length: ${fish.length}</p><p>Location: ${fish.location}</p><p>Diet: ${fish.diet}</p></div>`
    )
    .join("");
};

export const soldierFish = () => {
  const soldierFish = database.fish.filter((fish) => fish.length % 5 === 0);
  return soldierFish
    .map(
      (fish) =>
        `<div class="fish-card"><h3>${fish.name}</h3><img src="${fish.image}" alt="${fish.name}"><p>Species: ${fish.species}</p><p>Length: ${fish.length}</p><p>Location: ${fish.location}</p><p>Diet: ${fish.diet}</p></div>`
    )
    .join("");
};

export const regularFish = () => {
  const regularFish = database.fish.filter(
    (fish) => fish.length % 3 !== 0 && fish.length % 5 !== 0
  );
  return regularFish
    .map(
      (fish) =>
        `<div class="fish-card"><h3>${fish.name}</h3><img src="${fish.image}" alt="${fish.name}"><p>Species: ${fish.species}</p><p>Length: ${fish.length}</p><p>Location: ${fish.location}</p><p>Diet: ${fish.diet}</p></div>`
    )
    .join("");
};
