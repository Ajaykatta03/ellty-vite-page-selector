import { useState } from "react";
import "./PageSelectorCard.css";

const PAGES = [
  { id: "page1", label: "Page 1" },
  { id: "page2", label: "Page 2" },
  { id: "page3", label: "Page 3" },
  { id: "page4", label: "Page 4" },
];

export default function PageSelectorCard() {
  const [pages, setPages] = useState({
    page1: false,
    page2: false,
    page3: false,
    page4: false,
  });

  const allChecked = Object.values(pages).every(Boolean);

  const handleAllChange = (e) => {
    const checked = e.target.checked;
    const next = {};
    PAGES.forEach((p) => (next[p.id] = checked));
    setPages(next);
  };

  const handlePageChange = (id) => (e) => {
    const checked = e.target.checked;
    setPages((prev) => ({
      ...prev,
      [id]: checked,
    }));
  };

  const handleDone = () => {
    alert(
      "Selected pages: " +
        (PAGES.filter((p) => pages[p.id])
          .map((p) => p.label)
          .join(", ") || "None")
    );
  };

  return (
    <div className="ps-card">
      {/* All pages row */}
      <div className="ps-row ps-row-header d-flex align-items-center justify-content-between">
        <span className="ps-label">All pages</span>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            id="all-pages"
            checked={allChecked}
            onChange={handleAllChange}
          />
          <label className="form-check-label" htmlFor="all-pages"></label>
        </div>
      </div>

      <div className="ps-divider" />

      {/* Individual pages */}
      {PAGES.map((page, idx) => (
        <div className="ps-row d-flex align-items-center justify-content-between" key={page.id}>
          <span className="ps-label">{page.label}</span>
          <div
            className="form-check"
            style={{
              opacity: idx % 2 === 0 ? 0.5 : 1, // odd index (Page 1, Page 3) dull, even index (Page 2, Page 4) full
            }}
          >
            <input
              className="form-check-input"
              type="checkbox"
              id={page.id}
              checked={pages[page.id]}
              onChange={handlePageChange(page.id)}
            />
            <label className="form-check-label" htmlFor={page.id}></label>
          </div>
        </div>
      ))}
      <div className="ps-divider" />
      <button className="ps-done-btn" onClick={handleDone}>
        Done
      </button>
    </div>
  );
}
