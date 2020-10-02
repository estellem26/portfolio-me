const changeTitle = () => {
    window.onblur = () => { document.title = "I miss you 👨‍💻" }
    window.onfocus = () => { document.title = "Estelle Martini" }
  }
  
  changeTitle();