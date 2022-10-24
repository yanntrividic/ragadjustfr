// TODO: 
// rendre l'outil multilingue grâce l'attribut lang
// ajouter un attribut permettant de whitelister des mots

// Elements in those lists have to be unique in order for the exceptions to work
arts = ["un", "une", "le", "la", "les", "du", "de", "des", "au", "aux"];
dets = ["ce", "ces", "cet", "cette", "mes", "tes", "ses", "mon", "ton", "ma", "ta", "son", "sa", "notre", "votre", "leur", "nos", "vos", "leurs"]
prons = ["je", "tu", "il", "elle", "on", "nous", "vous", "ils", "elles"];
conjs = ["mais", "où", "et", "donc", "or", "ni", "car", "ou"];
short_preps = ["à", "y", "en", "de", "sur", "par"]
preps = ["après", "avant", "avec", "chez", "concernant", "contre", "dans", "depuis", "derrière", "dès", "durant", "entre", "hormis", "jusqu'à", "jusque", "loin", "malgré", "moyennant", "outre", "parmi", "pour", "près", "sans", "selon", "sous", "suivant", "touchant", "très", "vers"];

case_sensitivity = true;

make_case_sensitive = function(l) {
	title_case = [];
	l.forEach(function (item, i) {
		var word = l[i];
		word = word[0].toUpperCase() + word.slice(1);
		title_case.push(word);
	  });
	return l.concat(title_case);
}

get_regex_from_array_of_words = function(l, exceptions) {
	exceptions.forEach(function (item, i) {
		if (l.indexOf(item) != -1) {
			l.splice(l.indexOf(item), 1);
		}
	});
	reg = case_sensitivity ? make_case_sensitive(l).join("|") : l.join("|")
	//console.log(reg)
	return reg
}

build_regex_from_words = function(l, exceptions) {
	return new RegExp("(\\s|^|>)((" + get_regex_from_array_of_words(l, exceptions) + ")\\s)" , 'g');
}

ragadjust = function(s, method, exceptions) {

	if (document.querySelectorAll) {

		var eles = document.querySelectorAll(s),
				elescount = eles.length,

				// Structure : /(\s|^|>)((mot1|mot2|Mot1|Mot2)\s)+/g,
				dictionary = { // Is used to perform the same operations over each of those words
					"articles": build_regex_from_words(arts, exceptions),
					"determinants": build_regex_from_words(dets, exceptions),
					"pronoms": build_regex_from_words(prons, exceptions),
					"conjonctions": build_regex_from_words(conjs, exceptions),
					"prepositions_courtes": build_regex_from_words(short_preps, exceptions),
					"prepositions": build_regex_from_words(preps, exceptions),
				}

				smallwords = /(\s|^)(([a-zA-ZÀ-ž-_(]{1,2}('|’)*[a-zA-ZÀ-ž-_,;]{0,1}?\s)+)/gi, // words with 3 or less characters

				dashes = /([-–—])\s/gi,

				emphasis = /(<(strong|em|b|i)>)(([^\s]+\s*){2,3})?(<\/(strong|em|b|i)>)/gi;

				//orphans = /(.|&#160;)[^\s|^&#160;]+$/gi;

		while (elescount-- > 0) {

			var ele = eles[elescount],
					elehtml = ele.innerHTML;
			
			for (const [key, value] of Object.entries(dictionary)) {
				if (method.indexOf(key) != -1 || method.indexOf('all') != -1) 
					elehtml = elehtml.replace(value, function(contents, p1, p2) {
						return p1 + p2.replace(/\s/g, '&#160;')
					});		
			}		

			if (method.indexOf('small-words') != -1 || method.indexOf('all') != -1) 

				// replace small words
				elehtml = elehtml.replace(smallwords, function(contents, p1, p2) {
					return contents.replace(/\s/gi, '&#160;');
				});

			if (method.indexOf('dashes') != -1 || method.indexOf('all') != -1) 

				// replace small words
				elehtml = elehtml.replace(dashes, function(contents) {
					return contents.replace(/\s/gi, '&#160;');
				}); 

			if (method.indexOf('emphasis') != -1 || method.indexOf('all') != -1) 

				// emphasized text
				elehtml = elehtml.replace(emphasis, function(contents, p1, p2, p3, p4, p5) {
					return p1 + p3.replace(/\s/gi, '&#160;') + p5;
				});

			// doesn't work :(
			// if (method.indexOf('orphans') || method.indexOf('all'))

			// 	// no single words on there own last line
			// 	elehtml = elehtml.replace(orphans, function(contents) {
			// 	 	return contents.replace(/(\s|^&#160;)/, '&#160;')
			// 	});

			ele.innerHTML = elehtml;

		}

	}

};
