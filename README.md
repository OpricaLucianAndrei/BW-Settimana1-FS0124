# BW GRUPPO 7 - Settimana4-FS0124

## Welcome Page

Nella welcome page troviamo le istruzioni per poter sostenere l'esame. All'interno troviamo una lista non ordinata in cui si evincono le condizioni ed è stato impostato un form con una checkbox che ha come requisito essenziale la spunta per poter procedere alla pagina successiva (ovvero la Benchmark Page), usando questa funzione:

```
function btnStart() {
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
}
```

## Benchmark Page


## Results Page


## Feedback Page