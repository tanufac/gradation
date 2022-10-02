'use strict';

const p = document.getElementById('paragraph');
const heading = document.getElementById('heading');

const options = {
  threshold:buildThresholdList()
};

const observer = new IntersectionObserver(showElement, options);

observer.observe(p);

function buildThresholdList(){
  let thresholds = [];
  let numSteps = 20;
  for (let i = 1; i<= numSteps; i++){
    let ratio = i / numSteps;
    thresholds.push(ratio);
  }
  return thresholds;
}

// function showElement(){
//   console.log('hey');
//   heading.style.opacity = 1;
// }

function showElement(entries){
  entries.forEach((entry) => {
    if(entry.isIntersecting){
      let ratio = 
      Math.round(entry.intersectionRatio * 100);

      const heading = document.getElementById('heading');
        heading.style.backgroundImage = `
          linear-gradient(
            45deg,
            rgb(255,47,137) ${0 - ratio}%,
            rgb(226, 192, 226) ${100 - ratio}%,
            rgb(255,47,137) ${200 - ratio}%
        )
      `;
    }
  });
  heading.style.opacity = 1;

}