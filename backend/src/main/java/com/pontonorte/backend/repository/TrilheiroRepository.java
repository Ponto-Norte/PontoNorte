package com.pontonorte.backend.repository;


import com.pontonorte.backend.model.Trilheiro;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface TrilheiroRepository extends JpaRepository<Trilheiro, Long> {
    Optional<Trilheiro> findByEmailTrilheiro(String emailTrilheiro);
}
