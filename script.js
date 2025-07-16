document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("searchInput");
  const projectCount = document.getElementById("projectCount");
  const fileList = document.getElementById("fileList");
  const allProjects = Array.from(fileList.getElementsByTagName("li"));

  function updateCountAndFilter() {
    const query = searchInput.value.toLowerCase();
    let visibleCount = 0;

    allProjects.forEach(li => {
      const text = li.innerText.toLowerCase();
      const match = text.includes(query);
      li.style.display = match ? "list-item" : "none";
      if (match) visibleCount++;
    });

    projectCount.textContent = visibleCount;
  }

  // Initial count on load
  updateCountAndFilter();

  // Listen to input for live filtering
  searchInput.addEventListener("input", updateCountAndFilter);
});
