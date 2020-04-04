package com.storefront.respository;

import com.storefront.model.MediaReportings;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface MediaReportingsRepository extends MongoRepository<MediaReportings, String> {

}