import { Button } from '@/components/ui/button';
import { routes } from '@/config';
import { useAuth } from '@/hooks';
import { Link } from 'react-router';
import ModeToggle from './mode-toggle';

const Header = () => {
  const { user, signInWithGoogle, signOut } = useAuth();

  return (
    <header className="container mx-auto px-5">
      <div className="flex h-20 items-center justify-between gap-8">
        <Link to={routes.home}>
          <img src="assets/img/logo.png" alt="Chinese HSK" className="h-16" />
        </Link>
        <div>
          {user ? (
            <>
              <span>Hello, {user.user_metadata.name}</span>
              <Button onClick={signOut}>Đăng xuất</Button>
            </>
          ) : (
            <Button onClick={signInWithGoogle}>Đăng nhập với Google</Button>
          )}
          <ModeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;
