document.addEventListener("DOMContentLoaded", () => {
  const gridElement = document.getElementById("grid");
  const modal = document.getElementById("modal");
  const modalTitle = document.getElementById("modal-cell-title");
  const modalOptions = document.getElementById("modal-options");
  const closeBtn = document.getElementById("modal-close-btn");
  const resetBtn = document.getElementById("reset-btn");

  let currentActiveCellId = null;

  // 1. Рендеринг 12 клітинок
  gridConfig.forEach(cell => {
    const cellNode = document.createElement("div");
    cellNode.className = "grid-cell";
    cellNode.dataset.id = cell.id;

    cellNode.innerHTML = `
      <div class="cell-header" title="${cell.title}">${cell.title}</div>
      <div class="cell-body">
        <span class="cell-placeholder">+ обрати</span>
      </div>
    `;

    cellNode.addEventListener("click", () => openModal(cell.id));
    gridElement.appendChild(cellNode);
  });

  // 2. Відкриття модалки з варіантами клітинки
  function openModal(cellId) {
    currentActiveCellId = cellId;
    const config = gridConfig.find(c => c.id === cellId);
    if (!config) return;

    modalTitle.textContent = config.title;
    modalOptions.innerHTML = "";

    config.options.forEach(opt => {
      // Підтягує name або label, запобігаючи undefined
      const titleText = opt.name || opt.label || "";

      const optNode = document.createElement("div");
      optNode.className = "option-item";
      optNode.innerHTML = `
        <img class="option-thumb" src="${opt.image}" alt="${titleText}">
        <span class="option-name">${titleText}</span>
      `;

      optNode.addEventListener("click", () => {
        selectOption(cellId, opt);
        closeModal();
      });

      modalOptions.appendChild(optNode);
    });

    modal.classList.add("open");
  }

  // 3. Підстановка вибору в клітинку
  function selectOption(cellId, option) {
    const targetCell = document.querySelector(`.grid-cell[data-id="${cellId}"] .cell-body`);
    if (!targetCell) return;

    const titleText = option.name || option.label || "";
    targetCell.innerHTML = `<img class="cell-img" src="${option.image}" alt="${titleText}">`;
  }

  // 4. Закриття вікна
  function closeModal() {
    modal.classList.remove("open");
    currentActiveCellId = null;
  }

  closeBtn.addEventListener("click", closeModal);
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });

  // 5. Очищення сітки
  resetBtn.addEventListener("click", () => {
    document.querySelectorAll(".cell-body").forEach(body => {
      body.innerHTML = '<span class="cell-placeholder">+ обрати</span>';
    });
  });
});