build:
	docker build -t jesse-website .
dev:
	docker-compose up dev
prod:
	docker-compose up prod
