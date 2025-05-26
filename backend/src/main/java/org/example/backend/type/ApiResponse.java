package org.example.backend.type;

import java.util.List;

public record ApiResponse(Integer totalResults, List<NewsArticle> articles) {
}
