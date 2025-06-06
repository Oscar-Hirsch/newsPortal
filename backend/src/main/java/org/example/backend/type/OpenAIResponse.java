package org.example.backend.type;
import java.util.List;

public record OpenAIResponse(List<OpenAIChoice> choices) {
}