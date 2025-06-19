package org.example.backend.service;

import org.example.backend.repository.NewsRepository;
import org.example.backend.type.NewsArticle;
import org.example.backend.type.Source;
import org.junit.jupiter.api.Test;

import java.util.Collections;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

class DatabaseServiceTest {

    private final NewsRepository mockNewsrepository = mock(NewsRepository.class);
    private final DatabaseService databaseService = new DatabaseService(mockNewsrepository);

    @Test
    void getAllNews_shouldReturnAllNewsInDatabase_WhenNewsArePresent() {
        Source source = new Source("bbc");
        //Given
        NewsArticle article = new NewsArticle(
                "123", source, "thomas",
                "Death", "Somebody lives",
                "Confusion", "nothing here",
                "12.12.2025", "http://nothinghere.com","image.com");
        List<NewsArticle> expected = List.of(article);
        when(mockNewsrepository.findAll()).thenReturn(expected);
        //When
        List<NewsArticle> actual = databaseService.getAllNews();
        //Then
        assertEquals(expected, actual);
    }

    @Test
    void getAllNews_shouldReturnEmptyList_WhenNoNewsArePresent() {
        //Given
        List<NewsArticle> expected = Collections.emptyList();
        when(mockNewsrepository.findAll()).thenReturn(expected);
        //When
        List<NewsArticle> actual = databaseService.getAllNews();
        //Then
        assertEquals(expected, actual);
    }

    @Test
    void getNewsArticleById_ShouldReturnNewsArticle_WhenNewsArticleIsPresent() {
        //Given
        Source source = new Source("bbc");
        NewsArticle expected = new NewsArticle(
                "123", source, "thomas",
                "Death", "Somebody lives",
                "Confusion", "nothing here",
                "12.12.2025", "http://nothinghere.com","image.com");
        when(mockNewsrepository.findById("123")).thenReturn(Optional.of(expected));
        //When
        NewsArticle actual = databaseService.getNewsArticleById("123");
        //Then
        assertEquals(expected, actual);
    }

    @Test
    void saveNewsArticle_ShouldReturnSavedArcticle_WhenCalled() {
        //Given
        Source source = new Source("bbc");
        NewsArticle expected = new NewsArticle(
                "123", source, "thomas",
                "Death", "Somebody lives",
                "Confusion", "nothing here",
                "12.12.2025", "http://nothinghere.com","image.com");
        when(mockNewsrepository.save(expected)).thenReturn(expected);
        //When
        NewsArticle actual = databaseService.saveNewsArticle(expected);
        //Then
        assertEquals(expected, actual);
        verify(mockNewsrepository, times(1)).save(expected);

    }
}