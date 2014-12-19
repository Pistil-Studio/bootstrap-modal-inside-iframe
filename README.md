Boostrap modal inside iframe v1
===============================

Le script ajuste le positionnement de la modal quand cette dernière est affichée à l'intérieur d'une Iframe. 
En effet si l'utilisateur a scroller la page, et que le haut de l'iframe n'est plus visible, la modal s'affiche nativement en tout en haut de l'iframe.
Grace au script, la modal sera toujours affiché en haut de l'écran et non en haut de l'iframe.

The script ajust positionning of the modal when it called inside iframe, and the user have scrolled down the page.
The modal will be displayed on the top of the screen.


Documentation
=============

Il suffit d'inclure le fichier Javascript dans la page appelant la modal

Just include the JS file into the page who call the iframe.

```
<script src="boostrap-modal-inside-iframe.js"></script>
```
