import { lazy } from 'react'
import type { RouteObject } from 'react-router-dom'
import RootLayout from '../layouts/RootLayout'
import HomePage from '../pages/HomePage'

/* Home ships in the initial bundle; every other page is split out. */
const AboutPage = lazy(() => import('../pages/AboutPage'))
const ProductsPage = lazy(() => import('../pages/ProductsPage'))
const WhyComfyladyPage = lazy(() => import('../pages/WhyComfyladyPage'))
const QualityPage = lazy(() => import('../pages/QualityPage'))
const FaqPage = lazy(() => import('../pages/FaqPage'))
const ContactPage = lazy(() => import('../pages/ContactPage'))
const PrivacyPolicyPage = lazy(() => import('../pages/PrivacyPolicyPage'))
const TermsPage = lazy(() => import('../pages/TermsPage'))
const NotFoundPage = lazy(() => import('../pages/NotFoundPage'))

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'about', element: <AboutPage /> },
      { path: 'products', element: <ProductsPage /> },
      { path: 'why-comfylady', element: <WhyComfyladyPage /> },
      { path: 'quality', element: <QualityPage /> },
      { path: 'faq', element: <FaqPage /> },
      { path: 'contact', element: <ContactPage /> },
      { path: 'privacy-policy', element: <PrivacyPolicyPage /> },
      { path: 'terms-and-conditions', element: <TermsPage /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
]
