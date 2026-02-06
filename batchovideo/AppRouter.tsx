import React, { useState, useEffect } from 'react';
import { authHelpers } from './lib/supabase';
import { LoginPage } from './components/Auth/LoginPage';
import { SignupPage } from './components/Auth/SignupPage';
import { Dashboard } from './components/Dashboard/Dashboard';
import App from './App';
import NewLandingPage from './NewLandingPage';
import { AdminDashboard } from './components/Admin/AdminDashboard';
import { AdminLoginPage } from './components/Auth/AdminLoginPage';
import { adminHelpers } from './lib/supabase';

type View = 'landing' | 'login' | 'signup' | 'dashboard' | 'editor' | 'admin' | 'adminLogin';

const AppRouter: React.FC = () => {
    const [view, setView] = useState<View>('landing');
    const [loading, setLoading] = useState(true);
    const [currentProject, setCurrentProject] = useState<any>(null);
    const [isAdmin, setIsAdmin] = useState(false);
    const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(false);

    useEffect(() => {
        checkAuth();
        checkAdminAuth();

        // Handle URL-based routing
        const handleRouteChange = () => {
            const path = window.location.pathname;
            if (path === '/admin' && !isAdminAuthenticated) {
                setView('adminLogin');
            }
        };

        window.addEventListener('popstate', handleRouteChange);
        return () => window.removeEventListener('popstate', handleRouteChange);
    }, [isAdminAuthenticated]);

    const checkAuth = async () => {
        const session = await authHelpers.getSession();
        if (session) {
            // Check if user is admin
            const adminStatus = await adminHelpers.isUserAdmin(session.user.id);
            setIsAdmin(adminStatus);
            setView('dashboard');
        } else {
            // Check if accessing admin route
            if (window.location.pathname === '/admin') {
                setView('adminLogin');
            } else {
                setView('landing');
            }
        }
        setLoading(false);
    };

    const checkAdminAuth = () => {
        const adminAuth = localStorage.getItem('admin_authenticated');
        if (adminAuth === 'true') {
            setIsAdminAuthenticated(true);
        }
    };

    const handleAdminLoginSuccess = () => {
        setIsAdminAuthenticated(true);
        window.history.pushState({}, '', '/admin');
        setView('admin');
    };

    const handleAdminLogout = () => {
        localStorage.removeItem('admin_authenticated');
        setIsAdminAuthenticated(false);
        window.history.pushState({}, '', '/');
        setView('adminLogin');
    };

    const handleLoginSuccess = () => {
        setView('dashboard');
    };

    const handleSignupSuccess = () => {
        setView('dashboard');
    };

    const handleLogout = () => {
        setView('login');
        setCurrentProject(null);
    };

    const handleNewProject = () => {
        setCurrentProject(null);
        setView('editor');
    };

    const handleLoadProject = (project: any) => {
        setCurrentProject(project);
        setView('editor');
    };

    const handleBackToDashboard = () => {
        setView('dashboard');
        setCurrentProject(null);
    };

    if (loading) {
        return (
            <div style={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#0a0a0a',
                color: '#fff'
            }}>
                <div>Loading...</div>
            </div>
        );
    }

    if (view === 'landing') {
        return (
            <NewLandingPage onStartEditing={() => setView('login')} />
        );
    }

    if (view === 'login') {
        return (
            <LoginPage
                onSuccess={handleLoginSuccess}
                onSwitchToSignup={() => setView('signup')}
            />
        );
    }

    if (view === 'signup') {
        return (
            <SignupPage
                onSuccess={handleSignupSuccess}
                onSwitchToLogin={() => setView('login')}
            />
        );
    }

    if (view === 'dashboard') {
        return (
            <Dashboard
                onNewProject={handleNewProject}
                onLoadProject={handleLoadProject}
                onLogout={handleLogout}
                onAdminClick={isAdmin ? () => setView('admin') : undefined}
            />
        );
    }

    if (view === 'adminLogin') {
        return (
            <AdminLoginPage onSuccess={handleAdminLoginSuccess} />
        );
    }

    if (view === 'admin') {
        if (!isAdminAuthenticated) {
            setView('adminLogin');
            return null;
        }
        return (
            <AdminDashboard onLogout={handleAdminLogout} />
        );
    }

    if (view === 'editor') {
        return (
            <App
                initialProject={currentProject}
                onBackToDashboard={handleBackToDashboard}
            />
        );
    }

    return null;
};

export default AppRouter;
