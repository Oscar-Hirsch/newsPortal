package org.example.backend.type;

import org.springframework.data.annotation.Id;

import java.util.List;

public record SafedSearches(@Id String searchName, List<NewsArticle> articles) {
}
