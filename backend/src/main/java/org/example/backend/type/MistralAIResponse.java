package org.example.backend.type;
import java.util.List;

public record MistralAIResponse(List<MistralAIChoice> choices) {
}