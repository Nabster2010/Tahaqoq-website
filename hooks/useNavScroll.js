import { useCallback, useEffect, useState } from "react";

const useNavScroll = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [navVisiblity, setNavVisiblity] = useState(true);
  const [currentScrollPos, setCurrentScrollPos] = useState(0);
  const handleScroll = useCallback(() => {
    setCurrentScrollPos(window.scrollY);
    setNavVisiblity(
      prevScrollPos > currentScrollPos || currentScrollPos === prevScrollPos
    );
    setPrevScrollPos(currentScrollPos);
  }, [currentScrollPos, prevScrollPos]);
  useEffect(() => {
    if (window) {
      window.addEventListener("scroll", handleScroll);
    }
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [currentScrollPos, prevScrollPos, handleScroll]);

  return { navVisiblity };
};

export default useNavScroll;
