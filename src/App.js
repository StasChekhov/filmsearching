import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
// import Cast from './components /pages/Cast';

const HomePage = lazy(() => import("./pages/HomePage"));
const MoviesPage = lazy(() => import("./pages/MoviesPage"));
const MoviesDetailsPage = lazy(() => import("./pages/MoviesDetailsPage"));
const Navigation = lazy(() => import("./components /Navigation/Navigation"));

export default function App() {
 return (
  <div>
   <Suspense fallback={<h1>Loading</h1>}>
    <Routes>
     <Route path="/" element={<Navigation />}>
      <Route index element={<HomePage />} />
      <Route path="movies" element={<MoviesPage />} />
      <Route path="movies/:movieId/*" element={<MoviesDetailsPage />} />
     </Route>
    </Routes>
   </Suspense>
  </div>
 );
}
