package org.example.backend.type;

import java.util.UUID;

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
    public NewsArticle {
        if (id == null || id.isBlank()) {
            id = UUID.randomUUID().toString();
        }
    }
}
