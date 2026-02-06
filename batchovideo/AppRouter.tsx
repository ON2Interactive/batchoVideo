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

import { useLocation } from 'react-router-dom';
import ContactPage from './components/ContactPage';

type View = 'landing' | 'login' | 'signup' | 'dashboard' | 'editor' | 'admin' | 'adminLogin' | 'contact';

const AppRouter: React.FC = () => {
    const [view, setView] = useState<View>('landing');
    const [loading, setLoading] = useState(true);
    const [currentProject, setCurrentProject] = useState<any>(null);
    const [isAdmin, setIsAdmin] = useState(false);
    const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(false);
    const location = useLocation();

    useEffect(() => {
        checkAuth();
        checkAdminAuth();
    }, [isAdminAuthenticated]);

    useEffect(() => {
        // Sync view with URL path
        const path = location.pathname;
        if (path === '/contact') {
            setView('contact');
        } else if (path === '/' && view !== 'landing') {
            // Only switch to landing if we're not authenticated? 
            // Actually checkAuth handles initial load. 
            // But if user navigates BACK to home...
            // Sticky logic: checkAuth determines if meaningful session exists.
            // If session, '/' usually redirects to dashboard?
            // Existing logic: checkAuth -> if session -> dashboard.
            // But if I want to see landing page?
            // Usually landing is for public.
            // Let's keep existing logic but handle explicit routes
        } else if (path === '/signin') {
            setView('login');
        } else if (path === '/signup') {
            setView('signup');
        } else if (path === '/admin') {
            setView('adminLogin');
        }
    }, [location.pathname]);

    const checkAuth = async () => {
        const session = await authHelpers.getSession();
        const path = window.location.pathname;

        if (session) {
            const adminStatus = await adminHelpers.isUserAdmin(session.user.id);
            setIsAdmin(adminStatus);

            // Allow public pages even if logged in?
            if (path === '/contact') {
                setView('contact');
            } else if (path === '/') {
                // Maybe logged in users should see dashboard?
                setView('dashboard');
            } else {
                setView('dashboard');
            }
        } else {
            if (path === '/admin') {
                setView('adminLogin');
            } else if (path === '/contact') {
                setView('contact');
            } else if (path === '/signin') {
                setView('login');
            } else if (path === '/signup') {
                setView('signup');
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

    if (view === 'contact') {
        return <ContactPage />;
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
