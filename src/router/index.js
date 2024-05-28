import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import Dashboard from '../views/Dashboard.vue';
import CaseFiles from '../components/CaseFiles.vue';
import CaseDetail from '../components/CaseDetail.vue'; // Import the CaseDetail component
import KnowledgeBase from '../components/KnowledgeBase.vue';
import Acquisitions from '../components/Acquisitions.vue';
import Inventory from '../components/Inventory.vue';
import Profile from '../components/Profile.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/login', name: 'Login', component: Login },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/case-files', name: 'CaseFiles', component: CaseFiles },
  { path: '/case-files/:id', name: 'CaseDetail', component: CaseDetail, props: true }, // Add dynamic route
  { path: '/knowledge-base', name: 'KnowledgeBase', component: KnowledgeBase },
  { path: '/acquisitions', name: 'Acquisitions', component: Acquisitions },
  { path: '/inventory', name: 'Inventory', component: Inventory },
  { path: '/profile', name: 'Profile', component: Profile },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
