import { database } from "./fishData.js";

export const tipList = () => {
  const tips = database.tips;
  let tipsHTML = '<ul class="tips">';

  for (const tip of tips) {
    tipsHTML += `
            <li class="tip">
                <h3>${tip.topic}</h3>
                <p>${tip.text}</p>
            </li>
        `;
  }

  tipsHTML += "</ul>";
  return tipsHTML;
};
