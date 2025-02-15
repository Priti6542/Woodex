import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";

const navbarData = [
  
  { name: "search", icon: <SearchIcon /> },
  { name: "heading", label: "Woodex" },
  { name: "profile", icon: <PermIdentityOutlinedIcon /> },
  { name: "heart", icon: <FavoriteBorderOutlinedIcon /> },
  { name: "bag", icon: <BusinessCenterIcon /> },
  { name: "menu", icon: <MenuIcon /> }
];

export default navbarData;
