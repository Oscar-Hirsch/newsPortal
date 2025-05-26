package org.example.backend.repository;
import org.example.backend.type.SafedSearches;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface NewsRepository extends MongoRepository<SafedSearches, String> {

}
