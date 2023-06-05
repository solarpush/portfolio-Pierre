import { useNavigate } from "react-router";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import { valueProps } from "../../App";

function Toolbar(props: valueProps) {
  const navigate = useNavigate();
  return (
    <div className="toolbarContainer">
      <BottomNavigation
        showLabels
        value={props.value}
        onChange={(event, newValue) => {
          event.preventDefault();
          props.setValue(newValue);
          if (newValue === 0) {
            navigate("/");
          } else if (newValue === 1) {
            navigate("/contact");
          }
        }}
      >
        <BottomNavigationAction label="Home" />
        <BottomNavigationAction label="Me contacter" />
      </BottomNavigation>
    </div>
  );
}

export default Toolbar;
