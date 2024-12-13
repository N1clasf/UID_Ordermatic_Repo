import { Menu } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface HeaderProps {
  onMenuClick?: () => void;
  showBack?: boolean;
}

const Header = ({ onMenuClick, showBack }: HeaderProps) => {
  const navigate = useNavigate();

  return (
    <header className="flex items-center justify-between p-4 border-b">
      {showBack ? (
        <button onClick={() => navigate(-1)} className="p-2">
          ←
        </button>
      ) : (
        <button onClick={onMenuClick} className="p-2">
          <Menu className="w-5 h-5" />
        </button>
      )}
      <h1 className="text-lg font-medium">OrderMatic</h1>
      <div className="w-5" /> {/* Spacer for alignment */}
    </header>
  );
};

export default Header;