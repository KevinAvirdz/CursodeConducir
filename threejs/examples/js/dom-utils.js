export function createElementFromHTML(htmlString) {
  const div = document.createElement('div')
  div.innerHTML = htmlString.trim()
  return div.firstChild
}

// Add the title of the page on the top
export function addTitle() {
  const librariesUsed = document.title.slice(0, document.title.indexOf(' - '))
  const titleContent = document.title.slice(document.title.indexOf(' - ') + 3)

  const title = `
    <div class="page-title">
      
    </div>
  `

  const titleNode = createElementFromHTML(title)
  document.body.appendChild(titleNode)
}

// Create the view-source button on the bottom right
export function addSourceButton() {
  const exampleName = document.location.pathname.slice(document.location.pathname.lastIndexOf('/') + 1)
  const sourceUrl = `https://github.com/pmndrs/cannon-es/blob/master/examples/${exampleName}.html`

  const viewSourceButton = `
      
    `

  const buttonNode = createElementFromHTML(viewSourceButton)
  // document.body.appendChild(buttonNode)
}
