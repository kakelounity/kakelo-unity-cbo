// navbar.js - FULL WORKING VERSION (Search Redirect Integrated)

document.addEventListener("DOMContentLoaded", function () {
    const navbarContainer = document.getElementById("navbar-container");

    if (!navbarContainer) {
        console.warn("Navbar container (#navbar-container) not found!");
        return;
    }

    navbarContainer.innerHTML = `
        <div id="navbarWrapper" class="fixed top-0 left-0 w-full z-50 bg-white shadow-sm border-b border-slate-100 transition-all duration-300">

            <!-- Top Search Bar -->
            <div id="topSearchBar" class="bg-slate-100 py-2 border-b border-slate-200">
                <div class="max-w-7xl mx-auto px-6 flex justify-end">
                    <button onclick="goToSearchPage()" 
                            class="flex items-center gap-3 text-slate-600 hover:text-teal-700 transition-colors">
                        <i class="fa-solid fa-magnifying-glass text-xl"></i>
                        <span class="text-sm font-medium hidden sm:inline">Search the website...</span>
                    </button>
                </div>
            </div>

            <!-- Main Navigation -->
            <nav>
                <div id="mainNav" class="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

                    <!-- Logo -->
                    <a href="index.html" class="flex items-center gap-4 group">
                        <img id="navLogo" src="Kakelo Unity Logo (2).png" 
                             class="h-12 transition-transform group-hover:scale-105">
                        <div>
                            <h1 class="text-2xl font-bold text-teal-800 tracking-tight">Kakelo Unity</h1>
                            <p class="text-xs text-slate-500 -mt-1">Community Based Organization</p>
                        </div>
                    </a>

                    <!-- Desktop Menu -->
                    <div class="hidden md:flex items-center gap-8 text-base font-medium">
                        <a href="index.html" class="hover:text-teal-700">Home</a>

                        <div class="relative group">
                            <button onclick="toggleDropdown(this)" class="flex items-center gap-1 hover:text-teal-700">
                                Who We Are <i class="fa-solid fa-chevron-down text-xs"></i>
                            </button>
                            <div class="dropdown-menu hidden absolute left-0 top-full bg-white shadow-xl rounded-2xl py-5 w-64 border">
                                <a href="about.html" class="block px-6 py-3 hover:bg-slate-50">About Us</a>
                                <a href="leadership.html" class="block px-6 py-3 hover:bg-slate-50">Our Leadership</a>
                                <a href="partners.html" class="block px-6 py-3 hover:bg-slate-50">Our Partners</a>
                            </div>
                        </div>

                        <a href="programs.html" class="hover:text-teal-700">Programs</a>
                        <a href="impact.html" class="hover:text-teal-700">Impact</a>
                        <a href="gallery.html" class="hover:text-teal-700">Gallery</a>
                        <a href="events.html" class="hover:text-teal-700">Events</a>
                        <a href="contact.html" class="hover:text-teal-700">Contact</a>
                    </div>

                    <!-- Donate -->
                    <a href="donate.html" 
                       class="hidden md:flex bg-teal-700 text-white px-6 py-3 rounded-xl hover:bg-teal-800">
                        Donate
                    </a>

                    <!-- Mobile -->
                    <button onclick="toggleMobileMenu()" class="md:hidden text-2xl">
                        <i class="fa-solid fa-bars"></i>
                    </button>
                </div>
            </nav>

            <!-- Mobile Menu -->
            <div id="mobileMenu" class="hidden md:hidden bg-white border-t">
                <div class="px-6 py-6 flex flex-col gap-4">
                    <a href="index.html">Home</a>
                    <a href="about.html">About</a>
                    <a href="programs.html">Programs</a>
                    <a href="events.html">Events</a>
                    <a href="contact.html">Contact</a>
                    <a href="donate.html" class="text-teal-700 font-semibold">Donate</a>
                </div>
            </div>
        </div>
    `;
});

// Dropdown
function toggleDropdown(btn) {
    const menu = btn.nextElementSibling;
    document.querySelectorAll(".dropdown-menu").forEach(m => {
        if (m !== menu) m.classList.add("hidden");
    });
    menu.classList.toggle("hidden");
}

// Mobile menu
function toggleMobileMenu() {
    document.getElementById("mobileMenu").classList.toggle("hidden");
}

// Close dropdowns
document.addEventListener("click", function (e) {
    if (!e.target.closest(".group")) {
        document.querySelectorAll(".dropdown-menu").forEach(menu => menu.classList.add("hidden"));
    }
});

// ✅ SEARCH REDIRECT (MAIN FIX)
function goToSearchPage() {
    const query = prompt("What are you searching for?");
    if (query) {
        window.location.href = `search.html?q=${encodeURIComponent(query)}`;
    } else {
        window.location.href = "search.html";
    }
}

// Navbar shrink
window.addEventListener("scroll", function () {
    const nav = document.getElementById("mainNav");
    const logo = document.getElementById("navLogo");

    if (!nav || !logo) return;

    if (window.scrollY > 50) {
        nav.classList.replace("py-4", "py-2");
        logo.classList.replace("h-12", "h-9");
    } else {
        nav.classList.replace("py-2", "py-4");
        logo.classList.replace("h-9", "h-12");
    }
});

// Body padding fix
function adjustBodyPadding() {
    const navbar = document.getElementById("navbarWrapper");
    if (navbar) document.body.style.paddingTop = navbar.offsetHeight + "px";
}
window.addEventListener("load", adjustBodyPadding);
window.addEventListener("resize", adjustBodyPadding);
window.addEventListener("scroll", adjustBodyPadding);
