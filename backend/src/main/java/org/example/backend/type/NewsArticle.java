package org.example.backend.type;

public record NewsArticle(
        String id,
        Source source,
        String author,
        String title,
        String description,
        String publishedAt,
        String url,
        String urlToImage
) {
}
