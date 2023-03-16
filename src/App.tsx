import React from 'react';
import './App.css';
import { LoginPage } from './pages/LoginPage';
import {
  createBrowserRouter,
} from "react-router-dom";
import { HomePage } from './pages/HomePage';

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
  }
]
);

