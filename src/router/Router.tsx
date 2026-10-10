import React, { createContext, useContext, useState, useEffect, useCallback, useMemo } from 'react';

interface RouterContextType {
  pathname: string;
  search: string;
  navigate: (to: string) => void;
  params: Record<string, string>;
}

const RouterContext = createContext<RouterContextType | undefined>(undefined);

export const useRouter = (): RouterContextType => {
  const context = useContext(RouterContext);
  if (!context) {
    throw new Error('useRouter must be used within a RouterProvider');
  }
  return context;
};

export const useNavigate = () => {
  const { navigate } = useRouter();
  return navigate;
};

export const useLocation = () => {
  const { pathname, search } = useRouter();
  return { pathname, search };
};

export const useParams = <T extends Record<string, string>>(): T => {
  const { params } = useRouter();
  return params as T;
};

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  to: string;
  children: React.ReactNode;
  className?: string;
  activeClassName?: string;
}

export const Link: React.FC<LinkProps> = ({
  to,
  children,
  className = '',
  activeClassName = '',
  onClick,
  ...rest
}) => {
  const { navigate, pathname } = useRouter();
  const isActive = pathname === to || (to !== '/' && pathname.startsWith(to));

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onClick) onClick(e);
    if (!e.defaultPrevented && !e.ctrlKey && !e.metaKey && !e.shiftKey && !e.altKey && e.button === 0) {
      e.preventDefault();
      navigate(to);
    }
  };

  return (
    <a
      href={to}
      onClick={handleClick}
      className={`${className} ${isActive ? activeClassName : ''}`.trim()}
      {...rest}
    >
      {children}
    </a>
  );
};

export interface RouteConfig {
  path: string;
  element: React.ReactNode;
}

interface RouterProviderProps {
  routes: RouteConfig[];
  children?: React.ReactNode;
}

export const RouterProvider: React.FC<RouterProviderProps> = ({ routes }) => {
  const [currentPath, setCurrentPath] = useState<string>(() => window.location.pathname || '/');
  const [currentSearch, setCurrentSearch] = useState<string>(() => window.location.search || '');

  const navigate = useCallback((to: string) => {
    const [pathPart, searchPart] = to.split('?');
    const newPath = pathPart || '/';
    const newSearch = searchPart ? `?${searchPart}` : '';

    if (newPath !== window.location.pathname || newSearch !== window.location.search) {
      window.history.pushState(null, '', to);
      setCurrentPath(newPath);
      setCurrentSearch(newSearch);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, []);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
      setCurrentSearch(window.location.search || '');
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Match route
  const { matchedRoute, params } = useMemo(() => {
    for (const r of routes) {
      // Split pattern and current path
      const patternParts = r.path.split('/').filter(Boolean);
      const currentParts = currentPath.split('/').filter(Boolean);

      if (patternParts.length !== currentParts.length) {
        // Special match for exact root
        if (r.path === '/' && currentParts.length === 0) {
          return { matchedRoute: r, params: {} };
        }
        continue;
      }

      let match = true;
      const extractedParams: Record<string, string> = {};

      for (let i = 0; i < patternParts.length; i++) {
        const patternPart = patternParts[i];
        const currentPart = currentParts[i];

        if (patternPart.startsWith(':')) {
          const paramName = patternPart.slice(1);
          extractedParams[paramName] = decodeURIComponent(currentPart);
        } else if (patternPart !== currentPart) {
          match = false;
          break;
        }
      }

      if (match) {
        return { matchedRoute: r, params: extractedParams };
      }
    }

    // Fallback to 404 route
    const notFoundRoute = routes.find(r => r.path === '/not-found' || r.path === '*');
    return {
      matchedRoute: notFoundRoute || { path: '/not-found', element: <div>Not Found</div> },
      params: {}
    };
  }, [routes, currentPath]);

  return (
    <RouterContext.Provider value={{ pathname: currentPath, search: currentSearch, navigate, params }}>
      {matchedRoute.element}
    </RouterContext.Provider>
  );
};
