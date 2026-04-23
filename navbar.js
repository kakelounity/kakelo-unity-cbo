// navbar.js - FULL RESTORED VERSION (With Search + Membership)

document.addEventListener("DOMContentLoaded", function () {
    const navbarContainer = document.getElementById("navbar-container");

    if (!navbarContainer) {
        console.warn("Navbar container (#navbar-container) not found!");
        return;
    }

    navbarContainer.innerHTML = `
        <!-- STICKY NAVBAR -->
        <div id="navbarWrapper" class="fixed top-0 left-0 w-full z-50 bg-white shadow-sm border-b border-slate-100 transition-all duration-300">

            <!-- TOP SEARCH BAR -->
            <div id="topSearchBar" class="bg-slate-100 py-2 border-b border-slate-200">
                <div class="max-w-7xl mx-auto px-6 flex justify-end">
                    <button onclick="goToSearchPage()" 
                            class="flex items-center gap-3 text-slate-600 hover:text-teal-700 transition-colors">
                        <i class="fa-solid fa-magnifying-glass text-xl"></i>
                        <span class="text-sm font-medium hidden sm:inline">Search the website...</span>
                    </button>
                </div>
            </div>

            <!-- MAIN NAV -->
            <nav>
                <div id="mainNav" class="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

                    <!-- LOGO -->
                    <a href="index.html" class="flex items-center gap-4 group">
                        <img id="navLogo" src="Kakelo Unity Logo (2).png" 
                             alt="Logo" 
                             class="h-12 transition-transform group-hover:scale-105">
                        <div>
                            <h1 class="text-2xl font-bold text-teal-800 tracking-tight">Kakelo Unity</h1>
                            <p class="text-xs text-slate-500 -mt-1">Community Based Organization</p>
                        </div>
                    </a>

                    <!-- DESKTOP MENU -->
                    <div class="hidden md:flex items-center gap-8 text-base font-medium">
                        <a href="index.html" class="hover:text-teal-700">Home</a>

                        <!-- WHO WE ARE -->
                        <div class="relative group">
                            <button onclick="toggleDropdown(this)" class="flex items-center gap-1 hover:text-teal-700">
                                Who We Are <i class="fa-solid fa-chevron-down text-xs"></i>
                            </button>
                            <div class="dropdown-menu hidden absolute left-0 top-full bg-white shadow-xl rounded-2xl py-5 w-64 border z-50">
                                <a href="about.html" class="block px-6 py-3 hover:bg-slate-50">About Us</a>
                                <a href="leadership.html" class="block px-6 py-3 hover:bg-slate-50">Our Leadership</a>
                                <a href="partners.html" class="block px-6 py-3 hover:bg-slate-50">Our Partners</a>
                            </div>
                        </div>

                        <!-- OUR WORK -->
                        <div class="relative group">
                            <button onclick="toggleDropdown(this)" class="flex items-center gap-1 hover:text-teal-700">
                                Our Work <i class="fa-solid fa-chevron-down text-xs"></i>
                            </button>
                            <div class="dropdown-menu hidden absolute left-0 top-full bg-white shadow-xl rounded-2xl py-5 w-72 border z-50">
                                <a href="programs.html" class="block px-6 py-3 hover:bg-slate-50">Programs</a>
                                <a href="impact.html" class="block px-6 py-3 hover:bg-slate-50">Our Impact</a>
                            </div>
                        </div>

                        <a href="gallery.html" class="hover:text-teal-700">Gallery</a>
                        <a href="events.html" class="hover:text-teal-700">Events</a>

                        <!-- MEMBERSHIP -->
                        <div class="relative group">
                            <button onclick="toggleDropdown(this)" class="flex items-center gap-1 hover:text-teal-700">
                                Membership <i class="fa-solid fa-chevron-down text-xs"></i>
                            </button>
                            <div class="dropdown-menu hidden absolute left-0 top-full bg-white shadow-xl rounded-2xl py-5 w-64 border z-50">
                                <a href="member-register.html" class="block px-6 py-3 hover:bg-slate-50">
                                    Become a Member
                                </a>
                                <a href="member-portal.html" class="block px-6 py-3 hover:bg-slate-50 font-semibold text-teal-700">
                                    Member Portal
                                </a>
                            </div>
                        </div>

                        <a href="contact.html" class="hover:text-teal-700">Contact</a>
                    </div>

                    <!-- DONATE BUTTON -->
                    <a href="donate.html" 
                       class="hidden md:flex items-center gap-2 bg-teal-700 hover:bg-teal-800 text-white px-8 py-3 rounded-2xl font-semibold text-sm transition-all">
                        <i class="fa-solid fa-heart"></i> DONATE NOW
                    </a>

                    <!-- MOBILE BUTTON -->
                    <button onclick="toggleMobileMenu()" 
                            class="md:hidden text-2xl text-slate-700 hover:text-teal-700">
                        <i class="fa-solid fa-bars"></i>
                    </button>
                </div>
            </nav>

            <!-- MOBILE MENU -->
            <div id="mobileMenu" class="hidden md:hidden bg-white border-t">
                <div class="px-6 py-6 flex flex-col gap-5 text-lg">
                    <a href="index.html">Home</a>
                    <a href="about.html">About Us</a>
                    <a href="leadership.html">Leadership</a>
                    <a href="partners.html">Our Partners</a>
                    
                    <div class="font-semibold text-teal-700 pt-4 border-t">Our Work</div>
                    <a href="programs.html" class="pl-4">Programs</a>
                    <a href="impact.html" class="pl-4">Our Impact</a>

                    <a href="gallery.html">Gallery</a>
                    <a href="events.html">Events</a>

                    <div class="font-semibold text-teal-700 pt-4 border-t">Membership</div>
                    <a href="member-register.html" class="pl-4">Become a Member</a>
                    <a href="member-portal.html" class="pl-4 font-semibold text-teal-700">Member Portal</a>

                    <a href="contact.html">Contact Us</a>
                    <a href="donate.html" class="font-semibold text-teal-700">Donate Now</a>
                </div>
            </div>
        </div>
    `;
});

// DROPDOWN
function toggleDropdown(btn) {
    const menu = btn.nextElementSibling;
    document.querySelectorAll(".dropdown-menu").forEach(m => {
        if (m !== menu) m.classList.add("hidden");
    });
    menu.classList.toggle("hidden");
}

// MOBILE MENU
function toggleMobileMenu() {
    document.getElementById("mobileMenu").classList.toggle("hidden");
}

// CLOSE DROPDOWNS
document.addEventListener("click", function (e) {
    if (!e.target.closest(".group")) {
        document.querySelectorAll(".dropdown-menu").forEach(menu => menu.classList.add("hidden"));
    }
});

// ✅ SEARCH REDIRECT
function goToSearchPage() {
    const query = prompt("What are you searching for?");
    if (query) {
        window.location.href = `search.html?q=${encodeURIComponent(query)}`;
    } else {
        window.location.href = "search.html";
    }
}

// SHRINK NAVBAR
window.addEventListener("scroll", function () {
    const searchBar = document.getElementById("topSearchBar");
    const nav = document.getElementById("mainNav");
    const logo = document.getElementById("navLogo");

    if (!nav || !logo || !searchBar) return;

    if (window.scrollY > 50) {
        searchBar.classList.add("hidden");
        nav.classList.replace("py-4", "py-2");
        logo.classList.replace("h-12", "h-9");
    } else {
        searchBar.classList.remove("hidden");
        nav.classList.replace("py-2", "py-4");
        logo.classList.replace("h-9", "h-12");
    }
});

// BODY OFFSET
function adjustBodyPadding() {
    const navbar = document.getElementById("navbarWrapper");
    if (navbar) document.body.style.paddingTop = navbar.offsetHeight + "px";
}
window.addEventListener("load", adjustBodyPadding);
window.addEventListener("resize", adjustBodyPadding);
window.addEventListener("scroll", adjustBodyPadding);
