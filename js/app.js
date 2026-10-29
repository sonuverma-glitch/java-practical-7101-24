// Main Application Logic
document.addEventListener('DOMContentLoaded', () => {
  const sidebarLinks = document.getElementById('sidebarLinks');
  const programsContainer = document.getElementById('programsContainer');
  const searchInput = document.getElementById('searchInput');
  const searchSummary = document.getElementById('searchSummary');
  const searchQueryText = document.getElementById('searchQueryText');
  const clearSearch = document.getElementById('clearSearch');
  const btnDownloadAll = document.getElementById('btnDownloadAll');

  let activeSection = null;

  // Render Sidebar and Sections
  function renderAll() {
    sidebarLinks.innerHTML = '';
    programsContainer.innerHTML = '';

    practicalData.forEach((section, index) => {
      // Sidebar link
      const link = document.createElement('a');
      link.href = `#${section.id}`;
      link.className = `nav-item ${index === 0 ? 'active' : ''}`;
      link.innerHTML = `
        <span>${section.title}</span>
        <span class="nav-count">${section.programs.length}</span>
      `;
      link.addEventListener('click', () => {
        document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));
        link.classList.add('active');
      });
      sidebarLinks.appendChild(link);

      // Section block in main container
      const secBlock = document.createElement('div');
      secBlock.className = 'section-block';
      secBlock.id = section.id;

      secBlock.innerHTML = `
        <div class="section-title-wrap">
          <h2 class="section-title">${section.title}</h2>
          <span class="section-count-tag">${section.programs.length} Programs</span>
        </div>
      `;

      section.programs.forEach((prog, pIdx) => {
        const card = document.createElement('div');
        card.className = 'program-card';
        card.dataset.question = prog[0].toLowerCase();
        card.dataset.code = prog[1].toLowerCase();

        card.innerHTML = `
          <div class="card-header">
            <span class="card-qnum">P-${pIdx + 1}</span>
            <div class="card-question">${escapeHtml(prog[0])}</div>
            <button class="copy-btn" onclick="copyCode(this, \`${escapeJs(prog[1])}\`)">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
              <span>Copy</span>
            </button>
          </div>
          <div class="code-wrapper">
            <pre><code>${escapeHtml(prog[1])}</code></pre>
          </div>
          <div class="output-wrapper">
            <div class="output-title">Console Output:</div>
            <pre>${escapeHtml(prog[2])}</pre>
          </div>
        `;
        secBlock.appendChild(card);
      });

      programsContainer.appendChild(secBlock);
    });
  }

  // Copy code helper
  window.copyCode = function(button, codeText) {
    navigator.clipboard.writeText(codeText).then(() => {
      const span = button.querySelector('span');
      const old = span.textContent;
      span.textContent = 'Copied!';
      button.style.borderColor = '#22C55E';
      button.style.color = '#15803D';
      setTimeout(() => {
        span.textContent = old;
        button.style.borderColor = '';
        button.style.color = '';
      }, 1800);
    });
  };

  function escapeHtml(str) {
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function escapeJs(str) {
    return str
      .replace(/\\/g, '\\\\')
      .replace(/`/g, '\\`')
      .replace(/\$/g, '\\$');
  }

  // Search Filter
  searchInput.addEventListener('input', (e) => {
    const q = e.target.value.trim().toLowerCase();
    if (!q) {
      searchSummary.style.display = 'none';
      document.querySelectorAll('.program-card').forEach(el => el.style.display = '');
      document.querySelectorAll('.section-block').forEach(el => el.style.display = '');
      return;
    }

    searchSummary.style.display = 'flex';
    searchQueryText.textContent = q;

    let totalMatches = 0;
    document.querySelectorAll('.section-block').forEach(sec => {
      let secVisible = 0;
      sec.querySelectorAll('.program-card').forEach(card => {
        const match = card.dataset.question.includes(q) || card.dataset.code.includes(q);
        if (match) {
          card.style.display = '';
          secVisible++;
          totalMatches++;
        } else {
          card.style.display = 'none';
        }
      });
      sec.style.display = secVisible > 0 ? '' : 'none';
    });
  });

  clearSearch.addEventListener('click', () => {
    searchInput.value = '';
    searchInput.dispatchEvent(new Event('input'));
  });

  // Download All as ZIP (Client-Side JSZip)
  btnDownloadAll.addEventListener('click', async () => {
    const zip = new JSZip();
    const root = zip.folder("Sonu_Verma_24050304_Java_Practicals");

    practicalData.forEach(sec => {
      const folderName = sec.title.replace(/[^a-zA-Z0-9_-]/g, '_');
      const folder = root.folder(folderName);
      sec.programs.forEach((p, idx) => {
        const fileName = `Program_${idx + 1}.java`;
        const fileContent = `/*\n * Practical Lab Submission\n * Name: Sonu Verma\n * Roll No: 24050304\n * Class Roll: 7101/24\n * Question: ${p[0]}\n */\n\n${p[1]}\n\n/*\nOUTPUT:\n${p[2]}\n*/`;
        folder.file(fileName, fileContent);
      });
    });

    const content = await zip.generateAsync({ type: "blob" });
    saveAs(content, "Sonu_Verma_Java_Practical_Programs.zip");
  });

  renderAll();
});
