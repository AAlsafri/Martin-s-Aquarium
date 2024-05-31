export const database = {
  fish: [
    {
      name: "Nemo",
      species: "Clownfish",
      length: 3,
      location: "Great Barrier Reef",
      diet: "Omnivore",
      image:
        "https://e7.pngegg.com/pngimages/186/254/png-clipart-disney-pixars-nemo-finding-nemo-marlin-animation-pixar-animation-orange-vertebrate-thumbnail.png",
    },
    {
      name: "Dory",
      species: "Blue Tang",
      length: 5,
      location: "Great Barrier Reef",
      diet: "Omnivore",
      image:
        "https://upload.wikimedia.org/wikipedia/en/a/ae/Dory_%28Finding_Nemo%29.png",
    },
    // Add more fish here
    {
      name: "Marlin",
      species: "Clownfish",
      length: 6,
      location: "Coral Sea",
      diet: "Omnivore",
      image: "https://example.com/images/marlin.jpg",
    },
    {
      name: "Bubbles",
      species: "Yellow Tang",
      length: 15,
      location: "Hawaiian Reefs",
      diet: "Herbivore",
      image: "https://example.com/images/bubbles.jpg",
    },
    {
      name: "Gill",
      species: "Moorish Idol",
      length: 9,
      location: "Indo-Pacific",
      diet: "Carnivore",
      image: "https://example.com/images/gill.jpg",
    },
    {
      name: "Deb",
      species: "Black and White Damselfish",
      length: 12,
      location: "Atlantic Ocean",
      diet: "Omnivore",
      image: "https://example.com/images/deb.jpg",
    },
    {
      name: "Bloat",
      species: "Pufferfish",
      length: 5,
      location: "Caribbean Sea",
      diet: "Carnivore",
      image: "https://example.com/images/bloat.jpg",
    },
    {
      name: "Peach",
      species: "Starfish",
      length: 6,
      location: "Pacific Ocean",
      diet: "Omnivore",
      image: "https://example.com/images/peach.jpg",
    },
    {
      name: "Gurgle",
      species: "Royal Gramma",
      length: 3,
      location: "Caribbean Sea",
      diet: "Omnivore",
      image: "https://example.com/images/gurgle.jpg",
    },
    {
      name: "Jacques",
      species: "Cleaner Shrimp",
      length: 5,
      location: "Atlantic Ocean",
      diet: "Omnivore",
      image: "https://example.com/images/jacques.jpg",
    },
    {
      name: "Anchor",
      species: "Hammerhead Shark",
      length: 18,
      location: "Indian Ocean",
      diet: "Carnivore",
      image: "https://example.com/images/anchor.jpg",
    },
    {
      name: "Bruce",
      species: "Great White Shark",
      length: 21,
      location: "Pacific Ocean",
      diet: "Carnivore",
      image: "https://example.com/images/bruce.jpg",
    },
    {
      name: "Chum",
      species: "Mako Shark",
      length: 9,
      location: "Atlantic Ocean",
      diet: "Carnivore",
      image: "https://example.com/images/chum.jpg",
    },
    {
      name: "Squirt",
      species: "Sea Turtle",
      length: 15,
      location: "Great Barrier Reef",
      diet: "Herbivore",
      image: "https://example.com/images/squirt.jpg",
    },
    {
      name: "Crush",
      species: "Sea Turtle",
      length: 30,
      location: "Great Barrier Reef",
      diet: "Herbivore",
      image: "https://example.com/images/crush.jpg",
    },
  ],
  tips: [
    {
      topic: "Water Temperature",
      text: "Maintain a consistent water temperature between 75-80°F (24-27°C) for most tropical fish.",
    },
    {
      topic: "Feeding",
      text: "Feed your fish a balanced diet to ensure they get all the necessary nutrients.",
    },
    // Add more tips here
  ],
  locations: [
    {
      name: "Great Barrier Reef",
      country: "Australia",
      description:
        "The Great Barrier Reef is the world's largest coral reef system, supporting a diverse array of marine life.",
    },
    {
      name: "Amazon River",
      country: "Brazil",
      description:
        "The Amazon River is home to a diverse range of fish species and is one of the world's longest rivers.",
    },
    // Add more locations here
  ],
};

// Functions to filter fish
export const mostHolyFish = () => {
  // Fish with lengths that are multiples of 3
  const holyFish = fishData.filter((fish) => fish.length % 3 === 0);
  return holyFish;
};

export const soldierFish = () => {
  // Fish with lengths that are multiples of 5
  const soldierFish = fishData.filter((fish) => fish.length % 5 === 0);
  return soldierFish;
};

export const regularFish = () => {
  // Fish with lengths that are not multiples of 3 or 5
  const regularFish = fishData.filter(
    (fish) => fish.length % 3 !== 0 && fish.length % 5 !== 0
  );
  return regularFish;
};
