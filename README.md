# BW GRUPPO 7 - Settimana1-FS0124

## Welcome Page
Nella welcome page è stato impostato un form con una checkbox che ha come requisito essenziale 
la spunta per poter procedere alla pagina successiva (ovvero la Benchmark Page), usando questa funzione:
```function btnStart() {
  btnAdd.disabled = true;
  checkbox.addEventListener('click', function () {
    if (checkbox.checked) {
      btnAdd.disabled = false;
      btnAdd.classList.add('btnEnabled');
    } else {
      btnAdd.disabled = true;
      btnAdd.classList.remove('btnEnabled');
    }

  })
}```

