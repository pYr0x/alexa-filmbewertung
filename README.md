[![Build Status](https://travis-ci.org/pYr0x/alexa-imdb.svg?branch=master)](https://travis-ci.org/pYr0x/alexa-imdb)
---
## Alexa IMDb Skill


Ihr seht die Vorschau eines Films im TV oder beim Stöbern im Internet und möchtet gerne wissen ob es sich lohnt diesen Film im Kino anzuschauen oder in bei Amazon auszuleihen.
Frag doch einfach Alexa nach diesem Film und erhalte die IMDB (http://www.imdb.com/) Bewertung.

Frage zum Beispiel nach dem Film "Matrix":
"Alexa, frag IMDB wie wurde Matrix bewertet."
Alexa gibt ließt dir eine Liste mit allen 3 Matrix Filmen vor. Entscheide danach welchen Film du gemeint hast.

Um Alexa eine genauere Suche zu ermöglichen gib das Erscheinungsjahr mit an. Sage zum Bespiel:
"Alexa, frag IMDB wie Herr der Ringe aus dem Jahr 2001 bewertet wurde."
Alexa gibt dir nun aus der Triologie gleich den richtigen Film und dessen Bewertung.

Weißt du mal nicht weiter, sage einfach "Hilfe" und Alexa gibt dir Hinweise wie du fortfahren kannst.


### Utterances
```
SearchIntent    welche Bewertung {MOVIE} hat
SearchIntent    welche Bewertung {MOVIE} von {YEAR} hat
SearchIntent    welche Bewertung {MOVIE} aus dem Jahr {YEAR} hat
SearchIntent    {MOVIE} von {YEAR}
SearchIntent    welche Bewertung hat {MOVIE} von {YEAR}
SearchIntent    {MOVIE} aus dem Jahr {YEAR}
SearchIntent    welche Bewertung hat {MOVIE} aus dem Jahr {YEAR}
SearchIntent    wie wurde {MOVIE} bewertet
SearchIntent    wie wurde {MOVIE} von {YEAR} bewertet
SearchIntent    wie wurde {MOVIE} aus dem Jahr {YEAR} bewertet
SearchIntent    wie {MOVIE} bewertet wurde
SearchIntent    wie {MOVIE} von {YEAR} bewertet wurde
SearchIntent    wie {MOVIE} aus dem Jahr {YEAR} bewertet wurde
SearchIntent    {MOVIE}
SearchIntent    {MOVIE} von {YEAR}
SearchIntent    {MOVIE} aus dem Jahr {YEAR}
ChooseIntent    {ENUMERATION}
ChooseIntent    {ENUMERATION} Titel
ChooseIntent    {ENUMERATION} Film
RepeatIntent    Wiederhole alle nochmal
RepeatIntent    Wiederhole die nochmal
RepeatIntent    Wiederhole alle Titel nochmal
RepeatIntent    Wiederhole die Titel nochmal
RepeatIntent    Wiederhole alle Filme nochmal
RepeatIntent    Wiederhole die Filme nochmal
RepeatIntent    Wiederhole alle nochmals
RepeatIntent    Wiederhole die nochmals
RepeatIntent    Wiederhole alle Titel nochmals
RepeatIntent    Wiederhole die Titel nochmals
RepeatIntent    Wiederhole alle Filme nochmals
RepeatIntent    Wiederhole die Filme nochmals
RepeatIntent    nochmal
RepeatIntent    nochmals
BackIntent    Zurück
```

---
[Apache License 2.0](LICENSE)