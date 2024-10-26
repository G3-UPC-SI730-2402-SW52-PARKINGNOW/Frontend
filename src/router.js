import { createRouter, createWebHistory } from 'vue-router';
import Login from './pages/Login.vue';
import ForgotPassword from './pages/ForgotPassword.vue';
import Register from './pages/Register.vue';
import RegisterOwner from './pages/RegisterOwner.vue';
import RegisterDriver from './pages/RegisterDriver.vue';
import DashboardDriver from './pages/DashboardDriver.vue';
import ConfigurationDriver from './pages/ConfigurationDriver.vue';
import ReservationsDriver from './pages/ReservationsDriver.vue';
import SupportDriver from './pages/SupportDriver.vue';
import VehicleTrackingDriver from './pages/VehicleTrackingDriver.vue';
import LocalRecordOwner from './pages/LocalRecordOwner.vue';
import OwnerSecurity from './pages/OwnerSecurity.vue'; // Nueva ruta para OwnerSecurity
import DashboardOwner from './pages/DashboardOwner.vue';
import OwnerReservations from './pages/OwnerReservations.vue'; // Asegúrate de que este archivo existe
import OwnerConfiguration from './pages/OwnerConfiguration.vue'; // Nueva ruta para OwnerConfiguration

const routes = [
    { path: '/', redirect: '/login' },
    { path: '/login', name: 'Login', component: Login },
    { path: '/forgot-password', name: 'ForgotPassword', component: ForgotPassword },
    { path: '/register', name: 'Register', component: Register },
    { path: '/register-owner', name: 'RegisterOwner', component: RegisterOwner },
    { path: '/register-driver', name: 'RegisterDriver', component: RegisterDriver },
    { path: '/dashboard-driver', name: 'DashboardDriver', component: DashboardDriver },
    { path: '/configuration-driver', name: 'ConfigurationDriver', component: ConfigurationDriver },
    { path: '/reservations-driver', name: 'ReservationsDriver', component: ReservationsDriver },
    { path: '/support-driver', name: 'SupportDriver', component: SupportDriver },
    { path: '/vehicle-tracking-driver', name: 'VehicleTrackingDriver', component: VehicleTrackingDriver },
    { path: '/local-records', name: 'LocalRecordOwner', component: LocalRecordOwner },
    { path: '/owner-security', name: 'OwnerSecurity', component: OwnerSecurity }, // Nueva ruta para OwnerSecurity
    { path: '/dashboard-owner', name: 'DashboardOwner', component: DashboardOwner },
    { path: '/owner-reservations', name: 'OwnerReservations', component: OwnerReservations }, // Ruta para OwnerReservations
    { path: '/owner-configuration', name: 'OwnerConfiguration', component: OwnerConfiguration } // Nueva ruta para OwnerConfiguration
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
