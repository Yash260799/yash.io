package com.suyash.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


import com.suyash.model.Payment;

@Repository
public interface PaymentDao extends JpaRepository<Payment, Integer> {

}
