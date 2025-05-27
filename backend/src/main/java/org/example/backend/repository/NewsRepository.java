package org.example.backend.repository;
import org.example.backend.type.NewsArticle;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface NewsRepository extends MongoRepository<NewsArticle, String> {

}
