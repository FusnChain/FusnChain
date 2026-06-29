# Development Environment Setup

## System Requirements

- **OS**: Linux, macOS, or Windows (with WSL2)
- **Node.js**: v14 or higher
- **npm**: v6 or higher (or yarn v1.22+)
- **Git**: Latest version

## Installation Steps

### 1. Clone the Repository

```bash
git clone https://github.com/FusnChain/FusnChain.git
cd FusnChain
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Setup Environment Variables

```bash
cp .env.example .env
# Edit .env with your configuration
```

### 4. Verify Installation

```bash
npm run test
```

## IDE Setup

### VS Code

Recommended extensions:
- ESLint
- Prettier
- Solidity (if working with smart contracts)

### IntelliJ IDEA

Recommended plugins:
- Node.js
- ESLint
- Prettier

## Troubleshooting

Common issues and solutions:

- **Module not found**: Run `npm install` again
- **Port already in use**: Change the port in `.env`
- **Permission denied**: Use `sudo` or check file permissions
