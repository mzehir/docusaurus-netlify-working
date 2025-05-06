import React, { useState } from "react";
import MDXContent from "@theme-original/MDXContent";
import type { WrapperProps } from "@docusaurus/types";
import type MDXContentType from "@theme/MDXContent";
import { useDocsSidebar } from "@docusaurus/plugin-content-docs/client";
import { useLocation } from "@docusaurus/router";
import Link from "@docusaurus/Link";

const folderIcon = "📁";
const linkIcon = "📄";

type Props = WrapperProps<typeof MDXContentType>;

// Recursive Card Grid Component
function CardGrid({ items }: { items: any[] }) {
  const [openedFolder, setOpenedFolder] = useState<string | null>(null);

  if (!items || items.length === 0) return <p>Alt içerik yok.</p>;

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "1rem",
        justifyContent: "flex-start",
        margin: "2rem 0",
      }}
    >
      {items.map((item) => {
        if (item.type === "category") {
          const isOpen = openedFolder === item.label;
          return (
            <div
              key={item.href || item.label}
              style={{
                background: "var(--ifm-background-color, #1a2233)",
                border: "1px solid var(--ifm-toc-border-color, #2a3244)",
                borderRadius: "16px",
                boxShadow: "0 2px 16px 0 rgba(0,0,0,0.07)",
                padding: "1rem",
                minWidth: 260,
                minHeight: 120,
                flex: "1 1 260px",
                cursor: "pointer",
                transition: "box-shadow 0.2s",
                position: "relative",
              }}
              onClick={() => setOpenedFolder(isOpen ? null : item.label)}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <span style={{ fontSize: 22 }}>{folderIcon}</span>
                <span style={{ fontWeight: 700, fontSize: "1.2rem" }}>
                  {item.label}
                </span>
              </div>

              {/* Alt children'ları recursive olarak göster */}
              {true && (
                <div style={{ marginTop: 20 }}>
                  <CardGrid items={item.items} />
                </div>
              )}
            </div>
          );
        }

        if (item.type === "doc" || item.type === "link") {
          return (
            <Link
              key={item.href}
              to={item.href}
              style={{
                textDecoration: "none",
                color: "inherit",
                background: "var(--ifm-background-color, #1a2233)",
                border: "1px solid var(--ifm-toc-border-color, #2a3244)",
                borderRadius: "16px",
                boxShadow: "0 2px 16px 0 rgba(0,0,0,0.07)",
                padding: "1rem",
                minWidth: 260,
                minHeight: 120,
                flex: "1 1 260px",
                display: "block",
                transition: "box-shadow 0.2s",
                position: "relative",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <span style={{ fontSize: 22 }}>{linkIcon}</span>
                <span style={{ fontWeight: 700, fontSize: "1.2rem" }}>
                  {item.label}
                </span>
              </div>
            </Link>
          );
        }

        return null;
      })}
    </div>
  );
}

function findActiveSidebarItem(items, pathname) {
  for (const item of items) {
    if (item.type === "category" && item.href && pathname === item.href) {
      return { type: "category", item };
    }

    if (
      (item.type === "doc" || item.type === "link") &&
      item.href === pathname
    ) {
      return { type: "link", item };
    }

    if (item.type === "category" && item.items) {
      const found = findActiveSidebarItem(item.items, pathname);
      if (found) return found;
    }
  }
  return null;
}

export default function MDXContentWrapper(props: Props) {
  const location = useLocation();
  const sidebar = useDocsSidebar();
  const frontMatter = (props.children as any)?.type?.frontMatter ?? {};

  const activeSidebarItem = sidebar
    ? findActiveSidebarItem(sidebar.items, location.pathname)
    : null;

  if (
    activeSidebarItem?.type === "category" &&
    frontMatter?.routeType === "folder"
  ) {
    return (
      <div style={{ margin: "4rem 0" }}>
        <CardGrid items={activeSidebarItem.item.items} />
      </div>
    );
  }

  if (frontMatter?.routeType === "page") {
    return (
      <div style={{ maxWidth: 700, margin: "2rem auto" }}>
        {/* SUMMARY CARD */}
        {frontMatter.summary && (
          <div className="summary-card">
            <div className="summary-card-header">
              <span className="summary-title">Yazı Özeti</span>
              <span className="summary-author">
                Yazar: {frontMatter.author}
                {frontMatter.job_titles && ` / ${frontMatter.job_titles}`}
              </span>
            </div>
            <div className="summary-content">{frontMatter.summary}</div>
            <div className="summary-footer">
              Yayın Tarihi:{" "}
              {frontMatter.publish_date
                ? new Date(frontMatter.publish_date).toLocaleDateString(
                    "tr-TR",
                    {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    }
                  )
                : "-"}
            </div>
          </div>
        )}

        {/* CONTENT CARD */}
        <article className="doc-card">
          <MDXContent {...props} className="markdown" />
        </article>
      </div>
    );
  }

  return (
    <div style={{ textAlign: "center", color: "#aaa", margin: "4rem 0" }}>
      <h3>İçerik yükleniyor...</h3>
    </div>
  );
}
