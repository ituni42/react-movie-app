# MovieWebApp

A modern, responsive movie web application built with React, Redux Toolkit, React Router, and Tailwind CSS. This project fetches data from The Movie Database (TMDb) API and provides a beautiful, interactive UI for exploring trending movies, TV shows, and detailed information about each title.

## 🚀 Live Demo

Check out the deployed app here: [react-movie-app-tau-smoky.vercel.app](https://react-movie-app-tau-smoky.vercel.app/)

## Features
- Browse trending movies and TV shows
- Explore detailed information for each title
- Responsive design for desktop and mobile
- Search functionality
- Modular, scalable codebase
- State management with Redux Toolkit
- Custom hooks for data fetching
- Styled with Tailwind CSS

## Folder Structure
```
src/
  App.jsx            # Main app component
  App.css            # App-level styles
  index.js           # Entry point
  index.css          # Global styles (Tailwind)
  setupTests.jsx     # Test setup
  reportWebVitals.jsx# Web vitals reporting
  assets/            # Images and static assets
  components/        # Reusable UI components
  constants/         # Static config/constants
  hooks/             # Custom React hooks
  pages/             # Top-level route views/pages
  routes/            # Routing configuration
  store/             # Redux store and slices
```

## Getting Started

### Prerequisites
- Node.js (v16+ recommended)
- npm

### Installation
1. Clone the repository:
   ```sh
   git clone <your-repo-url>
   cd moviewebsite
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Set up your TMDb API key:
   - Create a `.env` file in the root directory.
   - Add your API key:
     ```env
     REACT_APP_ACCESS_TOKEN=your_tmdb_access_token
     ```
4. Start the development server:
   ```sh
   npm start
   ```
   The app will be available at [http://localhost:3000](http://localhost:3000).

### Build for Production
```sh
npm run build
```

## Contributing
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Open a pull request

## License
This project is licensed under the MIT License.

## Acknowledgements
- [TMDb API](https://www.themoviedb.org/documentation/api)
- [React](https://reactjs.org/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [Tailwind CSS](https://tailwindcss.com/)
