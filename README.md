ragadjust
==========

A bit of JavaScript to automatically fix the rag of any body of text. Where you allow your lines to break in a block of text can be very important for readability, and quite tricky within a fluid layout. With this script you can set how and where you want your lines to break, creating a much more pleasing text rag.

This repository is a fork of Nathan Ford's work and was adapted to french by implementing support for diacritics and french prepositions. Nicolas Taffin helped me a lot in solving the bugs around regex, and turning this script into a Pagedjs handler; because yes, it also works with [Pagedjs](https://pagedjs.org/)!



## Setup

### With a regular webpage

First, link to the script in your HTML.

```HTML

…

<script src="./js/ragadjust.js" type="text/javascript"></script>

</body>
</html>

```

Then, in your own JavaScript, set the parameters:

```HTML

…

<script src="./js/ragadjust.js" type="text/javascript"></script>
<script type="text/javascript">

	ragadjust('p, li, dd', ['articles, prepositions'], ['en', 'mon']);

</script>

</body>
</html>

```

### With Pagedjs

After setting up a Pagedjs project, you have to link the handler to your HTML at the end of your `body` tag.

```HTML

…

<script src="./js/ragadjust-hook.js" type="text/javascript"></script>

</body>
</html>

```

Then, you'll have to edit the parameters of the `ragadjust-hook.js` file in order for it to match your needs.

## Parameters

There are only three parameters to set:

```JS
ragadjust(elements, method, exceptions);
```

* __Elements__ – A CSS selector list of the elements you wish to modify.
* __Method__ – Choose which rag-adjust method you want to employ.
  - _all_ – Employs all methods.
  - _emphasis_ – Text of three or less words in bold or italics does not break across lines.
  - _small-words_ – Breaks lines before words of three or less characters.
  - _articles_ – Breaks lines before articles.
  - _conjunctions_ – Breaks lines before conjunctions.
  - _determiners_ – Breaks lines before determiners.
  - _short_prepositions_ – Breaks lines before short prepositions.
  - _prepositions_ – Breaks lines before the other prepositions.
  - _pronouns_ – Breaks lines before pronouns.
  - _dashes_ – Breaks lines before hyphens and dashes.
* __Exceptions__ – Specify a list of exceptions among the words that were picked for processing.

## Support

Rag Adjust will work in all modern browsers and IE8+.

## Appendix: Semantic breaks matched

Articles
* un
* une
* le
* la
* les
* du
* de
* des
* au
* aux

Determiners
* ce
* ces
* cet
* cette
* mes
* tes
* ses
* mon
* ton
* ma
* ta
* son
* sa
* notre
* votre
* leur
* nos
* vos
* leurs

Pronouns
* je
* tu
* il
* elle
* on
* nous
* vous
* ils
* elles

Conjunctions
* mais
* où
* et
* donc
* or
* ni
* car
* ou

Short prepositions
* à
* y
* en
* de
* sur
* par

Other prepositions
* après
* avant
* avec
* chez
* concernant
* contre
* dans
* depuis
* derrière
* dès
* durant
* entre
* hormis
* jusqu'à
* jusque
* loin
* malgré
* moyennant
* outre
* parmi
* pour
* près
* sans
* selon
* sous
* suivant
* touchant
* très
* vers
