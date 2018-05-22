const form = document.querySelector('form#userForm')

function renderColor(color){
  colorDiv.style.backgroundColor = color
  colorDiv.style.width = '6rem'
  colorDiv.style.height = '3rem'
  return colorDiv
}

function renderListItem(label,value){
  const item=document.createElement('li')
  item.textContent=`${label}:`
 try{
  item.appendChild(value)
  }catch(e){
    item.textContent+=value
  }
  return item
}

const handleSubmit = function(ev) {
  ev.preventDefault()
  const form = ev.target
  const user ={
    'Name': form.userName.value ,
    'Age': form.age.value,
    'Favorite Color':renderColor(form.favoriteColor.value),
  }

  const list = document.createElement('ul')

Object.keys(user).forEach(function(label){
const item =renderListItem(label, user[label])
list.appendChild(item)
})

  list.appendChild(renderListItem('Name',nameItem))
  list.appendChild(renderListItem('Age',age))
  list.appendChild(renderListItem('Favorite Color',renderColor(favoriteColor)))

  const users = document.querySelector('#users')
  users.appendChild(list)

  form.reset()
  form.userName.focus()
}

form.addEventListener('submit', handleSubmit)