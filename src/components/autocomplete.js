const autocomplete = document.getElementById('autocomplete')
const data = document.getElementById('autocomplete-data')

const Default = {
    // optional
    label: {
        text: 'Recent',
        classes: 'px-5 mb-3 font-semibold text-gray-900'
    },
    containerClasses: 'absolute bg-white border mt-2 border-gray-200 rounded-lg z-[60] text-gray-500 text-sm py-3 w-full hidden',
    menuClasses: 'font-medium text-gray-500',
    menuItemClasses: 'flex items-center py-2 px-5 cursor-pointer hover:bg-gray-100',
    onHide: () => { }
}

class Autocomplete {
    constructor(inputEl = null, source = [], options = {}) {
        this._inputEl = inputEl
        this._source = source
        this._containerEl = null
        this._options = { ...Default, ...options }
        this._init()
    }

    _init() {
        this._initMenu()

        this._inputEl.addEventListener('focus', () => {
            this.showMenu()
        })

        this._inputEl.addEventListener('blur', () => {
            // this.hideData()
        })
    }

    _initMenu() {
        const containerEl = document.createElement('div')
        containerEl.classList.add(...this._options.containerClasses.split(" "))

        const labelEl = document.createElement('div')
        labelEl.innerHTML = this._options.label.text
        labelEl.classList.add(...this._options.label.classes.split(" "))

        const menuEl = document.createElement('ul')
        menuEl.setAttribute('role', 'listbox')
        menuEl.classList.add(...this._options.menuClasses.split(" "))

        containerEl.appendChild(labelEl)

        console.log(this._source)

        this._source.map((s, i) => {
            console.log(s)
            console.log(i)
            const itemEl = this._createItemEl(s, i)
            menuEl.appendChild(itemEl)
        })

        labelEl.after(menuEl)
        this._inputEl.after(containerEl)

        // set container el to get reference
        this._containerEl = containerEl

        console.log(containerEl)
    }

    _createItemEl(source, index) {
        const itemEl = document.createElement('li')
        itemEl.setAttribute('role', 'presentation')
        itemEl.setAttribute('tabindex', -1)
        itemEl.setAttribute('aria-posinset', index)
        itemEl.setAttribute('aria-selected', 'false')
        itemEl.classList.add(...this._options.menuItemClasses.split(" "))
        itemEl.innerHTML = `${source.icon} <span>${source.value}</span>`

        return itemEl
    }

    showMenu() {
        this._containerEl.classList.remove('hidden')


        // Object.values(this._dataEl.options).map(o => {
        //     o.classList.add('block')
        // })
    }

    hideData() {
        // this._dataEl.classList.remove('block')
    }

} 

window.Autocomplete = Autocomplete;

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('[data-autocomplete]').forEach(inputEl => {
        const menuEl = document.getElementById(inputEl.getAttribute('data-autocomplete'))

        new Autocomplete(inputEl, menuEl, {})
    })
})

const autocompleteEl = document.getElementById('autocomplete-js')

new Autocomplete(autocompleteEl, [
    {
        icon: `<svg class="mr-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>`,
        value: 'United States',
    },
    {
        icon: `<svg class="mr-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>`,
        value: 'United Kingdom',
    },
    {
        icon: `<svg class="mr-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>`,
        value: 'France',
    },
    {
        icon: `<svg class="mr-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>`,
        value: 'United States',
    },
    {
        icon: `<svg class="mr-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>`,
        value: 'United Kingdom',
    },
    {
        icon: `<svg class="mr-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>`,
        value: 'France',
    },
])

export default Autocomplete

/*
autocomplete.onfocus = function () {
    data.style.display = 'block';
    autocomplete.style.borderRadius = "5px 5px 0 0";  
  };
  for (let option of data.options) {
    option.onclick = function () {
        autocomplete.value = option.value;
        data.style.display = 'none';
      autocomplete.style.borderRadius = "5px";
    }
  };

  autocomplete.oninput = function() {
    var text = autocomplete.value.toUpperCase();
    for (let option of data.options) {
      if(option.value.toUpperCase().indexOf(text) > -1){
        option.style.display = "block";
    }else{
      option.style.display = "none";
      }
    };
  }

  var currentFocus = -1;
  autocomplete.onkeydown = function(e) {
  if(e.keyCode == 40){
    currentFocus++
   addActive(data.options);
  }
  else if(e.keyCode == 38){
    currentFocus--
   addActive(data.options);
  }
  else if(e.keyCode == 13){
    e.preventDefault();
        if (currentFocus > -1) {
          if (data.options) 
          data.options[currentFocus].click();
        }
  }
}

function addActive(x) {
    if (!x) return false;
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) 
       currentFocus = (x.length - 1);
    x[currentFocus].classList.add("active");
  }
  function removeActive(x) {
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("active");
    }
  }

  */