import { useState, useEffect } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link, NavLink, useLocation } from "react-router-dom";


import BlackLogo from "../../../../public/HemoCell Logo black.png";
import WhiteLogo from "../../../../public/HemoCell Logo White.png";

const navigation = [
	{ name: "Home", href: "/" },
	{
        name: "The Organization",
        href: "/organization",
        children: [
            { name: "About Us", href: "/organization#about-us" },
            { name: "Our Trustees", href: "/organization#trustees" },
            { name: "Our Director", href: "/organization#director" },
            { name: "Our Officers", href: "/organization#officers" },
            { name: "Our Captains", href: "/organization#captains" },
            { name: "Government Approval & Recognitions", href: "/organization#approvals" },
        ]
    },
	{ name: "Host Blood Drive", href: "/host-blood-drive" },
	{ name: "Donate Money", href: "/donate-blood" },
	{ name: "Help Needed", href: "/contact" },
	{ name: "Need Blood", href: "/need-blood", secondLast: true },
	{ name: "Donate Blood", href: "/donate-blood", last: true },

];
const compnayName = "Aadhar Blood Bank";

const HeaderComponent = () => {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const [blurActivation, setBlurActivation] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const location = useLocation();

	const reuseableClass = {
		for_last: `last:bg-red last:text-white last:hover:bg-red last:hover:text-dark hover:scale-105 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ease-in-out`,
		for_second_last: `rounded-rsm border border-white/[.5] hover:bg-red hover:text-dark`,
	};

	useEffect(() => {
		const onScroll = () => {
			setBlurActivation(window.pageYOffset > 5);
		};
		window.addEventListener("scroll", onScroll, { passive: true });
        setActiveDropdown(null);
		return () => window.removeEventListener("scroll", onScroll);
	}, [location]);

	return (
		<header
			className={`fixed inset-x-0 top-0 z-50 border-b border-white/[.2] ${
				blurActivation ? "bg-dark/[.6] backdrop-blur-md" : ""
			}`} 
		>
			<nav
				className="flex items-center justify-between p-6 lg:px-8 w-[min(1250px,100%-15px)] m-auto"
				aria-label="Global"
			>
				<div className="flex lg:flex-1">
					<a href="/" className="-m-1.5 p-1.5">
						<span className="sr-only">{compnayName}</span>
						<img className="w-auto h-10" src={WhiteLogo} alt="" />
					</a>
				</div>

				<div className="flex lg:hidden">
					<button
						type="button"
						className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-off_white"
						onClick={() => setMobileMenuOpen(true)}
					>
						<span className="sr-only">Open main menu</span>
						<Bars3Icon className="w-6 h-6" aria-hidden="true" />
					</button>
				</div>

				<div className="hidden lg:flex lg:gap-x-4 lg:items-center">
					{navigation.map((item) => (
            item.children ? (
                <div
                    key={item.name}
                    className="relative"
                    onMouseEnter={() => setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                >
                    <NavLink
                        to={item.href}
                        className="text-sm font-medium text-off_white px-3 py-2 rounded-rsm hover:bg-red hover:text-dark hover:scale-105 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ease-in-out"
                    >
                        {item.name}
                    </NavLink>
                    {activeDropdown === item.name && (
                        // --- These are the updated styles for the dropdown ---
                        <div className="absolute top-full left-0 mt-2 bg-white/30 backdrop-blur-lg rounded-lg shadow-2xl border border-white/20 py-1 w-64 z-50">
                            {item.children.map(child => (
                                <NavLink
                                    key={child.name}
                                    to={child.href}
                                    onClick={() => setActiveDropdown(null)}
                                    // --- Updated text color and hover effect ---
                                    className="block px-4 py-2 text-sm text-black font-medium hover:bg-white/50 rounded-md m-1"
                                >
                                    {child.name}
                                </NavLink>
                            ))}
                        </div>
                    )}
                </div>
            ) : (
                <NavLink
                    key={item.name}
                    to={item.href}
                    className={({ isActive }) =>
                        `text-sm font-medium text-off_white px-3 py-2 rounded-rsm 
                        hover:bg-red hover:text-dark 
                        hover:scale-105 hover:shadow-lg hover:-translate-y-1 
                        transition-all duration-300 ease-in-out
                        ${item.secondLast ? reuseableClass.for_second_last : ""} 
                        ${item.last ? reuseableClass.for_last : ""} 
                        ${isActive ? "bg-dark_red" : ""}`
                    }
                >
                    {item.name}
                </NavLink>
            )
        ))}
				</div>
			</nav>

			{/* Mobile menu remains the same */}
			<Dialog
				as="div"
				className="lg:hidden"
				open={mobileMenuOpen}
				onClose={setMobileMenuOpen}
			>
				<div className="fixed inset-0 z-50" />
				<Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full px-6 py-6 overflow-y-auto bg-white sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
					<div className="flex items-center justify-between">
						<a href="/" className="-m-1.5 p-1.5">
							<span className="sr-only">{compnayName}</span>
							<img
								className="w-auto h-12"
								src={BlackLogo}
								alt=""
							/>
						</a>
						<button
							type="button"
							className="-m-2.5 rounded-md p-2.5 text-gray-700"
							onClick={() => setMobileMenuOpen(false)}
						>
							<span className="sr-only">Close menu</span>
							<XMarkIcon className="w-6 h-6" aria-hidden="true" />
						</button>
					</div>
					<div className="flow-root mt-6">
						<div className="-my-6 divide-y divide-gray-500/10">
							<div className="py-6 space-y-2">
								{navigation.map((item) => (
									item.children ? (
										<div key={item.name} className="-mx-3">
												<p className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900">
														{item.name}
												</p>
												<div className="ml-4 mt-2 space-y-1">
														{item.children.map(child => (
																<NavLink
																		key={child.name}
																		to={child.href}
																		onClick={() => setMobileMenuOpen(false)}
																		className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-700 hover:bg-gray-100"
																>
																		{child.name}
																</NavLink>
														))}
												</div>
										</div>
								) : (
										<NavLink
											key={item.name}
											to={item.href}
											onClick={() => setMobileMenuOpen(false)}
											className={({ isActive }) =>
												`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-100
												${item.secondLast ? 'border border-dark/[.5]' : ''}
												${item.last ? 'bg-red text-white hover:bg-red hover:text-dark' : ''}
												${isActive ? 'bg-gray-200' : ''}`
											}
										>
											{item.name}
										</NavLink>
								)
								))}
							</div>
						</div>
					</div>
				</Dialog.Panel>
			</Dialog>
		</header>
	); 
};

export default HeaderComponent;