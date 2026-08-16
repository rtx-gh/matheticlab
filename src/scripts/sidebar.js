document.addEventListener("DOMContentLoaded", () => {
  const sidebar = document.querySelector(".sidebar-pane");

  if (!sidebar) return;

  // 開閉ボタンを作成
  const button = document.createElement("button");
  button.className = "sidebar-toggle";
  button.textContent = "‹";
  button.setAttribute("aria-label", "サイドバーを閉じる");

  document.body.appendChild(button);

  button.addEventListener("click", () => {
    const closed = document.body.classList.toggle("sidebar-closed");

    button.textContent = closed ? "›" : "‹";
    button.setAttribute(
      "aria-label",
      closed ? "サイドバーを開く" : "サイドバーを閉じる"
    );
  });
});