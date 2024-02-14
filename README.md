
# BW GRUPPO 7 - SETTIMANA 4 - FS0124

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

Nella feedback Page troviamo un interfaccia che fa scegliere una valutazione del test selezionando un numero di stelle con due funzionalità ciascuna facente riferimento ad un evento specifico, il passaggio sopra le stelle ed il click su di esse. 


```
 star.addEventListener('mouseover', () => {
        highlightStars(index);
    });

    star.addEventListener('click', () => {
        selectStar(index);
    });
```   


Inoltre c'è un input di testo con requisito essenziale l'inserimento di almeno un carattere


```
<input type="text" id="comment" placeholder="Write your comment here" required>
``` 


 per poter attivare il pulsante gestito esattamente come nella pagina di Welcome solo con il cambio della condizione del **IF**:


```
if (text.value.trim() !== '')
```


Questo button porta alla pagina di ringraziamento è verificato invio