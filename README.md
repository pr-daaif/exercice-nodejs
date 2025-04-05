# Exercice 1
1. Initialiser une application nodejs, et y ajouter un serveur web `server.js``
2. Ajouter un fichier `bigfile.txt`dans la racine du projet à dréer à l'aide de `fs.createWriteStream`
3. Quand l'utilisateur accède au site avec le path `/docs`, evoyez-lui comme réponse le fichier `bigfile.txt`en streaming
4. Ajouter un fichier `form.html`qui va contenir deux champs `nom`et `cv` et si l'utilisateur charge ce fichier sur le chemin `/form`, le renseigne en ajoutant un nom et un fichier texte, et apuis sur **Envoyer**, on affiche au dessous du formulaire l'écho de ce que le serveur a reçu dans une balise `pre`