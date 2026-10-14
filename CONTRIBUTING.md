# Contributing to Visual House

Thank you for your interest in contributing to Visual House. We welcome contributions from developers, designers, and writers of all skill levels.

Please review this document to understand our contribution guidelines, development workflow, and coding conventions before submitting any changes.

---

## Code of Conduct

All contributors and participants are expected to adhere to our [Code of Conduct](CODE_OF_CONDUCT.md). Please report unacceptable behavior according to the instructions provided there.

---

## Getting Started

1. **Fork the Repository**: Create your own copy of the repository on GitHub.
2. **Clone the Fork**:
   ```bash
   git clone https://github.com/<your-username>/Visual_House.git
   cd Visual_House
   ```
3. **Add Upstream Remote**:
   ```bash
   git remote add upstream https://github.com/itzgauravgoswami/Visual_House.git
   ```
4. **Create a Topic Branch**:
   ```bash
   git checkout -b feature/your-feature-name
   # or
   git checkout -b fix/your-bug-fix
   ```

---

## Development Workflow

### Frontend Development

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the Next.js local development server:
   ```bash
   npm run dev
   ```
4. Run ESLint before committing:
   ```bash
   npm run lint
   ```

### Backend Development

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the backend service:
   ```bash
   npm run dev
   ```

---

## Branching Strategy

We follow a structured Git branching workflow:

- `main`: Production-ready, stable codebase.
- `feature/<description>`: New features, components, or major functional additions.
- `fix/<description>`: Bug fixes and patches.
- `refactor/<description>`: Code restructuring without functional changes.
- `docs/<description>`: Documentation additions, updates, or fixes.
- `chore/<description>`: Dependency updates, build script adjustments, configuration changes.

---

## Commit Message Conventions

We adhere to the Conventional Commits specification. Ensure your commit messages are clear, descriptive, and formatted as follows:

```text
<type>(<scope>): <short summary>

[optional body providing deeper context]

[optional footer(s) such as Closes #123]
```

### Supported Commit Types

- `feat`: A new feature or user-facing enhancement.
- `fix`: A bug fix.
- `docs`: Documentation changes only.
- `style`: Formatting changes that do not affect code logic (semicolons, whitespace).
- `refactor`: Code changes that neither fix a bug nor add a feature.
- `perf`: Performance improvements.
- `test`: Adding or correcting tests.
- `chore`: Maintenance tasks, dependency updates, build tooling.

### Examples

- `feat(portfolio): add filter by category interaction`
- `fix(intro): resolve canvas aspect ratio distortion on mobile viewports`
- `docs(readme): expand installation instructions for monorepo setup`
- `perf(hero): optimize framer motion ambient animation render loop`

---

## Pull Request Guidelines

1. **Sync with Upstream**:
   Before opening a pull request, ensure your branch is up to date:
   ```bash
   git checkout main
   git pull upstream main
   git checkout your-branch-name
   git rebase main
   ```
2. **Verify Code Quality**:
   - Ensure `npm run lint` passes without errors or warnings.
   - Test responsive layouts across mobile, tablet, and desktop breakpoints.
   - Verify that no console errors or warnings appear during execution.
3. **Open the Pull Request**:
   - Use a concise, descriptive PR title following conventional commit style.
   - Complete the pull request template with description, testing steps, and relevant issue links.
   - Keep pull requests focused on a single responsibility.

---

## Code Quality and Style Guidelines

### React and Next.js Standards

- Use the Next.js App Router paradigm and React Server Components where suitable. Mark client components explicitly with `"use client";`.
- Prefer reusable, modular components located under `frontend/src/components/`.
- Maintain clean separation between presentation components and application logic.
- Avoid inline styles; utilize Tailwind CSS utility classes and design tokens defined in `globals.css`.
- Ensure all interactive elements have accessible keyboard navigation, unique identifiers, and appropriate aria attributes.

### Naming Conventions

- **Components**: PascalCase (e.g., `AboutSection.jsx`, `IntroAnimation.jsx`).
- **Utility functions**: camelCase (e.g., `cn()`, `drawFrame()`).
- **Constants**: UPPER_SNAKE_CASE (e.g., `SERVICES_DATA`, `TOTAL_FRAMES`).
- **CSS Classes**: Lowercase kebab-case or Tailwind utility classes.

---

## Reporting Issues

If you discover a bug or want to suggest an enhancement, please open an issue on GitHub:

- **Bug Reports**: Use the Bug Report template. Include OS, browser version, reproduction steps, and expected behavior.
- **Feature Requests**: Use the Feature Request template. Describe the use case, suggested solution, and any alternatives considered.

Thank you for helping make Visual House better.
