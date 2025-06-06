package org.example.backend.type;

public record NewsArticle(
        String id,
        Source source,
        String author,
        String title,
        String description,
        String summary,
        String content,
        String publishedAt,
        String url,
        String urlToImage
) {
}
