import { createApp } from 'vue'
import { createWebHashHistory, createRouter } from 'vue-router'
import './style.css'
import App from './App.vue'

import HomeView from './components/HomeView.vue';
import Dashboard from './components/Dashboard.vue';
import StatsView from './components/StatsView.vue';
import MedicalFileView from './components/MedicalFileView.vue';
import IdentificationView from './components/IdentificationView.vue';
import GynecologyView from './components/GynecologyView.vue';
import SurgeryView from './components/SurgeryView.vue';
import ObstetricalView from './components/ObstetricalView.vue';
import AnalysisView from './components/AnalysisView.vue';
import RequestsView from './components/RequestsView.vue';
import NewRequestsView from './components/NewRequestsView.vue';
import RequestsListView from './components/RequestsListView.vue';
import RequestChatView from './components/RequestChatView.vue';
import LoginView from './components/LoginView.vue';
import RegisterView from './components/RegisterView.vue';

const routes = [
    { path: '/', component: HomeView, name: 'home' },
    { path: '/login', component: LoginView, name: 'login' },
    { path: '/register', component: RegisterView, name: 'register' },
    {
        path: '/dashboard',
        component: Dashboard,
        children: [
            {
                path: '',
                name: 'dashboard',
                component: StatsView,
            },
            {
                path: 'requests',
                component: RequestsView,
                children: [
                    {
                        path: '',
                        name: 'requests',
                        component: RequestsListView,
                    },
                    {
                        path: 'new',
                        name: 'new-request',
                        component: NewRequestsView,
                    },
                    {
                        path: 'chat',
                        name: 'chat',
                        component: RequestChatView,
                    },
                ],
            },
            {
                path: 'file',
                component: MedicalFileView,
                children: [
                    {
                        path: '',
                        name: 'medical-file',
                        component: IdentificationView,
                    },
                    {
                        path: 'gynecology',
                        name: 'gynecology',
                        component: GynecologyView,
                    },
                    {
                        path: 'surgery',
                        name: 'surgery',
                        component: SurgeryView,
                    },
                    {
                        path: 'obstetrical',
                        name: 'obstetrical',
                        component: ObstetricalView,
                    },
                    {
                        path: 'immunology',
                        name: 'immunology',
                        component: ObstetricalView,
                    },
                    {
                        path: 'family',
                        name: 'family',
                        component: ObstetricalView,
                    },
                    {
                        path: 'toxicology',
                        name: 'toxicology',
                        component: ObstetricalView,
                    },
                    {
                        path: 'pregnancy',
                        name: 'pregnancy',
                        component: ObstetricalView,
                    },
                    {
                        path: 'symptoms',
                        name: 'symptoms',
                        component: ObstetricalView,
                    },
                    {
                        path: 'followup',
                        name: 'followup',
                        component: ObstetricalView,
                    },
                    {
                        path: 'analysis',
                        name: 'analysis',
                        component: AnalysisView,
                    },
                ],
            },
        ],
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

createApp(App).use(router).mount('#app')
