package com.pontonorte.backend.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import com.pontonorte.backend.model.Guia;

public interface GuiaRepository extends JpaRepository<Guia, Long> {
    Optional<Guia> findByEmailGuia(String emailGuia);
}

