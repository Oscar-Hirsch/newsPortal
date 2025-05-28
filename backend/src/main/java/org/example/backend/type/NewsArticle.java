package org.example.backend.type;

public record NewsArticle(
        Source source,
        String author,
        String title,
        String description,
        String url,
        String urlToImage,
        String publishedAt
) {
}
