package org.example.backend.type;

import java.util.List;

public record SafedSearches(String searchName, List<NewsArticle> articles) {
}
