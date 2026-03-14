.PHONY: run-prod run-dev

run-prod:
	docker build -t portfolio-frontend ./frontend
	docker run -p 3000:3000 portfolio-frontend

run-dev:
	cd frontend && npm run dev
