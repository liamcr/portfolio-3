## ADDED Requirements

### Requirement: Makefile provides a run command
A `Makefile` SHALL exist at the project root with a `run` target that builds the Docker image and starts a container from it.

#### Scenario: make run builds and starts the container
- **WHEN** a developer runs `make run` from the project root
- **THEN** the Docker image SHALL be built from `frontend/Dockerfile` and a container SHALL start with port 3000 mapped to the host

#### Scenario: App accessible after make run
- **WHEN** `make run` completes successfully
- **THEN** the Next.js app SHALL be accessible at `http://localhost:3000`
