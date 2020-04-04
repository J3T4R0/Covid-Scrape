package com.storefront.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "mediaReportings.requests")
public class MediaReportings {

    @Id
    private Integer quanity;

    @NonNull
    private ExpectedCases expectedCases;

    @NonNull
    private Cases cases;

}
