document.addEventListener('DOMContentLoaded', () => {

    const headings = document.querySelectorAll('#content h3')
    if (headings && headings.length) {

        let tableOfContentInner = ''
        headings.forEach((heading, i) => {
        
        tableOfContentInner += `<li><a href="#section_${i}">${heading.textContent}</a></li>`
        const originalHeadingContent = heading.innerHTML
        const anchor = `<a class="offset-anchor" id="section_${i}"></a>`
        
        heading.innerHTML = anchor + originalHeadingContent
        })

        const tableOfContent = `<ol>${tableOfContentInner}</ol>`
        document.querySelector('#table-of-content').innerHTML += tableOfContent

        if (location.hash) {
        const target = location.hash
        const offsetY = document.querySelector(target).offsetTop
        window.scrollTo(0, offsetY)
  }
}})

/*const links = [
    {
        label: "Notes",
        url: "Week1/index.html",
        weekHeading: "Week 1"
    },
    {
        label: "Week 2 notes",
        url: "week2/notes.html"
    },
    {
        label: "Week 3 notes",
        url: "week3/apps.html"
    },
];

const ol = document.querySelector('ol');

for (const item of links) {
    const heading = document.createElement('h3');
    const li = document.createElement('li');
    const a = document.createElement('a');
    li.setAttribute('href', item.url);
    a.textContent = item.label;
    //heading.textContent = item.lebel;

    //h3.appendChild(h3);
    li.appendChild(a);
    ol.appendChild(li);
}

var lastEdit = document.lastModified;
document.getElementById("lastModified").textContent = lastEdit;*/
