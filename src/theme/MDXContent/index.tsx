import React from "react";
import MDXContent from "@theme-original/MDXContent";
import type { WrapperProps } from "@docusaurus/types";
import type MDXContentType from "@theme/MDXContent";

type Props = WrapperProps<typeof MDXContentType>;

export default function MDXContentWrapper(props: Props) {
  const frontMatter = (props.children as any)?.type?.frontMatter ?? {};

  if (frontMatter?.routeType === "folder") {
    return (
      <div
        style={{
          textAlign: "center",
          color: "#888",
          fontStyle: "italic",
          margin: "4rem 0",
        }}
      >
        <h2>Bu bir klasör yoludur.</h2>
        <p>Alt sayfalardan birini seçin.</p>
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
