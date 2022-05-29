ragadjust = function (s, method) {

	if (document.querySelectorAll) {

		var eles = document.querySelectorAll(s),
				elescount = eles.length,

				preps = /(\s|^|>)((après|avant|avec|chez|concernant|contre|dans|depuis|derrière|dès|durant|entre|hormis|jusqu'à|jusque|loin|malgré|moyennant|outre|parmi|pour|près|sans|selon|sous|suivant|touchant|très|vers)\s)+/gi,

				smallwords = /(\s|^)(([a-zA-ZÀ-ž-_(]{1,2}('|’)*[a-zA-ZÀ-ž-_,;]{0,1}?\s)+)/gi, // words with 3 or less characters

				dashes = /([-–—])\s/gi,

				emphasis = /(<(strong|em|b|i)>)(([^\s]+\s*){2,3})?(<\/(strong|em|b|i)>)/gi;

				//orphans = /(.|&#160;)[^\s|^&#160;]+$/gi;

		while (elescount-- > 0) {

			var ele = eles[elescount],
					elehtml = ele.innerHTML;

			if (method == 'prepositions' || method == 'all') 

				// replace prepositions (greater than 3 characters)
				elehtml = elehtml.replace(preps, function(contents, p1, p2) {
					return p1 + p2.replace(/\s/gi, '&#160;');
				});

			if (method == 'small-words' || method == 'all') 

				// replace small words
				elehtml = elehtml.replace(smallwords, function(contents, p1, p2) {
					return p1 + p2.replace(/\s/g, '&#160;');
				});

			if (method == 'dashes' || method == 'all') 

				// replace small words
				elehtml = elehtml.replace(dashes, function(contents) {
					return contents.replace(/\s/g, '&#160;');
				}); 

			if (method == 'emphasis' || method == 'all') 

				// emphasized text
				elehtml = elehtml.replace(emphasis, function(contents, p1, p2, p3, p4, p5) {
					return p1 + p3.replace(/\s/gi, '&#160;') + p5;
				});

			// doesn't work :(
			// if (method == 'orphans' || method == 'all')

			// 	// no single words on there own last line
			// 	elehtml = elehtml.replace(orphans, function(contents) {
			// 	 	return contents.replace(/(\s|^&#160;)/, '&#160;')
			// 	});

			ele.innerHTML = elehtml;

		}

	}

};
