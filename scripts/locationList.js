import { database } from "./fishData.js";

export const locationList = () => {
  const locations = database.locations;
  let locationsHTML = '<article class="locations">';

  for (const location of locations) {
    locationsHTML += `
            <section class="location">
                <h3>${location.name}</h3>
                <p>Country: ${location.country}</p>
                <p>${location.description}</p>
            </section>
        `;
  }

  locationsHTML += "</article>";
  return locationsHTML;
};
