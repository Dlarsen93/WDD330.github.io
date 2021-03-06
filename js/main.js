
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

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

function sendAlert() {
  alert("This is an alert() method!");
}

function scrollBottom() {
  window.scrollTo(0,5000);
}

function scrollBack() {
  window.scrollTo(0,50);
}
