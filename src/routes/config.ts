import { lazy } from 'react';

export const routes = [
  {
    path: '/',
    component: lazy(() => import('../pages/Home')),
    exact: true
  },
  {
    path: '/sessions',
    component: lazy(() => import('../pages/Sessions'))
  },
  {
    path: '/abstract-submission',
    component: lazy(() => import('../pages/AbstractSubmission'))
  },
  {
    path: '/registration',
    component: lazy(() => import('../pages/Registration'))
  },
  {
    path: '/speakers',
    component: lazy(() => import('../pages/Speakers'))
  },
  {
    path: '/ocm',
    component: lazy(() => import('../pages/OCM'))
  },
  {
    path: '/venue',
    component: lazy(() => import('../pages/Venue'))
  },
  {
    path: '/brochure',
    component: lazy(() => import('../pages/Brochure'))
  },
  {
    path: '/about-us',
    component: lazy(() => import('../pages/AboutUs'))
  },
  {
    path: '/tentative-program',
    component: lazy(() => import('../pages/TentativeProgram'))
  },
  {
    path: '/contact-us',
    component: lazy(() => import('../pages/ContactUs'))
  },
  {
    path: '/sponsorship',
    component: lazy(() => import('../pages/Sponsorship'))
  },
  {
    path: '/privacy-policy',
    component: lazy(() => import('../pages/PrivacyPolicy'))
  }
] as const;
