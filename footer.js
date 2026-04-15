document.addEventListener("DOMContentLoaded", () => {
    const footerHTML = `
    <footer class="bg-teal-900 text-white">
        <div class="max-w-7xl mx-auto px-6 py-16">
            <div class="grid md:grid-cols-4 gap-10">

                <!-- LOGO & MISSION -->
                <div>
                    <img src="Kakelo Unity Logo (2).png" 
                         alt="Kakelo Unity CBO Logo" 
                         class="h-12 mb-6">
                    <p class="text-slate-300 text-sm leading-relaxed max-w-xs">
                        Empowering communities through unity, leadership, 
                        education, and sustainable economic transformation.
                    </p>
                </div>

                <!-- QUICK LINKS -->
                <div>
                    <h4 class="font-semibold text-teal-300 mb-5 text-sm uppercase tracking-widest">
                        Quick Links
                    </h4>
                    <ul class="space-y-3 text-sm">
                        <li><a href="index.html" class="hover:text-teal-300 transition-colors">Home</a></li>
                        <li><a href="about.html" class="hover:text-teal-300 transition-colors">About Us</a></li>
                        <li><a href="programs.html" class="hover:text-teal-300 transition-colors">Programs</a></li>
                        <li><a href="events.html" class="hover:text-teal-300 transition-colors">Events</a></li>
                        <li><a href="impact.html" class="hover:text-teal-300 transition-colors">Our Impact</a></li>
                    </ul>
                </div>

                <!-- RESOURCES -->
                <div>
                    <h4 class="font-semibold text-teal-300 mb-5 text-sm uppercase tracking-widest">
                        Resources
                    </h4>
                    <ul class="space-y-3 text-sm">
                        <li><a href="faq.html" class="hover:text-teal-300 transition-colors">FAQ</a></li>
                        <li><a href="leadership.html" class="hover:text-teal-300 transition-colors">Leadership</a></li>
                        <li><a href="donate.html" class="hover:text-teal-300 transition-colors">Donate</a></li>
                        <li><a href="privacy.html" class="hover:text-teal-300 transition-colors">Privacy Policy</a></li>
                    </ul>
                </div>

                <!-- CONTACT INFO -->
                <div>
                    <h4 class="font-semibold text-teal-300 mb-5 text-sm uppercase tracking-widest">
                        Get In Touch
                    </h4>
                    <ul class="space-y-4 text-sm text-slate-300">
                        <li class="flex items-start gap-3">
                            <i class="fa-solid fa-location-dot mt-1 text-teal-400"></i>
                            <span>Rachuonyo East Sub-County,<br>Homabay County, Kenya</span>
                        </li>
                        <li>
                            <a href="tel:+254707118312" 
                               class="flex items-center gap-3 hover:text-teal-300 transition-colors">
                                <i class="fa-solid fa-phone text-teal-400"></i>
                                +254 707 118 312
                            </a>
                        </li>
                        <li>
                            <a href="mailto:kakelounitycbo@gmail.com" 
                               class="flex items-center gap-3 hover:text-teal-300 transition-colors">
                                <i class="fa-solid fa-envelope text-teal-400"></i>
                                kakelounitycbo@gmail.com
                            </a>
                        </li>
                    </ul>

                    <!-- Social Media -->
                    <div class="mt-8">
                        <h5 class="text-xs uppercase tracking-widest text-teal-300 mb-3">Follow Us</h5>
                        <div class="flex gap-5 text-2xl">
                            <a href="https://www.facebook.com/share/1EXrfr9QcA/" 
                               target="_blank"
                               class="hover:text-teal-300 transition-colors">
                                <i class="fa-brands fa-facebook"></i>
                            </a>
                            <a href="https://wa.me/254707118312" 
                               target="_blank"
                               class="hover:text-teal-300 transition-colors">
                                <i class="fa-brands fa-whatsapp"></i>
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </div>

        <!-- BOTTOM BAR -->
        <div class="border-t border-teal-800 py-6 text-center text-xs text-slate-400">
            © 2026 Kakelo Unity CBO — All Rights Reserved
        </div>
    </footer>
    `;

    const container = document.getElementById("footer-container");
    if (container) {
        container.innerHTML = footerHTML;
    } else {
        console.warn("Footer container (#footer-container) not found in the DOM.");
    }
});