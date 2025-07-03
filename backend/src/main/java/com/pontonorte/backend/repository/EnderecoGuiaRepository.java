package com.pontonorte.backend.repository;

import com.pontonorte.backend.model.EnderecoGuia;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EnderecoGuiaRepository extends JpaRepository<EnderecoGuia, Long> {
}
