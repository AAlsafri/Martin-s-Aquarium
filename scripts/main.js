import { fishList } from "./fishList.js";
import { tipList } from "./tipList.js";
import { locationList } from "./locationList.js";
import { mostHolyFish, soldierFish, regularFish } from "./fishList.js";

const fishHTML = fishList();
document.querySelector("#fishList").innerHTML = fishHTML;

const tipHTML = tipList();
document.querySelector("#tipList").innerHTML = tipHTML;

const locationHTML = locationList();
document.querySelector("#locationList").innerHTML = locationHTML;

const holyFishHTML = mostHolyFish();
const soldierFishHTML = soldierFish();
const regularFishHTML = regularFish();

const fishListContainer = document.getElementById("fishList");
fishListContainer.innerHTML = `<h2>Fish</h2>${holyFishHTML}${soldierFishHTML}${regularFishHTML}`;
