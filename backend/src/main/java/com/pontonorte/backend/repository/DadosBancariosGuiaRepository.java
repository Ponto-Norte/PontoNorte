package com.pontonorte.backend.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.pontonorte.backend.model.DadosBancariosGuia;

@Repository
public interface DadosBancariosGuiaRepository extends JpaRepository<DadosBancariosGuia, Integer> {
}