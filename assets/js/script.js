// const deepai = require('deepai'); // OR include deepai.min.js as a script tag in your HTML
import deepai from 'deepai';

deepai.setApiKey('your api key');

const searchInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-btn");
const resultImg = document.getElementById("result-img");

searchBtn.addEventListener("click", async function () {
    const searchQuery = searchInput.value;
    console.log(searchQuery)
    const resp = await deepai.callStandardApi("text2img", {
        text: searchQuery,
    });
    resultImg.src = resp.output_url;
});
