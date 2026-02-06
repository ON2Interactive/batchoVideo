import React from 'react';
import { useNavigate } from 'react-router-dom';

interface NavigationProps {
    onGetStarted?: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ onGetStarted }) => {
    const navigate = useNavigate();

    const handleNavigation = (path: string) => {
        if (path.startsWith('#')) {
            // Smooth scroll to anchor
            const element = document.querySelector(path);
            element?.scrollIntoView({ behavior: 'smooth' });
        } else {
            navigate(path);
        }
    };

    return (
        <nav style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            zIndex: 50,
            background: 'rgba(0, 0, 0, 0.8)',
            backdropFilter: 'blur(10px)',
            borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
        }}>
            <div style={{
                maxWidth: '1400px',
                margin: '0 auto',
                padding: '1rem 2rem',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
            }}>
                {/* Logo - Flush Left */}
                <div
                    onClick={() => handleNavigation('/')}
                    style={{
                        height: '28px',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                    }}
                >
                    <img
                        src="/batchoVideo.svg"
                        alt="batchoVideo"
                        style={{ height: '100%' }}
                    />
                </div>

                {/* Menu Items - Flush Right */}
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '2rem',
                }}>
                    <button
                        onClick={() => handleNavigation('#pricing')}
                        style={{
                            background: 'transparent',
                            border: 'none',
                            color: '#fff',
                            fontSize: '0.95rem',
                            cursor: 'pointer',
                            padding: '0.5rem 0',
                            transition: 'color 0.2s',
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.color = '#60a5fa'}
                        onMouseLeave={(e) => e.currentTarget.style.color = '#fff'}
                    >
                        Pricing
                    </button>

                    <button
                        onClick={() => handleNavigation('/signin')}
                        style={{
                            background: 'transparent',
                            border: 'none',
                            color: '#fff',
                            fontSize: '0.95rem',
                            cursor: 'pointer',
                            padding: '0.5rem 0',
                            transition: 'color 0.2s',
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.color = '#60a5fa'}
                        onMouseLeave={(e) => e.currentTarget.style.color = '#fff'}
                    >
                        Sign In
                    </button>

                    <button
                        onClick={onGetStarted || (() => handleNavigation('/signup'))}
                        style={{
                            background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
                            border: 'none',
                            color: '#fff',
                            fontSize: '0.95rem',
                            cursor: 'pointer',
                            padding: '0.625rem 1.5rem',
                            borderRadius: '0.5rem',
                            fontWeight: '500',
                            transition: 'transform 0.2s, box-shadow 0.2s',
                            boxShadow: '0 4px 12px rgba(59, 130, 246, 0.3)',
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'translateY(-1px)';
                            e.currentTarget.style.boxShadow = '0 6px 20px rgba(59, 130, 246, 0.4)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.boxShadow = '0 4px 12px rgba(59, 130, 246, 0.3)';
                        }}
                    >
                        Get Started
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;
