import React from 'react';
import './App.css';
import { LoginPage } from './pages/LoginPage';
import {
  createBrowserRouter,
} from "react-router-dom";
import { HomePage } from './pages/HomePage';
import { RestorePaswordPage } from './pages/RestorePasswordPage';
import { ChangePaswordPage } from './pages/ChangePasswordPage';
import Products from './pages/Products';

export const router = createBrowserRouter(
  [{
    path: "/login",
    element: <LoginPage />
  },
  {
    path: "/",
    element: <LoginPage />
  },
  {
    path: "/home-page",
    element: <HomePage />
  },
  {
    path: "/login/restore",
    element: <RestorePaswordPage />
  },
  {
    path: "/login/change-password",
    element: <ChangePaswordPage />
  },
  {
    path: "/products",
    element: <Products />
  }
]
);

