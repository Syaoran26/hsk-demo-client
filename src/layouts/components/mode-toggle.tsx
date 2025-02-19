import { Button } from '@/components/ui/button';
import { useTheme } from '@/hooks';
import { MoonIcon, SunIcon } from 'lucide-react';

const ModeToggle = () => {
  const { activeTheme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(activeTheme === 'dark' ? 'light' : 'dark');
  };

  return (
    <Button variant="ghost" size="icon" onClick={toggleTheme}>
      {activeTheme === 'dark' ? <SunIcon className="size-5" /> : <MoonIcon className="size-5" />}
    </Button>
  );
};

export default ModeToggle;
