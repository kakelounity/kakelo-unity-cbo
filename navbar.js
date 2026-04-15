// navbar.js - FIXED Sticky Navbar (Single Sticky Container)

document.addEventListener("DOMContentLoaded", function () {
    const navbarContainer = document.getElementById("navbar-container");

    if (!navbarContainer) {
        console.warn("Navbar container (#navbar-container) not found!");
        return;
    }

    navbarContainer.innerHTML = `
        <!-- SINGLE STICKY WRAPPER - This fixes the scrolling issue -->
        <div id="navbarWrapper" class="fixed top-0 left-0 w-full z-50 bg-white shadow-sm border-b border-slate-100 transition-all duration-300">

            <!-- Top Search Bar -->
            <div id="topSearchBar" class="bg-slate-100 py-2 border-b border-slate-200">
                <div class="max-w-7xl mx-auto px-6 flex justify-end">
                    <button onclick="openSearchModal()" 
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
                             alt="Kakelo Unity CBO Logo" 
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
                            <div class="dropdown-menu hidden absolute left-0 top-full bg-white shadow-xl rounded-2xl py-5 w-64 border border-slate-100 z-50">
                                <a href="about.html" class="block px-6 py-3 hover:bg-slate-50">About Us</a>
                                <a href="leadership.html" class="block px-6 py-3 hover:bg-slate-50">Our Leadership</a>
                                <a href="partners.html" class="block px-6 py-3 hover:bg-slate-50">Our Partners</a>
                            </div>
                        </div>

                        <div class="relative group">
                            <button onclick="toggleDropdown(this)" class="flex items-center gap-1 hover:text-teal-700">
                                Our Work <i class="fa-solid fa-chevron-down text-xs"></i>
                            </button>
                            <div class="dropdown-menu hidden absolute left-0 top-full bg-white shadow-xl rounded-2xl py-5 w-72 border border-slate-100 z-50">
                                <a href="programs.html" class="block px-6 py-3 hover:bg-slate-50">Programs</a>
                                <a href="impact.html" class="block px-6 py-3 hover:bg-slate-50">Our Impact</a>
                            </div>
                        </div>

                        <a href="gallery.html" class="hover:text-teal-700">Gallery</a>
                        <a href="events.html" class="hover:text-teal-700">Events</a>

                        <div class="relative group">
                            <button onclick="toggleDropdown(this)" class="flex items-center gap-1 hover:text-teal-700">
                                Membership <i class="fa-solid fa-chevron-down text-xs"></i>
                            </button>
                            <div class="dropdown-menu hidden absolute left-0 top-full bg-white shadow-xl rounded-2xl py-5 w-64 border border-slate-100 z-50">
                                <a href="member-register.html" class="block px-6 py-3 hover:bg-slate-50">Become a Member</a>
                                <a href="member-portal.html" class="block px-6 py-3 hover:bg-slate-50">Member Portal</a>
                            </div>
                        </div>

                        <a href="contact.html" class="hover:text-teal-700">Contact</a>
                    </div>

                    <!-- Donate Button -->
                    <a href="donate.html" 
                       class="hidden md:flex items-center gap-2 bg-teal-700 hover:bg-teal-800 text-white px-8 py-3 rounded-2xl font-semibold text-sm transition-all">
                        <i class="fa-solid fa-heart"></i> DONATE NOW
                    </a>

                    <!-- Mobile Menu Button -->
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
                    <a href="member-portal.html" class="pl-4">Member Portal</a>

                    <a href="contact.html">Contact Us</a>
                    <a href="donate.html" class="font-semibold text-teal-700">Donate Now</a>
                </div>
            </div>
        </div>
    `;
});

// Toggle functions
function toggleDropdown(btn) {
    const menu = btn.nextElementSibling;
    document.querySelectorAll(".dropdown-menu").forEach(m => {
        if (m !== menu) m.classList.add("hidden");
    });
    menu.classList.toggle("hidden");
}

function toggleMobileMenu() {
    document.getElementById("mobileMenu").classList.toggle("hidden");
}

// Close dropdowns when clicking outside
document.addEventListener("click", function (e) {
    if (!e.target.closest(".group")) {
        document.querySelectorAll(".dropdown-menu").forEach(menu => menu.classList.add("hidden"));
    }
});

// Search functions (add your existing search code here or keep as is)
function openSearchModal() {
    document.getElementById("searchModal").classList.remove("hidden");
    document.getElementById("searchInput").focus();
}

function closeSearchModal() {
    document.getElementById("searchModal").classList.add("hidden");
}

function performSearch() {
    // Your search logic here
}

// Shrink navbar on scroll
window.addEventListener("scroll", function () {
    const searchBar = document.getElementById("topSearchBar");
    const nav = document.getElementById("mainNav");
    const logo = document.getElementById("navLogo");

    if (window.scrollY > 50) {
        searchBar.classList.add("hidden");
        nav.classList.remove("py-4");
        nav.classList.add("py-2");

        logo.classList.remove("h-12");
        logo.classList.add("h-9");
    } else {
        searchBar.classList.remove("hidden");
        nav.classList.remove("py-2");
        nav.classList.add("py-4");

        logo.classList.remove("h-9");
        logo.classList.add("h-12");
    }
});

// Dynamic body padding based on navbar height
function adjustBodyPadding() {
    const navbar = document.getElementById("navbarWrapper");
    if (navbar) {
        document.body.style.paddingTop = navbar.offsetHeight + "px";
    }
}

// Run on load
window.addEventListener("load", adjustBodyPadding);

// Run on resize
window.addEventListener("resize", adjustBodyPadding);

// Run on scroll (because navbar shrinks)
window.addEventListener("scroll", adjustBodyPadding);