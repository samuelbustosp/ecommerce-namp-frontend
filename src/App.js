import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Dashboard from './pages/private/Dashboard';
import AdminLayout from './layout/admin/AdminLayout';
import ProductPage from './pages/private/ProductPage';
import CategoryPage from './pages/private/CategoryPage';
import SubcategoryPage from './pages/private/SubcategoryPage';
import CategoryForm from './components/admin/category/AddCategoryModal';
import ClientLayout from './layout/client/ClientLayout';
import Home from './pages/public/Home';
import CategoryDetailPage from './pages/public/CategoryDetailPage';
import CategoryListPage from './pages/public/CategoryListPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/" element={<AdminLayout></AdminLayout>}>
            <Route path="dashboard" element={<Dashboard/>}/>
            <Route path="products" element={<ProductPage/>}/>
            <Route path="categories" element={<CategoryPage/>}/>
            <Route path="subcategories" element={<SubcategoryPage/>}/>
            <Route path="add-category" element={<CategoryForm/>}/>
          </Route>
          <Route path="/" element={<ClientLayout></ClientLayout>}>
            <Route path="home" element={<Home/>}/>
            <Route path="categoria" element={<CategoryListPage/>}/>
            <Route path="categoria/:name" element={<CategoryDetailPage/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

