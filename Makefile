setup:
		npm install
install:
		npm ci
brain-games:
		node bin/brain-games.js
brain-even:
		node bin/brain-even.js
brain-calc:
		node bin/brain-calc.js
brain-gcd:
		node bin/brain-gcd.js
brain-progression:
		node bin/brain-progression.js
publish:
		npm publish --dry-run
npm-link:
		npm link
lint:
		npx eslint .	
lint-fix:
	npm run lint-fix