function addContact() {
  const contactSection = document.getElementById('contactsList')

  const h3 = document.createElement('h3')
  h3.innerText = 'Contato'

  const ul = document.createElement('ul')
  const nameLi = document.createElement('li')
  nameLi.innerText = 'Nome: '
  let nameInput = document.createElement('input')
  nameInput.type = 'text'
  nameInput.name = 'fullname'
  nameLi.appendChild(nameInput)
  ul.appendChild(nameLi)
  ul.appendChild(document.createElement('br'))

  const phoneLi = document.createElement('li')
  phoneLi.innerText = 'Telefone: '
  const phoneInput = document.createElement('input')
  phoneInput.type = 'number'
  phoneInput.name = 'phone'
  phoneLi.appendChild(phoneInput)
  ul.appendChild(phoneLi)
  ul.appendChild(document.createElement('br'))
  contactSection.append(h3, ul)

  const addressLi = document.createElement('li')
  addressLi.innerText = 'Endereço: '
  const addressInput = document.createElement('input')
  addressInput.type = 'text'
  addressInput.name = 'addressContact'
  addressLi.appendChild(addressInput)
  ul.appendChild(addressLi)
  ul.appendChild(document.createElement('br'))
}


function remContact() {
  const contactSection = document.getElementById('contactsList')

  const titles = document.getElementsByTagName('h3')
  const contacts = document.getElementsByTagName('ul')

  contactSection.removeChild(titles[titles.length - 1])
  contactSection.removeChild(contacts[contacts.length - 1])
}

document.getElementById('newContactBtn').addEventListener('click', addContact)
document.getElementById('removeContactBtn').addEventListener('click', remContact)
