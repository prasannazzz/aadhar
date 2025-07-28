import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
	const { pathname, hash } = useLocation();

	useEffect(() => {
    // If there's a #hash in the URL, scroll to that element
		if (hash) {
			const id = hash.replace("#", "");
			const element = document.getElementById(id);
			if (element) {
        // Use a timeout to ensure the element is available before scrolling
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 0);
			}
		} else {
      // Otherwise, scroll to the top of the page
			window.scrollTo(0, 0);
		}
	}, [pathname, hash]);

	return null;
};

export default ScrollToTop;