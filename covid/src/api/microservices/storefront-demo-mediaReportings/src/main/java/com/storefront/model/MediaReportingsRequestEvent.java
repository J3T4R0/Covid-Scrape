package com.storefront.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;
import org.springframework.data.annotation.Id;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class MediaReportingsRequestEvent {

    @Id
    private Integer quanity;

    @NonNull
    private Cases cases;

    @NonNull
    private ExpectedCases expectedCases;
}
