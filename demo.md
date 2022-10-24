---
author: Nathan
description: Rag Adjust demo
title: Rag Adjust demo
---

Utiliser Ragged Ajust Fr
==========

#### par Mark Boulton

Vous vous intéressez à la typographie, non ? *Vous vous intéressez aux mots et à leur apparence, de leur lecture et de leur compréhension. Si vous [ramassez un livre ou un magazine](#), vous vous remarquez le moment où quelque chose n'est pas à sa place ; une orpheline, des lézardes dans des lézardes dans des paragraphes de prose justifiée, ou des majuscules qui se font passer pour des petites majuscules. Alors, pourquoi, je vous le demande, votre position est-elle différente sur le web ?

On nous répète sans cesse qu'en tant que créateur de sites web, nous devons doit s'habituer à son manque de contrôle. Sur le web, c'est une fonctionnalité, pas un bug. Mais cela ne signifie pas que nous devons abaisser nos ou que nous ne devons pas nous efforcer d'atteindre le même niveau d'art typographique que nos cousins imprimés. cousins imprimés. Nous ne devrions pas laisser une bonne composition à la porte parce que nous ne pouvons pas contrôler la longueur des lignes.

Lorsque je composais des livres, je passais des heures à manipuler le bon chiffon pour pour créer un flux agréable de ligne en ligne. Maximiser l'espace disponible, mais en veillant à ce qu'il n'y ait pas de coupures de lignes ou de mots orphelins qui qui perturbent le flux de la lecture. La mise en place d'un bon chiffon repose sur un ensemble de directives - ou, dans le cas de la façon dont j'ai été enseigné, on appelait cela des appelées violations !

#### Violation 1. Ne jamais rompre une ligne immédiatement après une préposition

Les prépositions sont des mots importants et fréquemment utilisés en anglais. Elles relient les noms, les pronoms et d'autres mots dans une phrase. Et les liens ne doivent pas être rompus si vous pouvez l'éviter. Terminer une ligne sur une préposition rompt le lien d'un mot à l'autre et oblige le lecteur à faire plus d'efforts pour relier deux mots sur deux lignes. plus difficile de joindre deux mots sur deux lignes.

\

Par exemple :

> "Le récipient est pour le beurre"

La préposition ici est *pour* et montre la relation entre le beurre et le récipient. beurre et le récipient. Si cela était tapé sur une ligne et que le saut de ligne ligne et que le saut de ligne se trouvait après le mot *pour*, le lecteur devrait alors à la ligne suivante. La phrase ne serait pas fluide.

Il existe de nombreuses prépositions en anglais - environ 150 - mais seulement 70 environ sont utilisées. environ en usage.

#### Violation 2. Ne jamais rompre une ligne immédiatement après un tiret

Un tiret -- qu'il s'agisse d'un Em-dash ou d'un En-dash -- peut être utilisé comme une pause dans la lecture, ou comme tilisé ici, une pause dans la lecture. pause dans la lecture, ou comme utilisé ici, un point auquel vous introduisez quelque chose qui n'est pas dans le flux de la phrase. Comme un aparté. Terminer par une pause à la fin de la ligne aurait le même effet que de terminer par une préposition. préposition. Cela perturbe le flux de la lecture.

#### Violation 3. Pas de petits mots à la fin d'une ligne

Ne terminez pas une ligne par des petits mots. La plupart d'entre eux seront en fait couverts par la règle 1. Mais il y aura des exceptions. Ma règle générale ici est de ne pas laisser de mots de deux ou trois lettres à la fin d'une ligne.

#### Violation 4. Traits d'union

Dans les documents imprimés, les traits d'union sont utilisés à la fin des lignes pour joindre les mots ensemble au-dessus d'un saut de ligne. Il est surtout utilisé dans le corps du texte justifié, et vous aurez sans doute l'habitude de le voir. Vous avez sans doute l'habitude de le voir dans les journaux ou les romans. Une bonne règle est de ne pas autoriser plus de deux traits d'union consécutifs en fin de ligne.

Sur le Web, bien sûr, nous pouvons utiliser l'attribut CSS "trait d'union". Il est raisonnablement pris en charge, à l'exception de Chrome. Bien entendu, il fonctionne mieux lorsqu'il est combiné à un texte justifié pour conserver la marge de droite.

#### Violation 5. Ne pas rompre les mots accentués s'ils sont au nombre de trois ou moins

Si vous avez quelques mots accentués, par exemple :

> "Ce gâteau était **absolument délicieux** !".

Essayez de ne pas faire de coupure de mots entre eux. Il est important que le lecteur lise les trois mots en tant que groupe.

Comment faire tout cela sur le Web ?
------------------------------------

Toutes ces directives sont relativement faciles à mettre en œuvre sur papier. Mais qu'en est-il du Web ? Lorsque le contenu est versé dans un modèle à partir d'un CMS ? Eh bien, il y a des choses que nous pouvons faire. Voici votre nouvel ami, l'espace insécable. ou, comme vous le savez peut-être : &amp;nbsp;.

Les directives ci-dessus sont toutes basées sur une seule décision pour le compositeur ; "Quand dois-je rompre la ligne ?" 
Nous pouvons simplement parcourir un corps de texte et ajouter le nbsp; en nous basant sur ces séries de questions :

1.  Y a-t-il des prépositions dans le texte ? Si oui, ajoutez un &amp;nbsp; après elles.
2.  Y a-t-il des tirets ? Si oui, ajoutez un &amp;nbsp; après eux.
3.  Y a-t-il des mots de moins de trois caractères auxquels vous n'avez pas ajouté d'espaces ? Si oui, ajoutez un &amp;nbsp; après eux.
4.  Y a-t-il des groupes de mots accentués de deux ou trois mots ? Si oui, ajoutez un espace entre eux.

Pour un texte court, ce n'est pas un problème. Mais pour un texte plus long Mais pour les textes plus longs, c'est un peu difficile. De plus, comme je l'ai dit, de nombreux sites Web utilisent un système de gestion de contenu et placent simplement le texte dans un modèle. Que faire alors ? Nous ne pouvons pas attendre de nos créateurs de contenu qu'ils manient manuellement un chiffon droit en se basant sur ces directives. Dans ce cas, nous avons vraiment besoin que ce soit automatique.

Il n'y a aucune raison pour que, sur le web, nous ne puissions pas simplement passer la question la question "quand dois-je rompre la ligne ?" directement au navigateur par le biais d'un qui compare le texte à un ensemble de règles. En clair,
ce script pourrait être :

1.  Numérisez le texte pour ...
2.  Les prépositions. Si vous en trouvez, ajoutez &amp;nbsp; après elles. 3.  Pour les tirets. Si vous les trouvez, ajoutez &amp;nbsp; après eux.
4.  Les mots de moins de trois caractères qui ne sont pas des prépositions. S'ils sont trouvés, ajoutez &amp;nbsp; après eux.
5.  Les mots accentués qui se suivent entre un et trois trois mots. Si vous les trouvez, ajoutez &amp;nbsp; entre tous les mots.

[Ou utilisez simplement ce script](#)
-----------------------------