/*************************************************************** 
*Title: none
*Author: Andrewwoan
*Date: Nov 2022 
* Code version: none 
*Availability: https://github.com/andrewwoan/abigail-bloom-portolio-bokoko33/tree/master/Experience (Nov 2022) 
****************************************************************/ 

/* CONVERT EACH CHARACTER INTO SPAN: use for running character animation */
export default function (element) {
    element.style.overflow = "hidden";
    element.innerHTML = element.innerText
        .split("")
        .map((char) => {
            if (char === " ") {
                return `<span>&nbsp;</span>`;
            }
            return `<span class="animateThis">${char}</span>`;
        })
        .join("");

    return element;
}
