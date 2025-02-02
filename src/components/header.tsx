/** @format */

import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();
  const [customPath, setCustomPath] = useState<{
    title: string;
    link: string;
  }>({
    title: "Create Todo",
    link: "/createTodo",
  });

  useEffect(() => {
    if (location.pathname === "/create-todo") {
      setCustomPath({
        title: "Home",
        link: "/",
      });
    } else {
      setCustomPath({
        title: "Create Todo",
        link: "/create-todo",
      });
    }
  }, [location]);

  return (
    <div className='header'>
      <Link to='/'>
        <img src='img/aalto_it.png' alt='logo' width='140px' height='57px' />
      </Link>
      {!location.pathname.includes("/edit-todo") && (
        <Link to={`${customPath.link}`}>
          <Typography variant='h5' className='link-title'>
            {customPath.title}
          </Typography>
        </Link>
      )}
    </div>
  );
}

export default Header;
