package com.storefront.respository;

import com.storefront.model.CustomerCases;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface CustomerCasesRepository extends MongoRepository<CustomerCases, String> {

}