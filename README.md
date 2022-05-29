Rag Adjust
==========

A bit of JavaScript to automatically fix the rag of any body of text. Where you allow your lines to break in a block of text can be very important for readability, and quite tricky within a fluid layout. With this script you can set how and where you want your lines to break, creating a much more pleasing text rag. This repository is a fork of Nathan Ford's work and was adapted to french by implementing support for diacritics and french prepositions.

## Setup

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

	ragadjust('p, li, dd', 'all');

</script>

</body>
</html>

```

## Parameters

There are only two parameters to set:

```JS
ragadjust(elements, method);
```

* __Elements__ – A CSS selector list of the elements you wish to modify.
* __Method__ – Choose which rag-adjust method you want to employ.
  - _emphasis_ – Text of three or less words in bold or italics does not break across lines.
  - _small-words_ – Breaks lines before words of three or less characters.
  - _prepositions_ – Breaks lines before prepositions.
  - _dashes_ – Breaks lines before hyphens and dashes.

## Support

Rag Adjust will work in all modern browsers and IE8+.

## Appendix: Prepositions matched

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
