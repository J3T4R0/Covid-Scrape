package com.storefront.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Cases {

    @NonNull
    private String guid;

    @NonNull
    private List<CasesStatusEvent> casesStatusEvents;

    @NonNull
    private List<CasesItem> casesItems;

}
