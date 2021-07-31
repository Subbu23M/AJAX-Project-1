// Select the elements

const h1Element = document.querySelector('.h1Ele');
const h2Element = document.querySelector('.h2Ele');
const olElement = document.querySelector('.orderEle');

// User Event or Browser Event

window.onload = function () {
    // console.log('Hello,AJAX');

    const xhrObject = new XMLHttpRequest();

    xhrObject.open(
        "GET",
        "https://restcountries.eu/rest/v2/all?fields=name;capital;population"
    );

    xhrObject.send();

    xhrObject.onload = function () {
        const jsonData = JSON.parse(xhrObject.responseText);
        console.log(jsonData);

        h1Element.textContent = `Population for ${jsonData.length} Countries and its capitals`;
        h1Element.style.color = 'orange';
        h1Element.style.textAlign = 'center';

        // We should use for...loop to iterate on every element in the array
        for (let i = 0; i < jsonData.length; i++) {
            h2Element.textContent = `Country Name - Capital - Population`;

            const liElement = document.createElement('li');
            liElement.textContent = ` ${jsonData[i].name} - ${jsonData[i].capital} - ${jsonData[i].population}`;
            liElement.style.color = "#240046";
            liElement.style.fontSize = '1.1rem';

            // Syntax:parentElement.appendChild(ele)
            olElement.appendChild(liElement)
        }
    }
}