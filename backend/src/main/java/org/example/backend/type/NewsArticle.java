package org.example.backend.type;

import java.util.UUID;

public record NewsArticle(
        Source source,
        String author,
        String title,
        String description,
        String url
) {
}
