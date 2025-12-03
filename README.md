# 🌍 Country Explorer

A modern Angular application for exploring countries worldwide with advanced features and real-time data.

## ✨ Features

### 🔍 Search & Filter
- Search countries by name, capital, or region
- Real-time search with debounce
- Filter by continent (Africa, Americas, Asia, Europe, Oceania)

### 📱 Responsive Design
- Mobile-first approach
- Fully responsive layout
- Optimized for all devices

### 🚀 Performance
- Lazy loading of modules
- Efficient API caching
- Optimized bundle size

### 🔧 Technical Highlights
- Angular 17+ with TypeScript
- Reactive programming with RxJS
- Modular and scalable architecture
- Clean component hierarchy

## 🛠️ Technologies Used

- **Framework:** Angular 17+
- **Language:** TypeScript
- **State Management:** RxJS
- **Styling:** CSS3 / SASS
- **API:** [REST Countries API](https://restcountries.com/)
- **Build Tool:** Angular CLI
- **Package Manager:** npm

## 📦 Installation & Setup

### Prerequisites
- Node.js 18+ 
- npm 9+ or yarn

### Quick Start
```bash
# Clone the repository
git clone https://github.com/aguerremo/country-app.git

# Navigate to project
cd country-app

# Install dependencies
npm install

# Start development server
npm start

# Open http://localhost:4200 in your browser
````

## 🚀 Available Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Start development server |
| `npm run build` | Build for production |
| `npm test` | Run unit tests |
| `npm run lint` | Run code linting |

## 📁 Project Structure
```bash
src/
├── app/
│ ├── country/ # Country feature module
│ ├── shared/ # Shared components & services
│ ├── core/ # Core module (singletons)
│ ├── pages/ # Main pages components
│ ├── app.routes.ts # Application routing
│ └── app.config.ts # App configuration
├── assets/ # Static assets
└── styles/ # Global styles
```

## 🎯 Features in Development

### Planned Enhancements
- [ ] Dark/Light theme toggle
- [ ] Favorites system with localStorage
- [ ] Country comparison tool
- [ ] Interactive maps integration
- [ ] Data visualization charts
- [ ] Offline mode support

### Current Focus
Implementing **dark mode** and **favorites functionality** to enhance user experience.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Álvaro Guerreiro**  
- GitHub: [@aguerremo](https://github.com/aguerremo)
- Portfolio: [Coming Soon]

## 🙏 Acknowledgments

- [REST Countries API](https://restcountries.com/) for the amazing free API
- Angular team for the fantastic framework
- Fernando Herrera for excellent Angular educational content

---

⭐ **Star this repo if you find it useful!**
