


const inp = document.querySelectorAll('.inp')
const btn = document.querySelector('.btn')
const tbody = document.querySelector('.tbody')





function saveItem(event) {
    let array = []
    inp.forEach(event => {
        array.push(event.value)
    })
    localStorage.setItem(array[0], array[1])
    const value = localStorage.getItem(array[0], array[1])
    const key = localStorage.key(array[0])
    const tr = document.createElement('tr')
    const td = document.createElement('td')
    const tdTwo = document.createElement('td')
    const btn = document.createElement('td')
    td.innerHTML = `${key}`
    tdTwo.innerHTML = `${value}`
    btn.innerHTML = `x`
    btn.className = 'btnDel'
    tr.append(td)
    tr.append(tdTwo)
    tr.append(btn)
    tbody.append(tr)
    event.preventDefault()
    const btnDel = document.querySelectorAll('.btnDel')
    btnDel.forEach(elem => {
        elem.addEventListener('click', function deleteItem() {
            elem.parentNode.remove()
        })
    })
}
btn.addEventListener('click', saveItem)





function clearStorage() {
    if (confirm('Точно хотите очистить хранилище?')) {
      localStorage.clear()
    }
  }
  
  document.getElementById('btn').addEventListener('click', () => {
    clearStorage()
    updateTable()
  })


function updateTable() {
        for (let i = 0; i < localStorage.length; i++) {
            const keyEl = localStorage.key(i)
            if (keyEl) {
                const tr = document.createElement('tr')
                const td = document.createElement('td')
                const tdTwo = document.createElement('td')
                const btn = document.createElement('td')
                td.innerHTML = `${keyEl}`
                tdTwo.innerHTML = `${keyEl}`
                btn.innerHTML = `x`
                btn.className = 'btnDel'
                tr.append(td)
                tr.append(tdTwo)
                tr.append(btn)
                tbody.append(tr)
                const btnDel = document.querySelectorAll('.btnDel')
                btnDel.forEach(elem => {
                    elem.addEventListener('click', function deleteItem() {
                        elem.parentNode.remove()
                    })
                })     
            } else {
                tbody.innerHTML = '<tr></tr>'
            }
        }
}

updateTable()