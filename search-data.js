const siteSearchData = [
  {
    title: "About Us",
    url: "index.html",
    keywords: [
      "about", "home", "mission", "vision", "strategic aims",
      "partners", "services", "kakelo unity", "community based organization"
    ]
  },
  {
    title: "Programs",
    url: "programs.html",
    keywords: [
      "programs", "adolescent youth development", "economic empowerment",
      "education mentorship", "community service", "leadership governance"
    ]
  },
  {
    title: "Leadership",
    url: "leadership.html",
    keywords: [
      "leadership", "our people", "team leader", "members",
      "executives", "isack ouma", "leah okeyo", "amos owuor"
    ]
  },
  {
    title: "Impact",
    url: "impact.html",
    keywords: [
      "impact", "success stories", "community impact",
      "achievements", "beneficiaries"
    ]
  },
  {
    title: "Contact",
    url: "contact.html",
    keywords: [
      "contact", "email", "phone", "location",
      "rachuonyo east", "homabay county"
    ]
  },
  {
    title: "Member Portal",
    url: "member-portal.html",
    keywords: [
      "member portal", "login", "member dashboard",
      "savings", "loans", "treasurer"
    ]
  }
];

// SEARCH MODAL FUNCTIONS
function openSearchModal() {
  document.getElementById("searchModal").classList.remove("hidden");
  document.getElementById("searchInput").focus();
}

function closeSearchModal() {
  document.getElementById("searchModal").classList.add("hidden");
  document.getElementById("searchInput").value = "";
  document.getElementById("searchResults").innerHTML = "";
}

function performSearch() {
  const query = document.getElementById("searchInput").value.toLowerCase().trim();
  const resultsContainer = document.getElementById("searchResults");

  if (!query) {
    resultsContainer.innerHTML = `<p class="text-slate-500">Type something to search...</p>`;
    return;
  }

  const results = siteSearchData.filter(page =>
    page.title.toLowerCase().includes(query) ||
    page.keywords.some(keyword => keyword.includes(query))
  );

  if (results.length === 0) {
    resultsContainer.innerHTML = `
      <p class="text-red-500 font-medium">No results found for "${query}"</p>
    `;
    return;
  }

  resultsContainer.innerHTML = results.map(result => `
    <a href="${result.url}" 
       class="block p-4 border rounded-xl hover:bg-slate-50 transition">
      <h4 class="font-semibold text-teal-700">${result.title}</h4>
      <p class="text-sm text-slate-500">${result.url}</p>
    </a>
  `).join("");
}

// CLOSE MODAL WHEN CLICKING OUTSIDE
window.addEventListener("click", function(e) {
  const modal = document.getElementById("searchModal");
  if (e.target === modal) {
    closeSearchModal();
  }
});